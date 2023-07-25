autowatch = 1;

inlets = 2;
var SONG_DATABASE_maxobj;
var SONG_DATABASE;


function dictionary()
{
	SONG_DATABASE_maxobj = new Dict(arguments[0]);
    SONG_DATABASE = JSON.parse(SONG_DATABASE_maxobj.stringify())
    post(SONG_DATABASE.beats["6"]["measure"]);
}

function clear()
{
    SONG_DATABASE.clear();
    SONG_DATABASE = null;
}


function get_beat_data()
{
    if (arguments.length === 1)
    {
        var beat_number = arguments[0];
        var beat        = SONG_DATABASE.beats[beat_number];
        outlet(0, [beat_number, beat.chapter, beat.measure, beat.position]);
    }

    else if (arguments.length === 3)
    {
        var chapter     = arguments[0];
        var measure     = arguments[1];
        var position    = arguments[2];
        var beat_number = SONG_DATABASE.grid[chapter][measure][position];
        outlet(0, [beat_number, chapter, measure, position]);
    }
}


function get_chapter_data()
{
    var chapter_number  = arguments[0];
    var chapter         = SONG_DATABASE.chapters[chapter_number];
    outlet(0,
            [chapter_number, 
            chapter.min_measure,
            chapter.max_measure,
            chapter.min_beat,
            chapter.max_beat]);
}