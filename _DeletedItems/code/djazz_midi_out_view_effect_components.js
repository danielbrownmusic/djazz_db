autowatch  = 1;

outlets = 2;

var items = ["", "add octaves", "pitch shift"];

var NO_EFFECT       = "no effect";

var effect_name    = NO_EFFECT;
declareattribute("effect_name");


function set_name()
{
    var no_effect   = arguments ? true          : false;
    var effect_name = no_effect ? arguments[0]  : NO_EFFECT;

    if (effect_name_ !== effect_name)
    {
        effect_name_    = effect_name;
        var msg         = no_effect ? "set" : "setsymbol";
        var args        = no_effect ? 0     : effect_name;

        outlet (0, msg, args);
        outlet (1, "update");
    }
}


function menu_items(effect_menu_items_dict)
{
    var msg     = "dictionary";
    var args    = effect_menu_items_dict.name;
    outlet(0, msg, args);
}