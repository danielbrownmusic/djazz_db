var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var tracks_ = [];


function setvalueof()
{
	if (arguments[0] !== "dictionary")
	{
		post ("Error loading.\n");
		return;
	}
    post ("got it! \n");
    var dict_name   = arguments[1];
    var d           = new Dict(dict_name);
    var track_count = dutils.get_array_length(d, "tracks");
    post ("track count =", track_count, "\n");

    for (var i = 0; i < track_count; i++)
    {
        var track           = add_track_();
        var effects_mgr     = track.subpatcher().getnamed("effects");
        var effects_dict    = dutils.get_at(d, "tracks", i);
        effects_mgr.setvalue(effects_dict);
    }
}

//------------------------------------------------------------------


function add_track_()
{
    var i = tracks_.length;

    var w = 128;
    var a = 0;
    var h = 216;
    var b = 0;

	var x = w * i + a;
	var y = h * i + b;

    var w_pres  = 0;
    var a_pres  = 0;
    var h_pres  = 0;
    var b_pres  = 0;

	var x_pres  = w_pres * i + a_pres;
	var y_pres  = h_pres * i + b_pres;
	
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
	track.varname = "track_" + i;
    tracks_.push(track);
    return track;
}
add_track_.local = 1;