var dutils = require("db_dictionary_array_utils");

autowatch = 1;

inlets = 2;
outlets = 2;

var database                = null;    // { "tracks" : [ {"effects" : [] } , ... ] }
declareattribute("database", null, load);

var effect_patchers_database = null;
declareattribute("effect_patchers_database", null, load_effect_patchers_database, 1);


function load_effect_patchers_database(effect_patchers_database_name)
{
    effect_patchers_database = new Dict (effect_patchers_database_name);
}


function load(in_database)
{
    database = new Dict();
    database.clone(in_database.name);

    var msg     = "bank";
    var args    = [database, effect_patchers_database];
    post (effect_patchers_database.getkeys());
    outlet (0, msg, args);
    outlet (1, database.name);
}


function set_effect()
{
    var track_index     = arguments[0];
    var effect_index    = arguments[1];
    var effect_number   = arguments[2];

    var t = track_index;
    var e = effect_index;
    var n = effect_number;

    var track           = get_track_dict_(t);
    var effect_names    = dutils.get_dict_array(track_dict, "effects");
    var name            = effect_patchers_database.get("items")[n];
    
    if ((e === effect_names.length) && (name === ""))
        return;

    if (name === effect_names[e])
        return;

    if (e === effect_names.length)
    {
        effect_names.push(name);
    }
    else
    {
        effect_names[e] = name;
    }

    dutils.set_dict_array(track, "effects", effect_names);
    dutils.set_dict_array_at(database, "tracks", t, track);

    var msg = ["track", t, "effects", track, effect_patchers_database];
    outlet (0, msg);
}

// ----------------------------------------------------------------------------------

function get_track_dict_(i)
{
    return  dutils.get_dict_array_at(database, "tracks", i);
}
get_track_dict_.local = 1;