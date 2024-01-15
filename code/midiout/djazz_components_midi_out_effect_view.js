autowatch                   = 1;

inlets                      = 2;
outlets                     = 2;

var EMPTY_STRING            = "EMPTY STRING";
var effects_folder_path_    = undefined;
var effect_name             = EMPTY_STRING;
declareattribute("effect_name", null, "set_effect_silently");


//-----------------------------------------------------------------------------------------------


function set_folder(effects_folder_path)
{
    effects_folder_path_ = effects_folder_path;
}


function set_effect_silently(effect_name_in)
{
    if (effect_name_in === effect_name)
        return false;

    effect_name = effect_name_in;

    outlet (1, "setsymbol", effect_name);
    remove_effect_();

    if (effect_name === EMPTY_STRING)
        return true;

    make_effect_(effect_name);
        return true;
}


function set_effect(effect_name)
{
    var is_new_name = set_effect_silently(effect_name);

    if (is_new_name)
    {
        outlet (0, effect_name);
    }
}


//-----------------------------------------------------------------------------------------------


function list()
{
    if (inlet !== 1)
        return;

    var i           =   arguments[0];    
    var effect_name =   i === 0 ?
                        EMPTY_STRING :
                        arguments[1];
    set_effect(effect_name);
}

//-----------------------------------------------------------------------------------------------


function remove_effect_()
{
    var effect  = this.patcher.getnamed("effect");
    if (!effect)
        return;

    this.patcher.remove(effect);
}
remove_effect_.local = 1;


function make_effect_(effect_name)
{
    var pcontrol        = this.patcher.getnamed("pcontrol");
    var h               = 66;
    var x               = pcontrol.rect[0];
    var y               = pcontrol.rect[3] + h;
    var patcher_class   = get_patcher_class_(effect_name);

    if (!patcher_class)
        return;

    var effect          = this.patcher.newdefault(x, y, patcher_class);
    effect.varname      = make_varname_(effect_name);
    
    this.patcher.connect(pcontrol, 0, effect, 0);

    return effect;
}
make_effect_.local = 1;


function get_patcher_class_(effect_name)
{
    var folder_path = [effects_folder_path_, effect_name, "view"].join("/");
    var f           = new Folder ( folder_path );
    f.reset();
    while (!f.end)
    {
        if (f.filetype === "JSON")
        {
            return f.filename;
        }
        f.next();
    }
}
get_patcher_class_.local = 1;


function make_varname_(effect_name)
{
    return effect_name.split(" ").join("_");
}
make_varname_.local = 1;