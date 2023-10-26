autowatch = 1;

var dutils = require("db_dictionary_array_utils");

var tracks_dict;




function load_from_dict(dict_name)
{
    tracks_dict = new Dict (dict_name);
    outlet (0, "set_tracks", dict_name, "MIDI_EFFECTS");
}


function set_effects(track_index, effects_dict_name)
{
    dutils.set_dict_array_at(tracks_dict, "tracks", track_index, new Dict(effects_dict_name));
    outlet(0, "effects", track_index, effects_dict_name);
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