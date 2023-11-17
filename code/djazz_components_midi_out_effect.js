autowatch  = 1;

var effect_database_    = null;
var effect_name         = "";


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
    outlet(0, "dictionary", effect_database_.name);
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


function make_effect_(effect_name)
{
    var bypass_switch   = this.patcher.getnamed("active");
    var midi_outlet     = this.patcher.getnamed("midi_out");

    var x               = bypass_switch.rect[0] + 22;
    var y               = bypass_switch.rect[3] + 22;

    var patcher_class   = get_patcher_class_(effect_name, effect_database_);

    var effect          = this.patcher.newdefault(x, y, patcher_class);

    effect.varname = "effect";

    this.patcher.disconnect (bypass_switch, 1, midi_outlet,  0);
    this.patcher.connect    (bypass_switch, 1, effect,       0);
    this.patcher.connect    (effect,        0, midi_outlet,  0);
}
make_effect_.local = 1;


function get_patcher_class_(effect_name, effect_menu_items_dict)
{
    var d               = effect_menu_items_dict.get("effects");
    var patcher_class   = d.contains(effect_name) ?
                          d.get(effect_name).get("patcher") :
                          null;
    return patcher_class;
}
get_patcher_class_.local = 1;
