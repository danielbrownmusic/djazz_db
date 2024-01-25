autowatch = 1;

var system_folder_name = "djazz_db";

function get_path()
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
}