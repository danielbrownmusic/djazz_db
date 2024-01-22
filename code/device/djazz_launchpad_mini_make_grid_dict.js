var dutils = require("db_dictionary_array_utils");

var midi_cell_count = 120;
var grid_dict = new Dict();
autowatch = 1;


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


function load(grid_dict_name, file_path)
{
    grid_dict.name = grid_dict_name;
    //var file_path = get_file_path(folder_path);

    grid_dict.import_json(file_path);

    ['chapter', 'bar'].forEach(
        function (param_type)
        {        
            var view_cells      = dutils.get_dict_array(grid_dict.get("chapter"), "cells");
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
                    dutils.set_dict_array(grid_dict, key, midi_ctrl_cells);
                }
            );
        }
    );

    outlet (0, grid_dict_name);
}