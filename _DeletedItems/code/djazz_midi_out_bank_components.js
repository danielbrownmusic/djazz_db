var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var tracks_ = [];


function bank(bank_dict, effect_menu_items_dict)
{
    clear();
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    for (var i = 0; i < track_array.length; i++)
    {
        var track_dict = track_array[i];
        add_track_(track_dict);
        message_track_(i, "effects", [track_dict, effect_menu_items_dict]);
    }
}


function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track_();
    }
}


function track()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);

    message_track_(i, msg, args);
}


function clear()
{
    var l = tracks_.length;
    for (var i = 0; i < l; i++)
    {
        remove_last_track_();
    }
}


//----------------------------------------------------------------------------------------------------


function add_track_()
{
    var events_inlet    = this.patcher.getnamed("events_inlet");
    var events_outlet 	= this.patcher.getnamed("events_outlet");

    var i = tracks_.length;

    var w = 160;
    var h = 48;	

    var x = events_inlet.rect[0] + w * i;
    var y = this.box.rect[3] + 2 * h;

    var track 		    = this.patcher.newdefault(x, y, "djazz_midi_out_track");
    track.varname 	    = "track_" + i;
    tracks_.push(track);

    this.patcher.connect(events_inlet, 0, track, 0);
    this.patcher.connect(track, 0, events_outlet, 0);

    return track;
}
add_track_.local = 1;


function remove_last_track_()
{
    if (tracks_.length === 0)
        return;
    
    var track = tracks_.pop();
    this.patcher.remove(track);
}
remove_last_track_.local = 1;


//----------------------------------------------------------------------------------------------------

function message_track_(i, msg, args)
{
    var track   = tracks_[i];
    var addr    = [track.varname, "effect_list", "components"].join("::");    
    outlet (0, addr, msg, args);
}
message_track_.local = 1;