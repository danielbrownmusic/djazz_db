autowatch = 1;
inlets = 2;

var slots_  = []


function set_effect_slots()
{
    var a               = arrayfromargs(arguments);
    var effect_names    = a.length > 1 ? a : [];
    var l_old           = slots_.length;
    var l_new           = effect_names.length;

    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        if (effect_names[i] !== slots_[i].subpatcher.getnamed("effect_name"));
        {
            replace_slot_(i, effect_names[i]);
        }
    }

    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            make_slot_(i, effect_names[i]);
        }
    }
    else
    {
        for (var i = l_new; i < l_old; i++)
        {
            pop_back_();
        }
    }    
    push_back_("NULL");
}



//--------------------------------------------------------------------------------

function replace_slot_(i, effect_name)
{
    slots_.splice(i, 1);
    this.patcher.remove(this.patcher.getnamed("effect_" + i.toString()));
    var slot = make_slot_(i, effect_name);
    slots_.splice(i, 0, slot);
}
replace_slot_.local = 1;


function make_slot_(i, effect_name)
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

