autowatch  = 1;

var bypass_switch_ = null;
var midi_outlet_ = null;

var effect_name_ = "";
var effect_ = null;


function bang()
{
    loadbang();
}


function loadbang()
{
    if (arguments.length > 0)
    {
        channel = arguments[0];
    }
    bypass_switch_  = this.patcher.getnamed("bypass_switch");
    midi_outlet_    = this.patcher.getnamed("midi_out");
    clear();
}


function set_effect()
{
    var effect_name = arguments[0];    
    if (effect_name === effect_name_)
        return;

    clear();
    
    if (arguments.length === 0)
        return;

    bypass_switch_  = this.patcher.getnamed("bypass_switch");
    midi_outlet_    = this.patcher.getnamed("midi_out");

    var x = bypass_switch_.rect[0];
    var y = bypass_switch_.rect[1] + 40;

    effect_name_    = effect_name;
    effect_         = this.patcher.newdefault(x, y, effect_name);
    effect_.varname = "effect";

    this.patcher.disconnect(bypass_switch_, 1, midi_outlet_, 0);
    this.patcher.connect(bypass_switch_, 1, effect_, 0);
    this.patcher.connect(effect_, 0, midi_outlet_, 0);
}


function clear()
{
    if (effect_)
    {
        this.patcher.remove(effect_);
        this.patcher.connect(bypass_switch_, 1, midi_outlet_, 0);        
        effect_ = null;
    }
    effect_name_ = "";
}