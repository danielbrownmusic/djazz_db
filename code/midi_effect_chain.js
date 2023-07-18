
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

