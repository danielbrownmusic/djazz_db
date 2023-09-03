autowatch = 1;

function make()
{
    var data = arrayfromargs(arguments);
    post (data, "\n");
    for (var i = 0; i < data.length / 3; i++)
    {
        var j               = 3 * i;
        var i_bank          = data[j];
        var min_channel     = data[j + 1];
        var max_channel     = data[j + 2];
        post (i, j, i_bank, "\n");
        var inl = this.patcher.getnamed("inlet");
        var outl = this.patcher.getnamed("outlet");

        var x = inl.rect[0] + i * 200;
        var y = (outl.rect[1] - inl.rect[3] - 22) / 2 + inl.rect[3];

        var bank = this.patcher.newdefault(x, y, "djazz_midi_out_bank", min_channel, max_channel);
        bank.varname = i_bank;
        post ("made model bank ", bank.varname, "\n")

        this.patcher.connect(inl, 0, bank, 0);
        this.patcher.connect(bank, 0, outl, 0);
    }
}