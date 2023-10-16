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

