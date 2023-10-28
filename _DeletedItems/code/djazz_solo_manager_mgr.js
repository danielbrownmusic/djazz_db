autowatch = 1;

inlets = jsarguments[1];
outlets = jsarguments[1] + 1;
var any_solos   	= 0;

var solo_listeners 	= [];
var solos		= [];
//var active_switches	= [];


function loadbang()
{
	//var n = jsarguments[1];
//	solo_listeners	= make_array_(n, new MaxobjListener(null, on_solo_changed));
    solos 	= make_array_(inlets, 0);
//	actives			= make_array_(n, null);
    var x = null;
    var y = null;
    for (var i = 0; i < inlets; i++)
    {
        x = 22 + 88 * i;
        y = 44;
        var inl = this.patcher.newdefault(x, y, "inlet");
        this.patcher.connect(inl, 0, this.box, i);

        x = 22 + 88 * i;
        y = 144;
        var outl = this.patcher.newdefault(x, y, "outlet");
        this.patcher.connect(this.box, i, outl, 0);        
    }
}


function solo(s)
{
    solos[inlet] = s;
	any_solos = solos.some(function(e) { return e !== 0; }) ? 1 : 0;
	for (var i = 0; i < n; i++)
	{
		outlet(i, solos[i] === any_solos);
	}
	outlet(n, "active", any_solos);
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


/* function set(i, midi_out)
{
	solo_listeners[i].maxobj 	= midi_out.subpatcher().getnamed("solo");
	active_switches[i]			= midi_out.subpatcher().getnamed("active");
} */


/* function on_solo_changed(data)
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
 */



