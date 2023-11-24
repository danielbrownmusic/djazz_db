autowatch = 1;

var w = 160;
var h = 48;

var tracks_  = [];

function clear()
{
    remove_spray_();
    var n = tracks_.length;
    for (var i = 0; i < n; i++)
    {
        remove_last_track_();
    }
}


function set_tracks(n)
{
    clear();

    var spray = make_spray_(n);
    
    for (var i = 0; i < n; i++)
    {
        var x             = spray.rect[0] + w * i;
        var y             = spray.rect[3] + 2 * h;

        var track        = this.patcher.newdefault(x, y, "djazz_midi_play_track");
        track.varname    = "track_" + i;

        tracks_.push(track);
        this.patcher.connect(spray, i, track, 0);
    }
}


//-------------------------------------------------------------------------------------


function remove_last_track_()
{
    if (tracks_.length === 0)
        return;

    var track = tracks_.pop();
    this.patcher.remove(track);
}
remove_last_track_.local = 1;


function remove_spray_()
{
    var spray   = this.patcher.getnamed("spray");
    if (spray)
    {
        this.patcher.remove(spray);
    }
}
remove_spray_.local = 1;


function make_spray_(n)
{
    var events_inlet    = this.patcher.getnamed("events_inlet");

    var x_in        = events_inlet.rect[0];
    var y_in        = events_inlet.rect[3];

    var x_spray     = x_in;
    var y_spray     = y_in + 66;

    var spray       = this.patcher.newdefault(x_spray,  y_spray,  "spray",  n, 0, 1);
    spray.varname   = "spray";

    this.patcher.connect(events_inlet, 0, spray, 0);
    return spray;
}
make_spray_.local = 1;