autowatch = 1;

var device_views_       = [];
var device_folder_path_ = [];


function append(name)
{
    var device_view = make_device_view_(name);
    device_views_.push(device_view);
}


function make_device_view_(name)
{
    var pcontrol        = this.patcher.getnamed("pcontrol");
    var h               = 66;
    var x               = pcontrol.rect[0];
    var y               = pcontrol.rect[3] + h;
    var patcher_class   = get_patcher_class_(name);

    if (!patcher_class)
        return;

    var device_view     = this.patcher.newdefault(x, y, patcher_class);
    device_view.varname = make_varname_(name);
    
    this.patcher.connect(pcontrol, 0, device_view, 0);

    return device_view;
}
make_device_view_.local = 1;


function get_patcher_class_(name)
{
    var folder_path = [device_folder_path_, name, "view"].join("/");
    var f           = new Folder ( folder_path );
    f.reset();
    while (!f.end)
    {
        if (f.filetype === "JSON")
        {
            return f.filename;
        }
        f.next();
    }
}
get_patcher_class_.local = 1;


function make_varname_(name)
{
    return name.split(" ").join("_");
}
make_varname_.local = 1;