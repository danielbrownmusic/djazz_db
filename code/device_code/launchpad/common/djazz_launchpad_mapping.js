autowatch       = 1;
//outlets         = 2;
//var f = require('djazz_file');

var map_rdr_        = require ('djazz_launchpad_dict_reader_map');
var map_wrtr_       = require ('djazz_launchpad_dict_writer_map');
var view_wrtr_      = require ('djazz_launchpad_dict_writer_view');
var ctrl_wrtr_      = require ('djazz_launchpad_dict_writer_ctrl');

var view_dict_      = new Dict ();
var ctrl_dict_      = new Dict ();
var map_dict_       = new Dict ();
var device_dict_    = new Dict ();
var device_name_    = "";

var default_map_file_path_ = "";
// ------------------------------------------------------------------------------


function init(device_dict_file_path, default_map_file_path, device_dict_name, map_dict_name, view_dict_name, ctrl_dict_name)
{

    device_dict_.name = device_dict_name;
    device_dict_.import_json(device_dict_file_path);
    device_name_ = device_dict_.get("device");

    default_map_file_path_ = default_map_file_path;

    map_dict_.name = map_dict_name;

    view_dict_.name = view_dict_name;
    view_wrtr_.load(device_dict_.name, view_dict_.name);

    ctrl_dict_.name = ctrl_dict_name;
    ctrl_wrtr_.set_dict(ctrl_dict_.name);
}


function save_mapping(map_file_path)
{
    map_dict_.export_json(map_file_path);
}


function new_mapping()
{
    load_mapping(default_map_file_path_);
}


function load_mapping(map_dict_file_path)
{
    clear_mapping_();

    map_dict_.import_json(map_dict_file_path);

    if (!map_rdr_.set_dict(device_name_, map_dict_.name))
        return;

    // where's a better place to add non-param data.... 
    // ANSWER: put map_rdrs in view_wrtr and ctrl_wrtr and just give them the map_dict. Then you can take out the add_param_ method below.
    view_dict_.set("chapter_cell_count", map_rdr_.chapter_count());
    view_dict_.set("bar_cell_count",     map_rdr_.bar_count());

    map_rdr_.params().forEach(
        function (param)
        {
            var [cell_type, cell_value] = map_rdr_.cell_data(param);
            add_param_(param, cell_type, cell_value);
        }
    )

    map_rdr_.close();
    output_when_done_();
}


function clear_mapping()
{
    clear_mapping_();
    output_when_done_();
}


function add_parameter(param, cell_type, cell_value, hue)
{
    post ("adding parameter", param, cell_type, cell_value, hue, "\n");

    map_wrtr_.set_dict(map_dict_.name);
    map_wrtr_.add_param(param, cell_type, cell_value, hue);
    map_wrtr_.close();

    if (!map_rdr_.set_dict(device_name_, map_dict_.name))
        return;
    add_param_(param, cell_type, cell_value);
    map_rdr_.close();

    output_when_done_();
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


/* function add_grid_param_(param, i, cell_type, cell_value)
{
    map_rdr_.grid_param_states(param).forEach(
        function (state)
        {
            var color = map_rdr_.grid_param_color(param, state);
            view_wrtr_.add_grid_param(param, i, state, cell_type, cell_value, color);
        }
    )
    ctrl_wrtr_.add_grid_param(param, cell_type, cell_value);
}
add_grid_param_.local = 1; */


function add_param_(param, cell_type, cell_value)
{
    map_rdr_.states(param).forEach(
        function (state)
        {
            var color = map_rdr_.color(param, state);
            view_wrtr_.add_param(param, state, cell_type, cell_value, color);
        }
    )
    ctrl_wrtr_.add_param(param, cell_type, cell_value);
}
add_param_.local = 1;


//------------------------------------------------------------------

function clear_mapping_()
{
    view_dict_.clear();
    ctrl_dict_.clear();
    map_dict_.clear();
}
clear_mapping_.local = 1;


function output_when_done_()
{
    outlet (0, view_dict_.name, ctrl_dict_.name);
}
output_when_done_.local = 1;


function to_symbol_()
{
    return Array.prototype.slice.call(arguments).join(" ");
}
to_symbol_.local = 1;








/* 
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


 */


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





/*     map_rdr_.grid_params().forEach(
        function (param) {
            for (var i = 0; i < map_rdr_.grid_param_count(param); i++)
            {
                var cell_type = map_rdr_.grid_param_cell_type(param, i);
                var cell_value = map_rdr_.grid_param_cell_value(param, i);
                add_grid_param_(param, i, cell_type, cell_value);
            }
        }
    )

    map_rdr_.params().forEach(
        function (param)
        {
            var cell_type = map_rdr_.param_cell_type(param);
            var cell_value = map_rdr_.param_cell_value(param);
            add_param_(param, cell_type, cell_value);
        }
    )
 */
