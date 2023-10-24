var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var track_listeners_ = [];


function on_track_listener_changed(data)
{
    for (var i = 0; i < track_listeners_.length; i++)
    {
        if (data.listener == track_listeners_[i])
        {
            post ("track", i, "changed! \n");
            var msg = ["tracks", i, data.value];
            outlet (0, msg);
        } 
    }
}


function set_tracks(dict_name)
{
    var d = new Dict (dict_name);
    var track_array = dutils.get_array(d, "tracks");
    for (var i = 0; i < track_array.length; i++)
    {
        var effects_dict = track_array[i];
        add_track_(effects_dict.name);
    }
}


function set_track(i, dict_name)
{
    track_listeners_[i].setvalue_silent(dict_name);
}


//------------------------------------------------------------------


function add_track_(effects_dict_name)
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

    var track 	= this.patcher.newdefault
                                        (
										x, y, 
										"bpatcher", 
										"@name",                "djazz_midi_out_track_view", 
										"@args",                i,
										"@presentation",        1,
                                        "@patching_rect",       patching_rect,
										"@presentation_rect",   presentation_rect
                                        );
	//track.varname = "track_" + i;
    var track_effects = track.subpatcher().getnamed("effects");
    track_listeners_.push(new MaxobjListener(track_effects, on_track_listener_changed));
    set_track(i, effects_dict_name);
    return track;
}
add_track_.local = 1;