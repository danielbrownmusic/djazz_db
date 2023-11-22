autowatch  = 1;

var EMPTY_STRING        = "empty_string";

var effect_database_    = null;
var effect_name         = "";


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
    outlet(0, "dictionary", effect_database_.name);
}


function set_effect(effect_name_in)
{
    var no_effect = effect_name_in === EMPTY_STRING ? true : false;
    
    if (effect_name_in === effect_name)
        return;

    effect_name = effect_name_in;

    remove_effect_();

    if (no_effect)
        return ;

    make_effect_(effect_name);
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

    if (!patcher_class)
    return;

    var effect          = this.patcher.newdefault(x, y, patcher_class);
    effect.varname      = "effect";

    this.patcher.disconnect (bypass_switch, 1, midi_outlet,  0);
    this.patcher.connect    (bypass_switch, 1, effect,       0);
    this.patcher.connect    (effect,        0, midi_outlet,  0);
}
make_effect_.local = 1;


function get_patcher_class_(effect_name, effect_menu_items_dict)
{
    var d = new Dict (effect_database_.get("effects").name);
    var p = d.contains(effect_name) === 1 ?
            d.get(effect_name).get("patcher") :
            null;
    return p;
}
get_patcher_class_.local = 1;
