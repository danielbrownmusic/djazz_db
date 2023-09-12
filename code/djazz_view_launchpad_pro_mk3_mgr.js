autowatch = 1;

inlets = 2;
outlets = 3;

// inlet 0: midi//cc values from controller device
// inlet 1: view values from system model, for changing controller layout

var chapter_     = null;
var chapters_    = Array(100);
var bars_        = Array(100);

var output_map_ = null; // new Dict("LAUNCHPAD_PRO_MK3_VIEW_MAPPINGS");

clear_chapters_();
clear_bars_();

// CTRL FUNCTIONS (INLET 0) ----------------------------

function list()
{
    var addr        = messagename;
    var state       = arguments[1];

    var type_key    = [addr, state, "type"].join("::");
    var type        = output_map.get(type_key);

    var value_key   = [addr, state, "value"].join("::");
    var value       = output_map.get(value_key);

    var color_key   = [addr, state, "color"].join("::");
    var color       = output_map.get(color_key);

    outlet(0, [type, value, color]);
}

var bar_offset_         = 19;
var chapter_count_  = 0;

var bar_count_  = 0;

var chapter_off_color_      = 25;
var chapter_on_color_       = 79;

var bar_off_color_      = 25;
var bar_on_color_       = 79;


function dictionary(name)
{
    output_map_      = new Dict(name);
    chapter_count_  = output_map_["metadata"]["chapter_count"];

    for (var i = 0; i < chapter_count_; i++)
    {
        var color   = off_color_;        
        var cell    = i + bar_offset_;
        var style   = 1;
        outlet(0, [color, cell, style]);
    } 
}

/* function chapter_count(n)
{
    chapter_count_ = n;
}
 */

function chapter_number(k)
{
    for (var i = 0; i < chapter_count_; i++)
    {
        var color   = i === k ? on_color_ : off_color_;        
        var cell    = i + offset_;
        var style   = 1;
        outlet(0, [color, cell, style]);

        var max_measure     = navigate_dict["chapters"][k][max_measure];
        var min_measure     = navigate_dict["chapters"][k][min_measure];
        var measure_count   = max_measure - min_measure;

        outlet(1, "measure_count", measure_count);
    }
}


function measure_count(n)
{
    measure_count_ = n;
}


function measure_number(k)
{
    for (var i = 0; i < measure_count_; i++)
    {
        var color   = i === k ? on_color_ : off_color_;
        var cell    = measure_to_cell(k);
        var style   = 1;
        outlet(0, [style, cell, color]);
    }
}


function measure_to_cell(i)
{
    return i = 81 - (i % 4) * 10;
}