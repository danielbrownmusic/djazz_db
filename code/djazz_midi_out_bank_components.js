var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var tracks_ = [];

var w_              = 0;
var h_              = 0;
var x_spray_        = 0;
var y_spray_        = 0;
var x_funnel_       = 0;
var y_funnel_       = 0;
var x_effect_list_  = 0;
var y_effect_list_  = 0;


function loadbang()
{
    var inl 	= this.patcher.getnamed("event_inlet");
    var outl 	= this.patcher.getnamed("event_outlet");

    var x_inlet 	= inl.rect[0];
    var y_inlet 	= inl.rect[3];

    w_ = 160;
    h_ = 48;	

    x_spray_ = x_inlet;
    y_spray_ = y_inlet + h_;
    x_funnel_ = x_inlet;
    y_funnel_ = y_inlet + 5 * h_;
    x_effect_list_ = x_inlet;
    y_effect_list_ = y_inlet + 4 * h_;
}


function set_tracks(tracks_dict_name, effect_menu_items_dict_name)
{
    var d           = new Dict (tracks_dict_name);
    var min_track   = d.get("min_track");
    var max_track   = d.get("max_track");
    var track_array = dutils.get_dict_array(d, "tracks");
    var track_count = track_array.length();

    var spray = this.patcher.newdefault(x_spray_, y_spray_, "spray", track_count, min_track, 1);
    this.patcher.connect(inl, 0, spray, 0);

    var funnel 	= this.patcher.newdefault(x_funnel_, y_funnel_, "funnel", track_count, min_track);
    this.patcher.connect(funnel, 0, outl, 0);

    for (var i = 0; i < track_array.length; i++)
    {
        var track_dict_name = dutils.get_dict_array(track_array[i], "effects").name;
        add_track_(effect_menu_items_dict_name, track_dict_name);
    }
}


function set_track_effects(i, effect_menu_items_dict_name, effect_name_array)
{
    set_track_effects_(tracks_[i], effect_menu_items_dict_name, effect_name_array);
}


//----------------------------------------------------------------------------------------------------


function add_track_(effect_menu_items_dict_name, track_dict_name)
{
    var i = tracks_.length;

    var x = x_effect_list_ + w_ * i;
    var y = x_effect_list_ + 2 * h_;

    var d = new Dict(track_dict_name);
    var t = d.get("number");

    var track 		    = this.patcher.newdefault(x, y, "djazz_midi_out_track", t);
    track.varname 	    = i;
    tracks_.push(track);

    var effect_name_array = d.get("effects");
    set_track_effects_(track, effect_menu_items_dict_name, effect_name_array);

    this.patcher.connect(spray, i, track,  0);
    this.patcher.connect(track,	0, funnel, i);
}


function set_track_effects_(track, effect_menu_items_dict_name, effect_name_array)
{
    track.getname("effect_list").getname("components").message("set_effects", effect_menu_items_dict_name, effect_name_array);
}
set_track_effects_.local = 1;












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