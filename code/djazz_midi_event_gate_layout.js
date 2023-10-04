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
	var outl 		= this.patcher.getnamed("outlet");

	var x 	= event_inl.rect[0];
	var y 	= event_inl.rect[3];

	var x_esp = x;
	var y_esp = y + h;
	var spray = this.patcher.newdefault(x_esp, y_esp, "spray", n_channels, min_channel, 1);
	this.patcher.connect(event_inl, 0, spray, 0);

	var x_fun 	= x_esp;
	var y_fun 	= y_esp + 2 * h;
	var funnel 	= this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels, min_channel);
	this.patcher.connect(funnel, 0, outl, 0);

	for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		 		= channel - min_channel;
		var x_mid 	 		= x_esp + w * i;
		var y_mid 	 		= y_esp + h;	
		var midi_out 		= this.patcher.newdefault(x_mid, y_mid, "gswitch");		
		midi_out.varname 	= channel;

		this.patcher.connect(event_spray, i, midi_out,  0);
		this.patcher.connect(midi_out, 	  0, funnel, 	i);
	}
}