autowatch  = 1;

outlets = 2;
setoutletassist(0, "log messages sent");
setoutletassist(1, "log messages received");


function effect()
{
    log_msg_received_(messagename, arrayfromargs(arguments));

    var effect_patcher_name = arguments[0];

    if (!effect_patcher_name)
    {
        remove_effect_();
        return;
    }

    var effect = this.patcher.getnamed('effect');
    if (!effect)
    {
        make_new_effect_(effect_patcher_name);
    }

    set_effect_(effect_patcher_name);
}


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


function set_effect_(effect_patcher_name)
{
    if (this.patcher.getnamed('effect').maxclass === effect_patcher_name)
        return;

    remove_effect_();
    make_new_effect_(effect_patcher_name);
}
set_effect_.local = 1;


//----------------------------------------------------------------------------------------------------


function log_msg_received_(msg, args)
{
    outlet (1, msg, args);
}
log_msg_received_.local = 1;


function log_msg_sending_(addr, msg, args)
{
    outlet (0, addr, msg, args);
}
log_msg_sending_.local = 1;