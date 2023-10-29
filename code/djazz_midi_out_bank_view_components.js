var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var tracks_ = [];


function clear()
{
    var l = tracks_.length;
    for (var i = 0; i < l; i++)
    {
        remove_last_track_();
    }
}


function tracks(bank_dict_name, effect_menu_items_dict_name)
{
    clear();

    var d           = new Dict (bank_dict_name);
    var track_array = dutils.get_dict_array(d, "tracks");
    for (var i = 0; i < track_array.length; i++)
    {
        add_track_(track_array[i].name, effect_menu_items_dict_name);
    }
}


function effects(i, track_dict_name, effect_menu_items_dict_name)
{
    set_track_effects_(tracks_[i], track_dict_name, effect_menu_items_dict_name);
}


//----------------------------------------------------------------------------------------------------


function add_track_(track_dict_name, effect_menu_items_dict_name)
{
    var i = tracks_.length;

    var w = 128;
    var h = 216;
	var x = 22 + w * i;
	var y = 220;

    var patching_rect = [x, y, w, h];

    var w_pres  = 128;
    var h_pres  = 216;
	var x_pres  = w_pres * i;
	var y_pres  = 0;
	
    var presentation_rect = [x_pres, y_pres, w_pres, h_pres];

    var track = this.patcher.newdefault
                                    (
                                    x, y, 
                                    "bpatcher", 
                                    "@name",                "djazz_midi_out_view_track", 
                                    "@args",                i,
                                    "@presentation",        1,
                                    "@patching_rect",       patching_rect,
                                    "@presentation_rect",   presentation_rect
                                    );
    track.varname = "track_" + i;
    tracks_.push(track);
    set_track_effects_(track, track_dict_name, effect_menu_items_dict_name);
    return track;
}
add_track_.local = 1;


function set_track_effects_(track, track_dict_name, effect_menu_items_dict_name)
{
    var track_components    = track.subpatcher().getnamed("components");
    var msg                 = "effects";
    var args                = [track_dict_name, effect_menu_items_dict_name];

    track_components.message(msg, args);
}
set_track_effects_.local = 1;


function remove_last_track_()
{
    if (tracks_.length === 0)
        return;
    
    var track = tracks_.pop();
    this.patcher.remove(track);
}
remove_last_track_.local = 1;


//var track_listeners_ = [];

/* function on_track_listener_changed(data)
{
    var i   = track_listeners_.indexOf(data.listener);
    post ("on_track_listener_changed:\n");
    post ("   - track index =", i, "\n");
    var msg = ["tracks", i, data.value];
    outlet (0, msg);
} */
