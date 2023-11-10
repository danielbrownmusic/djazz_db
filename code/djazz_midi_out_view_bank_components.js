var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var tracks_ = [];


function bank(bank_dict, effect_menu_items_dict)
{
    clear();
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    for (var i = 0; i < track_array.length; i++)
    {
        var track_dict = track_array[i];        
        add_track_(track_dict);
        message_track_(i, "effects", [track_dict, effect_menu_items_dict]);
    }
}


function track()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);

    dispatch_(i, msg, args);
}


function clear()
{
    var l = tracks_.length;
    for (var i = 0; i < l; i++)
    {
        remove_last_track_();
    }
}

//----------------------------------------------------------------------------------------------------


function add_track_()
{
    var i = tracks_.length;

    var w = 128;
    var h = 216;
	var x = 22 + w * i;
	var y = 220;

    var patching_rect = [x, y, w, h];

    var w_pres  = 128;
    var h_pres  = 216;
	var x_pres  = w_pres * i;
	var y_pres  = 0;
	
    var presentation_rect = [x_pres, y_pres, w_pres, h_pres];

    var track = this.patcher.newdefault
                                    (
                                    x, y, 
                                    "bpatcher", 
                                    "@name",                "djazz_midi_out_view_track", 
                                    "@args",                i,
                                    "@presentation",        1,
                                    "@patching_rect",       patching_rect,
                                    "@presentation_rect",   presentation_rect
                                    );
    track.varname = "track_" + i;
    tracks_.push(track);

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


//----------------------------------------------------------------------------------------------------

function message_track_(i, msg, args)
{
    var track   = tracks_[i];
    var addr    = [track.varname, "components"].join("::");    
    outlet (0, addr, msg, args);
}
message_track_.local = 1;