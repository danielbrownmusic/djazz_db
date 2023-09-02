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

	var event_inl 	= this.patcher.getnamed("event_inlet");
/* 	var ctrl_inl 	= this.patcher.getnamed("control_inlet");
	var load_inl 	= this.patcher.getnamed("load_inlet"); */
	var outl 		= this.patcher.getnamed("outlet");

	var x1 	= event_inl.rect[0];
/* 	var x2 	= ctrl_inl.rect[0];
	var x3 	= load_inl.rect[0]; */
	var y 	= event_inl.rect[3];

	var x_esp = x1;
	var y_esp = y + h;
	var event_spray = this.patcher.newdefault(x_esp, y_esp, "spray", n_channels, min_channel, 1);
	this.patcher.connect(event_inl, 0, event_spray, 0);

/* 	var x_csp = x2;
	var y_csp = y + h;
	var ctrl_spray = this.patcher.newdefault(x_csp, y_csp, "spray", n_channels, min_channel, 1);
	this.patcher.connect(ctrl_inl, 0, ctrl_spray, 0);

	var x_lsp = x3;
	var y_lsp = y + h;
	var event_spray = this.patcher.newdefault(x_lsp, y_lsp, "spray", n_channels, min_channel, 1);
	this.patcher.connect(load_inl, 0, event_spray, 0); */


	var x_sol 	 = x_esp + w;
	var y_sol 	 = y_esp;
	var solo_mgr = this.patcher.newdefault(x_sol, y_sol, "djazz_solo_manager", n_channels);

	var x_fun 	= x_esp;
	var y_fun 	= y_esp + 2 * h;
	var funnel 	= this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels);
	this.patcher.connect(funnel, 0, outl, 0);

	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		 = channel - min_channel;
		var x_mid 	 = x_esp + w * i;
		var y_mid 	 = y_esp + h;	
		var midi_out = this.patcher.newdefault(x_mid, y_mid, "djazz_midi_out_channel", channel);		
		midi_out.varname = channel;

		this.patcher.connect(event_spray, i, midi_out,  0);
/* 		this.patcher.connect(ctrl_spray,  i, midi_out,  1);
		this.patcher.connect(load_spray,  i, midi_out,  3);	 */	
/* 
		this.patcher.connect(midi_out, 	  1, solo_mgr,  0);
		this.patcher.connect(solo_mgr, 	  0, midi_out,  2); */

		this.patcher.connect(midi_out, 	  0, funnel, 	i);     
	}
}