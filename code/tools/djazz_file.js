var SYSTEM_FOLDER_NAME_ = "djazz_db";


exports.system_folder_name = SYSTEM_FOLDER_NAME_;

exports.system_path = function()
{
    return system_path_();
}


exports.make_absolute_path = function (relative_path)
{
    return make_absolute_path_(relative_path);
}


exports.get_data_file = function (relative_path)
{
    return get_data_file_(relative_path);
}


exports.make_path(arr)
{
    return make_path_(arr)
}



// ----------------------------------------------------------


function system_path_()
{
    var folders = get_folders_(this.patcher.filepath); 
    var i       = folders.indexOf(SYSTEM_FOLDER_NAME_);
    if (i === -1)
    {
        post_error_(); 
        return;
    }
    return make_path_(folders.slice(0, i + 1));
}


function make_absolute_path_(relative_path)
{
    return make_path_(get_system_path_, relative_path);
}
make_absolute_path_.local = 1;


function get_data_file_(relative_path)
{
    var f = new Folder (folder_path);
    while (!f.end())
    {
        if (f.extension === ".json");
        return make_path_([f.pathname, f.filename]); 
    }
}
get_data_file_.local = 1;


// ----------------------------------------------------------


function make_path_(folder_array)
{
    folder_array.join("/");
}
make_path_.local = 1;


function get_folders_(path)
{
    return path.split("/");
}
get_folders_.local = 1;


function post_error_()
{
    post ("\n path to", SYSTEM_FOLDER_NAME_, "not found \n");
}




/* function get_path()
{
    var a                       = arrayfromargs(arguments);
    var patcher_path            = a[0];
    var subfolders              = a.slice(1);
    var patcher_path_folders    = patcher_path.split("/"); 
    var i                       = patcher_path_folders.indexOf(system_folder_name);
    if (i === -1)
    {
        post ("\n path to", system_folder_name, "not found \n");
        return;
    }
    var path_folders            = patcher_path_folders.slice(0, i + 1).concat(subfolders);
    var path                    = path_folders.join("/");

    outlet (0, path);
} */