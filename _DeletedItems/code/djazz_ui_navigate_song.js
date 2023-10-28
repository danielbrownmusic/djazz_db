autowatch = 1;

function convert_beat_to_grid_position(database_name, beat)
{
    var d           = new Dict(database_name);
    var chapter     = d["beats"][beat]["chapter"];
    var measure     = d["beats"][beat]["measure"];
    var position    = d["beats"][beat]["position"];
    d.freepeer();
    return [chapter, measure, position];
}


function convert_grid_position_to_beat(database_name, grid_position)
{
    var chapter     = grid_position[0];
    var measure     = grid_position[1];
    var position    = grid_position[2];

    var d = Dict(database_name);
    //var beat_number = d.get("grid").get(chapter).get(measure).get(position);
    var beat_number = d["grid"][chapter][measure][position];
    d.freepeer();
    return beat_number;
}


function set_chapter_tabs(n_chapters)
{
    outlet(0, "tabs", make_tabs_(1, n_chapters + 1));
}


function set_measure_tabs(min_measure, max_measure)
{
    outlet(0, "tabs", make_tabs_(min_measure + 1, max_measure + 1));
}


function make_tabs_(i_min, i_max)
{
    var a = Array(i_max - i_min);
    for (var i = i_min; i < i_max; i++)
    {
        a[i] = i;
    }
    return a;
}
make_tabs_.local = 1;