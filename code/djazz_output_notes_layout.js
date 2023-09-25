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

    var note_in     = this.patcher.getnamed("note_in");
    var x_nspr      = note_in.rect[0];
    var y_nspr      = note_in.rect[3] + h;
    var note_spray  = this.patcher.newdefault(x_nspr, y_nspr, "spray", n_channels, min_channel, 1);
    this.patcher.connect(note_in, 0, note_spray, 0);

    var ctrl_in     = this.patcher.getnamed("ctrl_in");
    var x_cspr      = ctrl_in.rect[0];
    var y_cspr      = ctrl_in.rect[3] + h;
    var ctrl_spray  = this.patcher.newdefault(x_cspr, y_cspr, "spray", n_channels, min_channel, 1);    
    this.patcher.connect(ctrl_in, 0, ctrl_spray, 0);

    var x = x_nspr;
    var y = note_spray.rect[3] + h;

    for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		 = channel - min_channel;

        var x_m 	 = x + i * w;
		var y_m 	 = y;
        var velocity = 128;
        var duration = 500;
		var make_note = this.patcher.newdefault(x_m, y_m, "makenote", velocity, duration, channel);

        var x_n = x_m;
        var y_n = make_note.rect[3] + h;
        var note_out = this.patcher.newdefault(x_n, y_n, "noteout", channel);

        this.patcher.connect(note_spray, i, make_note, 0);
        this.patcher.connect(ctrl_spray, i, note_out, 0);
        for (var j = 0; j < 3; j++)
        {
            this.patcher.connect(make_note, j, note_out, j);
        }
    }
}
