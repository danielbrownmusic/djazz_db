var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effect_database_    = null;
var tracks_ = [];


function set_effect_database(effect_database)
{
    effect_database_ = effect_database;
}


function setvalueof(bank_dict)
{
    clear();
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

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
}


function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track();
    }
}



function add_track()
{
    var events_inlet    = this.patcher.getnamed("events_inlet");
    var events_outlet 	= this.patcher.getnamed("events_outlet");

    var i = tracks_.length;

    var w = 160;
    var h = 48;	

    var x = events_inlet.rect[0] + w * i;
    var y = this.box.rect[3] + 2 * h;

    var track 		    = this.patcher.newdefault(x, y, "djazz_midi_out_track");
    track.varname 	    = "track_" + i;
    tracks_.push(track);

    this.patcher.connect(events_inlet, 0, track, 0);
    this.patcher.connect(track, 0, events_outlet, 0);

    return track;
}


//----------------------------------------------------------------------------------------------------

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