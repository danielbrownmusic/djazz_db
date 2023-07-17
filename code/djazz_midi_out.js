var default_box_width = 135;
var default_box_height = 22;
var default_space_width = 5;
var default_space_height = 10;

// ------------------ 

this.inlets = 2;
this.outlets = 2;

this.x = this.box.rect[0];
this.y = this.box.rect[1];

this.bank_name 		= this.jsarguments[1];
this.index 			= this.jsarguments[2];
declareattribute("index");
this.varname 		= "midi_out_" + index;
this.bank_manager 	= this.patcher.getnamed(this.bank_name);

this.effect_chain = []

this.solo = false;
this.mute = false;
this.sending = true;

declareattribute("soloed");
declareattribute("muted", null, set_mute);


function set_mute(val)
{
	this.mute = val;
	this.sending 
}




function list()
{
	if (this.inlet === 0)
	{
		if (this.sending)
		{
			if (this.effect_chain.length > 0)
				this.outlet(1, arguments);
			else
				this.outlet(0, arguments);
		}	
	}
	else if (this.inlet === 1)
	{
		this.outlet(0, arguments);
	}
}



function solo(val)
{
	this.patcher.message

}

function mute(val)
{


}














// PRIVATE METHODS

function disconnect_cables_()
{
	if (this.effect_chain.length > 0)
	{
		this.patcher.disconnect(this.box, 1, first_effect(), 0);
		for (var i = 0; i < this.effect_chain.length - 1; i++)
		{
			this.patcher.disconnect(this.effect_chain[i], 0, this.effect_chain[i + 1], 0);
		}  		
		this.patcher.disconnect(last_effect(), 0, this.box, 1);
	}
}
disconnect_cables_.local = 1;


function connect_cables_()
{
	this.patcher.connect(this.box, 1, first_effect(), 0);	
	for (var i = 0; i < this.effect_chain.length - 1; i++)
	{
		this.patcher.connect(this.effect_chain[i], 0, this.effect_chain[i + 1], 0);
	}
	this.patcher.connect(last_effect(), 0, this.box, 1);
}
connect_cables_.local = 1;


function make_positioned_effect_(index, effect_name)
{
	return this.patcher.newdefault(this.x + 100, this.y + (index + 1) * this.sizes.cell.h, effect_name);
}
make_positioned_effect_.local = 1;