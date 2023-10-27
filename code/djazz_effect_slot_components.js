autowatch  = 1;

var effect_patcher_name_ = null;
var NULL_TOKEN = "NULL";

function getvalueof()
{
    return effect_patcher_name_ ? effect_patcher_name_ : NULL_TOKEN;
}


function setvalueof(effect_patcher_name)
{
    if (effect_patcher_name === effect_patcher_name_)
        return;

    effect_patcher_name_ = effect_patcher_name;
    set_effect_patcher_();
}


//--------------------------------------------------------------------------------


function set_effect_patcher_()
{
    clear_();

    if (!effect_patcher_name_)
        return;

    var bypass_switch   = this.patcher.getnamed("active");
    var midi_outlet     = this.patcher.getnamed("midi_out");

    var x   = bypass_switch.rect[0] + 22;
    var y   = bypass_switch.rect[3] + 22;

    var effect  = this.patcher.newdefault(x, y, effect_patcher_name_);
    effect.varname = "effect";

    this.patcher.disconnect (bypass_switch, 1, midi_outlet,  0);
    this.patcher.connect    (bypass_switch, 1, effect,       0);
    this.patcher.connect    (effect,        0, midi_outlet,  0);
}
set_effect_patcher_.local = 1;


function clear_()
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
clear_.local = 1;