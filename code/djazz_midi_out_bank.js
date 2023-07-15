var midi_out_count = jsarguments.length > 1 ? jsarguments[1] : 0;
var solo_manager;
var midi_outs = []

var left_offset 	= 40;
var top_offset 		= 20;
var midi_out_width 	= 150;
var h_spacing 		= 20;



function initialize()
{
	for (var i = 0; i < midi_out_count; i++)
	{
		m_left_offset = left_offset + i * (midi_out_width + h_spacing);
		m = this.patcher.newdefault(0, 0, "js djazz_midi_out.js");
		m.varname 		= "midi_out_" + i.toString();
		m.hidden 		= 1;
		m.setprop("left_offset",	m_left_offset);
		m.setprop("top_offset", 	top_offset);
		m.setprop("mod_width", 		midi_out_width);
		m.message("initialize");
		midi_outs.push(m);
	}
}


function clear()
{
	for (var i = 0; i < midi_outs.length; i++)
	{
		midi_outs[i].message("clear");
		this.patcher.remove(midi_outs[i]);
	}
	midi_outs = [];
}


