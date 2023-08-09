autowatch = 1;

var sizes = {	box: 	{ w: 155 , 	h: 22 },
				space: 	{ w: 20	 , 	h: 40 },
				cell: 	{ w: 160 ,	h: 48 }};

//var spray;
//var solo_manager;
//var midi_outs;
//var funnel;


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

	var w = sizes.cell.w;
	var h = sizes.cell.h;	
	var x = the_inlet.rect[0];
	var y = the_inlet.rect[3] + h;


	var x_spr = x;
	var y_spr = y;

	var inl 	= this.patcher.getnamed("inlet");
	var spray  	= this.patcher.newdefault(x_spr, y_spr, "spray", n_channels, min_channel, 1);
	this.patcher.connect(inl, 0, spray, 0);


	var x_fun = x;
	var y_fun = y_mid + 3 * h;

	var funnel 	= this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels);
	var outl 	= this.patcher.getnamed("outlet");
	this.patcher.connect(funnel, 0, outl, 0);


	var x_sol 	 = x_mid + n_channels * w;
	var y_sol 	 = y_mid;	

	var solo_mgr = this.patcher.newdefault(x_sol, y_sol, "djazz_solo_manager", n_channels);


	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		= channel - min_channel;
		var x_mid 	= x_spr + w * i;
		var y_mid 	= y_spr + h;	

		var midi_out = this.patcher.newdefault(x_mid, y_mid, "djazz_midi_out", channel);		

		this.patcher.connect(spray,    i, midi_out, 0);
		this.patcher.connect(midi_out, 0, funnel, 	i);

		this.patcher.connect(midi_out, 1, solo_mgr, 0);
		this.patcher.connect(solo_mgr, 0, midi_out, 1);
	}
}