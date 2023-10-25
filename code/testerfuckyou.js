autowatch = 1;


var listener;

function holler(data)
{
    post("just set to", data.value,"\n");
}

function bang()
{
    if (listener)
    {
        listener.silent = 1;
    }
    listener = new MaxobjListener(this.patcher.getnamed("effect_number"), holler);
    listener.silent = 1;
}


function msg_int()
{
    listener.setvalue_silent(arguments[0]);
}