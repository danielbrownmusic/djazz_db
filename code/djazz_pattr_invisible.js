autowatch = 1;

var deep = 0;
declareattribute("deep");

if (jsarguments.length > 1)
{
    deep = jsarguments[1];
}


function bang()
{

    var obj     = get_connected_obj_();
    if (!obj)
        return;

    var p = obj.subpatcher();

    if (deep >= 0)
        p.applydeepif(make_invisible_, is_pattr_);
    else
        p.applyif(make_invisible_, is_pattr_);
}


function loadbang()
{
    bang();
}

//------------------------------------------------------

function make_invisible_(obj)
{
    obj.message("invisible", 1);
}
make_invisible_.local = 1;


function get_connected_obj_()
{
    var obj = this.box.patchcords.outputs[0].dstobject;
    return obj;
}
get_connected_obj_.local = 1;


function is_pattr_(obj)
{
    return obj.maxclass === "pattr";
}
is_pattr_.local = 1;