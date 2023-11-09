autowatch  = 1;

var x = 132;
var y = 528;


function name()
{
    var effect_name             = arguments[0];
    var effect_menu_items_dict  = arguments[1];
    
    var old_patcher         = this.patcher.getnamed("effect");

    var old_patcher_class   = old_patcher   ? old_patcher.maxclass  : null;
    var new_patcher_class   = get_patcher_class_(effect_name, effect_menu_items_dict);

    if (old_patcher_class === new_patcher_class)
        return;

    if (old_patcher)
    {
        this.patcher.remove(old_patcher);
    }

    var effect = this.patcher.newdefault(x, y, new_patcher_class);
    effect.varname = "effect";
}


function window_open()
{
    var effect = this.patcher.getnamed("effect");
    if (!effect)
        return;
    effect.subpatcher().wind.visible = arguments[0];    
}


//----------------------------------------------------------------------------------------------------


function get_patcher_class_(effect_name, effect_menu_items_dict)
{
    return  effect_menu_items_dict.get("effects").contains(effect_name) ?
    effect_menu_items_dict.get("effects").get(effect_name).get("controller") :
            null;
}
get_patcher_class_.local = 1;