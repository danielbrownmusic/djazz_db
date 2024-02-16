




exports.get_presets_file_path = function(folder_path)
{
    var f = new Folder (folder_path)
    while (!f.end)
    {
        var file_path = make_file_path_(folder_path, f.filename);
        switch (f.filename)
        {
            case presets_file_name:
            {
                return make_file_path_(folder_path, f.filename);
            }         
        }
        f.next();
    }
}


exports.get_components_file_path = function(folder_path)
{
    var f = new Folder (folder_path)
    while (!f.end)
    {
        var file_path = make_file_path_(folder_path, f.filename);
        switch (f.filename)
        {
            case components_file_name:
            {
                return make_file_path_(folder_path, f.filename);
            }         
        }
        f.next();
    }
}


function make_file_path_(folder_path, file_name)
{
    return [folder_path, file_name].join("/");
}
make_file_path_.local = 1;