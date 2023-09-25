

// ---------------------------------------------------------------------------------------



inlets = 2;

autowatch = 1;

inlets = 2;

var mk3_dict    = new Dict ("*LAUNCHPAD_MK3_PRO_VIEW*");
/* var color_dict  = new Dict ("*LAUNCHPAD_PRO_MK3_COLORS*");

color_dict.replace("red::mk3", 5);
color_dict.replace("red::max", [255, 0, 0]);

color_dict.replace("orange::mk3", 9);
color_dict.replace("orange::max", [255, 64, 0]);

color_dict.replace("yellow::mk3", 13);
color_dict.replace("yellow::max", [255, 255, 0]);

color_dict.replace("green::mk3", 21);
color_dict.replace("green::max", [0, 255, 0]);

color_dict.replace("blue::mk3", 37);
color_dict.replace("blue::max", [0, 255, 255]);

color_dict.replace("indigo::mk3", 41);
color_dict.replace("indigo::max", [0, 0, 255]);

color_dict.replace("violet::mk3", 49);
color_dict.replace("violet::max", [255, 0, 255]);
 */



for (var i = 1; i < 5; i++)
{
    for (var j = 1; j < 10; j++)
    {
        var m = 10 * i + j;
        var key;
        
        mk3_dict.replace(m);

        mk3_dict.set([m, "x"].join("::"), i);
        mk3_dict.set([m, "y"].join("::"), j);

        mk3_dict.set([m, "on_color"].join("::"));
        mk3_dict.set([m, "off_color"].join("::"));
    }
}


function set_color(midi_number, ctrl, color)
{
    ["mk3", "max"].forEach
    ( 
        function (t)
        {
            var key = [midi_number, ctrl, t].join("::");
            var val = color_dict.get([color, t].join("::"));
            mk3_dict.replace(key, val);
        }
    )

    var cell = this.patcher.getnamed(midi_number);
    var attr = ctrl == "on_color" ? "bgoncolor" : "bgcolor";
    var max_color = color_dict.get([color, "max"].join("::"));
    cell.setattr(attr, max_color);
    outlet(0, "bang");
}




autowatch = 1;




/* function get_chapter_measures(database_name, beat_num)
{
    var d = new Dict(database_name);
    var chapter = d["beats"][beat_num]["chapter"];
    var min_max_measures = d["chapters"]["min_max_measures"];
    return min_max_measures;
} */





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

var bar_count_  = 0;


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




function measure_count(n)
{
    measure_count_ = n;
}






function set_chapter_tabs(n_chapters)
{
    outlet(0, "tabs", make_tabs_(1, n_chapters + 1));
}


function set_measure_tabs(min_measure, max_measure)
{
    outlet(0, "tabs", make_tabs_(min_measure + 1, max_measure + 1));
}


function make_tabs_(i_min, i_max)
{
    var a = Array(i_max - i_min);
    for (var i = i_min; i < i_max; i++)
    {
        a[i] = i;
    }
    return a;
}
make_tabs_.local = 1;


autowatch = 1;


function convert_grid_position_to_beat(song_database_name, grid_position)
{
    var chapter     = grid_position[0];
    var measure     = grid_position[1];
    var position    = grid_position[2];

    var song_dict = Dict(song_database_name);
    var beat_number = song_dict.get("grid").get(chapter).get(measure).get(position);

    return beat_number;
}





function convert_grid_position_to_beat(database_name, grid_position)
{
    var chapter     = grid_position[0];
    var measure     = grid_position[1];
    var position    = grid_position[2];

    var d = Dict(database_name);
    //var beat_number = d.get("grid").get(chapter).get(measure).get(position);
    var beat_number = d["grid"][chapter][measure][position];
    d.freepeer();
    return beat_number;
}




function get_chapter_data(database_name, chapter_number)
{
    post (database_name, chapter_number);
    var d           = new Dict(database_name);
    var min_measure = d.get("chapters").get(chapter_number).get("min_measure");
    var max_measure = d.get("chapters").get(chapter_number).get("max_measure");
    var min_beat    = d.get("chapters").get(chapter_number).get("min_beat");
    var max_beat    = d.get("chapters").get(chapter_number).get("max_beat");

    d.freepeer();

    outlet(0, [min_measure, max_measure, min_beat, max_beat]);

}

var max_measure     = navigate_dict["chapters"][k][max_measure];
var min_measure     = navigate_dict["chapters"][k][min_measure];
var measure_count   = max_measure - min_measure;

outlet(1, "measure_count", measure_count);