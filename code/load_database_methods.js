autowatch = 1;
outlets = 2;


function load()
{
    var name        = make_database_name_(this.patcher.box.varname);
    var file_path   = arguments[0];

    var msg;

    msg = ["name", name];
    outlet (0, msg);

    msg = ["import", file_path];
    outlet (0, msg);

    msg = name;
    outlet(1, msg);
}


function make_database_name_()
{
    var box_name = arguments[0];
    return "djazz_database_" + box_name;
}
make_database_name_ = 1;