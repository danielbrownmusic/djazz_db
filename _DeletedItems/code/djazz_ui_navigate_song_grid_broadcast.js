function bind(model_name)
{
    var state_patch = this.patcher.parentpatcher.getnamed("model_name");
}

function int(chapter)
{
    model.sendmessage("go_to_chapter", chapter);
}