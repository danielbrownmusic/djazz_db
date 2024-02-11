var dutils  = require("db_dictionary_array_utils");
autowatch   = 1;

var tracks_ = [];

//declareattribute("bank_dict", "get_bank_dict", "set_bank_dict");

/*
You can send dicts as dicts to other json objects, 
but to insert dicts into a dict, you have to pass them by name, 
or they will be inserted as a js object!
*/


// ---------------------------------------------------------------


function setvalueof(bank_dict)
{
    clear();
    
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


function getvalueof()
{
    var bank_dict = new Dict ();
    for (var i = 0; i < tracks_.length; i++)
    {
        var track           = tracks_[i];
        var comp_mgr        = get_track_components_mgr_(track);
        var track_dict_name = comp_mgr.getattr("effects_dict");
        var track_dict      = new Dict (track_dict_name);
        bank_dict.append("tracks", track_dict);
    }
    return bank_dict;
}


function save_bank(file_path)
{
    var bank_dict = getvalueof();
    bank_dict.export_json(file_path);
}


function load_bank(file_path)
{
    var bank_dict = new Dict ();
    bank_dict.import_json(file_path);
    setvalueof(bank_dict);
    notifyclients();
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
    set_solo_bank_count_();

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

    set_solo_bank_count_();
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


// ------------------------------------------------------------------------


function get_track_components_mgr_(track)
{
    var effect_list     = track.subpatcher().getnamed("effect_list");
    var components_mgr  = effect_list.subpatcher().getnamed("components");
    return components_mgr;

}
get_track_components_mgr_.local = 1;


function get_solo_bank_()
{
    return this.patcher.getnamed("solo_bank");
}
get_solo_bank_.local = 1;


function set_solo_bank_count_()
{
    get_solo_bank_().message("count", tracks_.length)
}
set_solo_bank_count_.local = 1;