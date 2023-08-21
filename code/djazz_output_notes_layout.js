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

    var inl = this.patcher.getnamed("inlet");
    var x = inl.rect[0];
    var y = inl.rect[3] + h;
    var spray = this.patcher.newdefault(x, y, "spray", n_channels, min_channel, 1);
    this.patcher.connect(inl, 0, spray, 0);

    for (var channel = min_channel; channel <= max_channel; channel++)
	{
		var i 		 = channel - min_channel;

        var x_m 	 = x + i * w;
		var y_m 	 = spray.rect[3] + h;
        var velocity = 128;
        var duration = 500;
		var make_note = this.patcher.newdefault(x_m, y_m, "makenote", velocity, duration, channel);

        var x_n = x_m;
        var y_n = make_note.rect[3] + h;
        var note_out = this.patcher.newdefault(x_n, y_n, "noteout", channel);

        this.patcher.connect(spray, i, make_note, 0);        
        for (var j = 0; j < 3; j++)
        {
            this.patcher.connect(make_note, j, note_out, j);
        }
    }



}
