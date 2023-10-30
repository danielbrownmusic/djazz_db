var dutils = require("db_dictionary_array_utils");

autowatch = 1;


inlets = 2;
outlets = 3;

var tracks_dict_name_;
var effects_menu_items_dict_name_;


function load_effects_menu_dict(effects_menu_items_dict_name)
{
    effects_menu_items_dict_name_ = effects_menu_items_dict_name;
    outlet (1, effects_menu_items_dict_name_);
}


function load_tracks_dict(tracks_dict_name)
{
    tracks_dict_name_ = tracks_dict_name;

    var msg     = "tracks";
    var args    = [tracks_dict_name_, effects_menu_items_dict_name_];

    outlet (0, msg, args);
    outlet (2, tracks_dict_name_);
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

/*     for (var i = effect_names.length - 1; i >= 0; i--)
    {
        if (effect_names[i] !== "")
            break;
            effect_names.pop();
    } */

    set_effect_name_array_(track_index, effect_names);

    var msg = "effects";
    var d = new Dict(tracks_dict_name_);
    var track_dict_name = d.get("tracks")[track_index].name;
    var args = [track_index, track_dict_name, effects_menu_items_dict_name_];
    outlet (0, msg, args);
}

// ----------------------------------------------------------------------------------

function get_effect_name_array_(track_index)
{
    var tracks_dict     = new Dict(tracks_dict_name_);
    var effects_dict    = dutils.get_dict_array_at(tracks_dict, "tracks", track_index);

    return dutils.get_dict_array(effects_dict, "effects");
}
get_effect_name_array_.local = 1;


function set_effect_name_array_(track_index, effect_names)
{
    var tracks_dict     = new Dict(tracks_dict_name_);
    var effects_dict    = dutils.get_dict_array_at(tracks_dict, "tracks", track_index);

    //post (effect_names);
    //post ("\n");
    //post(dutils.get_dict_array(dutils.get_dict_array_at(tracks_dict, "tracks", track_index), "effects"));
    dutils.set_dict_array(effects_dict, "effects", effect_names);
    dutils.set_dict_array_at(tracks_dict, "tracks", track_index, effects_dict);
}
set_effect_name_array_.local = 1;


function effect_name_to_number_(effect_name)
{
    var d = new Dict(effects_menu_items_dict_name_);
    return d.get("items").indexOf(effect_name);
}
effect_name_to_number_.local = 1;


function effect_number_to_name_(effect_number)
{
    var d = new Dict(effects_menu_items_dict_name_);
    return d.get("items")[effect_number];
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