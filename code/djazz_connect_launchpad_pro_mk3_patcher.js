autowatch = 1;


function msg_int(n)
{
    switch (n)
    {
        case 1:
            connect();
            return;
        case 0:
            disconnect();
            return;
    }
}


function connect()
{
    var top_patch = this.box.patcher.box.patcher.box.patcher;
    var controller = top_patch.getnamed("djazz_controller");
    var lp_view = top_patch.newdefault(0, 0, "djazz_view_launchpad_pro_mk3");
    lp_view.varname = "launchpad_pro_mk3_view"
    top_patch.connect(lp_view, 0, controller, 0);
    top_patch.connect(controller, 0, lp_view, 0);
}


function disconnect()
{
    var top_patch = this.box.patcher.box.patcher.box.patcher;
    var lp_view = top_patch.getnamed("launchpad_pro_mk3_view");
    top_patch.remove(lp_view);
}