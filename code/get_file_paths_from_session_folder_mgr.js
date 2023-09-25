autowatch = 1;

function get_file_paths(folder_path)
{
    var f = new Folder(folder_path);

    var session_name = folder_path.filename;

    while (!f.end)
    {
        var file_name = f.filename.replace(f.extension, "");
        var file_path = f.pathname + "/" + f.filename;
        outlet(0, file_name, file_path);
    }
}