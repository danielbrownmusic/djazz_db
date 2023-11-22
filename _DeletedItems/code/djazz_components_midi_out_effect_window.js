autowatch  = 1;

var effect_database_    = null;
var effect_name         = "";
declareattribute("effect_name");

var x = 132;
var y = 528;


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
}


function set_effect_silent()
{
    var no_effect       = arguments ? true          : false;
    var effect_name_in  = no_effect ? arguments[0]  : "";
    
    if (effect_name_in === effect_name)
        return false;

    effect_name = effect_name_in;
    remove_effect_();

    if (no_effect)
        return true;

    make_effect_(effect_name);
        return true;
}


function window_open()
{
    var effect = this.patcher.getnamed("effect");
    if (!effect)
        return;
    effect.subpatcher().wind.visible = arguments[0];    
}


//----------------------------------------------------------------------------------------------------


function remove_effect_()
{
    var effect  = this.patcher.getnamed('effect');
    if (!effect)
        return;
    this.patcher.remove(old_patcher);
}
remove_effect_.local = 1;


function make_effect_(effect_name)
{
    var patcher_class   = get_patcher_class_(effect_name);
    var effect          = this.patcher.newdefault(x, y, patcher_class);
    effect.varname      = "effect";
    return effect;
}
make_effect_.local = 1;


function get_patcher_class_(effect_name)
{
    var d = effect_menu_items_dict.get("effects");
    var p = d.contains(effect_name) ?
            d.get(effect_name).get("controller") :
            null;
    return p;
}
get_patcher_class_.local = 1;