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

