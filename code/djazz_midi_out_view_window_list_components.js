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
        var slot        = effect_slots_[i];
        var effect_name = effect_name_array[i];
        effect(slot, effect_menu_items_dict_name, effect_name);
    }
    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            var slot = make_slot_();
            var effect_name = effect_name_array[i];            
            effect(slot, effect_menu_items_dict_name, effect_name_array[i]);
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


function effect(slot, effect_menu_items_dict_name, effect_name)
{
    var d                   = new Dict (effect_menu_items_dict_name);
    var new_patcher_name    =   d.get("effects").contains(effect_name) === 1 ?
                                d.get("effects").get(effect_name).get("controller") :
                                null;

    var addr    = [slot.varname, "pcontrol"];
    var msg     = "load";
    var args    = new_patcher_name;

    send_(addr, msg, args);
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

    var effect_slot = this.patcher.newdefault(x, y, "djazz_midi_out_view_window_slot");

    effect_slot.varname = "effect_" + i;    
    effect_slots_.push(effect_slot);

    return effect_slot;
}
make_slot_.local = 1;


function send_(addr_array, msg, args)
{
    var addr = addr_array.join("::");
    outlet(0, addr, msg, args);
}
send_.local = 1;