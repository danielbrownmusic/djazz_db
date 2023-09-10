autowatch = 1;


function convert_grid_position_to_beat(song_database_name, grid_position)
{
    var chapter     = grid_position[0];
    var measure     = grid_position[1];
    var position    = grid_position[2];

    var song_dict = Dict(song_database_name);
    var beat_number = song_dict.get("grid").get(chapter).get(measure).get(position);

    return beat_number;
}