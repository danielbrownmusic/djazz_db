autowatch = 1;


var listener = null;


function outputchange(data)
{
    post ("output changed\n");
    outlet (0, data.value);
}

function bang()
{
    listener = new MaxobjListener(this.patcher.getnamed("umenu"), outputchange);
}