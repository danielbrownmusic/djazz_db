autowatch       = 1;
outlets         = 2;

//var dutils      = require("db_dictionary_array_utils");
//var dev_    = require("djazz_device_database");
//var map_    = require('djazz_mapping_database');
var ctrl_   =  require('djazz_device_ctrl_database');
var view_   = require('djazz_device_view_database');

var DEV_DICT_NAME = "DEV_DICT";
var GRID_DICT_NAME = "GRID_DICT";
var MAPPING_DICT_NAME = "MAPPING_DICT";


var CTRL_DICT_NAME = undefined;
var VIEW_DICT_NAME = undefined;
var view_dict = new Dict();
var ctrl_dict = new Dict();


//var device_     = undefined;
/* var view_dict_  = new Dict();
var ctrl_dict_  = new Dict(); */

// ------------------------------------------------------------------------------

function clear_dicts()
{
    clear_dicts_();
    output_when_done_();
}


function init_dicts(device_name, view_dict_name, ctrl_dict_name)
{
    device_  = device_name;

    VIEW_DICT_NAME = view_dict_name;
    view_dict = new Dict(VIEW_DICT_NAME);

    CTRL_DICT_NAME = ctrl_dict_name;
    ctrl_dict = new Dict(CTRL_DICT_NAME);

    view_.set_dict(VIEW_DICT_NAME);
    ctrl_.set_dict(CTRL_DICT_NAME);

    var device_dict = new Dict (DEV_DICT_NAME);
    var file_path = get_dev_dict_file_path(device_name);
    device_dict.import_json(file_path);

    view_.load_device_dict(device_dict);
    ctrl_.load_device_dict(device_dict);

    
    var grid_dict = new Dict (GRID_DICT_NAME);
    file_path = get_grid_dict_file_path(device_name);
    grid_dict.import_json(file_path);

    view_.load_grid(grid_dict);
    ctrl_.load_grid(grid_dict);


    output_when_done_();
}

function clear_mapping()
{
    view_.clear_mapping();
    ctrl_.clear_mapping();
    output_when_done_();
}


function load_mapping(file_path)
{
    clear_mapping()

    var mapping_dict = new Dict(MAPPING_DICT_NAME);
    view_.load_mapping(mapping_dict);
    ctrl_.load_mapping(mapping_dict);

    if (!map_.read(file_path))
        return;

    map_.parameters().forEach(add_parameter_);
/* 
        function (data)
        {   
            var [param, cell_type, cell_value, color] = data;
            (param, cell_type, cell_value, color);
       }
    );
 */    
    output_when_done_();
}


function add_parameter(param_name, cell_type, cell_value, color)
{
    add_parameter_([param_name, cell_type, cell_value, color]);
    output_when_done_();
}


function add_parameter_(data)
{

}


function remove_parameter(param_name)
{
    if (view_dict_.contains(param) === 0)
        return;

    var key     = to_key_(param, 0);
    var cell    = param_to_cell_(key);

    view_.remove(param);
    ctrl_.remove(cell);

    output_when_done_();
}


//-------------------------------------------------------------------------------

function clear_dicts_()
{
    view_.clear();
    ctrl_.clear();
}
clear_dicts_.local = 1;


function reset_dicts_()
{
    clear_dicts_();
    reset_view_dict_();
    add_grid_parameters_();
}
reset_dicts_.local = 1;


function add_parameter_(param, cell_type, cell_value, color)
{
    [0, 1].forEach(
        function (state)
        {
            var color_code  = dev_.color_code(make_mapping_color_(color, state));
            view_.set_param(param, state, cell_type, color_code);
        }
    )

    ctrl_.set_param(cell_type, cell_value, param);
}
add_parameter_.local = 1;


function add_grid_parameter_(param, value)
{
    var param   = to_symbol_(param, value);
    var cell    = ddb.grid_cell_(param, value);

    ddb.grid_states(param).forEach(
        function (state)
        {
            var color_code  = ddb.grid_color_code(param, state);
            var key         = to_key_(param, state);
            var val         = to_symbol_(cell, color_code);
            view_dict_.replace(key, val);
        }
    )

    ctrl_dict_.replace(cell, make_grid_mapping_value_(param, value));
    
}
add_grid_parameter_.local = 1;


// -------------------------------------------------------------------------------

function output_when_done_()
{
    outlet (0, "bang");
}
output_when_done_.local = 1;


function reset_view_dict_()
{
    view_dict_.set("midi_count",    midi_count());
    view_dict_.set("cc_count",      cc_count());
    view_dict_.set("chapter_count", chapter_count());
    view_dict_.set("bar_count",     bar_count());
}
reset_view_dict_.local = 1;


function add_grid_parameters_()
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
add_grid_parameters_.local = 1;





function make_grid_mapping_value_(param, value)
{
    return to_symbol_("set_param", param, value);
}
make_grid_mapping_value_.local = 1;


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










/* function make_view_entry_(param, state, cell, color_data)
{
    var color_code  = ddb.color_code(color_data);
    var key         = to_key_(param, state);
    var val         = to_symbol_(cell, color_code);
    return [key, val];
}
make_view_entry_.local = 1; */


/* function get_color_code_(color)
{
    var [hue, value, behavior] = color.split(" ");
    post ( "hue =", hue, "value =", value, "behavior =", behavior, "\n");
    if (hue == "none")
        return "0 1";
    var color_code      = device_dict_.get(to_key_("colors", hue, value));
    var behavior_code   = ;
    return [color_code, behavior_code].join(" ");
}
get_color_code_.local = 1; */




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

