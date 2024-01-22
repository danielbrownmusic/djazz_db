var dutils = require("db_dictionary_array_utils");

var midi_cell_count = 120;

autowatch = 1;


function load(view_dict_name, file_path)
{
    var view_dict = new Dict (view_dict_name);
    view_dict.import_json(file_path);

    ['chapter', 'bar'].forEach(
        function (param_type)
        {        
            var view_cells      = dutils.get_dict_array(view_dict.get("chapter"), "view");
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
                    var key = [param_type, "ctrl", msg_type].join("::")
                    view_dict.replace(key);
                    dutils.set_dict_array(view_dict, key, midi_ctrl_cells);
                }
            );
        }
    );

    outlet (0, view_dict_name);
}