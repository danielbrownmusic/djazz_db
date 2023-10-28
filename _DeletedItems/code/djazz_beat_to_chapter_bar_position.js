autowatch = 1;

function list(database_name, beat)
{
    var database_name   = arguments[0];
    var beat            = arguments[1];
 
    var d           = new Dict(database_name);
 
    var chapter     = d["beats"][beat]["chapter"];
    var bar         = d["beats"][beat]["measure"];
    var position    = d["beats"][beat]["position"];
 
    d.freepeer();
    return [chapter, bar, position];
}