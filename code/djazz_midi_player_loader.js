autowatch = 1;

outlets = 3;

function load_from_session_dict(session_dict_name, key)
{
    var d = new Dict (session_dict_name);
    load_from_midi_player_dict(d.get(key).name)

}


function load_from_midi_player_dict(dict_name)
{
    var d = new Dict (dict_name); 
    
    outlet (0, d.get("navigator").name);
    outlet (1, d.get("composer").name);
    outlet (2, d.get("navigator").name);


}