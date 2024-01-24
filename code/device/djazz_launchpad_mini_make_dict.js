autowatch = 1;

var dutils = require("db_dictionary_array_utils");

var device_dict_ = new Dict();


// ----------------------------------------------------------------------------------------------------------------------------


function make_dict(dict_name, view_file_path, grid_file_path)
{
    device_dict_.name = dict_name;
    device_dict_.set( "view",    make_view_dict_ (view_file_path) );
    device_dict_.set( "grid",    make_grid_dict_ (grid_file_path) );
    device_dict_.replace( "params");
    make_inverse_grid_mappings_();
}


function load_preset(file_path)
{
    load_param_dict_(file_path);
}


function clear_preset()
{
    clear_param_dict_();
}


// ----------------------------------------------------------------------------------------------------------------------------


function make_view_dict_(file_path)
{
    var d = new Dict ();
    d.import_json(file_path);
    return d;
}
make_view_dict_.local = 1;


function make_inverse_grid_mappings_(file_path)
{
    ['chapter', 'bar'].forEach(
        function (param_type)
        {        
            var view_cells      = dutils.get_dict_array(device_dict_.get("grid").get(param_type), "cells");
            var midi_ctrl_cells = Array.apply(null, Array(midi_cell_count)).map(Number.prototype.valueOf, -1);
            var cc_ctrl_cells   = Array.apply(null, Array(midi_cell_count)).map(Number.prototype.valueOf, -1);
        
            for (var i = 0; i < view_cells.length; i++)
            {
                var [msg_type, val]         = view_cells[i].split(" ");
                var ctrl_cells              = (msg_type === "midi") ? midi_ctrl_cells : cc_ctrl_cells;
                ctrl_cells[parseInt(val)]   = i;
            }

            ['midi', 'cc'].forEach(
                function (msg_type)
                {
                    var key = [param_type, msg_type].join("::")
                    grid_dict.replace(key);
                    var ctrl_cells = (msg_type === "midi") ? midi_ctrl_cells : cc_ctrl_cells;
                    dutils.set_dict_array(grid_dict, key, ctrl_cells);
                }
            );
        }
    );

    outlet (0, grid_dict_name);
}
make_inverse_grid_mappings_.local = 1;


function make_param_dict_()
{
    var d = new Dict ();
    d.replace("parameters");
    return d;
}
make_param_dict_.local = 1;


function clear_param_dict_()
{
    device_dict_.set("params", make_param_dict_());
}
clear_param_dict_.local = 1;


function load_param_dict(file_path)
{
    var name_dict = new Dict ();
    name_dict.import_json(file_path);

    var msg_dict = new Dict();
    msg_dict.replace("midi");
    msg_dict.replace("cc");

    var param_names  = dutils.get_dict_key_array(name_dict);
    param_names.forEach(
        function (param_name)
        {        
            var msg = name_dict.get(param_name).get("msg").split(" ").join("::");
            msg_dict.replace(msg, param_name);
        }
    );

    var param_dict = new Dict();
    param_dict.set("names", name_dict);
    param_dict.set("messages", msg_dict);

    device_dict_.replace("parameters", param_dict);

    outlet (0, preset_dict.name);
}



/* function get_file_path(absolute_path)
{
    var file_iter = new Folder (absolute_path);
    while (!file_iter.end) 
    {
        if (file_iter.extension === ".json")
        {
            return [file_iter.pathname, file_iter.filename].join("/");
        }
        file_iter.next();
    }
} */

