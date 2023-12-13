var dutils = require("db_dictionary_array_utils");

autowatch       = 1;
inlets          = 2;
outlets         = 2;

var tracks_     = [];

var x_patch_0   = 792;
var y_patch_0   = 66;
var x_pres_0    = 0;
var y_pres_0    = 52;
var w_track     = 128;
var h_track     = 282;

var x_solo_bank_ctrl = 792;
var y_solo_bank_ctrl = 374;

var x_funnel = 990;
var y_funnel = 374;


declareattribute("bank_dict", "get_bank_dict", "set_bank_dict");

var size = [0, 0, x_pres_0, y_pres_0];
declareattribute("size");


function get_bank_dict()
{
    var bank_dict = new Dict ();
    for (var i = 0; i < tracks_.length; i++)
    {
        var track           = tracks_[i];
        var comp_mgr        = get_track_components_mgr_(track);
        var track_dict_name = comp_mgr.getattr("effects_dict");
        var track_dict      = new Dict (track_dict_name);
        bank_dict.append("tracks", track_dict);
    }
    return bank_dict.name;
}


function set_bank_dict(bank_dict_name)
{
    post ("setting attribute.\n");
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


function remove_last_track()
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


function set_global(parameter, value)
{
    tracks_.forEach
    (
        function (track)
        {
            track.subpatcher().getnamed(parameter).setvalueof(value);
        }
    );
}


//----------------------------------------------------------------


function set_bank_dict_(bank_dict_name)
{
    clear_();

    var bank_dict   = new Dict(bank_dict_name);
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    if (track_array === null)
        return;

    for (var i = 0; i < track_array.length; i++)
    {      
        var track           = add_track_();
        var comp            = get_track_components_mgr_(track);
        var effects_dict    = track_array[i];
        comp.message("effects_dict", effects_dict.name); 
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


function set_solo_bank_ctrl_()
{
    var solo_bank = this.patcher.getnamed("solo_bank");
    if (solo_bank)
    {
        this.patcher.remove(solo_bank);
    }

    var n = tracks_.length;
    if (n === 0)
        return;

    solo_bank = this.patcher.newdefault(x_solo_bank_ctrl, y_solo_bank_ctrl, "js", "djazz_solo_bank_ctrl.js", n);
    solo_bank.varname = "solo_bank";
    for (var i = 0; i < n; i++)
    {      
        this.patcher.connect(tracks_[i], 0, solo_bank, i);
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

    var funnel = this.patcher.newdefault(x_funnel, y_funnel, "funnel", n);
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