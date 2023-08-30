autowatch = 1;

var w       = 5;
var w_obj   = 128;
var h       = 48;
var h_obj   = 22;


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

    var ctrl_in     = this.patcher.getnamed("ctrl_in");
    var x_cspr      = ctrl_in.rect[0];
    var y_cspr      = ctrl_in.rect[3] + h;
    var ctrl_spray  = this.patcher.newdefault(x_cspr, y_cspr, "spray", n_channels, min_channel, 1);    
    this.patcher.connect(ctrl_in, 0, ctrl_spray, 0);

    var outl        = this.patcher.getnamed("outlet");
    var x_fun       = outl.rect[0];
    var y_fun       = outl.rect[1] - (h_obj + h); 
    var funnel  = this.patcher.newdefault(x_fun, y_fun, "funnel", n_channels, min_channel);
    this.patcher.connect(funnel, 0, outl, 0);

    var x = x_cspr;
    var y = ctrl_spray.rect[3] + h;

    for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		 = channel - min_channel;

        var x_m 	 = x + i * (w + w_obj);
		var y_m 	 = y;
		var midi_info = this.patcher.newdefault(x_m, y_m, "midiinfo");

        var x_u = x_m;
        var y_u = midi_info.rect[3] + h;

        var x_u_pres = i * w_obj;
        var y_u_pres = 0;

        var umenu = this.patcher.newdefault(x_u, y_u, "umenu",
                                            "@presentation", 1,
                                            "@presentation_rect", [x_u_pres, y_u_pres, w_obj, h_obj]);

        this.patcher.connect(ctrl_spray, i, umenu, 0);
        this.patcher.connect(midi_info, 0, umenu, 0);
        this.patcher.connect(umenu, 1, funnel, i)
        midi_info.message("bang");
    }
}