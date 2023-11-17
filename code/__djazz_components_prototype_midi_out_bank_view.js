var c = require("djazz_components_midi_out_prototype");

autowatch = 1;

var bank = new MidiOutBank();


var x_patch_0   = 0;
var y_patch_0   = 0;
var x_patch     = x_patch_0;
var y_patch     = y_patch_0;

var x_pres_0    = 0;
var y_pres_0    = 0;
var x_pres      = x_pres_0;
var y_pres      = y_pres_0;

var w_track     = 128;
var h_track     = 216;

var size = [0, 0, x_pres, y_pres];
declareattribute("size");


function set_effect_database(effect_database)
{
    effect_database_ = effect_database;
}


function setvalueof(bank_dict)
{
    clear();
    var track_array = dutils.get_dict_array(bank_database, "tracks");

    for (var i = 0; i < track_array.length; i++)
    {      
        var track       = add_track();
        var comp        = get_track_components_mgr_(track);
        var track_dict  = track_array[i];  

        comp.message("set_effect_database", effect_database_);
        comp.setvalue(track_dict);
    }
}


function getvalueof()
{
    var d = new Dict ();
    var a = tracks_.map( function (t) { return t.getvalue(); } );
    dutils.set_dict_array(d, "tracks", a);
    return d;
}


function track()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);
    var comp    = get_track_components_mgr_(tracks_[i]);

    comp.message(msg, args);
}


function clear()
{
    var l = tracks_.length;
    for (var i = 0; i < l; i++)
    {
        remove_last_track_();
    }
    set_size_();
}


function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track();
    }
}




//----------------------------------------------------------------------------------------------------

function add_track_()
{
    var i = tracks_.length;

    var patching_rect       = [x_patch, y_patch, w_track, h_track];
    var presentation_rect   = [x_pres, y_pres, w_track, h_track];

    var track = this.patcher.newdefault
                                    (
                                    x_patch, 
                                    y_patch, 
                                    "bpatcher", 
                                    "@name",                "djazz_midi_out_view_track", 
                                    "@args",                i,
                                    "@presentation",        1,
                                    "@patching_rect",       patching_rect,
                                    "@presentation_rect",   presentation_rect
                                    );
    track.varname = "track_" + i;
    tracks_.push(track);

    set_size_();

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


function get_track_components_mgr_(track)
{
    return track.subpatcher().getnamed("components");
}
get_track_components_mgr_.local = 1;


function set_size_()
{
    x_pres = tracks_.length * w_track;
    size = [0, 0, x_pres, y_pres];
}
set_size_.local = 1;


/* function message_track_(track, msg, args)
{
    var addr    = [track.varname, "components"].join("::");    
    outlet (0, addr, msg, args);
}
message_track_.local = 1; */









