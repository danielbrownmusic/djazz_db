autowatch = 1;

var umenu_listener = null;


function broadcast(data)
{
    post ("value changed \n");
    post ("value is now ", data.value, "\n");
}

function loadbang()
{
    var umenu = this.patcher.getnamed("umenu");
    umenu_listener = new MaxobjListener(umenu, broadcast);
}