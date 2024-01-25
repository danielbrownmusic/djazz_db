autowatch = 1;

var dutils = require("db_dictionary_array_utils");

var device_dict_ = new Dict();
var device = jsarguments.length > 1 ? jsarguments[1] : "";
declareattribute(device);



// ----------------------------------------------------------------------------------------------------------------------------


function clear_dict()
{
    device_dict_.clear();
}


function make_dict(dict_name, view_file_path, grid_file_path)
{
    device_dict_.name = dict_name;
    device_dict_.set( "view",       make_view_dict_     (view_file_path));
    device_dict_.set( "grid",       make_grid_dict_     (grid_file_path));

    reset_parameters_and_messages_();

    outlet (0, "name", device_dict_.name);
    outlet (0, "bang");
}


function clear_mapping()
{
    reset_parameters_and_messages_();
}


function load_mapping(file_path)
{
    reset_parameters_and_messages_();

    var d = new Dict ();
    d.import_json(file_path);
    if (d.get("device") !== device)
    {
        post ( "Wrong type of preset file loaded:", d.get("device"), "instead of", device, "\n");
    }
    import_parameters_(d);
}


// ----------------------------------------------------------------------------------------


function make_view_dict_(file_path)
{
    var d = new Dict ();
    d.import_json(file_path);
    return d;
}
make_view_dict_.local = 1;


function make_grid_dict_(file_path)
{
    var d = new Dict ();
    d.import_json(file_path);
    return d;
}


function make_parameter_dict_()
{
    return new Dict();
}
make_parameter_dict_.local = 1;


function make_message_dict_()
{
    return new Dict();
}
make_message_dict_.local = 1;


function reset_parameters_and_messages_()
{
    device_dict_.set( "parameters", make_parameter_dict_());
    device_dict_.set( "messages",   make_message_dict_  ());
    make_grid_messages_();
}
reset_parameters_and_messages_.local = 1;


function make_grid_messages_()
{
    ['chapter', 'bar'].forEach(
        function (param_type)
        {   
            var colors = device_dict_.get("grid").get(param_type).get('colors');
            var cells = dutils.get_dict_array(device_dict_.get("grid").get(param_type), "cells");        
            for (var i = 0; i < cells.length; i++)
            {
                var key = undefined;
                var val = undefined;

                var msg     = cells[i];
                var param   = to_symbol_(param_type, i);

                key = to_key_   ("messages", msg);
                post (key);
                val = to_symbol_(param_type, i);
                device_dict_.set(key, val);

                key   = to_key_("parameters", param, "msg");
                val   = msg;
                device_dict_.replace(key, val);
                
                key = to_key_("parameters", param, "colors");
                val = colors;
                device_dict_.replace(key, val);
            }
        }
    );
}
make_grid_messages_.local = 1;


function import_parameters_(d)
{
    param_names = dutils.get_dict_key_array(d.get("parameters"));
    param_names.forEach(
        function (param_name)
        {   
            var val = undefined;
            var key = undefined;

            var msg = d.get("parameters").get(param_name).get("msg");
            key = to_key_("messages", msg);
            val = param_name;
            device_dict_.replace(key, val);

            var color = d.get("parameters").get(param_name).get("color");
            key = to_key_("parameters", param_name, "colors", 0);
            val = to_symbol_(color, "dim", "static");
            device_dict_.replace(key, val);

            key = to_key_("parameters", param_name, "colors", 1);
            val = to_symbol_(color, "bright", "static");
            device_dict_.replace(key, val);
        }
    );
}
import_parameters_.local = 1;


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