autowatch = 1;

outlets = 2;


function load(file_path)
{
    var bank_dict = new Dict ();
    bank_dict.import_json(file_path);
    outlet (1, "name", bank_dict.name);
    outlet (1, "bang");
    var comp_mgr = get_midi_out_bank_component_mgr_();
    comp_mgr.message("bank_dict", bank_dict.name);
}


function save(file_path)
{
    var comp_mgr    = get_midi_out_bank_component_mgr_();
    var bank_dict   = new Dict (comp_mgr.getattr("bank_dict"));
    bank_dict.export_json(file_path);
}


function print()
{
    var comp_mgr    = get_midi_out_bank_component_mgr_();
    var bank_dict   = new Dict (comp_mgr.getattr("bank_dict"));
    outlet (1, "name", bank_dict.name);
    outlet (1, "bang");
}


function get_midi_out_bank_component_mgr_()
{
    //var midi_out_bank   = this.patcher.getnamed("midi_out_bank");
    var view            = this.patcher.getnamed("view");
    var midi_out_bank   = view.subpatcher().getnamed("midi_out_bank");
    var comp_mgr        = midi_out_bank.subpatcher().getnamed("components");

    return comp_mgr;
}
get_midi_out_bank_component_mgr_.local = 1;