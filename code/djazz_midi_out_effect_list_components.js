var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effect_slots_ = [];


function effects(track_dict_name, effect_menu_items_dict_name)
{
    var d                   = new Dict(track_dict_name);
    var effect_name_array   = dutils.get_dict_array(d, "effects");

    var l_old   = effect_slots_.length;
    var l_new   = effect_name_array.length;

    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        dispatch_effect_name_(i, effect_menu_items_dict_name, effect_name_array);
    }

    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            make_slot_();
            dispatch_effect_name_(i, effect_menu_items_dict_name, effect_name_array);
        }
    }
    else
    {
        for (var i = l_new; i < l_old; i++)
        {
            remove_last_slot_();
        }
    }
}


function effect()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);

    dispatch_(i, msg, args);
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
    var inl 	= this.patcher.getnamed("events_inlet");

    var x_inlet 	= inl.rect[0];
    var y_inlet 	= inl.rect[3];

    var i = effect_slots_.length;

    var w = 128;
    var h = 44;
	var x = x_inlet;
	var y = y_inlet + h + h * i;

    var effect_slot = this.patcher.newdefault(x, y, "djazz_midi_out_effect_slot");

    effect_slot.varname = "effect_" + i;    
    effect_slots_.push(effect_slot);

    return effect_slot;
}
make_slot_.local = 1;


//--------------------------------------------------------------------------------


/* function send_(addr, msg, args)
{
    if (Array.isArray(addr))
    {
        var addr = addr.join("::");
    }
    outlet(0, addr, msg, args);
}
send_.local = 1; */


function dispatch_(i, msg, args)
{
    var slot   = effect_slots_[i];
    var addr    = [slot.varname, "components"].join("::");    

    outlet (0, addr, msg, args);
}
dispatch_.local = 1;


function dispatch_effect_name_(i, effect_menu_items_dict_name, effect_name_array)
{
    dispatch_(i, "name", [effect_name_array[i], effect_menu_items_dict_name]);    
}
dispatch_effect_name_.local = 1;