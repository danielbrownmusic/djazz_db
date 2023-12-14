autowatch = 1;

var deep = 0;
declareattribute("deep");


function msg_int(s)
{
    var objs = get_connected_objs_();
    if (!objs)
        return;

    objs.forEach 
    (
        function (obj)
        {
            var p = obj.subpatcher();

            var func = s === 0 ? make_invisible_ : make_visible_;
        
            if (deep > 0)
                p.applydeepif(func, is_pattr_);
            else
                p.applyif(func, is_pattr_);        
        }        
    )
}

//------------------------------------------------------

function make_invisible_(obj)
{
    obj.message("invisible", 1);
}
make_invisible_.local = 1;


function make_visible_(obj)
{
    obj.message("invisible", 0);
}
make_visible_.local = 1;

//------------------------------------------------------

function get_connected_objs_()
{
    var objs = this.box.patchcords.outputs.map(function (obj) { return obj.dstobject; } );
    return objs;
}
get_connected_objs_.local = 1;


function is_pattr_(obj)
{
    return obj.maxclass === "pattr";
}
is_pattr_.local = 1;