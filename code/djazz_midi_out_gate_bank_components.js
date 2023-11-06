autowatch = 1;


function loadbang()
{
    var n = jsarguments[1];

    for (var i = 0; i < n; i++)
    {
        var x = 0;
        var y = 0;
        var gate = this.patcher.newdefault(x, y, "gswitch2");
        gate.varname = i;
    }


}