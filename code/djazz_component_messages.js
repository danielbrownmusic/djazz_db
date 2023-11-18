autowatch = 1;

var parent = null;
var is_component_messages_class = true;
declareattribute("is_component_messages_class");


function loadbang()
{
    var p = this.patcher.box.patcher;
    if (p)
    {
        for (var obj = p.firstobjectt; obj; obj = obj.nextobject)
        {
            if (obj.getattr("is_component_messages_class"))
            {
                parent = obj;
                break;
            }
        }
    }
}

function forward_message(msg)
{
    post ("message to forward received.\n")
    var a = arrayfromargs(msg);
    post ("outletting", a, "\n");
    outlet(0, a);

    if (parent)
    {
        a[0] = prefix + "::" + a[0];
        post ("forwarding ", a, "\n");
        parent.message("forward_message", a);
    }
}