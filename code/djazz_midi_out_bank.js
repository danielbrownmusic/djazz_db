this.x = this.box.rect[0];
this.y = this.box.rect[1];

this.varname 		= this.jsarguments[1];
this.midi_out_count 	= this.jsarguments[2];

this.midi_outs = []
this.midi_out_listeners = []

this.solo_states = []

for (var i = 0; i < midi_out_count; i++)
{
	var midi_out = this.patcher.newdefault(
		this.x + i * 200, 
		this.y + 30, 
		"js", 
		"djazz_midi_out.js", 
		this.varname, 
		i);
	this.midi_outs.push(midi_out);
	var midi_out_listener = new MaxobjListener(midi_out, "solo", set_soloed_send);
	this.midi_out_listeners.push(midi_out_listeners);
	this.solo_states.push(0);
}


function set_soloed_send(data)
{	var soloed = data.value;
	this.solo_states[data.maxobject.getattr("index")] = data.value;
	var any_soloed = this.solo_states.some(function(e) { e === 1;});
	data.maxobject.setprop("sending") = any_soloed === soloed;
}


/* 
function make(	midi_out_count, 
				x_start, 
				y_start, 
				w_obj, 
				h_obj, 
				w_space, 
				h_space)
{
	var w_cell = w_obj + w_space;
	var h_cell = h_obj + h_space;	

	solo_manager_ = this.patcher.newdefault(x_start, y_start + h_cell * 4, "js", "djazz_midi_solo_manager.js")
	for (var i = 0; i < arg_at_(1, 0); i++)
	{
		var m = this.patcher.newdefault(
			x_start + w_cell * i,
			y_start,
			"js", "djazz_midi_out.js",
			i,
			x_start + w_cell * i,
			y_start,
			w_obj,
			h_obj,
			w_space,
			h_space
				);
		var solo_obj = this.patcher.getnamed("midi_solo_" + i);
		post("solo = " + solo_obj);
		this.patcher.connect(solo_obj, 1, solo_manager_, i);
		this.patcher.connect(solo_manager_, i, solo_obj, 2);
		midi_outs_.push(m);	
	}
} */

/* function clear()
{
	this.patcher.remove(solo_manager_);
	for (var i = 0; i < midi_outs.length; i++)
	{
		midi_outs_[i].message("clear");
		this.patcher.remove(midi_outs_[i]);
	}
	midi_outs_ = [];
} */


