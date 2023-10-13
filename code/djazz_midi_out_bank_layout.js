autowatch = 1;

var w = 160;
var h = 48;	

var tracks = [];

/* var solo_listeners 	= [];
var solo_values 	= [];
var any_solos		= null;
var any_solos_obj	= null; */

/* function on_solo_changed(data)
{
	var i = solo_listeners.indexOf(data.listener);
	solo_values[i] = data.value;
	any_solos = solo_values.some(function(e) { return e !== 0; }) ? 1 : 0;
	any_solos_obj.message(any_solos);

	for (var j = 0; j < tracks.length; j++)
	{
		var active 		= (solo_values[j] === any_solos) ? 1 : 0;
		var active_obj 	= tracks[j].subpatcher().getnamed("active");
		post (j, active, active_obj, "\n");
		active_obj.message(active);
	} 
} */


function anything()
{
	// Dispatch layout messages to individual tracks.

	//var a 			= arrayfromargs(messagename, arguments);
	//var t 			= messagename;

	// 5::effects::3 effect_name
	// 5::

	var track 		= this.patcher.getnamed(messagename);
	var track_mgr 	= track.subpatcher().getnamed("mgr");
	track_mgr.message(arguments);
}


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

	var inl 	= this.patcher.getnamed("event_inlet");
	var outl 	= this.patcher.getnamed("event_outlet");

	var x 	= inl.rect[0];
	var y 	= inl.rect[3];

	var x_spr = x;
	var y_spr = y + h;
	var spray = this.patcher.newdefault(x_spr, y_spr, "spray", n_tracks, min_track, 1);
	this.patcher.connect(inl, 0, spray, 0);

	var x_fun 	= x_spr;
	var y_fun 	= y_spr + 4 * h;
	var funnel 	= this.patcher.newdefault(x_fun, y_fun, "funnel", n_tracks, min_track);
	this.patcher.connect(funnel, 0, outl, 0);

	for (var t = min_track; t <= max_track; t++)
	{
		var i 		 		= t - min_track;
		var x_mid 	 		= x_spr + w * i;
		var y_mid 	 		= y_spr + 2 * h;	
		var track 		= this.patcher.newdefault(x_mid, y_mid, "djazz_midi_out_track", t);		
		track.varname 	= t;
		tracks.push(track);

		this.patcher.connect(spray, i, track,  0);
		this.patcher.connect(track,	0, funnel, i);
	}
}