autowatch = 1;

function bang()
{
    var b = this.patcher.getnamed("tester");
    b.message("hiya", 4);
    b.message("booyeah", 1);
}