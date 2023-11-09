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
            effect_slots_.push(make_slot_(i));
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


//--------------------------------------------------------------------------------


function remove_last_slot_()
{   
    if (effect_slots_.length === 0)
        return;

    var slot = effect_slots_.pop();
    this.patcher.remove(slot);
}
remove_last_slot_.local = 1;


function make_slot_(i)
{
    var inl 	= this.patcher.getnamed("events_inlet");

    var x_inlet 	= inl.rect[0];
    var y_inlet 	= inl.rect[3];

    var w = 128;
    var h = 44;
	var x = x_inlet;
	var y = y_inlet + h + h * i;

    var effect_slot = this.patcher.newdefault(x, y, "djazz_midi_out_effect_slot");

    effect_slot.varname = "effect_" + i;    

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