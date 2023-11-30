var dutils  = require("db_dictionary_array_utils");

autowatch   = 1;

var effect_database_    = null;
var tracks_             = [];


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
}


function load(bank_dict_name)
{
    clear();
    
    var bank_dict   = new Dict (bank_dict_name);
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    if (track_array === null)
        return;

    for (var i = 0; i < track_array.length; i++)
    {      
        var track = add_track_();
        message_track_(track, "set_effects", track_array[i]);  
    }
    set_solo_bank_();
}


function track()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);

    if (i >= tracks_.length)
    {
        post ("There is no track", i + ".\n");
        return;
    }

    message_track_(tracks_[i], msg, args);
}


function clear()
{
    var l = tracks_.length;
    for (var i = 0; i < l; i++)
    {
        remove_last_track_();
    }
    set_solo_bank_();
}


function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track_();
    }
    set_solo_bank_();
}


function add_track_()
{
    var events_inlet    = this.patcher.getnamed("events_inlet");
    var events_outlet 	= this.patcher.getnamed("events_outlet");

    var i               = tracks_.length;

    var w               = 160;
    var h               = 48;
    var x               = events_inlet.rect[0] + w * i;
    var y               = this.box.rect[3] + 2 * h;

    var track 		    = this.patcher.newdefault(x, y, "djazz_midi_out_track");
    track.varname 	    = "track_" + i;

    tracks_.push(track);
    message_track_(track, "set_effect_database", effect_database_);

    this.patcher.connect(events_inlet, 0, track, 0);
    this.patcher.connect(track, 0, events_outlet, 0);

    return track;
}
add_track_.local = 1;

// ---------------------------------------------------------------------------------------


function remove_last_track_()
{
    if (tracks_.length === 0)
        return;
    this.patcher.remove(tracks_.pop());
}
remove_last_track_.local = 1;


function message_track_(track, msg, args)
{
    var addr = [track.varname, "effect_list", "components"].join("::");
    outlet (0, addr, msg, args);
}
message_track_.local = 1;


function set_solo_bank_()
{
    var solo_bank_ = this.patcher.getnamed("solo_bank");
    if (solo_bank_)
    {
        this.patcher.remove(solo_bank_);
    }

    var n = tracks_.length;
    if (n === 0)
        return;

    var x = 195;
    var y = 250;

    solo_bank_ = this.patcher.newdefault(x, y, "js", "djazz_solo_bank.js", n);
    solo_bank_.varname = "solo_bank";
    for (var i = 0; i < n; i++)
    {      
        this.patcher.connect(solo_bank_, i, tracks_[i], 1);
    }
}
set_solo_bank_.local = 1;