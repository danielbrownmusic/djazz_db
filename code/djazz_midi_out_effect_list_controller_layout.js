autowatch = 1;
inlets = 2;

var effect_slots_ = [];


function set_effects(effect_menu_items_dict_name, effect_names)
{
    var l_old   = effect_slots_.length;
    var l_new   = effect_names.length;
    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        set_effect_(slot, effect_menu_items_dict_name, effect_names[i]);
    }
    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            var slot = make_slot_(effect_menu_items_dict_name);
            set_effect_(slot, effect_menu_items_dict_name, effect_names[i]);
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
    var x   = slots_panel.rect[0];
    var y   = slots_panel.rect[1] + i * 22;

    var slot   = this.patcher.newdefault(x, y, "bpatcher",
                    "@name",                "djazz_ui_effect_controller_slot",
                    "@args",                effect_name,
                    "@patching_rect",       [x, y, 128, 22],
                    "@presentation",        1,
                    "@presentation_rect",   [0, i * 22, 128, 22]);
    this.patcher.connect(slot, 0, this.box, 0);
    slot.varname = "effect_" + i.toString();
    return slot;
}
make_slot_.local = 1;


function push_back_(effect_name)
{
    var slot = make_slot_(slots_.length, effect_name);
    slots_.push(slot);
}
push_back_.local = 1;


function pop_back_()
{   
    slot = slots_.pop();
    this.patcher.remove(slot);
}
pop_back_.local = 1;

