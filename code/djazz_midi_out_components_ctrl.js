autowatch = 1;

var dutils = require("db_dictionary_array_utils");

outlets = 2;

var tracks_dict_name_;
var effects_menu_dict_name_;



function load_effects_menu_dict(dict_name)
{
    effects_menu_dict_name_ = dict_name;
    outlet (1, "load_effects_menu_dict", dict_name);
}


function load_from_dict()
{
    tracks_dict_ = new Dict ("TRACKS_1");
    effects_menu_dict_ = new Dict("MIDI_EFFECTS");
    //outlet (0, "set_tracks", dict_name, "MIDI_EFFECTS");
    outlet (1, "TRACKS_1");
}


function set_effect()
{
    var track_index     = arguments[0];
    var effect_index    = arguments[1];
    var effect_number   = arguments[2];
    var effect_name     = effect_number_to_name_(effect_number);

    var effect_names = get_effect_name_array_(track_index);

    if ((effect_index === effect_names.length) && (effect_name === ""))
        return;

    if (effect_name === effect_names[effect_index])
        return;

    if (effect_index === effect_names.length)
    {
        effect_names.push(effect_name);
    }
    else
    {
        effect_names[effect_index] = effect_name;
    }

    effect_names = trim_(effect_names);

    set_effect_name_array_(track_index, effect_names);
    var msg = ["set_effects", track_index, effect_index, effect_names];
    outlet (0, msg);
}

// ----------------------------------------------------------------------------------

function get_effect_name_array_(track_index)
{
    var effects_dict = dutils.get_dict_array_at(tracks_dict_, "tracks", track_index);
    return dutils.get_dict_array(effects_dict, "effects");
}
get_effect_name_array_.local = 1;


function set_effect_name_array_(track_index, effect_names)
{
    var effects_dict = dutils.get_dict_array_at(tracks_dict_, "tracks", track_index);
    dutils.set_dict_array(effects_dict, "effects", effect_names);
    var key = "tracks" + "[" + track_index.toString() + "]";
    tracks_dict_.set(key, effects_dict);
}
set_effect_name_array_.local = 1;


function trim_(effect_names)
{
    for (var i = effect_names.length - 1; i >= 0; i--)
    {
        if (effect_names[i] != "")
            break;
            effect_names.pop();
    }
    return effect_names;
}
trim_.local = 1;


function effect_name_to_number_(effect_name)
{
    return effects_menu_dict_.get("items").indexOf(effect_name);
}
effect_name_to_number_.local = 1;


function effect_number_to_name_(effect_number)
{
    return effects_menu_dict_.get("items")[effect_number];
}
effect_number_to_name_.local = 1;





/* function set_effects(track_index, effects_dict_name)
{
    dutils.set_dict_array_at(tracks_dict_, "tracks", track_index, new Dict(effects_dict_name));
    outlet(0, "effects", track_index, effects_dict_name);
 } */



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