autowatch = 1;
outlets = 4;

function get_beat_data()
{
    var arg_arr     = arrayfromargs(arguments);
    var beat_data   = get_beat_data_(arg_arr[0], arg_arr.slice(1));
    for (var i = 0; i < outlets; i++)
    {
        outlet(i, beat_data[i]);
    }
}


function get_beat_data_(song_database_name, beat_number_array)
{
    var song_database = new Dict(song_database_name);
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
    var beat_database_name  = song_database.get("beats").get(beat_number.toString()).name;
    var beat                = new Dict();
    beat.clone(beat_database_name);

    var chapter_number      = beat.get("chapter");
    var measure_number      = beat.get("measure");
    var measure_position    = beat.get("position"); 

    beat.freepeer();
    return [beat_number, chapter_number, measure_number, measure_position];
}

get_beat_data_from_beat_number_.local = 1;


function get_beat_data_from_grid_position_(song_database, grid_position)
{
    var chapter     = grid_position[0].toString();
    var measure     = grid_position[1].toString();
    var position    = grid_position[2].toString();

    var beat_number = song_database.get("grid").get(chapter).get(measure).get(position);

    return [beat_number, chapter, measure, position];
}

get_beat_data_from_grid_position_.local = 1;