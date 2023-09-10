autowatch = 1;


function get_beat_data(database_name, beat_number)
{
    var d           = new Dict(database_name);
    var chapter     = d.get("beats").get(beat_number).get("chapter");
    var measure     = d.get("beats").get(beat_number).get("measure");
    var position    = d.get("beats").get(beat_number).get("position"); 

    d.freepeer();
    outlet (0, [beat_number, chapter, measure, position]);
}


function get_chapter_data(database_name, chapter_number)
{
    post (database_name, chapter_number);
    var d           = new Dict(database_name);
    var min_measure = d.get("chapters").get(chapter_number).get("min_measure");
    var max_measure = d.get("chapters").get(chapter_number).get("max_measure");
    var min_beat    = d.get("chapters").get(chapter_number).get("min_beat");
    var max_beat    = d.get("chapters").get(chapter_number).get("max_beat");

    d.freepeer();

    outlet(0, [chapter_number, min_measure, max_measure, min_beat, max_beat]);

}


/* function get_chapter_measures(database_name, beat_num)
{
    var d = new Dict(database_name);
    var chapter = d["beats"][beat_num]["chapter"];
    var min_max_measures = d["chapters"]["min_max_measures"];
    return min_max_measures;
} */