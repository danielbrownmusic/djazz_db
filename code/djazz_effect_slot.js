autowatch  = 1;

var effect          = null;
var effect_index    = 0;
var effect_names    = ["", "djazz_add_octaves", "djazz_pitch_shift"];


function msg_int(i)
{
    if (i === effect_index)
        return;

    clear();
    
    if (i === 0)
        return;

    var bypass_switch  = this.patcher.getnamed("bypass_switch");
    var midi_outlet    = this.patcher.getnamed("midi_out");

    var x = bypass_switch.rect[0] + 22;
    var y = bypass_switch.rect[3] + 22;

    effect         = this.patcher.newdefault(x, y, effect_names[i]);
    effect_index   = i;

    this.patcher.disconnect (bypass_switch, 1, midi_outlet,  0);
    this.patcher.connect    (bypass_switch, 1, effect,       0);
    this.patcher.connect    (effect,        0, midi_outlet,  0);
}


function clear()
{
    if (effect)
    {
        this.patcher.remove(effect);
        this.patcher.connect(bypass_switch, 1, midi_outlet, 0);        
        effect         = null;
        effect_index   = 0;
    }
}