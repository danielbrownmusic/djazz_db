autowatch = 1;

inlets = 2;

function make()
{
    var data = arrayfromargs(arguments);
    post ("making midi out bank ui ", data, "\n");
    for (var i = 0; i < data.length / 3; i++)
    {
        var j               = 3 * i;
        var i_bank          = data[j];
        var min_channel     = data[j + 1];
        var max_channel     = data[j + 2];
        var channel_count   = max_channel - min_channel + 1;

        var x = 0;
        var y = i * 236;
        var w = channel_count * 128;
        var h = 236;

        var bank = this.patcher.newdefault(x, y, "bpatcher",
        "@name",                "djazz_ui_midi_out_bank",
        "@args",                min_channel, max_channel,
        "@patching_rect",       [x, y + 230, w, h],
        "@presentation",        1,
        "@presentation_rect",   [0, y, w, h]);
        bank.varname = i_bank;
        post ("made controller bank ", bank.varname, "\n")

    }
}