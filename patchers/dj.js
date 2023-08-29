autowatch = 1;

function loadbang()
{
    var obj_name    = jsarguments[1];
    var addr        = jsarguments[2];
    var name        = jsarguments[3];

    if (!obj_name)
    {
        post("dj: no object name given.", "\n")
        return;
    }

    if (!addr)
    {
        post("dj: warning--no addr given for object ", obj_name, "\n")
    }

    var x = 22;
    var y =  160;
    var obj = this.patcher.newdefault(x, y, obj_name);
    if (!obj)
    {
        post("dj: no object named ", obj_name, "\n");
        return;
    }

    if (name)
    {
        obj.varname = name;
    }
    
    var route = this.patcher.getnamed("route");
    var prepend = this.patcher.getnamed("prepend");
    this.patcher.connect(route, 0, obj, 0);
    this.patcher.connect(obj, 0, prepend, 0);
}