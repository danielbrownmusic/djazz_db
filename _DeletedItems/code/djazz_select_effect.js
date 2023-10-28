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

    new_effect(i);
}


function new_effect(i)
{
    var inl     = this.patcher.getnamed("in");
    var outl    = this.patcher.getnamed("out");

    var x = inl.rect[0] + 22;
    var y = inl.rect[3] + 22;

    effect         = this.patcher.newdefault(x, y, effect_names[i]);
    effect_index   = i;

    this.patcher.disconnect (inl,    1, outl,   0);
    this.patcher.connect    (inl,    1, effect, 0);
    this.patcher.connect    (effect, 0, outl,   0);
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