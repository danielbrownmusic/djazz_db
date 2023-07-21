//var x_pos = 50;
//var y_pos = 50;

var init_slot_count = 3;

var left_offset = 20;
var top_offset = 20;

var slot_w 	= 150;
var slot_h 	= 25;
var h_spacing = 2;
var v_spacing = 2;

var v_cell_spacing = slot_h + v_spacing;
var h_cell_spacing  = slot_w + h_spacing;

var choices = ["", "eeny", "meeny", "miney"];
var umenus = [];
var mod_selectors = [];

function set_target(mod_name)
{
	target
}




function clear()
{
	for (var i = 0; i < umenus.length; i++)
	{
		this.patcher.remove(umenus[i]);
	}
	umenus = [];
}


function initialize(x, y)
{
	left_offset = x;
	top_offset = y;
	for (var i = 0; i < init_slot_count; i++)
	{
		add_slot();
	}
}


function add_slot()
{
	var u = make_menu(umenus.length);
	var mc = make_mod_selector(umenus.length);
	umenus.push(u);
	mod_selectors.push(mc);

}


function make_menu(index)
{
	var x = left_offset;
	var y = top_offset + index * v_cell_spacing;
	var u = this.patcher.newdefault(x, y, "umenu");
	for (var i = 0; i < choices.length; i++)
	{
		u.message("append", choices[i]);
		u.message("menumode", 3);

	}
	return u;
}



function make_mod_selector(index)
{
	var x = left_offset + h_cell_spacing;;
	var y = top_offset + index * v_cell_spacing;

	var mod_selector = this.patcher.newdefault(x, y, "js mod_selector.js");
	var d = Dict();

	var oct = Dict();
	oct.set("patch", "djazz_octaver");
	oct.set("bpatcher", "djazz_octaver_ui");

	var rhy = Dict();
	oct.set("patch", "djazz_comp_rhythm");
	oct.set("bpatcher", "djazz_comp_rhythm_ui");

	d.set("octaver", oct);
	d.set("comp_rhythm", rhy);

	mod_selector.setprop("index", index);
	mod_selector.setprop("mod_dict", d);
}




function get_slot_rect(index)
{
	return
	[
		left_offset,
		top_offset + index * cell_spacing,
		left_offset + slot_w,
		top_offset + index * cell_spacing + slot_h		
	];
}