autowatch = 1;

outlets = 4;

var database_name       = null;
declareattribute("database_name");
var database    = null;
declareattribute("database", null, load);


function load(in_database)
{
    database = new Dict(database_name);
    database.clone(in_database.name);
    post (database_name);
    outlet (3, database_name);
    load_composer_();
    load_midi_out_();
}


function navigator()
{
    var [msg, args] = get_msg_(arguments);
    outlet (0, msg, args);
}


function composer()
{
    var [msg, args] = get_msg_(arguments);
    outlet (1, msg, args);
}


function midi_out()
{
    var [msg, args] = get_msg_(arguments);
    outlet (2, msg, args);
}


/* function load_composer_()
{
    outlet (1, "score", database.get("composer").get("score"));
}
load_composer_.local = 1


function load_midi_out_()
{
    outlet (2, "load", database.get("midi_out"));
}
load_midi_out_.local = 1; */

//----------------------------------------------------------------------------------------------------





function get_msg_(arg_obj)
{
    var a = arrayfromargs(arg_obj);
    return [a[0], a.slice(0)];
}
get_msg_.local = 1;