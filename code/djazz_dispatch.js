autowatch = 1;

function anything()
{
    var input   = arrayfromargs(messagename, arguments);
    var addr    = input[0].split("::");
    var msg     = input[1];
    var args    = input.length === 3 ? input[2] : input.slice(2);
    post (addr);
    post (msg);
    post (args);
    post ("\n");
    
    var target = this.patcher.getnamed(addr[0]);
    for (var i = 1; i < addr.length; i++)
    {
        target = target.subpatcher().getnamed(addr[i]);
    }
    target.message(msg, args);
}