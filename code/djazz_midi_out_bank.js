var sizes =
{
	box: 	{ w: 135 , 	h: 22 },
	space: 	{ w: 5	 , 	h: 10 },
	cell: 	{ w: 140 ,	h: 32 }
}


// Class EffectChain

function EffectChain(index, patcher, x, y)
{
	this.view = {x: x, y: y};
	this.index = index;
	this.patcher = patcher;
	this.effects = [];
}


EffectChain.prototype.add = function(effect_name)
{
	this.disconnect_cables();
	var effect = this.make_positioned_effect(this.effects.length, effect_name);
	this.effects.push(effect);
	this.connect_cables();
}


EffectChain.prototype.insert = function(index, effect_name)
{
	this.disconnect_cables();
	var effect = this.make_positioned_effect_(index, effect_name);
	this.effect_chain.splice(index, 0, effect);
	this.connect_cables();
}


EffectChain.prototype.remove = function(index)
{
	this.disconnect_cables();
	this.effect_chain.splice(index, 1);
	this.connect_cables();
}


EffectChain.prototype.replace = function(index, mod_name)
{
	this.disconnect_cables();
	var effect = this.make_positioned_effect(index, effect_name);	
	this.effect_chain.splice(index, 1, effect);
	this.connect_cables();
}


EffectChain.prototype.clear = function()
{
	var patcher = this.patcher;
	this.effects.forEach( function(e) { patcher.remove(e); } );
	effect_chain = [];
}


EffectChain.prototype.first = function()
{
	return this.effect_chain[0];
}


EffectChain.prototype.last = function()
{
	return this.effect_chain.slice(-1)[0];
}


EffectChain.prototype.disconnect_cables = function()
{
	if (this.effects.length > 1)
	{
		for (var i = 0; i < this.effects.length - 1; i++)
		{
			this.patcher.disconnect(this.effects[i], 0, this.effects[i + 1], 0);
		}
	}
}


EffectChain.prototype.connect_cables = function()
{
	if (this.effects.length > 1)
	{
		for (var i = 0; i < this.effects.length - 1; i++)
		{
			this.patcher.connect(this.effects[i], 0, this.effects[i + 1], 0);
		}
	}
}


EffectChain.prototype.make_positioned_effect = function(index, effect_name)
{
	return this.patcher.newdefault(this.x, this.y + index * sizes.cell.h, effect_name);
}


// Class MidiOut ----------------------------------------------------------------------------

function MidiOut(bank_name, index, patcher, x, y)
{
	this.index 			= index;
	this.patcher 		= patcher;
	this.bank_name 		= bank_name;
	this.view 			= {x: x, y: y};

	this.solo_select 	= this.patcher.newdefault(x, y, "js", "djazz_midi_out_solo.js", bank_name, index);
	this.solo_select.setattr("solo", 0);
	this.mute_select 	= this.patcher.newdefault(x, y + sizes.cell.h, "djazz_mute_select");
	this.effect_chain 	= new EffectChain(index, patcher, x, y + sizes.cell.h * 2);
	this.thru 			= this.patcher.newdefault(x, y + sizes.cell.h * 2, "thru");

	this.patcher.connect(this.solo_select, 0, this.mute_select, 0)
	this.patcher.connect(this.mute_select, 0, this.thru, 0)
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


function SoloManager(name)
{
	this.name = name;
	this.solo_listeners = [];
	this.solo_states = [];	
};


SoloManager.prototype.add = function(solo_obj)
{
	var l1 = new MaxobjListener(solo_obj, "solo", this.set_solo_obj_send_attr);
	l1.solo_manager = this;
	this.solo_listeners.push(l1);
};

SoloManager.prototype.set_solo_obj_send_attr = function(data)
{	post(data.listener.solo_manager.solo_states);
	var soloed = data.value;
	var i = data.maxobject.getattr("index");
	post(i + '\n');
	data.listener.solo_manager.solo_states[i] = data.value;
	var any_soloed = data.listener.solo_manager.solo_states.some(function(e) { e === 1;});
	data.maxobject.setprop("send", any_soloed === soloed);
}


// this object initialization code and methods -----------------------------------------

this.varname 		= this.jsarguments[1];
this.midi_outs 		= []
this.solo_manager 	= new SoloManager('foo');

var midi_out_count = this.jsarguments[2];
for (var i = 0; i < midi_out_count; i++)
{
	var x = this.box.rect[0] + sizes.cell.w * i;
	var y = this.box.rect[1] + sizes.cell.h;

	var midi_out = new MidiOut(
		jsarguments[1], 
		i, 
		this.patcher, 
		x,
		y);

	this.midi_outs.push(midi_out);
	this.solo_manager.add(midi_out.solo_select);
}







