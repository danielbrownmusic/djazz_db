var dutils = require("db_dictionary_array_utils");


autowatch               = 1;
outlets                 = 4;


var effect_database_    = null;
var tracks_             = [];

var x_patch_0           = 0;
var y_patch_0           = 352;
var x_pres_0            = 0;
var y_pres_0            = 0;
var w_track             = 128;
var h_track             = 216;

//var size = [0, 0, x_pres, y_pres];
//declareattribute("size");


function getvalueof()
{
    return make_bank_dict_();
}


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict (effect_database_name);
    outlet( 1, effect_database_name);
}


function load(bank_dict_name)
{
    clear();

    var bank_dict   = new Dict(bank_dict_name);
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    if (track_array === null)
        return;

    for (var i = 0; i < track_array.length; i++)
    {      
        var track = add_track_();
        message_track_(track, "set_effects", track_array[i]); 
    }

    set_solo_bank_ctrl_();
    outlet( 2, bank_dict_name);
}


function track()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);

    if (i >= tracks_.length)
    {
        post ("There is no track", i + ".\n");
        return;
    }

    message_track_(tracks_[i], msg, args);
}


function clear()
{
    var l = tracks_.length;
    for (var i = 0; i < l; i++)
    {
        remove_last_track_();
    }
    set_solo_bank_ctrl_();
}


function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track_();
    }
    set_solo_bank_ctrl_()
    var d = make_bank_dict_();
    post ("sending d.name", d.name, "\n");
    outlet (2, d.name);
    outlet (3, d.name);
}

// ---------------------------------------------------------------------------------------

function add_track_()
{
    var i                   = tracks_.length;

    var x_patch             = x_patch_0 + w_track * i;
    var y_patch             = y_patch_0;
    var x_pres              = x_pres_0 + w_track * i;
    var y_pres              = y_pres_0;

    var patching_rect       = [x_patch, y_patch, w_track, h_track];
    var presentation_rect   = [x_pres, y_pres, w_track, h_track];

    var track_name          = "track_" + i;
    var track               = this.patcher.newdefault
                                    (
                                    x_patch, 
                                    y_patch, 
                                    "bpatcher", 
                                    "@name",                "djazz_midi_out_track_view", 
                                    "@args",                track_name,
                                    "@presentation",        1,
                                    "@patching_rect",       patching_rect,
                                    "@presentation_rect",   presentation_rect
                                    );
    track.varname           = track_name;

    tracks_.push(track);
    message_track_(track, "set_effect_database", effect_database_.name);

    return track;
}
add_track_.local = 1;


function remove_last_track_()
{
    if (tracks_.length === 0)
        return;
    this.patcher.remove(tracks_.pop());
}
remove_last_track_.local = 1;


function message_track_(track, msg, args)
{
    var addr = [track.varname, "effect_list", "control"].join("::");
    outlet (0, addr, msg, args);
}
message_track_.local = 1;


function message_pattr_(msg, args)
{
    outlet (1, msg, args);
}
message_pattr_.local = 1;


function get_track_value_(track)
{
    return track.subpatcher().getnamed("effect_list").subpatcher().getnamed("components").getvalueof();
}
get_track_value_.local = 1;


function set_size_()
{
    x_pres = tracks_.length * w_track;
    size = [0, 0, x_pres, y_pres];
}
set_size_.local = 1;


function set_solo_bank_ctrl_()
{
    var solo_bank_ctrl = this.patcher.getnamed("solo_bank_ctrl");
    if (solo_bank_ctrl)
    {
        this.patcher.remove(solo_bank_ctrl);
    }

    var n = tracks_.length;
    if (n === 0)
        return;

    var x = 66;
    var y = 704;

    solo_bank_ctrl = this.patcher.newdefault(x, y, "js", "djazz_solo_bank_ctrl.js", n);
    solo_bank_ctrl.varname = "solo_bank_ctrl";
    for (var i = 0; i < n; i++)
    {      
        this.patcher.connect(tracks_[i], 1, solo_bank_ctrl, i);
    }
}
set_solo_bank_ctrl_.local = 1;


function make_bank_dict_()
{
    var d = new Dict ();
    var a = tracks_.map(get_track_value_);
    dutils.set_dict_array(d, "tracks", a);
    post ("d.name =", d.name, "\n");
    return d;
}
make_bank_dict_.local = 1;
