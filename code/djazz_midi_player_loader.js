autowatch = 1;

outlets = 3;


function load_player_from_dict(player_dict_name)
{
    var d = new Dict (player_dict_name);

    var player_key = this.patcher.box.varname;

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