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
// LAYOUT FUNCTIONS (INLET 1) ----------------------------



