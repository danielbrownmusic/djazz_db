autowatch = 1;


function send(a)
{
    var r = this.patcher.getnamed("array_receive");
    r.message("receive_array", a);
}

function send_empty_array()
{
    send([]);
}


function send_single_element_array()
{
    send(["hello"]);
}


function send_array()
{
    send(["helllo", "goodbye"]);
}


function send_nested_array()
{
    send(["hello", ["who", "what", "why"]]);
}


function send_array_of_empty_string() /// SENDS !!!!!!!!!!!!!!
{
    send ([""]);
}
