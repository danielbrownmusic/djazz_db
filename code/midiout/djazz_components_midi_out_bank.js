var dutils  = require("db_dictionary_array_utils");

autowatch   = 1;
outlets     = 2;

var tracks_ = [];

/* var presets_file_name     = "presets.json";
var components_file_name  = "components.json"; */

declareattribute("bank_dict", "get_bank_dict", "set_bank_dict");

/*
You can send dicts as dicts to other json objects, 
but to insert dicts into a dict, you have to pass them by name, 
or they will be inserted as a js object!
*/


// ---------------------------------------------------------------


function get_bank_dict()
{
    var bank_dict = new Dict ();
    for (var i = 0; i < tracks_.length; i++)
    {
        bank_dict.append("tracks", get_track_dict_(tracks_[i]));
    }
    return bank_dict;
}


function set_bank_dict(bank_dict)
{
    clear();
    
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    if (track_array === null)
        return;

    add_tracks(track_array.length);

    for (var i = 0; i < track_array.length; i++)
    {      
        set_track_dict_(tracks_[i], track_array[i]);
    }
}


// -----------------------------------------------------------------------------------------------


function save_bank(file_path)
{
    var bank_dict = get_bank_dict();
    bank_dict.export_json(file_path);
}


function load_bank(file_path)
{
    var bank_dict = new Dict ();
    bank_dict.import_json(file_path);
    set_bank_dict(bank_dict);
}


function save_preset(file_path)
{
    outlet( 1, "store", 1);
    outlet (1, "write", file_path);
}


function load_preset(file_path)
{
    outlet( 1, "read", file_path);
    outlet( 1, 1);
}


function save_bank_with_presets(components_file_path, presets_file_path)
{
    save_preset(presets_file_path);
    save_bank(components_file_path);
}


function load_bank_with_presets(components_file_path, presets_file_path)
{
    load_bank(components_file_path);
    var tsk = new Task
    (
        function ()
        {
            load_preset(presets_file_path);
        }
    )
    tsk.schedule(3000);
}


// -----------------------------------------------------------------------------------------------


function clear()
{
    remove_last_tracks(tracks_.length);
}


function add_tracks(n)
{
    add_tracks_(n);
    set_solo_bank_count_();
}


function add_track()
{
    add_track_();
    set_solo_bank_count_();
}


function remove_last_tracks(n)
{
    remove_last_tracks_(n);
    set_solo_bank_count_();
}


function remove_last_track()
{
    remove_last_track_();
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


function add_tracks_(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track_();
    }
}
add_tracks_.local = 1;


function add_track_()
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

    return track;
}
add_track_.local = 1;


function remove_last_tracks_(n)
{
    for (var i = 0; i < n; i++)
    {
        remove_last_track_();
    }
}
remove_last_tracks_.local = 1;


function remove_last_track_()
{
    if (tracks_.length === 0)
        return;
    this.patcher.remove(tracks_.pop());
}
remove_last_track_.local = 1;


// ------------------------------------------------------------------------


function get_track_components_mgr_(track)
{
    var effect_list     = track.subpatcher().getnamed("effect_list");
    var components_mgr  = effect_list.subpatcher().getnamed("components");
    return components_mgr;

}
get_track_components_mgr_.local = 1;


function get_track_dict_(track)
{
    return new Dict (get_track_components_mgr_(track).getattr("effects_dict"));
}
get_track_dict_.local = 1;


function set_track_dict_(track, d)
{
    get_track_components_mgr_(track).message("effects_dict", d.name);
}
set_track_dict_.local = 1;


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