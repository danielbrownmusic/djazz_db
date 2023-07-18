




// Class SoloManager ----------------------------------------------------------------------------




// this object initialization code and methods -----------------------------------------

this.varname 		= this.jsarguments[1];
var midi_out_count 	= this.jsarguments[2];
this.midi_outs 		= []
this.solo_manager 	= null;

Object.prototype.get_subobj = function(subobj_name)
{
	return this.subpatcher().getnamed(subobj_name);
}



function initialize()
{
	var x = this.box.rect[0];
	var y = this.box.rect[1] + sizes.cell.h;
	this.solo_manager = this.patcher.newdefault(x, y, "djazz_solo_manager");
	var solo_manager_js = this.solo_manager.get_subobj("solo_manager_js");
	post(solo_manager_js);

	for (var i = 0; i < midi_out_count; i++)
	{
		x = this.box.rect[0] + sizes.cell.w * (i + 1);
		y = this.box.rect[1] + sizes.cell.h;

		var midi_out = new MidiOut(
			jsarguments[1], 
			i, 
			this.patcher, 
			x,
			y);

		midi_out.connect_in(this.patcher.getnamed("inlet_" + i), 0);
		midi_out.connect_out(this.patcher.getnamed("outlet_" + i), 0);

		this.midi_outs.push(midi_out);
		solo_manager_js.message("add", midi_out.solo_select.get_subobj("midi_out_solo_js"));
	}



}






