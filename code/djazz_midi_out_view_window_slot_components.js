autowatch  = 1;

function name()
{
    var effect_name                 = arguments[0];
    var effect_menu_items_dict_name = arguments[1];
    
    var patcher_class = get_patcher_class_(effect_name, effect_menu_items_dict_name);
    set_effect_(patcher_class);
}


function window_open()
{
    this.patcher.wind.visible = arguments[0];    
}


//----------------------------------------------------------------------------------------------------


function set_effect_()
{
    var old_patcher_class   = this.patcher.getnamed("effect").getattr("name");

    if (!arguments)
    {
        if (!old_patcher_class)
            return;
        this.patcher.message("script", "sendbox", "effect", "replace");
    }

    var patcher_class = arguments[0];
    if (old_patcher_class === patcher_class)
        return;

    this.patcher.message("script", "sendbox", "effect", "replace", patcher_class);

}
set_effect_.local = 1;


//----------------------------------------------------------------------------------------------------


function get_patcher_class_(effect_name, effect_menu_items_dict_name)
{
    var d = new Dict(effect_menu_items_dict_name);
    return  d.get("effects").contains(effect_name) ?
            d.get("effects").get(effect_name).get("controller") :
            null;
}
get_patcher_class_.local = 1;


function dispatch_(addr, msg, args)
{
    outlet (0, addr, msg, args);
}
dispatch_.local = 1;
