autowatch = 1;

var cell_max = 100;

function msg_int(n)
{
    for (var i = 0; i < cell_max; i++)
    {
        var cell = this.patcher.getnamed(i);
        if (cell)
        {
            cell.message("set", i === n ? 1 : 0);            
        }
    }
}


function set_cell_color(midi_number, ctrl, color)
{}


function make_cell_matrix(i_max, j_max)
{
    var cells       = Array(i_max);
    var listeners   = Array(i_max);

    var connect_to = this.patcher.getnamed("selected_cell");

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
            
            var n    = coords_to_cell_number(i, j);

            var cell        = this.patcher.newdefault
            (
                x, y, 
                "textbutton"        ,
                "@text"             ,   n,
                "@texton"           ,   n,
                "@mode"             ,   1,
                "@patching_rect"    ,   [x, y, w, h],
                "@presentation"     ,   1,
                "@presentation_rect",   [x, y, w, h],
                "@usebgoncolor"     ,   1
            );
            cell.varname = n;
            this.patcher.connect(cell, 1, connect_to, 0);
        }
    }
}


function coords_to_cell_number(i, j)
{
    return 81 - (j * 10) + i;
} 