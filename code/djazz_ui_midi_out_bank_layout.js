autowatch = 1;

var w = 160;
var h = 48;	

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

	var inl 	= this.patcher.getnamed("inlet");
	var outl 	= this.patcher.getnamed("outlet");

	var x = inl.rect[0];
	var y = inl.rect[3];

	var x_spr 	= x;
	var y_spr 	= y + h;
	var spray  	= this.patcher.newdefault(x_spr, y_spr, "spray", n_channels, min_channel, 1);
	this.patcher.connect(inl, 0, spray, 0);

	var x_fun 	= x_spr;
	var y_fun 	= y_spr + 4 * h;
	var funnel 	= this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels, min_channel);
	this.patcher.connect(funnel, 0, outl, 0);

	var x_sol 	 = x_spr + n_channels * w;
	var y_sol 	 = y_spr + h;
	var x_sol_pres = 0;
	var y_sol_pres = 0;
	var solo_mgr = this.patcher.newdefault(x_sol, y_sol, "bpatcher", "djazz_ui_solo_manager");
	solo_mgr.presentation(1);
	this.patcher.connect(inl, 0, solo_mgr, 0);

	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		 = channel - min_channel;
		var x_mid 	 = x_spr + w * i;
		var y_mid 	 = y_spr + h;	
		var x_mid_pres = i * 128;
		var y_mid_pres = 0;
		var midi_out = this.patcher.newdefault(x_mid, y_mid, "bpatcher", 
											"@name", "djazz_ui_midi_out", 
											"@args", channel);
		midi_out.setboxattr("presentation", 1);
		midi_out.setboxattr("presentation_rect", [x_mid_pres, y_mid_pres, 128, 236]);
		this.patcher.connect(spray,    i, midi_out, 0);
		this.patcher.connect(midi_out, 0, funnel, 	i);
	}




}
