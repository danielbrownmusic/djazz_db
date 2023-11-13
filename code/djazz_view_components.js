autowatch = 1;

var x_0 = 0;
var y_0 = 0;

var x = x_0;
var y = y_0;


function make_player_view_(key)
{
    var view_name   = key + "_view";

    var midi_player_view = patcher.newdefault
                                    (
                                    x, y, 
                                    "bpatcher", 
                                    "@name",                "djazz_midi_player_view", 
                                    "@args",                view_name,
                                    "@presentation",        1
                                    );

    var background_panel = midi_player_view.subpatcher().getnamed("background_panel");
    var w = background_panel[2];
    var h = background_panel[3];
    var rect = [x, y, w, h];

    midi_player_view.patching_rect      = rect;
    midi_player_view.presentation_rect  = rect;
    midi_player_view.varname            = view_name;

    x += w;
}
make_player_view_.local = 1;