var x_start_ = 20;
var y_start_ = 20;

var w_obj_ 	= 150;
var h_obj_ 	= 20;
var w_space_ = 20;
var h_space_ = 20;
var h_cell_ = h_obj_ + h_space_;

var from_obj_;
var from_outlet_;
var to_obj_;
var to_outlet_;

var mod_list_ = []
var name_index_ = 0;


// PUBLIC METHODS
function initialize(from_obj, from_outlet, to_obj, to_outlet)
{
    from_obj_       = from_obj;
    from_outlet_    = from_outlet;
    to_obj_         = to_obj;
    to_outlet_      = to_outlet;
	
	this.patcher.connect(from_obj_, from_outlet_, to_obj_, to_outlet_);
}


function clear()
{
	clear_mods();
	this.patcher.remove(midi_solo);
	this.patcher.remove(midi_mute);
	this.patcher.remove(noteout);
	midi_solo = undefined;
	midi_mute = undefined;
	noteout = undefined;
}


function clear_mods()
{
	disconnect_cables();
		for (var i = 0; i < mod_list.length; i++)
	{
		this.patcher.remove(mod_list[i]);
	}
	mod_list = [];
	noteout.rect = [mod_chain_x_pos,
							mod_chain_y_pos, 
							mod_chain_x_pos + mod_width, 
							mod_chain_y_pos + mod_height];	
}


function add_mod(mod_name)
{
	disconnect_cables();
	var mod = make_mod(mod_name);
	mod_list.push(mod);
	update_patcher();
}


function insert_mod(index, mod_name)
{
	disconnect_cables();
	var mod = make_mod(mod_name);
	mod_list.splice(index, 0, mod);
	update_patcher();
}


function remove_mod(index)
{
	disconnect_cables();
	mod_list.splice(index, 1);
	update_patcher();
}


function replace_mod(index, mod_name)
{
	disconnect_cables();
	var mod = make_mod(mod_name);
	mod_list.splice(index, 1, mod_name);
	update_patcher();
}


// PRIVATE METHODS

function make_mod(mod_name)
{
	var mod = this.patcher.newdefault(0, 0, mod_name);
	mod.varname = mod_name + name_index.toString();
	name_index++;
	return mod;
}
make_mod.local = 1;

function disconnect_cables()
{
	for (var i = 0; i < mod_list.length - 1; i++)
	{
		this.patcher.disconnect(mod_list[i], 0, mod_list[i + 1], 0);
	}
	this.patcher.disconnect(mod_list.slice[-1], 0, noteout, 0);
}
disconnect_cables.local = 1;


function place_mod(i)
{
		mod_list[i].rect = [mod_chain_x_pos,
							mod_chain_y_pos + i * cell_spacing, 
							mod_chain_x_pos 					+ mod_width, 
							mod_chain_y_pos + i * cell_spacing 	+ mod_height];
}

function update_patcher()
{
	for (var i = 0; i < mod_list.length; i++)
	{
		place_mod(i);
	}	
	noteout.rect = [mod_chain_x_pos,
							mod_chain_y_pos + mod_list.length * cell_spacing, 
							mod_chain_x_pos 									+ mod_width, 
							mod_chain_y_pos + mod_list.length * cell_spacing 	+ mod_height];
							
	for (var i = 0; i < mod_list.length - 1; i++)
	{
		this.patcher.connect(mod_list[i], 0, mod_list[i + 1], 0);
	}
	this.patcher.connect(mod_list.slice[-1], 0, noteout, 0);		
	
	
}
update_patcher.local = 1;



