autowatch = 1;

inlets = 2;

var song_database_name = null;

function dictionary(name)
{
	song_database_name = name;
}

function clear()
{
    song_database_name = null;
}


function set_database(name)
{
	song_database_name = name;
}


function get_beat_data()
{
    if (!song_database_name)
        return;

    var song_database = new Dict(song_database_name);
    //post(d.get("beats").get("1").get("chapter"));
    //post(arguments.length + "\n");
    if (arguments.length === 1)
    {

        var beat_number = arguments[0];
        var beat        = song_database.get("beats").get(beat_number.toString());
        var chapter     = beat.get("chapter");
        var measure     = beat.get("measure");
        var position    = beat.get("position");

        outlet(0, [beat_number, chapter, measure, position]);
    }

    else if (arguments.length === 3)
    {
        var chapter     = arguments[0];
        var measure     = arguments[1];
        var position    = arguments[2];
        var beat_number = song_database.get("grid").get("chapter").get("measure").get("position");

        outlet(0, [beat_number, chapter, measure, position]);
    }
}


function get_chapter_data()
{
    if (!song_database_name)
        return;

    var song_database   = new Dict(song_database_name);
/*     post(song_database_name);
    post("\n");
    post(arguments[0]); */

    var chapter_number  = arguments[0];
    var chapter         = song_database.get("chapters").get(chapter_number.toString());
    var min_measure     = chapter.get("min_measure");
    var max_measure     = chapter.get("max_measure");
    var min_beat        = chapter.get("min_beat");
    var max_beat        = chapter.get("max_beat");

    outlet(0, [chapter_number, min_measure, max_measure, min_beat, max_beat]);
}