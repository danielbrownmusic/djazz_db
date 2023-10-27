autowatch = 1;

var effect_slots_ = [];


function set_effects(effect_menu_items_dict_name, effect_names)
{
    var l_old   = effect_slots_.length;
    var l_new   = effect_names.length;
    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        set_effect_menu_selection_(slot, effect_menu_items_dict_name, effect_names[i]);
    }
    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            var slot = make_slot_(effect_menu_items_dict_name);
            effect_slots_.push(slot);
            set_effect_menu_selection_(slot, effect_menu_items_dict_name, effect_names[i]);
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


function make_slot_(effect_menu_items_dict_name)
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
    return effect_slot;
}
make_slot_.local = 1;


function set_slot_effect_patcher_(slot, effect_menu_items_dict_name, name)
{
    var effect_number_box   = slot.subpatcher().getnamed("effect_number");
    var d                   = new Dict (effect_menu_items_dict_name);
    var effect_names        = d.get("items");

    if (effect_number_box.value !== effect_names.indexOf(name))
    {
        var umenu = slot.subpatcher().getnamed("umenu");
        umenu.message("dictionary", effect_menu_items_dict_name);
    }
}
set_slot_effect_patcher_.local = 1;