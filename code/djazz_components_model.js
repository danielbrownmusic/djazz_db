autowatch = 1;

function list()
{
    var a               = arrayfromargs(arguments);
    var addr            = a[0];
    var msg             = a[1];
    var args            = a.slice(2);
    var comp_mgr        = get_components_mgr_(addr);

    comp_mgr.message(msg, args);
    outlet (0, addr, msg, args);
}

//-------------------------------------------------------------------------

function get_components_mgr_(addr)
{
    return this.patcher.getnamed(addr).subpatcher().getnamed("components");
}
get_components_mgr_.local = 1;