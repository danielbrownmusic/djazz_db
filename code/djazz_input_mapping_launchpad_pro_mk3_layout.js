autowatch = 1;


function loadbang()
{
    var n_rows      = 8;
    var n_columns   = 8;

    var w_cell      = 144;
    var h_cell      = 144;
    var w_space     = 5;
    var h_space     = 5

    var w_table     = n_columns * (w_cell + w_space);
    var h_table     = n_rows * (h_cell + h_space);

    var commd_inl   = this.patcher.getnamed("commd_inlet");
    var color_inl   = this.patcher.getnamed("color_inlet");
    var outl        = this.patcher.getnamed("outlet");

    for (var i = 0; i < n_columns; i++)
    {
        for (var j = 0; j < n_rows; j ++)
        {
            var n = j * 10 + 11 + i;            // MIDI number
            var x = w_table - (i + 1) * (w_cell + w_space);
            var y = h_table - (j + 1) * (h_cell + h_space);

            var cell = this.patcher.newdefault(x, y, "bpatcher",
                                                "@name", "djazz_input_mapping_launchpad_pro_mk3_cell",
                                                "@args", "midi", n,
                                                "@presentation", 1,
                                                "@presentation_rect", [x, y, w_cell, h_cell],
                                                "@border", 1);
            this.patcher.connect(commd_inl, 0, cell, 0);
            this.patcher.connect(color_inl, 0, cell, 1);
            this.patcher.connect(cell, 0, outl, 0);
        }
    }
}