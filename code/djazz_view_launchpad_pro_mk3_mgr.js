autowatch = 1;

inlets = 2;
// inlet 0: midi//cc values from controller device
// inlet 1: view values from system model, for changing controller layout

// LAUNCHPAD PRO MK3 COLOR COMMANDS:
// []

var row_count_ = 8;
var column_count_ = 8;

var chapter_ = null;
var bar_ = null;

var chapters_ = [];
var bars_ = [];

var chapter_off_color_ = 25;
var chapter_on_color_ = 79;

var bar_off_color_ = 25;
var bar_on_color_ = 79;

var MESSAGE_FORMATS = new Dict("MESSAGE_FORMATS")
var LED_VIEWS       = new Dict("LED_VIEWS");
var COLOR_CODES     = new Dict("COLOR_CODES");
var BEHAVIOR_CODES  = new Dict("BEHAVIOR_CODES");

MESSAGE_FORMATS.parse(  '{"chapter" : "cc": "bar", "midi" }');
//LED_VIEWS.parse(        '{  "chapter" : {"on": { "color", "behavior" },  "off":        { "color", "behavior" }, "waiting":    { "color", "behavior" } }, "bar" :     {   "on":         { "color", "behavior" }, "off":        { "color", "behavior" },"waiting":    { "color", "behavior" } } }' );
COLOR_CODES.parse(      '{ "red" : 5, "orange" : 9, "yellow", 13, "green", 21, "blue", 37, "indigo", 41, "purple", 49 }' );
BEHAVIOR_CODES.parse(   '{ "static" : 1, "flashing" : 2, "pulsing" : 3 }');
LED_VIEWS.parse( '{ chapter_on_color, chapter_on_behavior, chapter_off_color, chapter_off_behavior, bar_on_color, bar_on_behavior, bar_off_color, bar_off_behavior }');

clear_chapters_();
clear_bars_();


// CTRL FUNCTIONS (INLET 0) ----------------------------

function beat(n, database_name) {
    var grid_position = get_grid_position(n, database_name);

    var chapter = grid_position[0];
    var bar = grid_position[1];

    if (chapter !== chapter_)
        set_chapter(chapter);

    if (bar !== bar_)
        set_bar(bar);
}


function get_grid_position(database_name, beat_number) {
    var d = new Dict(database_name);
    var chapter = d.get("beats").get(beat_number).get("chapter");
    var measure = d.get("beats").get(beat_number).get("measure");
    var position = d.get("beats").get(beat_number).get("position");

    d.freepeer();
    return [chapter, measure, position];
}


function set_chapter(i) {
    for (var i = 0; i < chapter_count_; i++) {
        var msg = translate_message("chapter", i, i === k ? "on" : "off"); //[color, chapters_[i], 1]
        outlet(0, msg);
    }
}


function set_bar(k) {
    for (var i = 0; i < bars_.length; i++) {
        var color = i === k ? on_color_ : off_color_;
        var cmd = [1, bars[i], color];
        outlet(0, cmd);
    }
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


function set_chapters_in_song_(n) {
    chapters_ = Array(n);
    for (var i = 0; i < n; i++) {
        chapters_[i] = chapter_to_cell_(i);
    }
    clear_chapters_();
}


function chapter_to_cell_(i) {
    return 89 - 10 * i;
}


function set_bars_in_chapter_(min_measure, max_measure) {
    var n = max_measure - min_measure;
    bars_ = Array(n);
    for (var i = 0; i < n; i++) {
        bars_[i] = bar_to_cell_(i);
    }
    clear_bars_();
}


function bar_to_cell_(i) {
    return i = 81 - (i % 4) * 10;
}


function clear_chapters_() {
    for (var i = 0; i < chapters_.length; i++)
    {
        var msg = translate_message("chapter", i, "off");
        outlet(0, msg);
    }
    for (var i = chapters_.length; i < row_count_; i++)
    {
        var msg = translate_message("chapter", i, "unused");
        outlet(0, msg);
    }
}
clear_chapters_.local = 1;


function clear_bars_() {
    for (var i = 0; i < bars_.length; i++)
    {
        var msg = translate_message("bar", i, "off");
        outlet(0, msg);
    }
    for (var i = bars_.length; i < column_count_; i++)
    {
        var msg = translate_message("bar", i, "unused");
        outlet(0, msg);
    }
}
clear_bars_.local = 1;


function translate_message_(type, value, state) //color, behavior)
{
    // type: chapter, bar
    // value: number 0 - whatever
    // state: on, off, waiting

    var color       = LED_VIEWS.get(type).get(state).get("color");
    var behavior    = LED_VIEWS.get(type).get(state).get("behavior");

    var color_code = COLOR_CODES.get(color);
    var behavior_code = BEHAVIOR_CODES.get(behavior);
    var msg_format = MESSAGE_FORMATS.get(type);

    var cell_number = msg_format === 'chapter' ? chapter_to_cell_(value) : bar_to_cell_(value);

    return [msg_format, cell_number, color_code, behavior_code];
}
translate_message_.local = 1;