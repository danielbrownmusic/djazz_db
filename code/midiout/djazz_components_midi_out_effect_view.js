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
    post ("setting effect silently \n");
    post (effect_name_in, "\n");

    if (effect_name_in === effect_name)
        return false;

    remove_effect_();

    effect_name = effect_name_in;
    outlet (1, "setsymbol", effect_name);

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
    if (effect_name === EMPTY_STRING)
    {
        post ("no effect name\n");
        return;
    }

    var effect = this.patcher.getnamed(make_varname_(effect_name));
    
    if (!effect || (effect.valid === 0))
    {
        post ("no effect named", make_varname_(effect_name), "\n");
        return;
    }
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
    var f = new Folder (get_effect_folder_path_(effect_name));
    post ("\n");
    post (">>>IN VIEW<<<\n");
    post (effects_folder_path_);
    post (get_effect_folder_path_(effect_name));
    post ("count =", f.count, "\n");
    f.reset();
    post ("count =", f.count, "\n");
    while (!f.end)
    {
        post ("filename =", f.filename);
        if (f.filetype === "JSON")
        {
            return f.filename;
        }
        f.next();
    }
    post (">>>END VIEW<<<\n");
    post ("\n");
}
get_patcher_class_.local = 1;


function make_varname_(effect_name)
{
    return effect_name.split(" ").join("_");
}
make_varname_.local = 1;


function get_effect_folder_path_(effect_name)
{
    var f = new Folder (effects_folder_path_);
    return [f.pathname, effect_name, "view"].join("/");
}
get_effect_folder_path_.local = 1;