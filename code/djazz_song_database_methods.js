autowatch = 1;

inlets = 2;

var song_database_name = null;

/* function dictionary(name)
{
	song_database_name = name;
    post(song_database_name,"\n");
}

function clear()
{
    song_database_name = null;
}


function set_database(name)
{
	song_database_name = name;
} */


/* function get_all_data()
{
    for (var i = 0; i < arguments.length; i++)
    {
        post(arguments[i], "\n");
    }
    var arg_arr = arrayfromargs(arguments);
    outlet(0, get_all_data_(arg_arr[0], arg_arr.slice[1]));
}


function get_all_data_(song_database_namebeat_number_array)
{
    post(beat_number_array.join(", "), "\n");
    var beat            = get_beat_data_(beat_number_array);

    var measure_number  = beat.get("measure");
    var measure         = get_measure_data_(measure_number);

    var chapter_num     = beat.get("chapter");
    var chapter         = get_chapter_data_(chapter_num);

    var d = new Dict();

    d.set("beat",    beat);
    d.set("measure", measure);
    d.set("chapter", chapter);

    return d;
}
get_all_data_.local = 1; */


//--------------------------------------------------------------------------------


function get_beat_data()
{
    var arg_arr = arrayfromargs(arguments);
    outlet(0, get_beat_data_(arg_arr[0], arg_arr.slice[1]));
}


function get_beat_data_(song_database_name, beat_number_array)
{
    post("get beat data \n");
/*     if (!song_database_name)
        return; */

    var song_database = new Dict(song_database_name);
    post(beat_number_array.length + "\n");
    if (beat_number_array.length === 1)
    {
        return get_beat_data_from_beat_number_(song_database, beat_number_array[0]);
    }

    else if (beat_number_array.length === 3)
    {
        return get_beat_data_from_grid_position_(song_database, beat_number_array);
    } 
}
get_beat_data_.local = 1;


function get_beat_data_from_beat_number_(song_database, beat_number)
{
    //post(beat_number.toString(), "\n");
    var beat_database_name  = song_database.get("beats").get(beat_number.toString()).name;
    var beat                = new Dict().clone(beat_database_name);

    var chapter_number      = beat.get("chapter");
    var measure_number      = beat.get("measure");
    var measure_position    = beat.get("position"); 

    beat.freepeer();
    return [beat_number, chapter_number, measure_number, measure_position];
}


function get_beat_data_from_grid_position_(song_database, grid_position)
{
    var chapter     = grid_position[0].toString();
    var measure     = grid_position[1].toString();
    var position    = grid_position[2].toString();

    var beat_number = song_database.get("grid").get(chapter).get(measure).get(position);

    return [beat_number, chapter, measure, position];
}

//--------------------------------------------------------------------------------


function get_measure_data()
{
    outlet(0, get_measure_data_(arguments[0], arguments[1]));
}


function get_measure_data_(song_database_name, measure_number)
{
/*     if (!song_database_name)
        return; */

    var song_database           = new Dict(song_database_name);
    var measure_database_name   = song_database.get("measures").get(measure_number.toString()).name;
    var measure                 = new Dict().clone(measure_database_name);
    
    var min_beat                = measure.get("min_measure");
    var length_in_beats         = measure.get("length_in_measures");
    
    measure.freepeer();

    return [min_beat, length_in_beats];
}

get_measure_data_.local = 1;


//--------------------------------------------------------------------------------


function get_chapter_data()
{
    outlet(0, get_chapter_data_(arguments[0], arguments[1]));
}


function get_chapter_data_(song_database_name, chapter_number)
{
/*     if (!song_database_name)
        return; */

    var song_database           = new Dict(song_database_name);
    var chapter_database_name   = song_database.get("chapters").get(chapter_number.toString()).name;
    var chapter                 = new Dict().clone(chapter_database_name);

    var min_measure             = chapter.get("min_measure");
    var max_measure             = chapter.get("max_measure");
    var min_beat                = chapter.get("min_beat");
    var max_beat                = chapter.get("max_beat");

    chapter.freepeer();

    return [chapter_number, min_measure, max_measure, min_beat, max_beat];

}

get_chapter_data_.local = 1;