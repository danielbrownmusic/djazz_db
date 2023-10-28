autowatch = 1;

var effect_slots_ = [];


function effects(effect_menu_items_dict_name, effect_name_array)
{
    var l_old   = effect_slots_.length;
    var l_new   = effect_name_array.length;
    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        set_effect_(slot, effect_menu_items_dict_name, effect_name_array[i]);
    }
    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            var slot = make_slot_();
            set_effect_(slot, effect_menu_items_dict_name, effect_name_array[i]);
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


//--------------------------------------------------------------------------------


function remove_last_slot_()
{   
    var slot = effect_slots_.pop();
    this.patcher.remove(slot);
}
remove_last_slot_.local = 1;


function make_slot_()
{
    var inl 	= this.patcher.getnamed("event_inlet");

    var x_inlet 	= inl.rect[0];
    var y_inlet 	= inl.rect[3];

    var i = effect_slots_.length;

    var w = 128;
    var h = 22;
	var x = x_inlet;
	var y = y_inlet + h * i;

    var effect_slot = this.patcher.newdefault(x, y, "djazz_midi_out_effect_slot");
    effect_slots_.push(effect_slot);
    return effect_slot;
}
make_slot_.local = 1;


function set_effect_(slot, effect_menu_items_dict_name, effect_name)
{
    var c                   = slot.subpatcher().getnamed("components");    
    var old_patcher_name    = c.value;
    
    var d                   = new Dict (effect_menu_items_dict_name);
    var new_patcher_name    = d.get("effects").get(effect_name).get("patcher");

    if (old_patcher_name !== new_patcher_name)
    {
        c.message(new_patcher_name);
    }
}
set_effect_.local = 1;