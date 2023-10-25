var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var track_listeners_ = [];


function on_track_listener_changed(data)
{
    var i   = track_listeners_.indexOf(data.listener);
    var msg = ["tracks", i, data.value];
    outlet (0, msg);
}


function set_track(i, effect_array)
{
    //post ("setting track \n");
    track_listeners_[i].setvalue_silent(effect_array);
}


function set_tracks(tracks_dict_name, menus_dict_name)
{
    var d = new Dict (tracks_dict_name);
    var track_array = dutils.get_dict_array(d, "tracks");
    for (var i = 0; i < track_array.length; i++)
    {
        var effects_dict_name = track_array[i].name;
        add_track_(menus_dict_name, effects_dict_name);
    }
}


//------------------------------------------------------------------


function add_track_(menus_dict_name, effects_dict_name)
{
    post ("\n");
    post ("<<<< MAKING TRACK >>>> \n");
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

    //post ("made track\n");


    var track_effects   = track.subpatcher().getnamed("effects");
    track_effects.message("set_effect_menu_items", menus_dict_name);

    //post ("making listener \n");
    var d               = new Dict (effects_dict_name);
    var effect_array    = dutils.get_dict_array(d, "effects");
    post ("effects:\n");
    if (effect_array.length === 0)
    {
        post ("[] - no effects! \n");
    }
    for (var post_index = 0; post_index < effect_array.length; post_index++)
    {
        post (effect_array[post_index]);
    }
    var listener        = new MaxobjListener(track_effects, on_track_listener_changed);
    //post ("made listener \n");
    //post ("setting menus. \n");
    //post ("setting listener value silent. \n");
    effect_array = dutils.make_sendable_array(effect_array);
    listener.setvalue_silent(effect_array);
    //post ("set listener value silent. \n");
    track_listeners_.push(listener);

    return listener;
}
add_track_.local = 1;