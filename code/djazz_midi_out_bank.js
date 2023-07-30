autowatch = 1;

var sizes = {	box: 	{ w: 155 , 	h: 22 },
				space: 	{ w: 5	 , 	h: 10 },
				cell: 	{ w: 160 ,	h: 32 }};


//varname 			= jsarguments[1]; // the name of the bank

var min_channel;
var max_channel;
var n_channels;

//var the_inlet;
var spray;
var solo_manager;
//var solo_manager_js;
var midi_outs;
var funnel;
//var the_outlet;


function make_midi_out_bank(in_min_channel, in_max_channel)
{
	min_channel = in_min_channel;
	max_channel = in_max_channel;
	n_channels = max_channel - min_channel + 1;

	var x = this.box.rect[0];
	var y = this.box.rect[1];
	var w = sizes.cell.w;
	var h = sizes.cell.h;

	var the_inlet 	= this.patcher.getnamed("inlet");
	var the_outlet 	= this.patcher.getnamed("outlet");
	spray 			= this.patcher.newdefault(	x + w, 	y + h, 		"spray", 				n_channels, min_channel, 1);
	solo_manager 	= this.patcher.newdefault(	x, 		y + 2 * h, 	"djazz_solo_manager");
	funnel 			= this.patcher.newdefault(	x + w, 	y + 5 * h, 	"funnel", 				n_channels);

	midi_outs 		= Array(n_channels);
	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 	= channel - min_channel;
		x_ch 	= x + w * (i + 1);
		y_ch 	= y + 2 * h;
		midi_outs[i] = make_midi_out(i, channel, x_ch, y_ch, w, h);
		connect_solo(i, get_solo_obj(midi_outs[i]), solo_manager);
	}

	this.patcher.connect(the_inlet, 0, spray, 0);
	for (var i = 0; i < n_channels; i++)
	{	
		connect_in_midi_out ( midi_outs[i], spray,  i);
		connect_out_midi_out( midi_outs[i], funnel, i);
	}
	this.patcher.connect(funnel, 0, the_outlet, 0);
}



function make_midi_out(index, channel, x, y, w, h)
{
	var midi_out_solo 	= this.patcher.newdefault	(x, y, 			"djazz_midi_out_solo", 	channel);
	var midi_out_mute 	= this.patcher.newdefault	(x, y + 1 * h,	"djazz_midi_out_mute", 	channel);
	var effect_list 	= this.patcher.newdefault	(x, y + 2 * h, 	"djazz_effect_list", 	channel);

	midi_out_solo.varname 	= "solo_" + index;
	midi_out_mute.varname 	= "mute_" + index;
	effect_list.varname 	= "effect_list_" + index;

	this.patcher.connect(	midi_out_solo, 	0, midi_out_mute,	0);
	this.patcher.connect(	midi_out_mute, 	0, effect_list, 	0);

	var d = new Dict()
	d.set("index", index);
	d.set("channel", channel);
	d.set("solo", midi_out_solo.varname);
	d.set("mute", midi_out_mute.varname);
	d.set("effect_list", effect_list.varname);
	//post(d.get("solo") + "\n");
/* 	post("\n");
	post(JSON.stringify(d));
	post("\n");
 */
	return d;	
}





function connect_in_midi_out(midi_out, in_obj, in_outlet)
{
	//post("connect in " + midi_out.get("index") + "\n");
	this.patcher.connect(in_obj, in_outlet, get_solo_obj(midi_out), 0);
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
}