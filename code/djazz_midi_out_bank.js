autowatch = 1;

var sizes = {	box: 	{ w: 155 , 	h: 22 },
				space: 	{ w: 5	 , 	h: 10 },
				cell: 	{ w: 160 ,	h: 32 }};


//varname 			= jsarguments[1]; // the name of the bank

//var solo_manager	= null;



function initialize(min_channel, max_channel)
{
	var x = this.box.rect[0];
	var y = this.box.rect[1];

	var n_channels = max_channel - min_channel;

	var inl 			= this.patcher.getnamed("inlet");
	var spray 			= this.patcher.newdefault(x + sizes.cell.w, y + sizes.cell.h, "spray", n_channels, min_channel, 1);
	var solo_manager 	= this.patcher.newdefault(x, y + 2 * sizes.cell.h, "djazz_solo_manager");
	var solo_manager_js = solo_manager.subpatcher().getnamed("js_patch");

	post(solo_manager_js);

	for (var channel = min_channel; channel < max_channel; channel++)
	{
		var i = channel - min_channel;
		x = this.box.rect[0] + sizes.cell.w * (i + 1);
		y = this.box.rect[1] + 2 * sizes.cell.h;
		post(i + "\n");
		var midi_out = this.patcher.newdefault(x, y, "djazz_midi_out", channel);
		var noteout	 = this.patcher.newdefault(x, y + sizes.cell.h, "noteout", channel);
		this.patcher.connect(spray, i, midi_out, 0);
		this.patcher.connect(midi_out, 0, noteout, 0);

		var midi_out_solo_js = midi_out.subpatcher().getnamed("solo_patch").subpatcher().getnamed("js_patch");
		solo_manager_js.setattr("index", i);
		solo_manager_js.message("add", midi_out_solo_js);

	}



}