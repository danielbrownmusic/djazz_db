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
        effects(i, track_dict_name, effect_menu_items_dict_name);
    }
}


function effects(i, track_dict_name, effect_menu_items_dict_name)
{
    var track = tracks_[i];
    var addr = [track.varname, "effect_list", "components"].join("::");
    var msg = "effects";
    var args = [track_dict_name, effect_menu_items_dict_name];
    outlet (0, addr, msg, args);
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


function add_track_(track_dict_name)
{
    var events_inlet    = this.patcher.getnamed("events_inlet");
    var events_outlet 	= this.patcher.getnamed("events_outlet");

    var i = tracks_.length;

    var w = 160;
    var h = 48;	

    var x = events_inlet.rect[0] + w * i;
    var y = this.box.rect[3] + 2 * h;

    var d = new Dict(track_dict_name);
    var t = d.get("number");

    var track 		    = this.patcher.newdefault(x, y, "djazz_midi_out_view_window_list", t);
    track.varname 	    = "track_" + i;
    tracks_.push(track);

    this.patcher.connect(events_inlet, 0, track, 0);


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