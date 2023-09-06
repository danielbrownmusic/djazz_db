autowatch = 1;




var color_picker = [];

var cells           = [];
var listeners       = [];
var selected_cell   = null;



function make_cell_matrix(i_max, j_max)
{
    var cells       = Array(i_max);
    var listeners   = Array(i_max);

    for (var i = 0; i < i_max; i++)
    {
        cells[i]        = Array(j_max);
        listeners[i]    = Array(j_max);

        for (var j = 0; j < j_max; j++)
        {
            var w = 44;
            var h = 44;

            var x_start = 40;
            var y_start = 40;

            var x = x_start + i * w;
            var y = y_start + j * h;
            
            var cell        = this.patcher.newdefault(x, y, "textbutton");
            cell.text    = coords_to_cell_number(i, j);
            cell.texton    = coords_to_cell_number(i, j);

/*             cells[i][j]     = cell;

            var listener    = new MaxobjListener(cell, on_cell_clicked);
            listeners[i][j] = listener; */
        }
    }
}

/*

5           255 0 0
9           255 64 0
13          255 255 0
21          0 255 0
37          0 255 255
41           0 0 255
49          255 0 255

*/
/* 
var color_dict = new Dict ("*LAUNCHPAD_PRO_MK3_COLORS*");

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



var mk3_dict = new Dict ("*LAUNCHPAD_MK3_PRO_VIEW*");
for (var i = 1; i < 5; i++)
{
    for (var j = 1; j < 10; j++)
    {
        var m = 10 * i + j;
        var key;
        
        mk3_dict.replace(m);

        mk3_dict[m].set("x", i);
        mk3_dict[m],set("y", j);

        mk3_dict[m].replace("on_color");
        mk3_dict[m].replace("off_color");
    }
}

mk3_dict.replace();



function on_cell_clicked(data)
{
    if (data.value === 1)
    {
        selected_cell = data.maxobj.varname;
        update_cells(selected_cell);
    }
}


function update_cells(n)
{
    for (var i = 0; i < i_max; i++)
    {
        for (var j = 0; j < j_max; j++)
        {
            cells[i][j].message(cells.varname === n ? 1 : 0);
        }    
    }
}


function loadbang()
{
    var i_max = jsarguments[1];
    var j_max = jsarguments[2];

    make_cell_matrix(i_max, j_max);
    make_color_picker();
}


function set_on_color(color)
{
    if (selected_cell)
    {

    }
}



function make_color_picker()
{
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    for (var i = 0; i < colors.length; i++)
    {
        var color = colors[i];

        var w = 44;
        var h = 44;

        var x_start = 40;
        var y_start = 40;
 
        var x = x_start + i * w;
        var y = y_start;

        var rgb = color_dict[color]['max'];
        var color_button = this.patcher.newdefault(x, y,"textbutton", 
                                                "@text",        color, 
                                                "@texton",      color,
                                                "@textcolor",   rgb,
                                                "@textoncolor", rgb,
                                                "@bgcolor",     rgb,
                                                "@bgoncolor",   rgb);
        this.patcher.connect(color_button, 1, this.box, 0);
    }
}






function coords_to_cell_number(i, j)
{
    return 81 - (j * 10) + i;
} */