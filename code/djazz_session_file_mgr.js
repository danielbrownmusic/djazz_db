autowatch = 1;

function load_session_file()
{
    var session_file_full_path  = arguments[0];
    var d                       = new Dict ();
    d.import_json(session_file_full_path);

    var mgr     = this.patcher.getnamed("session_components_mgr");
    var msg     = "load_from_file";
    var args    = d.get("components");
    mgr.message(msg, args);


}