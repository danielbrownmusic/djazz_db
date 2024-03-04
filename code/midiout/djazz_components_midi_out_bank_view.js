var dutils = require("db_dictionary_array_utils");

setinletassist  (0, "messages: clear, add_track, add_tracks + int, remove_last_track, remove_last_tracks + n, set_global (midi out port), track + int + msg + args");
setoutletassist (0, "for log/debug: component messages sent to tracks");

autowatch       = 1;
inlets          = 2;
outlets         = 2;

var tracks_     = [];

var x_patch_0   = 396;
var y_patch_0   = 66;
var x_pres_0    = 0;
var y_pres_0    = 52;
var w_track     = 128;
var h_track     = 440;


declareattribute("bank_dict", null, "set_bank_dict");

/* var size = [0, 0, x_pres_0, y_pres_0];
declareattribute("size");
 */
// ---------------------------------------------------------------------------


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
    return bank_dict;
}


function set_bank_dict(bank_dict)
{
    post ("setting bank dict in view\n");
    clear_();

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
    set_solo_bank_count_();
}


// -----------------------------------------------------------------------------------------------


function save_bank(file_path)
{
    var bank_dict = get_bank_dict();
    bank_dict.export_json(file_path);
}


function load_bank(file_path)
{
    var bank_dict = new Dict ();
    bank_dict.import_json(file_path);
    set_bank_dict(bank_dict);
}


function save_preset(file_path)
{
    outlet ( 1, "store", 1);
    outlet ( 1, "write", file_path);
}


function load_preset(file_path)
{
    outlet ( 1, "read", file_path);
    outlet ( 1, 1);
}


function save_bank_with_presets(components_file_path, presets_file_path)
{
    save_preset(presets_file_path);
    save_bank(components_file_path);
}


function load_bank_with_presets(components_file_path, presets_file_path)
{
    load_bank(components_file_path);
    var tsk = new Task
    (
        function ()
        {
            load_preset(presets_file_path);
        }
    )
    tsk.schedule(3000);
}


// -----------------------------------------------------------------------------------------------


function clear()
{
    clear_();
    outlet( 0, "clear");
}


function add_tracks(n)
{
    add_tracks_(n);
    set_solo_bank_count_();
    outlet (0, "add_tracks", n);
}


function add_track()
{
    add_track_();
    set_solo_bank_count_();
    outlet (0, "add_track");
}


function remove_last_tracks(n)
{
    remove_last_tracks_(n);
    set_solo_bank_count_();
    outlet (0, "remove_last_tracks", n);
}


function remove_last_track()
{
    remove_last_track_()
    set_solo_bank_count_();
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
    outlet (0, "track", i, msg, args);
}


//----------------------------------------------------------------


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
                                    "@args",                i,
                                    "@presentation",        1,
                                    "@patching_rect",       patching_rect,
                                    "@presentation_rect",   presentation_rect
                                    );
    track.varname           = track_name;

    tracks_.push(track);

    track.subpatcher().getnamed("midi_in_channel").setvalueof(i + 1);
    track.subpatcher().getnamed("midi_out_channel").setvalueof(i + 1);

    this.patcher.connect(track, 0, this.box, 1);
    this.patcher.connect(track, 1, get_solo_bank_(), 0);

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


function get_solo_bank_()
{
    return this.patcher.getnamed("solo_bank");
}
get_solo_bank_.local = 1;


function set_solo_bank_count_()
{
    get_solo_bank_().message("count", tracks_.length)
}
set_solo_bank_count_.local = 1;










/* function set_bank_dict_(bank_dict)
{
    clear_();

    //var bank_dict   = new Dict(bank_dict_name);
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
    //set_solo_bank_ctrl_();
}
set_bank_dict_.local = 1; */



/* function set_size_()
{
    x_pres = tracks_.length * w_track;
    size = [0, 0, x_pres, y_pres];
}
set_size_.local = 1;
 */






/* var x_solo_bank_ctrl = 396;
var y_solo_bank_ctrl = 374;

var x_funnel = 600;
var y_funnel = 374; */



/* function set_solo_bank_ctrl_size_()
{
    var solo_bank = this.patcher.getnamed("solo_bank"); */
/*     if (solo_bank)
    {
        this.patcher.remove(solo_bank);
    } */
/* 
    var n = tracks_.length; */


    /*     if (n === 0)
        return; */

    //solo_bank = this.patcher.newdefault(x_solo_bank_ctrl, y_solo_bank_ctrl, "js", "djazz_solo_bank_ctrl.js", n);
    //solo_bank.varname = "solo_bank";
    /* for (var i = 0; i < n; i++)
    {      
        this.patcher.connect(tracks_[i], 0, solo_bank, i);
    } */
/* } */
/* set_solo_bank_ctrl_.local = 1; */

/* 
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
        this.patcher.connect(tracks_[i], 1, funnel, i);
    }
    funnel.varname = "funnel";
}


 */