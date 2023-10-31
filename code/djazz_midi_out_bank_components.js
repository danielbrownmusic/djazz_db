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
        //effects(i, track_dict_name, effect_menu_items_dict_name);
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

    var track 		    = this.patcher.newdefault(x, y, "djazz_midi_out_track", t);
    track.varname 	    = "track_" + i;
    tracks_.push(track);

    this.patcher.connect(events_inlet, 0, track, 0);
    this.patcher.connect(track, 0, events_outlet, 0);

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
    var addr    = [track.varname, "effect_list", "components"].join("::");    
    outlet (0, addr, msg, args);
}
dispatch_.local = 1;




/* function effects(i, track_dict_name, effect_menu_items_dict_name)
{
    var track = tracks_[i];
    var addr = [track.varname, "effect_list", "components"].join("::");
    var msg = "effects";
    var args = [track_dict_name, effect_menu_items_dict_name];
} */






/* function make_spray_(track_count)
{
    var w = 160;
    var h = 48;	

    var x_spray = this.box.rect[0];
    var y_spray = this.box.rect[3] + h;

    var spray = this.patcher.newdefault(x_spray, y_spray, "spray", track_count, 0, 1);
    spray.varname = "spray";
    this.patcher.connect(this.box, 0, spray, 0);
}
make_spray_.local = 1; */






/* var solo_listeners 	= [];
var solo_values 	= [];
var any_solos		= null;
var any_solos_obj	= null; */

/* function on_solo_changed(data)
{
	var i = solo_listeners.indexOf(data.listener);
	solo_values[i] = data.value;
	any_solos = solo_values.some(function(e) { return e !== 0; }) ? 1 : 0;
	any_solos_obj.message(any_solos);

	for (var j = 0; j < tracks.length; j++)
	{
		var active 		= (solo_values[j] === any_solos) ? 1 : 0;
		var active_obj 	= tracks[j].subpatcher().getnamed("active");
		post (j, active, active_obj, "\n");
		active_obj.message(active);
	} 
} */




/* 

function anything()
{
	// Dispatch layout messages to individual tracks.

	//var a 			= arrayfromargs(messagename, arguments);
	//var t 			= messagename;

	// 5::effects::3 effect_name
	// 5::

	var track 		= this.patcher.getnamed(messagename);
	var track_mgr 	= track.subpatcher().getnamed("mgr");
	track_mgr.message(arguments);
}

 */