var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effect_database_    = null;
var tracks_ = [];


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
}


function setvalueof(bank_dict)
{
    clear();
    var track_array = dutils.get_dict_array(bank_dict, "tracks");

    for (var i = 0; i < track_array.length; i++)
    {      
        add_track_(track_array[i]);
    }
}


/* function getvalueof()
{
    var d = new Dict ();
    var a = tracks_.map( function (t) { return t.getvalue(); } );
    dutils.set_dict_array(d, "tracks", a);
    return d;
}
 */

function add_tracks(n)
{
    for (var i = 0; i < n; i++)
    {
        add_track_();
    }
}


function track()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);

    message_track_(tracks_[i], msg, args);
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

    var track = this.patcher.newdefault(x, y, "djazz_midi_out_track_window");

    track.varname = "track_" + i;

    var track_dict = arguments ? arguments[0] : null;
    
    message_track_(track, "set_effect_database", effect_database_);
    message_track_(track, "set_value_silent", track_dict);    

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

function message_track_(track, msg, args)
{
    var addr    = [track.varname, "components"].join("::");    
    outlet (0, addr, msg, args);
}
message_track_.local = 1;