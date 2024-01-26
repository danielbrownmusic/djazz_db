autowatch           = 1;
outlets             = 2;

var dutils          = require("db_dictionary_array_utils");

var device_dict_    = new Dict();
var device          = undefined;

// ----------------------------------------------------------------------------------------------------------------------------


function clear_dict()
{
    clear_dict_();
}


function init(dict_name, device_name, view_file_path, grid_file_path)
{
    init_(dict_name, device_name, view_file_path, grid_file_path);
    refresh_view_();
}


function clear_mapping()
{
    clear_mapping_();
    refresh_view_();
}


function load_mapping(file_path)
{
    load_mapping_(file_path);
}


function add_parameter(param_name, cell_type, cell_value, color)
{
    add_parameter_(param_name, cell_type, cell_value, color);
    refresh_view_();
}


function remove_parameter(param_name)
{
    remove_parameter_(param_name)
    refresh_view_();
}


// ----------------------------------------------------------------------------------------


function clear_dict_()
{
    device_dict_.clear();
}
clear_dict_.local = 1;


function init_(dict_name, device_name, view_file_path, grid_file_path)
{
    device              = device_name;
    device_dict_.name   = dict_name;

    var d = new Dict ();
    d.import_json(view_file_path);
    device_dict_.set( "view", d);

    d.clear();
    d.import_json(grid_file_path);
    device_dict_.set( "grid", d);

    reset_parameters_and_cells_();

    outlet (0, "name", device_dict_.name);
    outlet (0, "bang");
}
init_.local = 1;


function clear_mapping_()
{
    reset_parameters_and_cells_();
}
clear_mapping_.local = 1;


function load_mapping_(file_path)
{
    reset_parameters_and_cells_();

    var d = new Dict ();
    d.import_json(file_path);
    if (d.get("device") !== device)
    {
        post ( "Wrong type of preset file loaded:", d.get("device"), "instead of", device, "\n");
    }
    import_parameters_(d);
}
load_mapping_.local = 1;


function reset_parameters_and_cells_()
{
    device_dict_.replace( "parameters");
    device_dict_.replace( "cells");
    make_grid_cells_();
}
reset_parameters_and_cells_.local = 1;


function make_grid_cells_()
{
    ['chapter', 'bar'].forEach(
        function (param_type)
        {   
            var colors = device_dict_.get("grid").get(param_type).get('colors');
            var states = dutils.get_dict_key_array(colors);
            states.forEach(
                function (state)
                {
                    post (state);
                    colors.replace(state, color_symbol_to_dict_(colors.get(state)));
                }
            )

            var cells = dutils.get_dict_array(device_dict_.get("grid").get(param_type), "cells");        

            for (var i = 0; i < cells.length; i++)
            {
                var cell    = cells[i];                     // "midi 1"
                var param   = to_symbol_(param_type, i);    // "bar 1"

                var key     = undefined;
                var val     = undefined;

                // parameters:cell entry
                key = to_key_("parameters", param, "cell");
                val = cell_symbol_to_dict_(cell);
                device_dict_.replace(key, val);

                //parameters:color entry
                key = to_key_("parameters", param, "color");
                val = colors;
                device_dict_.replace(key, val);

                // cells entry
                key = to_key_("cells", cell);
                val = grid_parameter_symbol_to_dict_(param);
                device_dict_.replace(key, val);
            }
        }
    );
}
make_grid_cells_.local = 1;


function remove_parameter_(param_name)
{
    var cell_dict   = device_dict_.get(to_key_("parameters", param_name, "cell"));
    var cell        = to_symbol_(cell_dict.get("type"), cell_dict.get("value"));

    device_dict_.remove(to_key_("parameters", param_name));
    device_dict_.remove(to_key_("cells", cell));
}
remove_parameter_.local = 1;


function add_parameter_(param_name, cell_type, cell_value, color)
{
    var key = undefined;
    var d   = new Dict ();

    d.set("type", cell_type);
    d.set("value", cell_value);
    key = to_key_("parameters", param_name, "cell");
    device_dict_.replace(key, d);

    d.clear();

    d.set("hue", color);
    d.set("value", "dim");
    d.set("behavior", "static");
    key = to_key_("parameters", param_name, "color", "0");
    device_dict_.replace(key, d);

    d.clear();

    d.set("hue", color);
    d.set("value", "bright");
    d.set("behavior", "static");
    key = to_key_("parameters", param_name, "color", "1");
    device_dict_.replace(key, d);

    d.clear();

    d.set("operator", "toggle_param");
    d.set("parameter", param_name);
    d.set("arguments");
    key = to_key_("cells", to_symbol_(cell_type, cell_value));
    device_dict_.replace(key, d);

    d.clear();
}
add_parameter_.local = 1;


function import_parameters_(d)
{
    param_names = dutils.get_dict_key_array(d.get("parameters"));
    param_names.forEach(
        function (param_name)
        {   
            var key = undefined;

            key = ("parameters", param_name, "cell");
            var [cell_type, cell_value] = d.get(key).split(" ");

            key = ("parameters", param_name, "color");
            var color = d.get(key);

            add_parameter(param_name, cell_type, cell_value, color);

/*             var msg = d.get("parameters").get(param_name).get("msg");
            key = to_key_("messages", msg);
            val = param_name;
            device_dict_.replace(key, val);

            var color = d.get("parameters").get(param_name).get("color");nt 
            key = to_key_("parameters", param_name, "colors", 0);
            val = to_symbol_(color, "dim", "static");
            device_dict_.replace(key, val);

            key = to_key_("parameters", param_name, "colors", 1);
            val = to_symbol_(color, "bright", "static");
            device_dict_.replace(key, val);
 */        }
    );
}
import_parameters_.local = 1;


// ----------------------------------------------------------------------------------------


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
cell_symbol_to_dict_.local = 1;


// ----------------------------------------------------------------------------------------


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


function refresh_view_()
{
    outlet (1, "refresh");
}
refresh_view_.local = 1;