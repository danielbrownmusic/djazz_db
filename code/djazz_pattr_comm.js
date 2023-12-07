autowatch = 1;

var deep = 0;
declareattribute("deep");


/* function bang()
{
    if (deep >= 0)
    {
        init_all_pattrs_deep();
    }
    else
    {
        init_all_pattrs();
    }
} */


/* function anything()
{
    broadcast(messagename, arguments);
} */



function anything()
{
    var a = arrayfromargs(messagename, arguments);
    //post (deep);
    var func = (deep >= 0) ? broadcast_deep_ : broadcast_;
/*     post (messagename, "\n");
    post (arguments, "\n");
    post (a, "\n");
    post (a[0], "\n");
    post (a[1], "\n");
    post (a.slice(1), "\n"); */
    func(a);
}

function broadcast_deep_()
{
    var obj = get_connected_obj_();

    if (!obj)
        return;
    //post ("broadcast deep \n");
    var a = arrayfromargs(arguments);
    var msg = a[0];
    var args = a.slice(1);//a.length > 2 ? a.slice(1) : a[1];
/*     post ("..........");
    post (msg);
    post (args); */
    obj.subpatcher().applydeepif(
        function (subobj)
        {
            subobj.message(msg, args);
        }
        ,
        is_pattr)
}


function broadcast_()
{
    var obj = get_connected_obj_();
    if (!obj)
        return;
        var a = arrayfromargs(arguments);
        var msg = a[0];
        var args = a.slice(1);//a.length > 2 ? a.slice(1) : a[1];
    obj.subpatcher().applyif(
        function (subobj)
        {
            subobj.message(msg, args);
        }
        ,
        is_pattr)
}


function get_connected_obj_()
{
    var obj = this.box.patchcords.outputs[0].dstobject;
    return obj;
    //post (obj.varname);

}



/* function init_all_pattrs()
{
    this.patcher.applyif(init_pattr, is_pattr);
}


function init_all_pattrs_deep()
{
    this.patcher.applydeepif(init_pattr, is_pattr);
}


function init_pattr(obj)
{
    obj.message("init");
} */


function is_pattr(obj)
{
    return obj.maxclass === "pattr";
}