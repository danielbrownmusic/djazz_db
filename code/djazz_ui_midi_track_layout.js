autowatch = 1;
outlets = 2;

var track_index = jsarguments[1];
var effect_slots_  = []


function load()
{}
*


function set_effect_slots()
{
    var a = arrayfromargs(arguments);
    {
        var t = a[0];
        if (t === track_index)
        {
            set_effect_slots_(a.slice(1));
        } 
    }
}


function set_effect_slots_(effect_numbers)
{
    post ("setting effect slots in track", track_index.toString(), "from");
    var old_effects = []
    for (var i = 0; i < effect_slots_.length; i++)
    {
        old_effects.push(get_effect_(i));
    }
    post (old_effects.join(", "));
    post("to");

    post (effect_numbers.join(", "));

    var l_old   = effect_slots_.length;
    var l_new   = effect_numbers.length;

    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        if (effect_numbers[i] !== get_effect_(i));
        {
            set_effect_(i, effect_numbers[i]);
        }
    }

    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            make_slot_(i);
            set_effect_(i, effect_numbers[i]);
        }
    }
    else
    {
        for (var i = l_new; i < l_old; i++)
        {
            remove_last_slot_();
        }
    }    
    add_slot_();
}
set_effect_slots_.local = 1;

//--------------------------------------------------------------------------------



function get_slot_umenu_(i)
{
    post ("get_slot_umenu", i.toString(), "\n");
    post (effect_slots_.length, "\n");
    post ("slot", i, "is", effect_slots_[i].varname, "\n");
    return effect_slots_[i].subpatcher().getnamed("effect_umenu");
}
get_slot_umenu_.local = 1;


function get_slot_number_box_(i)
{
    return effect_slots_[i].subpatcher().getnamed("effect_number");
}
get_slot_number_box_.local = 1;


function get_effect_(i)
{
    post ("get effect", i, "returned", get_slot_number_box_(i).value, "\n");
    return get_slot_number_box_(i).value;
}
get_effect_.local = 1;


function set_effect_(i, val)
{
    post ("setting effect", i.toString(), "\n");
    get_slot_umenu_(i).message("set", val);
}
set_effect_.local = 1;


function make_slot_(i)
{
    var slots_panel = this.patcher.getnamed("slots_panel");

    var x_panel         = slots_panel.rect[0];
    var y_panel         = slots_panel.rect[1];
    var x_panel_pres    = slots_panel.getattr("presentation_rect")[0];
    var y_panel_pres    = slots_panel.getattr("presentation_rect")[1];
    
    var slot   = this.patcher.newdefault(
                    x_panel, 
                    y_panel, 
                    "bpatcher",
                    "@name",                "djazz_ui_effect_slot",
                    "@args",                i,
                    "@patching_rect",       [x_panel, y_panel + i * 22, 128, 22],
                    "@presentation",        1,
                    "@presentation_rect",   [x_panel_pres, y_panel_pres + i * 22, 128, 22]);
    //this.patcher.connect(slot, 0, this.box, 0);
    //this.patcher.connect(this.box, 0, slot, 0);
    slot.varname = i.toString();

    return slot;
}
make_slot_.local = 1;


function add_slot_(effect_name)
{
    var slot = make_slot_(effect_slots_.length);
    effect_slots_.push(slot);
}
add_slot_.local = 1;


function remove_last_slot_()
{   
    post ("removing slot", effect_slots_.length - 1, "\n");
    slot = effect_slots_.pop();
    this.patcher.remove(slot);
}
remove_last_slot_.local = 1;


/* 
function set_slot_count_(n)
{
    if (n < 0)
        return;

    var l = effect_slots_.length;

    if (n === l)
        return;

    if (n < l)
    {
        for (var i = 0; i < l - n; i++)
        {
            pop_back_();
        }
    }
    else
    {
        for (var i = 0; i < n - l; i++)
        {
            push_back_();
        }
    }
}
set_slot_count_.local = 1; */


/* function replace_slot_(i, effect_name)
{
    slots_.splice(i, 1);
    this.patcher.remove(this.patcher.getnamed("effect_" + i.toString()));
    var slot = make_slot_(i, effect_name);
    slots_.splice(i, 0, slot);
}
replace_slot_.local = 1;
 */