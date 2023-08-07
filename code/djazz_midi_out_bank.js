autowatch = 1;

var sizes = {	box: 	{ w: 155 , 	h: 22 },
				space: 	{ w: 20	 , 	h: 20 },
				cell: 	{ w: 160 ,	h: 32 }};


//varname 			= jsarguments[1]; // the name of the bank

/* var min_channel;
var max_channel;
var n_channels; */

//var the_inlet;
var spray;
var solo_manager;
//var solo_manager_js;
var midi_outs;
var funnel;
//var the_outlet;


function init(min_channel, max_channel)
{
	var n_channels = max_channel - min_channel + 1;

	var the_inlet 	= this.patcher.getnamed("inlet");
	var the_outlet 	= this.patcher.getnamed("outlet");

	var w = sizes.cell.w;
	var h = sizes.cell.h;	
	var x = the_inlet.rect[0];
	var y = the_inlet.rect[3] + h;

	var x_spr = x;
	var y_spr = y;

	var x_mid = x;
	var y_mid = y_spr + h;

	var x_fun = x;
	var y_fun = y_mid + 3 * h;

	post("n_channels: ", n_channels, "\n");
	post("min_channel: ", min_channel, "\n");
	post("max_channel: ", max_channel, "\n");
	post(x, y, x_spr, y_spr, x_mid, y_mid, x_fun, y_fun,"\n");

	spray  = this.patcher.newdefault(x_spr, y_spr, "spray", n_channels, min_channel, 1);
	funnel = this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels);

	// make midi outs
	midi_outs = [];
	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i = channel - min_channel;
		var midi_out = make_midi_out(i, channel, x_mid + w * i, y_mid, h);
		midi_outs.push(midi_out);
	}

	// connect chains
	this.patcher.connect(the_inlet, 0, spray, 0);
	for (var i = 0; i < n_channels; i++)
	{	
		this.patcher.connect(spray, i, midi_outs[i].solo, 0);
		this.patcher.connect(midi_outs[i].effect_list, 0, funnel, i);
	}
	this.patcher.connect(funnel, 0, the_outlet, 0);

	// make & connect solo manager
	var x_sol 	 = x_mid + n_channels * w;
	var y_sol 	 = y_mid;	
	solo_manager = this.patcher.newdefault(x_mid, y_mid, "djazz_solo_manager", n_channels);
	for (var i = 0; i < n_channels; i++)
	{	
		var s = midi_outs[i].solo;
		this.patcher.connect(s, 1, solo_manager, 0);
		this.patcher.connect(solo_manager, 0, s, 1);
	}

	//connect_solo(i, get_solo_obj(midi_outs[i]), solo_manager);
}





function make_midi_out(index, channel, x, y, h)
{
	var midi_out_solo 	= this.patcher.newdefault	(x, y, 			"djazz_midi_out_solo", 	channel);
	var midi_out_mute 	= this.patcher.newdefault	(x, y + 1 * h,	"djazz_midi_out_mute", 	channel);
	var effect_list 	= this.patcher.newdefault	(x, y + 2 * h, 	"djazz_effect_list", 	channel);

	this.patcher.connect(	midi_out_solo, 	0, midi_out_mute,	0);
	this.patcher.connect(	midi_out_mute, 	0, effect_list, 	0);

	var d = new Dict()
	d.set("index", index);
	d.set("channel", channel);
	d.set("solo", midi_out_solo);
	d.set("mute", midi_out_mute);
	d.set("effect_list", effect_list);

/* 	midi_out_solo.varname 	= "solo_" + index;
	midi_out_mute.varname 	= "mute_" + index;
	effect_list.varname 	= "effect_list_" + index;
 */
	//post(d.get("solo") + "\n");
/* 	post("\n");
	post(JSON.stringify(d));
	post("\n");
 */
	return d;	
}



/* 

function connect_in_midi_out(midi_out, in_obj, in_outlet)
{
	//post("connect in " + midi_out.get("index") + "\n");

}


function connect_out_midi_out(midi_out, out_obj, out_inlet)
{
	//post("connect out " + midi_out.get("index") + "\n");
	this.patcher.connect(get_effect_list_obj(midi_out), 0, out_obj, out_inlet);
}


function get_solo_obj(midi_out)
{
	var name = get_varname("solo", midi_out);
	//post(name+"\n");
	return this.patcher.getnamed(name);
}


function get_mute_obj(midi_out)
{
	var name = get_varname("mute", midi_out);
	return this.patcher.getnamed(name);
}


function get_effect_list_obj(midi_out)
{
	var name = get_varname("effect_list", midi_out);
	return this.patcher.getnamed(name);
}


function get_varname(name, midi_out)
{
	return midi_out.get(name);
}


function connect_solo(i, midi_out_solo, solo_manager)
{
	var midi_out_solo_js = midi_out_solo.subpatcher().getnamed("js_patch");
	var solo_manager_js  = solo_manager.subpatcher().getnamed("js_patch");
	solo_manager_js.setattr("index", i);
	solo_manager_js.message("add", midi_out_solo_js);
}


function clear()
{
	this.patcher.remove(spray);
	solo_manager_js = null;
	this.patcher.remove(solo_manager);
	for (var i = 0; i < n_channels; i++)
	{
		var d = midi_outs[i];
		this.patcher.remove(d.get("solo"));
		this.patcher.remove(d.get("mute"));
		this.patcher.remove(d.get("effect_list"));
		midi_outs[i] = null;
	}
} */