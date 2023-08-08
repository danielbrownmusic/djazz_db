autowatch = 1;

var sizes = {	box: 	{ w: 155 , 	h: 22 },
				space: 	{ w: 20	 , 	h: 40 },
				cell: 	{ w: 160 ,	h: 48 }};

var spray;
var solo_manager;
var midi_outs;
var funnel;


function init(min_channel, max_channel)
{
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

	var x_sol 	 = x_mid + n_channels * w;
	var y_sol 	 = y_mid;	

	midi_outs = [];
	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		= channel - min_channel;
		var x_ch 	= x_mid + w * i;
		midi_outs.push(make_midi_out(i, channel, x_ch, y_mid, h));
	}

	spray  = this.patcher.newdefault(x_spr, y_spr, "spray", n_channels, min_channel, 1);
	this.patcher.connect(the_inlet, 0, spray, 0);
	for (var i = 0; i < n_channels; i++)
	{	
		this.patcher.connect(spray, i, get_solo(midi_outs[i]), 0);
	}

	funnel = this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels);
	for (var i = 0; i < n_channels; i++)
	{	
		this.patcher.connect(get_effect_list(midi_outs[i]), 0, funnel, i);
	}	
	this.patcher.connect(funnel, 0, the_outlet, 0);

	solo_manager = this.patcher.newdefault(x_sol, y_sol, "djazz_solo_manager", n_channels);
	for (var i = 0; i < n_channels; i++)
	{	
		var s = get_solo(midi_outs[i]);
		this.patcher.connect(s, 1, solo_manager, 0);
		this.patcher.connect(solo_manager, 0, s, 1);
	}
}


function make_midi_out(index, channel, x, y, h)
{
	var midi_out_solo 	= this.patcher.newdefault	(x, y, 			"djazz_midi_out_solo", 	channel);
	var midi_out_mute 	= this.patcher.newdefault	(x, y + 1 * h,	"djazz_midi_out_mute", 	channel);
	var effect_list 	= this.patcher.newdefault	(x, y + 2 * h, 	"djazz_effect_list", 	channel);

	this.patcher.connect(	midi_out_solo, 	0, midi_out_mute,	0);
	this.patcher.connect(	midi_out_mute, 	0, effect_list, 	0);

	return [index, channel, midi_out_solo, midi_out_mute, effect_list];
}


function get_index(arr)
{
	return arr[0];
}


function get_channel(arr)
{
	return arr[1];
}


function get_solo(arr)
{
	return arr[2];
}


function get_mute(arr)
{
	return arr[3];
}


function get_effect_list(arr)
{
	return arr[4];
}