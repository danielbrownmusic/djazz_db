var dutils = require("db_dictionary_array_utils");

var midi_cell_count = 120;
var preset_dict = new Dict();
autowatch = 1;


function create(preset_dict_name)
{
    preset_dict.name = preset_dict_name;
    preset_dict.replace("parameters");

    outlet (0, preset_dict.name);
}


