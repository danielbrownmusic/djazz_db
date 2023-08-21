autowatch = 1;

function loadbang()
{
    set_tabs(0);
}


function set_tabs(n_chapters)
{
/*     if (n_chapters <= 0)
    {
        outlet(0, "tabs", " ");
        return;        
    } */

    var chapter_numbers = Array(n_chapters);
    for (var i = 0; i < n_chapters; i++)
    {
        chapter_numbers[i] = i + 1;
    }
    outlet(0, "tabs", chapter_numbers);
}