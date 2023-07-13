var channel_count = (jsarguments.length > 1) ? jsarguments[1] : 0;

inlets = channel_count;
outlets = channel_count + 1;

var any_soloed 			= 0;
var channel_solo_states = Array.apply(null, Array(channel_count)).map(Number.prototype.valueOf,0);

//var inlet_count = 0;
//var patcher_inlets = Array();
//var patcher_outlets = Array();


//var next_inlet = this.patcher.newdefault(50 + 100 * i, 50, "js", " djazz_midi_solo_manager.js", i + 1);

/*
for (var i = 0; i < channel_count; i++)
{
	if (inlet_count)
	{
		for (var i = 0; i < inlet_count; i++)
		{
			this.patcher.remove(patcher_inlets[i];
			this.patcher.remove(patcher_outlets[i];
		}
	}
		
	var next_inlet = this.patcher.newdefault(50 + 100 * i, 50, "inlet", i + 1);
	this.patcher.connect(next_inlet, 0, this.box, i);
	var next_outlet = this.patcher.newdefault(50 + 100 * i, 350, "outlet", i + 1);
	this.patcher.connect(this.box, i, next_let, 0);
	
}
*/


function bang()
{
	outlet(channel_count, channel_solo_states);

}


function msg_int()
{
	channel_solo_states[inlet] = arguments[0];
	update();
	broadcast();
}


function is_soloed(x)
{
	return x == 1;
}


function update()
{
	any_soloed = channel_solo_states.some(is_soloed);
}


function broadcast()
{
	for (var i = 0; i < channel_count; i++)
	{
		outlet(i, channel_solo_states[i] == any_soloed);
	}
}