autowatch = 1;

outlets = 3;


function load_player_from_dict(dict_name)
{
    var d = new Dict (dict_name); 
    
    //outlet (0, d.get("navigator").name);
    outlet (1, d.get("score"));
    outlet (2, "load_tracks_dict", d.get("components").name);
}