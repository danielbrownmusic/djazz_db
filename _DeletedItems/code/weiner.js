autowatch = 1;

function bang()
{
    var weiner = this.patcher.getnamed("weiner");
    var d = new Dict(weiner.name);
    post(d.get("foo"));
}