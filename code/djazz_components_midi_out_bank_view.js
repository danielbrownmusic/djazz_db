var dutils = require("db_dictionary_array_utils");

autowatch       = 1;
inlets          = 2;
outlets         = 2;

var tracks_     = [];

var x_patch_0   = 286;
var y_patch_0   = 66;
var x_pres_0    = 0;
var y_pres_0    = 0;
var w_track     = 128;
var h_track     = 216;


var bank_dict = null;
declareattribute("bank_dict", "get_bank_dict", "set_bank_dict");

var size = [0, 0, x_pres_0, y_pres_0];
declareattribute("size");


function get_bank_dict()
{
    var d = new Dict ();
    var a = tracks_.map(get_track_dict_);
    dutils.set_dict_array(d, "tracks", a);
    return d;
}


function set_bank_dict(bank_dict_name)
{
    set_bank_dict_(bank_dict_name);
    outlet( 0, "set_bank_dict", bank_dict_name);
}


function clear()
{
    clear_();
    outlet( 0, "clear");
}


function add_tracks(n)
{
    add_tracks_(n);
    outlet (0, "add_tracks", n);
}


function add_track()
{
    add_track_();
    outlet (0, "add_track");
}


function remove_last_tracks(n)
{
    remove_last_tracks_(n);
    outlet (0, "remove_last_tracks", n);
}


function remove_last_track_()
{
    remove_last_track_()
    outlet (0, "remove_last_track");
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

    get_track_components_mgr_(tracks_[i]).message(msg, args);
    outlet (1, "track", i, msg, args);
}

//----------------------------------------------------------------


function set_bank_dict_(bank_dict_name)
{
    clear();

    var bank_dict   = new Dict(bank_dict_name);
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    if (track_array === null)
        return;

    for (var i = 0; i < track_array.length; i++)
    {      
        var track           = add_track_();
        var comp            = get_track_components_mgr_(track);
        var effects_dict    = track_array[i];
        comp.message("setattr", "effects_dict", effects_dict); 
    }
    set_solo_bank_ctrl_();
}
set_bank_dict_.local = 1;


function clear_()
{
    remove_last_tracks_(tracks_.length);
}
clear_.local = 1;


function add_tracks_(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track_();
    }
}
add_tracks_.local = 1;


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

    track.subpatcher().getnamed("midi_in_channel").setvalueof(i + 1);
    track.subpatcher().getnamed("midi_out_channel").setvalueof(i + 1);

    set_solo_bank_ctrl_();
    make_funnel_();

    return track;
}
add_track_.local = 1;


function remove_last_tracks_(n)
{
    for (var i = 0; i < n; i++)
    {
        remove_last_track_();
    }
}
remove_last_tracks_.local = 1;


function remove_last_track_()
{
    if (tracks_.length === 0)
        return;
    this.patcher.remove(tracks_.pop());
    set_solo_bank_ctrl_();
    make_funnel_();
}
remove_last_track_.local = 1;


//--------------------------------------------------------------------------------


function list()
{
    if (inlet !== 1)
        return;

    var a           = arrayfromargs(arguments);
    var track_index = a[0];
    var msg         = a[1];
    var args        = a.slice(2);

    outlet (0, "track", track_index, msg, args);
}


//--------------------------------------------------------------------------------


function get_track_components_mgr_(track)
{
    var effect_list     = track.subpatcher().getnamed("effect_list")
    var components_mgr  = effect_list.subpatcher().getnamed("components");
    return components_mgr;

}
get_track_components_mgr_.local = 1;


function get_track_dict_(track)
{
    return get_track_components_mgr_(track).getattr("effects_dict");
}
get_track_dict_.local = 1;


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

    var x = 286;
    var y = 374;

    solo_bank_ctrl = this.patcher.newdefault(x, y, "js", "djazz_solo_bank_ctrl.js", n);
    solo_bank_ctrl.varname = "solo_bank_ctrl";
    for (var i = 0; i < n; i++)
    {      
        this.patcher.connect(tracks_[i], 0, solo_bank_ctrl, i);
    }
}
set_solo_bank_ctrl_.local = 1;


function make_funnel_()
{
    var funnel = this.patcher.getnamed("funnel");
    if (funnel)
    {
        this.patcher.remove(funnel);
    }

    var n = tracks_.length;
    if (n === 0)
        return;

    var x = 454;//this.box.rect[0] + 44;
    var y = 374;//this.box.rect[1] - 44;

    var funnel = this.patcher.newdefault(x, y, "funnel", n);
    this.patcher.connect(funnel, 0, this.box, 1);
    for (var i = 0; i < n; i++)
    {
        this.patcher.connect(tracks_[i], 2, funnel, i);
    }
    funnel.varname = "funnel";
}


function set_size_()
{
    x_pres = tracks_.length * w_track;
    size = [0, 0, x_pres, y_pres];
}
set_size_.local = 1;




/* function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict (effect_database_name);
    outlet( 1, effect_database_name);
} */