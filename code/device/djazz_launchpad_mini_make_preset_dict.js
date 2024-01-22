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


function load(file_path)
{
    preset_dict.import_json(file_path);

    preset_dict.replace("midi");
    preset_dict.replace("cc");

    var param_keys  = dutils.get_dict_key_array(preset_dict.get("parameters"));

    param_keys.forEach(
        function (param_key)
        {        
            var msg_key = preset_dict.get("parameters").get(param_key).get("msg").split(" ").join("::");
            post (msg_key);
            preset_dict.replace(msg_key, param_key);
        }
    );

    outlet (0, preset_dict.name);
}