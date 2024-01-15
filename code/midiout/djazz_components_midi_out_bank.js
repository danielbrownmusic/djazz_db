var dutils  = require("db_dictionary_array_utils");

autowatch   = 1;

var tracks_             = [];

//var bank_dict = null;
declareattribute("bank_dict", null, "set_bank_dict");


function set_bank_dict(bank_dict_name)
{
    clear();
    
    var bank_dict   = new Dict (bank_dict_name);
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    if (track_array === null)
        return;

    for (var i = 0; i < track_array.length; i++)
    {      
        var track           = add_track();
        var comp            = get_track_components_mgr_(track);
        var effects_dict    = track_array[i];
        comp.message("effects_dict", effects_dict.name);
    }
}


function clear()
{
    remove_last_tracks(tracks_.length);
}


function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track();
    }
}


function add_track()
{
    var events_inlet    = this.patcher.getnamed("events_inlet");
    var events_outlet 	= this.patcher.getnamed("events_outlet");

    var i               = tracks_.length;

    var w               = 160;
    var h               = 48;
    var x               = events_inlet.rect[0] + w * i;
    var y               = 440;//this.box.rect[3] + 2 * h;

    var track 		    = this.patcher.newdefault(x, y, "djazz_midi_out_track", i);
    track.varname 	    = "track_" + i;

    tracks_.push(track);

    track.subpatcher().getnamed("midi_in_channel").setvalueof(i + 1);
    track.subpatcher().getnamed("midi_out_channel").setvalueof(i + 1);

    this.patcher.connect(events_inlet, 0, track, 0);
    this.patcher.connect(track, 0, events_outlet, 0);

    this.patcher.getnamed("solo_bank").message("count", tracks_.length);
    //set_solo_bank_();

    return track;
}


function remove_last_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        remove_last_track();
    }
}


function remove_last_track()
{
    if (tracks_.length === 0)
        return;
    this.patcher.remove(tracks_.pop());
    this.patcher.getnamed("solo_bank").message("count", tracks_.length);
    //set_solo_bank_();
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
    var comp = get_track_components_mgr_(tracks_[i]);

    if (!comp)
    {
        post ("couldn't find comp. \n");
    }
    post ("comp =",comp,"\n");
    post ("msg =", msg, "\n");
    post ("args =");
    for (var i = 0; i < args.length; i++)
    {
        post (args[i]);
    }
    post ("\n");

    comp.message(msg, args);
    outlet (0, "track", i, msg, args);
}


function set_global()
{
    var a       = arrayfromargs(arguments);
    var name    = a[0];
    var val     = a.length === 2 ? a[1] : a.slice(1);

    for (var i = 0; i < tracks_.length; i++)
    {
        var msg     = ["track_", i, "::", name].join("");
        var args    = val;
        outlet(0, msg, args);
    }
}


// ---------------------------------------------------------------------------------------


function get_track_components_mgr_(track)
{
    var effect_list     = track.subpatcher().getnamed("effect_list");
    var components_mgr  = effect_list.subpatcher().getnamed("components");
    return components_mgr;

}
get_track_components_mgr_.local = 1;


/* function set_solo_bank_()
{
    var solo_bank_ = this.patcher.getnamed("solo_bank");
    if (solo_bank_)
    {
        this.patcher.remove(solo_bank_);
    }

    var n = tracks_.length;
    if (n === 0)
        return;

    var x = 84;
    var y = 260;

    solo_bank_ = this.patcher.newdefault(x, y, "js", "djazz_solo_bank.js", n);
    solo_bank_.varname = "solo_bank";
    for (var i = 0; i < n; i++)
    {      
        this.patcher.connect(solo_bank_, i, tracks_[i], 1);
    }
}
set_solo_bank_.local = 1; */