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


function load_composer_()
{
    outlet (1, "score", database.get("composer").get("score"));
}
load_composer_.local = 1


function load_midi_out_()
{
    outlet (2, "load", database.get("midi_out"));
}
load_midi_out_.local = 1;