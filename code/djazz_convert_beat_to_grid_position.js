autowatch = 1;

function convert_beat_to_grid_position(dictionary_name, beat)
{
    var d           = new Dict(dictionary_name);
    var chapter     = d["beats"][beat]["chapter"];
    var measure     = d["beats"][beat]["measure"];
    var position    = d["beats"][beat]["position"];
    d.freepeer();
    return [chapter, measure, position];
}