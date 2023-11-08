autowatch = 1;

outlets = 3;

var player_name_ = "";
var session_dict_name_ = "";

function name(player_name)
{
    player_name_ = player_name;
}


function load_from_session_dict(session_dict_name)
{
    session_dict_name_ = session_dict_name;
    var d = new Dict (session_dict_name);

    load_components (d.get(player_key).get("components").name);
    load_data       (d.get(player_key).get("data").name);
}


function load_components(components_dict_name)
{
    var d = new Dict(components_dict_name)
    outlet (2, "load_tracks_dict", d.get("components").name);
}


function load_data(data_dict_name)
{
    load_score(d.get("score"));
}


function load_score(score_file_full_path)
{
        outlet (1, "score", score_file_full_path);
}


function load_navigator(nav_dict_name)
{
    outlet (0, nav_dict_name);
}