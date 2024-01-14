autowatch = 1;


function load(folder_name)
{
    var f = new Folder (folder_name + "/main");
    while (!f.end) {
        post(f.filename);
        post();
        f.next();
      }
}