autowatch = 1;


function get_absolute_path(filename)
{
    var f = new File(filename);
    return f.foldername + "/" + filename;
}


function bang()
{
    var d = new Dict("MIDI_OUT");
    d.import_json(get_absolute_path("djazz_db/data/djazz_data_MIDI_EFFECTS.json"));
}