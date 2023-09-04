autowatch = 1;

inlets = 2;

var w = 160;
var h = 48;	

function loadbang()
{
    var min_channel = jsarguments[1];
    var max_channel = jsarguments[2];

	post ("in djazz_ui_midi_bank_layout.js \n");
	post (min_channel, max_channel, "\n");

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

/* 	var inl 	= this.patcher.getnamed("inlet");
	var outl 	= this.patcher.getnamed("outlet");

	var x = inl.rect[0];
	var y = inl.rect[3]; */



/* 	var x_spr 	= x;
	var y_spr 	= y + h;
	var spray  	= this.patcher.newdefault(x_spr, y_spr, "spray", n_channels, min_channel, 1);
	this.patcher.connect(inl, 0, spray, 0);

	var x_fun 	= x_spr;
	var y_fun 	= y_spr + 344;
	var funnel 	= this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels, min_channel);
	this.patcher.connect(funnel, 0, outl, 0); */

/* 	var x_sol 	 = x_spr + n_channels * w;
	var y_sol 	 = y_spr + h;
	var x_sol_pres = 0;
	var y_sol_pres = 0;
	var solo_mgr = this.patcher.newdefault(x_sol, y_sol, "bpatcher", "djazz_ui_solo_manager");
	solo_mgr.presentation(1);
	this.patcher.connect(inl, 0, solo_mgr, 0);
 */
	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		 = channel - min_channel;
		//var x_mid 	 = x;//x_spr + w * i;
		//var y_mid 	 = y;//y_spr + h;	
		var x = i * 128;;
		var y = 50;
		var x_pres = i * 128;
		var y_pres = 0;
		var midi_out = this.patcher.newdefault(x, y, 
											"bpatcher", 
											"@name", "djazz_ui_midi_out_channel", 
											"@args", channel,
											"@patching_rect", [x, y, 128, 216],
											"@presentation", 1,
											"@presentation_rect", [x_pres, y_pres, 128, 216]);
		midi_out.varname = channel;
		/* this.patcher.connect(spray,    i, midi_out, 0);
		this.patcher.connect(midi_out, 0, funnel, 	i); */
	}




}
