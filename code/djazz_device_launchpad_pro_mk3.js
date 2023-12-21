autowatch = 1;

/*
CHAPTERS
CC  89 79 69 59 49 39 29 19

BARS
MIDI    81 - 88
        71 - 78
        61 - 68
        51 - 58
*/


autowatch = 1;
outlets = 3;

var FORMATS_        = {"chapter" : "cc", "bar": "midi" };
var DEVICE_MAP_     = new Dict();
var VIEW_MAP_       = new Dict ();

var chapter_count_  = 0;
var offset_         = 19;


function connect(n)
{
    switch (n)
    {
        case 1:
            connect_();
            return;
        case 0:
            disconnect_();
            return;
    }
}


function connect_()
{
    var top_patch = this.box.patcher.box.patcher.box.patcher;
    var controller = top_patch.getnamed("djazz_controller");
    var lp_view = top_patch.newdefault(0, 0, "djazz_view_launchpad_pro_mk3");
    lp_view.varname = "launchpad_pro_mk3_view"
    top_patch.connect(lp_view, 0, controller, 0);
    top_patch.connect(controller, 0, lp_view, 0);
}
connect_.local = 1;


function disconnect_()
{
    var top_patch = this.box.patcher.box.patcher.box.patcher;
    var lp_view = top_patch.getnamed("launchpad_pro_mk3_view");
    top_patch.remove(lp_view);
}
disconnect_.local = 1;


//--------------------------------------------------------------------------------------


function load_device_map(file_path)
{
    DEVICE_MAP_.import_json(file_path);
    outlet (1, DEVICE_MAP_);
}


function load_preset_file(file_path)
{
    VIEW_MAP_.import_json(file_path);
    outlet (2, VIEW_MAP_);
}


//--------------------------------------------------------------------------------------

function chapter_count(n)
{
    chapter_count_ = n;
    set_all_chapters_off_();
    set_chapter_(0);
}


function grid()
{
    var [state, bar, bar_count, chapter] = arrayfromargs(arguments);
    set_chapter_(chapter);
    set_all_bars_off_(bar_count)
    set_bar_(bar, state);
}


// CHAPTER ---------------------------------------------------------------


function set_all_chapters_off_()
{
    for (var i = 0; i < chapter_count_; i++)
    {
        var msg = translate_grid_cell_("chapter", i, "off");
        outlet(0, msg);
    }
    for (var i = chapter_count_; i < row_count_; i++)
    {
        var msg = translate_grid_cell_("chapter", i, "unused");
        outlet(0, msg);
    }
}
set_all_chapters_off_.local = 1;


function set_chapter_(i)
{
    var msg = translate_grid_cell_("chapter", i, "on");
    outlet(0, msg);
}
set_chapter_.local = 1;


// BAR ---------------------------------------------------------------


function set_all_bars_off_(bar_count) {
    for (var i = 0; i < bar_count; i++)
    {
        var msg = translate_grid_cell_("bar", i, "off");
        outlet(0, msg);
    }
    for (var i = bar_count; i < column_count_; i++)
    {
        var msg = translate_grid_cell_("bar", i, "unused");
        outlet(0, msg);
    }
}
set_all_bars_off_.local = 1;


function set_bar_(i, state)
{
    var msg = translate_grid_cell_("bar", i, state);
    outlet(0, msg);
}
set_bar_.local = 1;


//--------------------------------------------------------------------------------------


function translate_parameter_(name, value)
{
    var srcname             = view_map.get("parameters").get(name).get("srcname").split(".");
    var ctrl_value          = srcname[0];
    var ctrl_type           = srcname[4];

    var d                   = view_map.get(name).get("values").get(value);
    var color_hue           = d.get("color").get("hue");
    var color_value         = d.get("color").get("value");
    var behavior            = d.get("behavior");

    return translate_(ctrl_type, ctrl_value, color_hue, color_value, behavior);
}
translate_parameter_.local = 1;


function translate_grid_cell_(cell_type, value, state)
{
    // cell_type: chapter, bar
    // value: number 0 - whatever
    // state: off, waiting, playing

    var color_hue   = view_map.get(type).get(state).get("color").get("hue");
    var color_value = view_map.get(type).get(state).get("color").get("value");
    var behavior    = view_map.get(type).get(state).get("behavior");   

    var ctrl_type   = FORMATS_[cell_type];
    var ctrl_value  = (ctrl_type === 'chapter') ? chapter_to_cell_(value) : bar_to_cell_(value);

    return translate_(ctrl_type, ctrl_value, color_hue, color_value, behavior);
}
translate_grid_cell_.local = 1;


function translate_(ctrl_type, ctrl_value, color_hue, color_value, behavior)
{
    var color_code          = device_color_map.get("colors").get(color_hue).get(color_value);
    var behavior_code       = device_color_map.get("behaviors").get(behavior);
    return [ctrl_type, ctrl_value, color_code, behavior_code];
}
translate_.local = 1;


//--------------------------------------------------------------------------------------

function chapter_to_cell_(i) {
    return 89 - 10 * i;
}


function bar_to_cell_(i)
{
    // v = 8 * q + p, or "qp" base 8
    var p = i % 8;
    var q = (i - p) / 8;
    return 81 - (10 * q) + p;
}

/* 
function bar_to_cell_(i) {
    return i = 81 - (i % 4) * 10;
}
 */




