autowatch           = 1;
outlets             = 2;

var dutils          = require("db_dictionary_array_utils");

var device_         = undefined;
var device_dict_    = new Dict();
var view_dict_      = new Dict();
var ctrl_dict_      = new Dict();

// ---------------------------------------------------------------------------------------------

function clear_dicts()
{
    clear_dicts_();
    output_when_done_();
}


function init_dicts(device_name, view_dict_name, ctrl_dict_name)
{
    init_dicts_(device_name, view_dict_name, ctrl_dict_name);
    output_when_done_();
    outlet (1, device_dict_.name);
}

function clear_mapping()
{
    reset_dicts_();
    output_when_done_();
}


function load_mapping(file_path)
{
    load_mapping_(file_path);
    output_when_done_();
}


function add_parameter(param_name, cell_type, cell_value, color)
{
    add_parameter_(param_name, cell_type, cell_value, color);
    output_when_done_();
}


function remove_parameter(param_name)
{
    remove_parameter_(param_name);
    output_when_done_();
}


// ----------------------------------------------------------------------------------------


function clear_dicts_()
{
    view_dict_.clear();
    ctrl_dict_.clear();
}
clear_dicts_.local = 1;


function init_dicts_(device_name, view_dict_name, ctrl_dict_name)
{
    device_             = device_name;
    view_dict_.name     = view_dict_name;
    ctrl_dict_.name     = ctrl_dict_name;

    device_dict_.import_json(get_device_file_path_(device_name));
    reset_dicts_();
}
init_dicts_.local = 1;


function reset_dicts_()
{
    clear_dicts_();

    reset_view_dict_();
    add_grid_parameters_();
}
reset_dicts_.local = 1;


function load_mapping_(file_path)
{
    reset_dicts_();

    var mapping_dict = new Dict ();
    mapping_dict.import_json(file_path);
    if (!is_file_ok_(mapping_dict))
    {
        post_error_(d);
        return;
    }

    get_mapping_parameter_names_(mapping_dict).forEach(
        function (param)
        {   
            var [cell_type, cell_value, color] = get_mapping_(mapping_dict, param);
            add_parameter_(param, cell_type, cell_value, color);
       }
    );
}
load_mapping_.local = 1;


// ----------------------------------------------------------------------------------------


function remove_parameter_(param)
{
    if (view_dict_.contains(param) === 0)
        return;

    var key     = to_key_(param, 0);
    var cell    = param_to_cell_(key);

    view_dict_.remove(param);
    ctrl_dict_.remove(cell);
}
remove_parameter_.local = 1;


function add_parameter_(param, cell_type, cell_value, color)
{
    var cell = to_symbol_(cell_type, cell_value);
    [0, 1].forEach(
        function (state)
        {
            var color_data  = make_mapping_color_(color, state)
            var [key, val]  = get_view_entry_(param, state, cell, color_data);
            view_dict_.replace(key, val)        
        }
    )
    ctrl_dict_.replace(cell, make_mapping_value_(param));
}
add_parameter_.local = 1;


function add_grid_parameter_(param, value)
{
    var param   = to_symbol_(param, value);
    var cell    = grid_cell_midi_msg_(param, value);
    var states  = grid_param_states(param);

    states.forEach(
        function (state)
        {
            var color_data  = state_color_(param, state)
            var [key, val]  = get_view_entry_(param, state, cell, color_data);
            view_dict_.replace(key, val);
        }
    )
    ctrl_dict_.replace(cell, make_grid_mapping_value_(param, value));
    
}
add_grid_parameter_.local = 1;


// ----------------------------------------------------------------------------------------
// DATABASE RETRIEVAL


function midi_count()
{
    device_dict_.get("midi_count")
}


function cc_count()
{
    device_dict_.get("cc_count")
}


function chapter_count()
{
    device_dict_.getsize("chapter::cells");
}


function bar_count()
{
    device_dict_.getsize("chapter::cells");
}


function grid_cell_midi_msg_(param, value)
{
    device_dict_.get(to_key_(param, "cells"))[value]
}


function grid_param_colors_(param)
{
    device_dict_.get(to_key_(param, "colors"));
}


function color_code(hue, value)
{
    device_dict_.get(to_key_("colors", hue, value));    
}


function behavior_code(behavior)
{
    device_dict_.get(to_key_("behaviors", behavior));
}


// ----------------------------------------------------------------------------------------
// DATA FORMATTING - THE UGLY STUFF

