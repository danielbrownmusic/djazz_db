autowatch               = 1;

inlets                  = 2;
outlets                 = 2;

var EMPTY_STRING        = "EMPTY STRING";
var NO_EFFECT           = "NO EFFECT";

var effect_database_    = null;

var effect_name         = EMPTY_STRING;
declareattribute("effect_name", null, "set_effect_silently");


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
/*         var patcher_name = 
            effect_name === EMPTY_STRING ?
            NO_EFFECT :
            effect_database_.get("effects").get(effect_name).get("patcher"); */
        outlet (0, effect_name);
    }
}


function set_effect_database(file_path)
{
    effect_database_ = new Dict();
    effect_database_.import_json(file_path);
    outlet (1, "dictionary", effect_database_.name);
}

//-----------------------------------------------------------------------------------------------


function msg_int(i)
{
    if (inlet !== 1)
        return;

    var effect_name =   i === 0 ?
                        EMPTY_STRING :
                        effect_database_.get("items")[i];
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
    effect.varname      = "effect";
    
    this.patcher.connect(pcontrol, 0, effect, 0);

    return effect;
}
make_effect_.local = 1;


function get_patcher_class_(effect_name)
{
    var d = new Dict (effect_database_.get("effects").name);
    var p = d.contains(effect_name) === 1           ?
            d.get(effect_name).get("controller")    :
            null;
    return p;
}
get_patcher_class_.local = 1;