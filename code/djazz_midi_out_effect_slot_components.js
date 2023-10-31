autowatch  = 1;


function name()
{
    var effect_name                 = arguments[0];
    var effect_menu_items_dict_name = arguments[1];
    
    var patcher_class = get_patcher_class_(effect_name, effect_menu_items_dict_name);

    if (!patcher_class)
    {
        remove_effect_();
        return;
    }
    
    var effect = this.patcher.getnamed('effect');
    if (!effect)
    {
        make_new_effect_(patcher_class);
    }
    else
    {
        set_effect_(patcher_class);
    }
}


//----------------------------------------------------------------------------------------------------


function remove_effect_()
{
    var effect  = this.patcher.getnamed('effect');    
    if (effect)
    {
        var bypass_switch  = this.patcher.getnamed("active");
        var midi_outlet    = this.patcher.getnamed("midi_out");
                
        this.patcher.remove(effect);
        this.patcher.connect(bypass_switch, 1, midi_outlet, 0);
    }
}
remove_effect_.local = 1;


function make_new_effect_(effect_patcher_name)
{
    var bypass_switch   = this.patcher.getnamed("active");
    var midi_outlet     = this.patcher.getnamed("midi_out");

    var x   = bypass_switch.rect[0] + 22;
    var y   = bypass_switch.rect[3] + 22;

    var effect  = this.patcher.newdefault(x, y, effect_patcher_name);
    effect.varname = "effect";

    this.patcher.disconnect (bypass_switch, 1, midi_outlet,  0);
    this.patcher.connect    (bypass_switch, 1, effect,       0);
    this.patcher.connect    (effect,        0, midi_outlet,  0);
}
make_new_effect_.local = 1;


function set_effect_(patcher_class)
{
    if (this.patcher.getnamed('effect').maxclass === patcher_class)
        return;

    remove_effect_();
    make_new_effect_(patcher_class);
}
set_effect_.local = 1;


//----------------------------------------------------------------------------------------------------


function get_patcher_class_(effect_name, effect_menu_items_dict_name)
{
    var d = new Dict(effect_menu_items_dict_name);
    return  d.get("effects").contains(effect_name) ?
            d.get("effects").get(effect_name).get("patcher") :
            null;
}
get_patcher_class_.local = 1;
