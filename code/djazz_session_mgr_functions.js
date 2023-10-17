autowatch = 1;

var mmdu = require("dbdict");

var MIDI_PLAYERS    = "midi_players";
var NAVIGATE        = "navigate";
var GENERATE        = "generate";
var MIDI_OUT        = "midi_out";

var CMD_LOAD            = "load";

var DATABASE_NAME_PREFIX = "database";

var SEPARATOR_DICT = "::";
var SEPARATOR_ADDR = " ";
var SEPARATOR_DATABASE_NAME = "_";

function load_session()
{
    var dict_name   = arguments[0]; 
    var filename    = arguments[1];

    var d = new Dict(dict_name);
    d.import_json(filename);

    var player_names = d.get(MIDI_PLAYERS).getkeys();
    for (var i = 0; i < player_names.length; i++)
    {
        var name = player_names[i];
        var data = d.get(MIDI_PLAYERS).get(name);
        make_midi_player_(i, name);

        var file_types = [NAVIGATE, GENERATE, MIDI_OUT];

        for (var i = 0; i < file_types.length; i++)
        {
            var file_type       = file_types[i];
            var a               = [MIDI_PLAYERS, name, file_type];
            var key             = a.join(SEPARATOR_DICT);
            var addr            = a.join(SEPARATOR_ADDR);
            var database_name   = DATABASE_NAME_PREFIX + SEPARATOR_DATABASE_NAME + a.join(SEPARATOR_DATABASE_NAME);
            var file_path       = d.get(key);

            var msg = [addr, CMD_LOAD, database_name, file_path];
        }
        outlet(0, msg);
    }
}

//------------------------------------------------------

function make_midi_player_(i, name)
{
    var a = 0;  var b = 0;
    var c = 0;  var d = 0;

    var x = a * i + b;
    var y = c + i + d;

    var midi_player = this.patcher.newdefault(x, y, "djazz_midi_player", name);
    this.patcher.connect(this.box, 0, midi_player, 1);
}

make_midi_player_.local = 1;
