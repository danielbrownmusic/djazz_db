autowatch = 1;

function msg_int(n_chapters)
{
    var chapter_numbers = Array(n_chapters);
    for (var i = 0; i < n_chapters; i++)
    {
        chapter_numbers[i] = i + 1;
    }
    outlet(0, "tabs", chapter_numbers);
}