function output_when_done_()
{
    outlet (0, "bang");
}
output_when_done_.local = 1;


function get_device_file_path_(device_name)
{
    var system_folder = "djazz_db";
    var folders     = this.patcher.filepath.split("/");
    var i           = folders.indexOf(system_folder);
    var folder_path = folders.slice(0, i + 1).concat(["device", device_name]).join("/");
    var f           = new Folder(folder_path);

    while (!f.end)
    {
        if (f.extension === ".json")
        {
            var file_path = [f.pathname, f.filename].join("/");
            return file_path;
        }
        f.next();
    }
}
get_device_file_path_.local = 1;


function reset_view_dict_()
{
    view_dict_.set("midi_count",    midi_count());
    view_dict_.set("cc_count",      cc_count());
    view_dict_.set("chapter_count", chapter_count());
    view_dict_.set("bar_count",     bar_count());
}
reset_view_dict_.local = 1;


function add_grid_parameters()
{
    for (var i = 0; i < chapter_count(); i++)
    {
        add_grid_parameter_("chapter", i);
    }
    for (var i = 0; i < bar_count(); i++)
    {
        add_grid_parameter_("bar", i);
    }
}
add_grid_parameters.local = 1;


function get_color_descr_(color, state)
{
    var brightness = (state === 0) ? "dim" : "bright";
    var color = [color, brightness, "static"].join(" ");    
}


function get_view_entry_(param, state, cell, color_desc)
{
    var color_code  = get_color_code_(color_desc);
    var key         = to_key_(param, state);
    var val         = to_symbol_(cell, color_code);
    return [key, val];
}
get_view_entry_.local = 1;


function get_color_code_(color)
{
    var [hue, value, behavior] = color.split(" ");
    post ( "hue =", hue, "value =", value, "behavior =", behavior, "\n");
    if (hue == "none")
        return "0 1";
    var color_code      = device_dict_.get(to_key_("colors", hue, value));
    var behavior_code   = ;
    return [color_code, behavior_code].join(" ");
}
get_color_code_.local = 1;


function get_mapping_parameter_names_(mapping_dict)
{
    return dutils.get_dict_key_array(mapping_dict.get("parameters"))
}
get_mapping_parameter_names_.local = 1;


function get_mapping_(mapping_dict, param)
{
    return mapping_dict.get("parameters").get(param).split(" ");
}
get_mapping_.local = 1;


function make_mapping_value_(param)
{
    return to_symbol_("toggle_param", param);
}
make_mapping_value_.local = 1;


function make_grid_mapping_value_(param, value)
{
    return to_symbol_("set_param", param, value);
}
make_grid_mapping_value_.local = 1;


function is_file_ok_(mapping_dict)
{
    return mapping_dict.get("device") !== device_;
}
is_file_ok_.local = 1;


function post_error_(d)
{
    post ( "Wrong type of preset file loaded:", d.get("device"), "instead of", device_, "\n");
}
post_error_.local = 1;


function param_to_cell_(param)
{
    view_dict_.get(param).split(" ").slice(0, 2).join(" ");
}
param_to_cell_.local = 1;


function to_key_()
{
    return Array.prototype.slice.call(arguments).join("::");
}
to_key_.local = 1;


function to_symbol_()
{
    return Array.prototype.slice.call(arguments).join(" ");
}
to_symbol_.local = 1;



// ----------------------------------------------------------------------------------------

/* 
function color_symbol_to_dict_(color_symbol)
{
    var color_descr = color_symbol.split(" ");
    var hue         = color_descr[0];
    var value       = color_descr.length > 1 ? color_descr[1] : null;
    var behavior    = color_descr.length > 2 ? color_descr[2] : null;                    
    
    var d = new Dict();
    d.set("hue",        hue);
    d.set("value",      value);
    d.set("behavior",   behavior);

    return d;
}
color_symbol_to_dict_.local = 1;


function grid_parameter_symbol_to_dict_(param_symbol)
{
    var [param_type, param_value] = param_symbol.split(" ");
    var d = new Dict ();
    d.set("operator", "set_param");
    d.set("parameter", param_type);
    d.set("arguments", param_value);

    return d;
}
grid_parameter_symbol_to_dict_.local = 1;


function cell_symbol_to_dict_(cell_symbol)
{
    var [cell_type, cell_value] = cell_symbol.split(" ");
    var d = new Dict ();
    d.set("type", cell_type);
    d.set("value", parseInt(cell_value));

    return d;
}
cell_symbol_to_dict_.local = 1; */

