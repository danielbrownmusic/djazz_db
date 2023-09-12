autowatch = 1;

inlets = 2;
// inlet 0: midi//cc values from controller device
// inlet 1: view values from system model, for changing controller layout

var chapter_     = null;
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
            set_bar(ctrl_val);
            break;
        case ("cc"):
            set_chapter(ctrl_val);
            break;
    }
}


function set_chapter(cc_val)
{
    var chapter = chapters_[cc_val];
    outlet (0, [chapter, 0, 0]);
}


function set_bar(midi_val)
{
    var bar = bars_[midi_val];
    outlet (0, [chapter_, bar, 0]);
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

function set_chapter_tabs(n)
{
    clear_chapters_();
    for (var v = 0; v < n; v++)
    {
        var i = 89 - 10 * v;
        chapters_[i] = v;
    }
}


function set_bar_tabs(n, min_measure, max_measure)
{
    clear_bars_();
    chapter_ = n;
    var m = max_measure - min_measure;
    for (var v = 0; v < m; v++)
    {
        // v = 8 * q + p, or "qp" base 8
        var p = v % 8;
        var q = (v - p) / 8;
        var i = 81 - (10 * q) + p;
        bars_[i] = v;
    }
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



