autowatch               = 1;
outlets                 = 2;

var EMPTY_STRING        = "empty_string";

var effect_database_    = null;
var effect              = null;
var effect_name         = EMPTY_STRING;
declareattribute("effect_name");


function window_open()
{
    var effect = this.patcher.getnamed("effect");
    if (!effect)
        return;
    effect.subpatcher().wind.visible = arguments[0];    
}


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
    outlet (1, "dictionary", effect_database_name);
}


function set_effect_number(i)
{
   var effect_name =    i === 0 ?
                        EMPTY_STRING :
                        effect_database_.get("items")[i];
   set_effect(effect_name);
}


function set_effect(effect_name_in)
{
    var is_new_name = set_effect_silently(effect_name_in);
    if (is_new_name)
    {
        outlet (0, effect_name_in);
    }
    return is_new_name;
}


function set_effect_silently(effect_name_in)
{
    var no_effect = effect_name_in === EMPTY_STRING ? true : false;

    if (effect_name_in === effect_name)
        return false;

    effect_name = effect_name_in;

    outlet (1, "setsymbol", effect_name);
    remove_effect_();

    if (no_effect)
        return true;

    make_effect_(effect_name);
        return true;
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
    var p = d.contains(effect_name) === 1 ?
            d.get(effect_name).get("controller") :
            null;
    return p;
}
get_patcher_class_.local = 1;