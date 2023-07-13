var initialized = false;
var inlet_count = 0;
var patcher_inlets = Array();
var patcher_outlets = Array();
var solo_manager;

function initialize(channel_count)
{
	if (initialized)
		clear();

	solo_manager = this.patcher.newdefault(50, 200, "js", "djazz_midi_solo_manager.js", channel_count)
			
	inlet_count = channel_count;
	for (var i = 0; i < inlet_count; i++)
	{
	next_inlet = this.patcher.newdefault(50 + 100 * i, 50, "inlet", i + 1);
	patcher_inlets.push(next_inlet);
	this.patcher.connect(patcher_inlets[i], 0, solo_manager.box, i);

	
	next_outlet = this.patcher.newdefault(50 + 100 * i, 350, "outlet", i + 1);
	this.patcher.connect(next_outlet, 0, solo_manager.box, i);	
	patcher_outlets.push(next_outlet);
	}
	
	initialized = true;
	
}


function clear()
{
	post(patcher_outlets);
	for (var i = 0; i < inlet_count; i++)
	{
		this.patcher.remove(patcher_inlets[i + 1]);
		this.patcher.remove(patcher_outlets[i + 1]);
	}
	patcher_inlets = [];
	patcher_outlets = [];
	inlet_count = 0;
	post(inlet_count);
	this.patcher.remove(solo_manager);
	solo_manager = undefined;

	initialized = false;
}