autowatch = 1;

var w = 160;
var h = 48;	

var midi_outs 		= [];

var solo_listeners 	= [];
var solo_values 	= [];
var any_solos		= null;
var any_solos_obj	= null;

function on_solo_changed(data)
{
	var i = solo_listeners.indexOf(data.listener);
	solo_values[i] = data.value;
	any_solos = solo_values.some(function(e) { return e !== 0; }) ? 1 : 0;
	any_solos_obj.message(any_solos);

	for (var j = 0; j < midi_outs.length; j++)
	{
		var active 		= (solo_values[j] === any_solos) ? 1 : 0;
		var active_obj 	= midi_outs[j].subpatcher().getnamed("active");
		post (j, active, active_obj, "\n");
		active_obj.message(active);
	} 
}


function loadbang()
{
    var min_channel = jsarguments[1];
    var max_channel = jsarguments[2];
    
	if (!min_channel)
		return;

	if (!max_channel)
		return;

	if (isNaN(min_channel))
		return;

	if (isNaN(max_channel))
		return;

	if (max_channel < min_channel)
		return;

	var n_channels = max_channel - min_channel + 1;

	var event_inl 	= this.patcher.getnamed("event_inlet");
	var outl 		= this.patcher.getnamed("outlet");

	var x 	= event_inl.rect[0];
	var y 	= event_inl.rect[3];

	var x_esp = x;
	var y_esp = y + h;
	var event_spray = this.patcher.newdefault(x_esp, y_esp, "spray", n_channels, min_channel, 1);
	this.patcher.connect(event_inl, 0, event_spray, 0);

/* 	var x_sol 	 = x_esp + w;
	var y_sol 	 = y_esp;
	var solo_mgr = this.patcher.newdefault(x_sol, y_sol, "djazz_solo_manager", n_channels); */

	var x_fun 	= x_esp;
	var y_fun 	= y_esp + 2 * h;
	var funnel 	= this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels, min_channel);
	this.patcher.connect(funnel, 0, outl, 0);

	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		 		= channel - min_channel;
		var x_mid 	 		= x_esp + w * i;
		var y_mid 	 		= y_esp + h;	
		var midi_out 		= this.patcher.newdefault(x_mid, y_mid, "djazz_midi_out_channel", channel);		
		midi_out.varname 	= channel;
		midi_outs.push(midi_out);

		this.patcher.connect(event_spray, i, midi_out,  0);
		this.patcher.connect(midi_out, 	  0, funnel, 	i);

		solo_listeners.push(new MaxobjListener(midi_out.subpatcher().getnamed("solo"), on_solo_changed));
		solo_values.push(0);
	}

	any_solos_obj = this.patcher.getnamed("any_solos");
}