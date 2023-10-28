autowatch = 1;

outlets = 3;

function get_chapter_data()
{
    var chapter_data = get_chapter_data_(arguments[0], arguments[1]);
    for (var i = 0; i < outlets; i++)
    {
        outlet(i, chapter_data[i]);
    }
}


function get_chapter_data_(song_database_name, chapter_number)
{
    var song_database           = new Dict(song_database_name);
    var chapter_database_name   = song_database.get("chapters").get(chapter_number.toString()).name;
    var chapter                 = new Dict();
    chapter.clone(chapter_database_name);

    var min_measure             = chapter.get("min_measure");
    var max_measure             = chapter.get("max_measure");
    var min_beat                = chapter.get("min_beat");
    var max_beat                = chapter.get("max_beat");

    chapter.freepeer();

    return [chapter_number, [min_measure, max_measure], [min_beat, max_beat]];

}

get_chapter_data_.local = 1;