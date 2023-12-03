autowatch = 1;
outlets = 2;

var effects_dict_ = new Dict();

var d = new Dict ("MIDI_OUT_COMPONENTS");
d.replace("tracks");


function load_from_file(file_full_path)
{
    d.import(file_full_path);
}


function clear()
{
    var n = get_track_count_();
    for (var i = 0; i < n; i++)
    {
        remove_last_track();
    }
}


function insert_track(i)
{
    insert_track_(i);
    announce_insert_track_(i);
}


function delete_track()
{
    delete_track_(i);
    announce_delete_track_(i);
}


function add_track()
{
    add_track_();
    announce_add_track_();
}


function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track();
    }
}


function remove_last_track()
{
    remove_last_track_();
    announce_remove_last_track_();
}


function add_effect(track_index)
{
    add_effect_(track_index);
    announce_add_effect_(track_index);
}


function add_effects(n, track_index)
{
    for (var i = 0; i < n; i++)
    {
        add_effect(track_index);
    }
}


function set_effect(track_index, effect_index, effect_number)
{
    set_effect_(track_index, effect_index, effect_number);
    announce_set_effect_(track_index);
}


//----------------------------------------------------------------------------


function insert_track_(i)
{
    var track_array = get_track_array_();
    track_array.splice(i, 0, make_track_dict_());
    set_track_array_(track_array);
}


function delete_track_(i)
{
    var track_array = get_track_array_();
    track_array.splice(i, 1);
    set_track_array_(track_array);
}


function add_track_()
{
    var track_array = get_track_array_();
    track_array.push(make_track_dict_()); 
    set_track_array_(track_array);
}


function remove_last_track_()
{
    var track_array = get_track_array_();
    track_array.pop();
    set_track_array_(track_array);    
}


function add_effect_(track_index)
{
    var effect_array = get_effect_array_(track_index);
    effect_array.push(make_new_effect_());
    set_effect_array_(track_index, effect_array);
}


function set_effect_(track_index, effect_index, effect_number)
{
    var t = track_index;
    var i = effect_index;
    var n = effect_number;

    var effects = get_effect_array_(t);

    effects[i]  = get_effect_name_(n);
    effects     = trim_(effects);

    set_effect_array_(t, effects);
}


//------------------------------------------------------------------------------------------
var dutils = require("db_dictionary_array_utils");
//------------------------------------------------------------------------------------------


function announce_insert_track_(i)
{
    outlet (0, "insert_track", i);
    outlet (1, "insert_track", i);
}


function announce_set_effect_(track_index)
{
    var effect_array = get_effect_array_(track_index);

    var patcher_class_array = effect_array.map(get_patcher_class_);
    var patcher_class_dict  = new Dict ();

    dutils.set_dict_array(patcher_class_dict, "effects", patcher_class_array);
    outlet (0, "set_effects", track_index, patcher_class_dict);

    var view_patcher_class_array    = effect_array.map(get_view_patcher_class_);
    var view_patcher_class_dict     = new Dict ();

    dutils.set_dict_array(view_patcher_class_dict, "effects", view_patcher_class_array);
    outlet (1, "set_effects", track_index, view_patcher_class_dict);
}


//------------------------------------------------------------------------------------------


function get_track_count_()
{
    return get_track_array_.length;
}
get_track_count_.local = 1;


function get_track_array_()
{
    return dutils.get_dict_array(d, "tracks");    
}
get_track_array_.local = 1;


function set_track_array_(track_array)
{
    dutils.set_dict_array(d, "tracks", track_array);
}
set_track_array_.local = 1;


function get_effect_count_(track_index)
{
    return get_effect_array_(track_index).length;
}
get_effect_count_.local = 1;


function get_effect_array_(track_index)
{
    var track_array = get_track_array_();
    return dutils.get_dict_array(track_array[track_index], "effects");
}
get_effect_array_.local = 1;


function set_effect_array_(track_index, effect_array)
{
    var track_array = get_track_array_();
    var effect_dict = new Dict ("effects");
    dutils.set_dict_array(effect_dict, "effects", effect_array);
    track_array[track_index] = effect_dict;
    set_track_array_(track_array);
}
set_effect_array_.local = 1;