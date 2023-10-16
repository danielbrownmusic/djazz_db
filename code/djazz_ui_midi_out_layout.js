autowatch = 1;

var w = 160;
var h = 48;	


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



function track()
{
	// Dispatch layout messages to individual tracks.
	var a 	= arrayfromargs(arguments);
	var t 	= a[0];
	var i 	= t - min_track;
	var msg = a.slice(1);
	post("sending track", t, "(zero-based =", i, ") message ");
	post(msg);
	post("\n");
	outlet(i, msg);
}

