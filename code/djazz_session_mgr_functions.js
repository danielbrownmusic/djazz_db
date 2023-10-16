autowatch = 1;


function load_session()
{
    var dict_name   = arguments[0]; 
    var filename    = arguments[1];

    var d = new Dict(dict_name);
    d.import_json(filename);

    var count = d.getsize("MIDI_players");
    for (var i = 0; i < count; i++)
    {
        add_midi_player_(d.get("MIDI_players")[i]);
    }
}

//------------------------------------------------------

function add_midi_player_()
{
    var a = 0;  var b = 0;
    var c = 0;  var d = 0;

    var x = a * i + b;
    var y = c + i + d;

    var midi_player = this.patcher.newdefault(x, y, "djazz_midi_player");
    midi_
}

add_midi_player_.local = 1;
