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