autowatch = 1;

var deep = 0;
declareattribute("deep");

if (jsarguments.length > 1)
{
    deep = jsarguments[1];
}


function loadbang()
{
    bang();
}


function bang()
{
    if (deep > 0)
        return init_all_pattrs_deep_;
    return init_all_pattrs_;
}


function get_connected_obj_()
{
    var obj = this.box.patchcords.outputs[0].dstobject;
    return obj;
}


function is_pattr_(obj)
{
    return obj.maxclass === "pattr";
}
is_pattr_.local = 1;


function init_all_pattrs_()
{
    this.patcher.applyif(init_pattr, is_pattr);
    return;
}
init_all_pattrs_.local = 1;


function init_all_pattrs_deep_()
{
    this.patcher.applydeepif(init_pattr, is_pattr);
    return;
}
init_all_pattrs_deep_.local = 1;


function init_pattr_(obj)
{
    obj.message("init");
}
init_pattr_.local = 1;
