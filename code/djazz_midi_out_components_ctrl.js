autowatch = 1;

var dutils = require("db_dictionary_array_utils");

var tracks_dict;




function load_from_dict(dict_name)
{
    tracks_dict = new Dict (dict_name);
    outlet (0, "set_tracks", dict_name, "MIDI_EFFECTS");
}


function tracks()
{
    var i = arguments[0];
    var effect_name_array = arguments[1];

    post (i);
    post (effect_name_array);

    var name = tracks_dict.get("tracks")[i].name;
    var d = new Dict (name);
    dutils.set_dict_array(d, "effects", effect_name_array);

    outlet(0, "set_track", i, dutils.get_dict_array(d, "effects"));
 }


/* function trim_(effect_array)
{
    var n = effect_array.length - 1;
    for (var i = n; i >= 0; i--)
    {
        var effect_dict = effect_array[i];
        if (effect_dict.get("name") != "")
            return effect_dict;
        effect_dict.pop();
    }
}
trim_.local = 1; */