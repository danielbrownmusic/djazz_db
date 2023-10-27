autowatch = 1

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
    outlet (2, tracks_dict_name_);
}


function set_track_effects(
    effects_menu_items_dict_name_, 
    track_index,
    effect_names
)
{
    var effect_numbers = effect_names.map(effect_name_to_number_);
    var msg = ["set_track_effects", effects_menu_items_dict_name_, effect_names].join(" ");
    outlet( 0, msg);
}