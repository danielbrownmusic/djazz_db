var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var tracks_ = [];


function tracks(bank_dict_name, effect_menu_items_dict_name)
{
    clear();

    var d           = new Dict (bank_dict_name);
    var track_array = dutils.get_dict_array(d, "tracks");

    for (var i = 0; i < track_array.length; i++)
    {
        var track_dict_name = track_array[i].name;
        add_track_(track_dict_name);

        var msg     = "effects";
        var args    = [track_dict_name, effect_menu_items_dict_name];
        dispatch_(i, msg, args);
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

    var w = 264;
    var h = 132;	

    var x = this.box.rect[0] + w * i;
    var y = this.box.rect[3] + h;

    var track = this.patcher.newdefault(x, y, "djazz_midi_out_view_window_list");

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

function dispatch_(i, msg, args)
{
    var track   = tracks_[i];
    var addr    = [track.varname, "components"].join("::");    
    outlet (0, addr, msg, args);
}
dispatch_.local = 1;