autowatch = 1;

var w = 160;
var h = 48;

var tracks = [];

/*

midi_outs 1 track 0 set_effects 2 0 3 ...

*/


function load_from_dict()
{
	if (arguments[0] !== "dictionary")
	{
		post ("Error loading.\n");
		return;
	}

    var dict_name   = arguments[1];
    var d           = new Dict(dict_name);

    for (var i = 0; i < dutils.get_array_length(d, "tracks"); i++)
    {
        var track = make_track_(i);
        tracks.push(track);

        var addr    = make_key_("track_", i, "component_mgr");
        var mgr     = this.getnamed(addr);
        var msg     = "load_from_dict";
        var args    = dutils.get_at(d, "tracks", i);
        mgr.message(msg, args);
}


//------------------------------------------------------


function make_track_(i)
{
	//var inl = this.patcher.getnamed("component_msg_inlet");

	var x_inl 	= inl.rect[0];
	var y_inl 	= inl.rect[3];

    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

	var x = x_inl + i * 128;
	var y = y_inl + 66;

    var a_pres  = 0;
    var b_pres  = 0;
    var c_pres  = 0;
    var d_pres  = 0;

	var x_pres  = i * 128;
	var y_pres  = 0;
	
    var track 	= this.patcher.newdefault(
										x, y, 
										"bpatcher", 
										"@name", "djazz_ui_midi_out_track", 
										"@args", i,
										"@patching_rect", [x, y, 128, 216],
										"@presentation", 1,
										"@presentation_rect", [x_pres, y_pres, 128, 216]);
		track.varname = "track_" + i;
 		//this.patcher.connect(inl, 0, track, 1);
}
make_track_.local = 1;


function make_key_()
{
    return arguments.join("::");
}
make_key_.local = 1;


/* function track()
{
	// Dispatch layout messages to individual tracks.
	var a 	= arrayfromargs(arguments);
	var i 	= a[0];
	//var i 	= t - min_track;
	var msg = a.slice(1);
	post("sending track", i, "message");
	post(msg);
	post("\n");
	outlet(i, msg);
}
 */


/* 
function load()
{
    var min_track = jsarguments[0];
    var max_track = jsarguments[1];


	if (!min_track)
		return;

	if (!max_track)
		return;

	if (isNaN(min_track))
		return;

	if (isNaN(max_track))
		return;

	if (max_track < min_track)
		return;

	var n_tracks = max_track - min_track + 1;

 	var inl = this.patcher.getnamed("component_msg_inlet");

	var x_inl 	= inl.rect[0];
	var y_inl 	= inl.rect[3];

 	for (var t = min_track; t <= max_track; t++)
	{
		var i 			= t - min_track;
		var x 			= x_inl + i * 128;
		var y 			= y_inl + 66;
		var x_pres 		= i * 128;
		var y_pres 		= 0;
		var track 		= this.patcher.newdefault(x, y, 
											"bpatcher", 
											"@name", "djazz_ui_midi_out_track", 
											"@args", t,
											"@patching_rect", [x, y, 128, 216],
											"@presentation", 1,
											"@presentation_rect", [x_pres, y_pres, 128, 216]);
		track.varname = t;
 		this.patcher.connect(inl, 0, track, 1);
	}	
}
 */

/* 
function loadbang()
{
    var min_track = jsarguments[1];
    var max_track = jsarguments[2];
    
	if (!min_track)
		return;

	if (!max_track)
		return;

	if (isNaN(min_track))
		return;

	if (isNaN(max_track))
		return;

	if (max_track < min_track)
		return;

	var n_tracks = max_track - min_track + 1;

 	var inl = this.patcher.getnamed("component_msg_inlet");

	var x_inl 	= inl.rect[0];
	var y_inl 	= inl.rect[3];

 	var x_spr = x;
	var y_spr = y + h;
	var spray = this.patcher.newdefault(x_spr, y_spr, "spray", n_tracks, min_track, 1);
	this.patcher.connect(inl, 0, spray, 0);
 
 	for (var t = min_track; t <= max_track; t++)
	{
		var i 			= t - min_track;
		var x 			= x_inl + i * 128;
		var y 			= y_inl + 66;
		var x_pres 		= i * 128;
		var y_pres 		= 0;
		var track 		= this.patcher.newdefault(x, y, 
											"bpatcher", 
											"@name", "djazz_ui_midi_out_track", 
											"@args", t,
											"@patching_rect", [x, y, 128, 216],
											"@presentation", 1,
											"@presentation_rect", [x_pres, y_pres, 128, 216]);
		track.varname = t;
 		this.patcher.connect(inl, 0, track, 1);
	}
}

 */





