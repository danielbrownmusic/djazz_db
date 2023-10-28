autowatch  = 1;


function effect(effect_patcher_name)
{
    if (effect_patcher_name === null)
        return;

    clear();
    
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


function clear()
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
