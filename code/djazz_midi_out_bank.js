var sizes =
{
	box: 	{ w: 155 , 	h: 22 },
	space: 	{ w: 5	 , 	h: 10 },
	cell: 	{ w: 160 ,	h: 32 }
}




// Class MidiOut ----------------------------------------------------------------------------

function MidiOut(bank_name, index, patcher, x, y)
{
	this.index 			= index;
	this.patcher 		= patcher;
	this.bank_name 		= bank_name;
	this.view 			= {x: x, y: y};

	this.solo_select 	= this.patcher.newdefault(x, y, "djazz_midi_out_solo", bank_name, index);
	this.mute_select 	= this.patcher.newdefault(x, y + sizes.cell.h, "djazz_mute_select");
	this.effect_chain 	= new EffectChain(index, patcher, x, y + sizes.cell.h * 2);
	this.thru 			= this.patcher.newdefault(x, y + sizes.cell.h * 2, "thru");

	this.patcher.connect(this.solo_select, 0, this.mute_select, 0)
	this.patcher.connect(this.mute_select, 0, this.thru, 0)
}

MidiOut.prototype.connect_in = function(obj, i_out)
{
	this.patcher.connect(obj, i_out, this.solo_select, 0);
}


MidiOut.prototype.connect_out = function(obj, i_in)
{
	this.patcher.connect(this.thru, 0, obj, i_in);
}



MidiOut.prototype.disconnect_cables = function()
{
	if (this.effect_chain.length > 0)
	{
		this.patcher.disconnect(this.mute_select, 0, this.effect_chain.first(), 0);
		this.effect_chain.disconnect_cables();
		this.patcher.disconnect(this.effect_chain.last(), 0, this.thru, 1);
	}
}

MidiOut.prototype.connect_cables = function()
{
	if (this.effect_chain.length > 0)
	{
		this.patcher.connect(this.mute_select, 0, this.effect_chain.first(), 0);
		this.effect_chain.connect_cables();
		this.patcher.connect(this.effect_chain.last(), 0, this.thru, 1);
	}
}

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






