autowatch = 1;

function bang()
{
    var d = new Dict("SONG_DATABASE");
    post(d.get("beats").get("1").get("chapter"));

}