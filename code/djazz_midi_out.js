var left_offset = 20;
var top_offset = 20;

var mod_width 	= 150;
var mod_height 	= 20;
var mod_spacing = 20;
var cell_spacing = mod_height + mod_spacing;

var mod_chain_x_pos = left_offset;
var mod_chain_y_pos = top_offset + 2 * (mod_height + mod_spacing);

var midi_solo;
var midi_mute;
var noteout;

var mod_list = []

var name_index = 0;


// PUBLIC METHODS
function initialize()
{
	post(left_offset);
	midi_solo 	= this.patcher.newdefault(left_offset, top_offset				, "djazz.midi_solo");
	midi_mute 	= this.patcher.newdefault(left_offset, top_offset + cell_spacing, "djazz.midi_mute");
	noteout 	= this.patcher.newdefault(left_offset, mod_chain_y_pos			, "noteout");
	
	this.patcher.connect(midi_solo, 0, midi_mute, 0);
	this.patcher.connect(midi_mute, 0, noteout, 0);
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



