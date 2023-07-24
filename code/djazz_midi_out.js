var sizes = require("max_layout_sizes");
var effectChain = require("midi_effect_chain");


// Class MidiOut ----------------------------------------------------------------------------

function make_midi_out(bank_name, index, patcher, x, y)
{
	index_: index;
	patcher_: patcher;
	bank_name_: bank_name;
	view_: {x: x; y: y};

	solo_: patcher_.newdefault(view_.x, view_.y, "djazz_midi_out_solo", bank_name_, index_);
	mute_ 			= patcher_.newdefault(x, y + sizes.cell.h, "djazz_mute_select");
	effect_chain_ 	= make_effect_chain(index_, patcher_, x, y + sizes.cell.h * 2);
	thru_ 			= patcher_.newdefault(x, y + sizes.cell.h * 2, "thru");

	patcher_.connect(solo_, 0, mute_, 0);
	patcher_.connect(mute_, 0, thru_, 0);


connect_in = function(obj, i_out)
{
	patcher_.connect(obj, i_out, solo_select, 0);
}


MidiOut.prototype.connect_out = function(obj, i_in)
{
	patcher_.connect(thru, 0, obj, i_in);
}



MidiOut.prototype.disconnect_cables = function()
{
	if (effect_chain.length > 0)
	{
		patcher_.disconnect(mute_select, 0, effect_chain.first(), 0);
		effect_chain.disconnect_cables();
		patcher_.disconnect(effect_chain.last(), 0, thru, 1);
	}
}

MidiOut.prototype.connect_cables = function()
{
	if (effect_chain.length > 0)
	{
		patcher_.connect(mute_select, 0, effect_chain.first(), 0);
		effect_chain.connect_cables();
		patcher_.connect(effect_chain.last(), 0, thru, 1);
	}
}


