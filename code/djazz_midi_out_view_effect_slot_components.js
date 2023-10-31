autowatch  = 1;

var NO_EFFECT       = "no effect";
var effect_name_    = NO_EFFECT;

function name()
{
    var no_effect   = arguments ? true          : false;
    var effect_name = no_effect ? arguments[0]  : NO_EFFECT;

    if (effect_name_ !== effect_name)
    {
        effect_name_    = effect_name;
        var msg         = no_effect ? "set" : "setsymbol";
        var args        = no_effect ? 0     : effect_name;

        outlet (0, msg, args);
    }
}


function menu_items(effect_menu_items_dict_name)
{
    var msg     = "dictionary";
    var args    = effect_menu_items_dict_name;
    outlet(0, msg, args);
}


//----------------------------------------------------------------------------------------------------


function get_effect_name_(effect_name, effect_menu_items_dict_name)
{
    var d = new Dict(effect_menu_items_dict_name);
    return  d.get("effects").contains(effect_name) ?
            d.get("effects").get(effect_name).get("patcher") :
            null;
}
get_effect_name_.local = 1;
