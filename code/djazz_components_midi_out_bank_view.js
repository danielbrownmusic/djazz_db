var dutils = require("db_dictionary_array_utils");

autowatch = 1;
outlets = 2;

var effect_database_    = null;
var tracks_             = [];

var x_patch_0   = 0;
var y_patch_0   = 352;
var x_pres_0    = 0;
var y_pres_0    = 0;
var w_track     = 128;
var h_track     = 216;

//var size = [0, 0, x_pres, y_pres];
//declareattribute("size");


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict (effect_database_name);
}


function get_tracks()
{
    var d = new Dict ();
    var a = tracks_.map(get_track_value_);
    dutils.set_dict_array(d, "tracks", a);
    return d;
}


function load(bank_dict_name)
{
    clear();

    var bank_dict   = new Dict(bank_dict_name);
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    for (var i = 0; i < track_array.length; i++)
    {      
        add_track_(track_array[i]);
    }
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
    //set_size_();
}


function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track_();
    }
}


function forward_message(msg)
{
    post ("forwarding message", msg.get("effects")[0], "\n");
    outlet(1, arrayfromargs(msg));
}


//----------------------------------------------------------------------------------------------------

function add_track_()
{
    var i           = tracks_.length;

    var x_patch     = x_patch_0 + w_track * i;
    var y_patch     = y_patch_0;
    var x_pres      = x_pres_0 + w_track * i;
    var y_pres      = y_pres_0;

    var patching_rect       = [x_patch, y_patch, w_track, h_track];
    var presentation_rect   = [x_pres, y_pres, w_track, h_track];

    var track_name = "track_" + i;
    var track = this.patcher.newdefault
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
    track.varname = track_name;
    tracks_.push(track);

    var track_dict = arguments ? arguments[0] : null;

    message_track_(track, "set_effect_database",    effect_database_.name);    
/*     message_track_(track, "set_value_silent",       track_dict);
    message_track_(track, "set_bank_listener",      this); */
    //set_size_();

    return track;
}
add_track_.local = 1;


function remove_last_track_()
{
    if (tracks_.length === 0)
        return;
    
    var track = tracks_.pop();
    this.patcher.remove(track);
}
remove_last_track_.local = 1;


function message_track_(track, msg, args)
{
    var addr = [track.varname, "components"].join("::");
    outlet (0, addr, msg, args);
}
message_track_.local = 1;


function get_track_value_(track)
{
    return track.subpatcher().getnamed("components").get_value();
}
get_track_value_.local = 1;


function set_size_()
{
    x_pres = tracks_.length * w_track;
    size = [0, 0, x_pres, y_pres];
}
set_size_.local = 1;


/* function get_track_components_mgr_(track)
{
    return track.subpatcher().getnamed("components");
}
get_track_components_mgr_.local = 1; */



/* function message_track_(track, msg, args)
{
    var addr    = [track.varname, "components"].join("::");    
    outlet (0, addr, msg, args);
}
message_track_.local = 1; */









