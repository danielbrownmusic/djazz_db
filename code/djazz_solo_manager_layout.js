autowatch = 1;

function loadbang()
{
    var n = jsarguments[1];

    var inl     = this.patcher.getnamed("in");
    var outl    = this.patcher.getnamed("out");

    var x = inl.rect[0];
    var y = inl.rect[3];
    var h = 44;

    var spray   = this.patcher.newdefault(x, y, "spray", n);
    y += h;
    var mgr     = this.patcher.newdefault(x, y, "js", "djazz_solo_manager.js", n);

    this.patcher.connect(inl, 0, spray, 0);
    for (var i = 0; i < n; i ++)
    {
        this.patcher.connect(spray, i, mgr, i);
    }
    this.patcher.connect(mgr, n, outl, 0);
}