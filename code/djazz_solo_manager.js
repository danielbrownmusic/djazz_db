autowatch = 1;

var any_solos   	= 0;

var solo_listeners 	= [];
var solo_values		= [];
var active_switches	= [];


function loadbang()
{
	var n = jsarguments[1];
	solo_listeners	= make_array_(n, new MaxobjListener(null, on_solo_changed));
	solo_values 	= make_array_(n, 0);
	actives			= make_array_(n, null);
}


function set(i, midi_out)
{
	solo_listeners[i].maxobj 	= midi_out.subpatcher().getnamed("solo");
	active_switches[i]			= midi_out.subpatcher().getnamed("active");
}


function on_solo_changed(data)
{
	var i = solo_listeners.indexOf(data.listener);
	solo_values[i] = data.value;
	any_solos = solo_values.some(function(e) { return e !== 0; }) ? 1 : 0;
	post ("solo_manager", i, data.value, any_solos, "\n"); 

	actives.forEach
	( 
		function (a) 
		{ 
			a.value = (solo_values[i] === any_solos) ? 1 : 0;
		} 
	);
}



function msg_int(s)
{
    solos[inlet] = s;
	any_solos = solos.some(function(e) { return e !== 0; }) ? 1 : 0;
	for (var i = 0; i < n; i++)
	{
		outlet(i, solos[i] === any_solos);
	}
	outlet(n, any_solos);
}



function make_array_(n, initial_element)
{
	var a = []
	for (var i = 0; i < n; i++)
	{
		a.push(initial_element);
	}
}
make_array_.local = 1;
