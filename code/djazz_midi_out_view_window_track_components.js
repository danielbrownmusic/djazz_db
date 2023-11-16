var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effect_slots_ = [];


function effects(track_dict, effect_patchers_database)
{
    var effect_name_array   = dutils.get_dict_array(track_dict, "effects");
    
    var l_old   = effect_slots_.length;
    var l_new   = effect_name_array.length;

    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            add_effect();
        }
    }
    else
    {
        for (var i = l_new; i < l_old; i++)
        {
            remove_last_slot_();
        }
    }

    for (var i = 0; i < effect_slots_.length; i++)
    {
        send_to_slot_(i, "name", [effect_name_array[i], effect_patchers_database]);
    }
}


function effect()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);

    send_to_slot_(i, msg, args);
}


function add_effect()
{
    effect_slots_.push(make_slot_());
}


//--------------------------------------------------------------------------------


function remove_last_slot_()
{   
    if (effect_slots_.length === 0)
        return;

    var slot = effect_slots_.pop();
    this.patcher.remove(slot);
}
remove_last_slot_.local = 1;


function make_slot_()
{
    var i = effect_slots_.length;

    var w = 264;
    var h = 132;

    var x = this.box.rect[0] + w * i;
    var y = this.box.rect[3] + h;

    var effect_slot = this.patcher.newdefault(x, y, "djazz_midi_out_view_window_effect_slot", i);

    effect_slot.varname = "effect_" + i;
    this.patcher.connect
    return effect_slot;
}
make_slot_.local = 1;


//--------------------------------------------------------------------------------


function send_to_slot_(i, msg, args)
{
    var slot   = effect_slots_[i];
    var addr    = [slot.varname, "components"].join("::");    

    outlet (0, addr, msg, args);
}
send_to_slot_.local = 1;