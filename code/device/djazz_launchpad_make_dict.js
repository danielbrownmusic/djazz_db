autowatch = 1;

var dutils = require("db_dictionary_array_utils");

var device_dict_ = new Dict();
var device = "";
declareattribute(device);

// ----------------------------------------------------------------------------------------------------------------------------


function make_dict(dict_name, view_file_path, grid_file_path)
{
    device_dict_.name = dict_name;
    device_dict_.set( "view",       make_view_dict_     (view_file_path));
    device_dict_.set( "grid",       make_grid_dict_     (grid_file_path));

    reset_parameters_and_messages_();
}


function load_parameters(file_path)
{
    reset_parameters_and_messages_();

    var d = new Dict ();
    d.import_json(file_path);

    if (d.get("device") !== device)
    {
        post ( "Wrong type of preset file loaded:", d.get("device"), "instead of", device, "\n");
    }

    device_dict_.set("parameters", d.get("parameters"));
    param_names = dutils.get_dict_key_array(device_dict_.get("parameters"));
    param_names.forEach(
        function (param_name)
        {        
            var msg = device_dict_.get("parameters").get(param_name).get("msg");
            var msg_key = ["messages", msg].join("::");
            device_dict_.set(msg_key, param_name);
        }
    );

    outlet (0, preset_dict.name);
}


function clear_parameters()
{
    reset_parameters_and_messages_();
}


// ----------------------------------------------------------------------------------------------------------------------------


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

    outlet (0, device_dict_.name);
}
make_grid_messages_.local = 1;


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