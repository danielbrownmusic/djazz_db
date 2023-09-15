autowatch = 1;

function beat_to_chapter_bar_position(database_name, beat)
{
    var d           = new Dict(database_name);
    var chapter     = d["beats"][beat]["chapter"];
    var bar         = d["beats"][beat]["measure"];
    var position    = d["beats"][beat]["position"];
    d.freepeer();
    return [chapter, bar, position];
}


function chapter_bar_position_to_beat(database_name, chapter_bar_position)
{
    var chapter     = chapter_bar_position[0];
    var measure     = chapter_bar_position[1];
    var position    = chapter_bar_position[2];

    var d = Dict(database_name);
    var beat = d.get("grid").get(chapter).get(measure).get(position);
    //var beat = d["grid"][chapter][measure][position];
    d.freepeer();
    return beat;
}


function get_chapter_measures(database_name, i)
{
    var d = Dict(database_name);
    var min_measure = d.get("chapters").get(i).get("min_measure");
    var max_measure = d.get("chapters").get(i).get("max_measure");
    outlet(0, min_measure, max_measure);
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