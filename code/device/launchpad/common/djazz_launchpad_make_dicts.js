autowatch       = 1;
//outlets         = 2;
//var f = require('djazz_file');

var view_bldr_  = require ('djazz_launchpad_dict_builder_view');
var ctrl_bldr_  = require ('djazz_launchpad_dict_builder_ctrl');
var map_rdr_    = require ('djazz_launchpad_dict_reader_mapping');

var view_dict_  = undefined;
var ctrl_dict_  = undefined;


// ------------------------------------------------------------------------------


function init(device_file_path, view_dict_name, ctrl_dict_name)
{
    load_device_file_(device_file_path);
    set_view_(view_dict_name);
    set_ctrl_(ctrl_dict_name);
    output_when_done_();
}


function load_device_file(device_file_path)
{
    load_device_file_(device_file_path);
    output_when_done_();
}


function clear_mapping()
{
    clear_mapping_();
    output_when_done_();
}



function load_mapping(mapping_file_path)
{
    load_mapping_(mapping_file_path);
    output_when_done_();
}


function add_parameter(param_name, cell_type, cell_value, color)
{
    add_param_(param_name, cell_type, cell_value, color);
    output_when_done_();
}


function remove_parameter(param_name)
{
    remove_param_(param_name);
    output_when_done_();
}

//------------------------------------------------------------------


function load_device_file_(device_file_path)
{
    var device_dict = new Dict();
    device_dict.import_json(device_file_path);
    view_bldr_.load_device_dict(device_dict.name);
}
load_device_file_.local = 1;


function set_view_(view_dict_name)
{
    view_dict_ = new Dict(view_dict_name);
    view_bldr_.set_dict(view_dict_name);
}
set_view_.local = 1;


function set_ctrl_(ctrl_dict_name)
{
    ctrl_dict_ = new Dict(ctrl_dict_name);
    ctrl_bldr_.set_dict(ctrl_dict_name);
}
set_ctrl_.local = 1;


function clear_mapping_()
{
    view_dict_.clear();
    ctrl_dict_.clear();
}
clear_mapping_.local = 1;


function load_mapping_(mapping_file_path)
{
    var mapping_dict = new Dict();
    mapping_dict.import_json(mapping_file_path);

    if (!map_rdr_.load(map_dict.name))
        return;

    clear_mapping_();
    add_grid_params_();
    add_params_();
}
load_mapping_.local = 1;


function remove_param_(param_name)
{
    if (view_dict_.contains(param) === 0)
        return;

    var key     = to_key_(param, 0);
    var cell    = param_to_cell_(key);

    view_.remove(param);
    ctrl_.remove(cell);
}
remove_param_.local = 1;

//------------------------------------------------------------------


function add_grid_params_()
{
    map_rdr_.grid_params().forEach
    (
        function (param)
        {
            map_rdr_.grid_param_states(param).forEach
            (
                function (state)
                {
                    for (var i = 0; i < map_rdr_.grid_param_count(param); i++)
                    {
                        add_grid_parameter_(param, i, cell, state, color)
                    }
                }
            )
        }
    )
   
}
add_grid_params_.local = 1;


function add_grid_param_(param, i, cell, state, color)
{
    add_param_
    (
        to_symbol_(param, i), 
        state,
        map_rdr_.grid_param_cell(param, i), 
        map_rdr_.grid_param_color(param, state)
    );   
}
add_grid_param_.local = 1;


function add_params_()
{
    map_rdr_.params().forEach
    (
        function (param)
        {
            map_rdr_.param_states(param).forEach
            (
                function (state)
                {
                    add_param_
                    (
                        param, 
                        state,
                        map_rdr_.param_cell(param), 
                        map_rdr_.param_color(param, state)
                    );
                }
            )
        }
    )

}
add_params_.local = 1;


function add_param_(param, cell, state, color)
{
    view_bldr_.add_param(param, state, cell, color);
    ctrl_bldr_.add_param(param, state, cell);

}
add_param_.local = 1;


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





//var dutils      = require("db_dictionary_array_utils");
//var dev_    = require("djazz_device_database");
//var dev_dict_   = undefined;
//var map_dict_   = undefined;

//var DEV_DICT_NAME = "DEV_DICT";
//var GRID_DICT_NAME = "GRID_DICT";
//var MAPPING_DICT_NAME = "MAPPING_DICT";

//var device_     = undefined;
/* var view_dict_  = new Dict();
var ctrl_dict_  = new Dict(); */



    
/*     var grid_dict = new Dict (GRID_DICT_NAME);
    file_path = get_grid_dict_file_path(device_name);
    grid_dict.import_json(file_path);

    view_.load_grid(grid_dict);
    ctrl_.load_grid(grid_dict);
 */



/* 

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


var system_folder_name = "djazz_db";




function get_device_dict_reader_file_path_(device_name)
{
    var device_path = get_device_path_(device_name);

}


function get_mapping_dict_reader_file_path_(device_name)
{
    
}
 */







/* function make_view_entry_(param, state, cell, color_data)
{
    var color_code  = ddb.color_code(color_data);
    var key         = to_key_(param, state);
    var val         = to_symbol_(cell, color_code);
    return [key, val];
}
make_view_entry_.local = 1; */







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

