autowatch = 1;

inlets = 2;
// inlet 0: midi//cc values from controller device
// inlet 1: view values from system model, for changing controller layout

var chapter_     = null;
var bar_         = null;

var chapters_    = Array(100);
var bars_        = Array(100);

clear_chapters_();
clear_bars_();

// CTRL FUNCTIONS (INLET 0) ----------------------------

function list()
{
    var ctrl_type   = messagename
    var ctrl_val    = arguments[1];

    switch (ctrl_type)
    {
        case ("midi"):
            bar_        = set_bar_(ctrl_val);
            break;
        case ("cc"):
            chapter_    = set_chapter_(ctrl_val);
            bar_        = 0;
            break;
    }
    var beat_waiting = grid_position_to_beat_(chapter_, bar_, 0);
    outlet(0, "beat_waiting", beat_waiting);
}


function set_chapter_(cc_val)
{
    chapter_ = chapters_[cc_val];
    outlet (0, [chapter_, 0, 0]);
}


function set_bar_(midi_val)
{
    bar_ = bars_[midi_val];
    outlet (0, [chapter_, bar_, 0]);
}


// LAYOUT FUNCTIONS (INLET 1) ----------------------------

/*
CHAPTERS
CC  89 79 69 59 49 39 29 19

BARS
MIDI    81 - 88
        71 - 78
        61 - 68
        51 - 58
*/

function set_chapters_in_song(n)
{
    clear_chapters_();
    for (var i = 0; i < n; i++)
    {
        var cc_val = chapter_to_cell(i);
        chapters_[cc_val] = i;
    }
}


function chapter_to_cell_(i)
{
    return 89 - 10 * i;
}


function set_bars_in_chapter(min_measure, max_measure)
{
    clear_bars_();
    for (var i = 0; i < max_measure - min_measure; i++)
    {
        var midi_val = bar_to_cell(i);
        bars_[midi_val] = i;
    }
}


function bar_to_cell_(i)
{
    // v = 8 * q + p, or "qp" base 8
    var p = i % 8;
    var q = (i - p) / 8;
    return 81 - (10 * q) + p;
}


function clear_chapters_()
{
    for (var i = 0; i < 100; i++)
    {
        chapters_[i] = null;
    }    
}
clear_chapters_.local = 1;


function clear_bars_()
{
    for (var i = 0; i < 100; i++)
    {
        bars_[i] = null;
    }
}
clear_bars_.local = 1;