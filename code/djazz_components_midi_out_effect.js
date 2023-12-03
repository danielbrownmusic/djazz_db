autowatch  = 1;

var NO_EFFECT       = "NO EFFECT";
var patcher_name_   = NO_EFFECT;


function set_effect(patcher_name)
{
    if (patcher_name === patcher_name_)
        return;

    patcher_name_ = patcher_name;

    remove_effect_();

    if (patcher_name_ === NO_EFFECT)
        return ;

    make_effect_(patcher_name_);
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


function make_effect_(patcher_class)
{
    var bypass_switch   = this.patcher.getnamed("active");
    var midi_outlet     = this.patcher.getnamed("midi_out");

    var x               = bypass_switch.rect[0] + 22;
    var y               = bypass_switch.rect[3] + 22;

    var effect          = this.patcher.newdefault(x, y, patcher_class);
    effect.varname      = "effect";

    this.patcher.disconnect (bypass_switch, 1, midi_outlet,  0);
    this.patcher.connect    (bypass_switch, 1, effect,       0);
    this.patcher.connect    (effect,        0, midi_outlet,  0);
}
make_effect_.local = 1;


/* function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
    outlet(0, "dictionary", effect_database_.name);
}
 */


/* function get_patcher_class_(effect_name, effect_menu_items_dict)
{
    var d = new Dict (effect_database_.get("effects").name);
    var p = d.contains(effect_name) === 1 ?
            d.get(effect_name).get("patcher") :
            null;
    return p;
}
get_patcher_class_.local = 1; */
