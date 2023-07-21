function bind(model_name)
{
    var state_patch = this.patcher.parentpatcher.getnamed("model_name");
}

function int(measure)
{
    model.sendmessage("go_to_measure", measure);
}

function loop_chapter(active)
{
    model.sendmessage("loop_chapter", measure);
}
