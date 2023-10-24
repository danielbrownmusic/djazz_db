var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var track_listeners_ = [];


function on_track_listener_changed(data)
{
    for (var i = 0; i < track_listeners_.length; i++)
    {
        if (data.listener == track_listeners_[i])
        {
            post ("in bank-- track", i, "changed to", value, "\n");
            var msg = ["tracks", i, data.value];
            outlet (0, msg);
        } 
    }
}


function set_track(i, dict_name)
{
    track_listeners_[i].setvalue_silent(dict_name);
}


function set_tracks(tracks_dict_name, menus_dict_name)
{
    var d = new Dict (tracks_dict_name);
    var track_array = dutils.get_array(d, "tracks");
    for (var i = 0; i < track_array.length; i++)
    {
        var effects_dict_name = track_array[i].name;
        add_track_(menus_dict_name, effects_dict_name);
    }
}


//------------------------------------------------------------------


function add_track_(menus_dict_name, effects_dict_name)
{
    var i = track_listeners_.length;

    var a = 22;
    var b = 128;
    var c = 220;
    var d = 0;

    var w = 128;
    var h = 216;

	var x = a + b * i;
	var y = c + d * i;

    var a_pres  = 0;
    var b_pres  = 128;
    var c_pres  = 0;
    var d_pres  = 0;

    var w_pres  = 128;
    var h_pres  = 216;

	var x_pres  = a_pres + b_pres * i;
	var y_pres  = c_pres + d_pres * i;
	
    var patching_rect       = [x, y, w, h];
    var presentation_rect   = [x_pres, y_pres, w_pres, h_pres];

    var track = this.patcher.newdefault
                                    (
                                    x, y, 
                                    "bpatcher", 
                                    "@name",                "djazz_midi_out_track_view", 
                                    "@args",                i,
                                    "@presentation",        1,
                                    "@patching_rect",       patching_rect,
                                    "@presentation_rect",   presentation_rect
                                    );

    var track_effects   = track.subpatcher().getnamed("effects");
    track_effects.message("set_menus", menus_dict_name);

    var listener        = new MaxobjListener(track_effects, on_track_listener_changed);
    listener.setvalue_silent(effects_dict_name);

    track_listeners_.push(listener);

    return listener;
}
add_track_.local = 1;