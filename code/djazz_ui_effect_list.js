autowatch = 1;

var last_slot_listener_ = null;


var effect_slots_ = []

var y_obj_   = 22;
var y_space_ = 22;


function clear()
{
    set_slot_count(0);
}


function msg_int(n)
{
    set_slot_count(n);
}


function set_slot_count(n)
{
    if (n < 0)
        return;

    var l = effect_slots_.length;

    if (n === l)
        return;

    if (n < l)
    {
        for (var i = n; i < l; i++)
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

    update_funnel_();
    outlet(0, "slot_count", effect_slots_.length);
}


function update_funnel_()
{
    var funnel = this.patcher.getnamed("funnel");
    if (funnel)
    {
        this.patcher.remove(funnel);
    }
    var ctrl_out = this.patcher.getnamed("ctrl_out");
    var x = ctrl_out.rect[0];
    var y = ctrl_out.rect[1] - 44;
    var l = effect_slots_.length;

    if (l === 0)
        return;

    funnel = this.patcher.newdefault(x, y, "funnel", l);
    funnel.varname = "funnel";
    this.patcher.connect(funnel, 0, ctrl_out, 0);
    for (var i = 0; i < l; i++)
    {
        this.patcher.connect(effect_slots_[i], 0, funnel, i);
    }
}


// --------------------------------------------------------------------

function push_back_()
{
    var outl = this.patcher.getnamed("outlet");

    var l   = effect_slots_.length;
    var x   = 200;
    var y   = 100 + l * 44;

    var slot    = this.patcher.newdefault(x, y, "bpatcher",
                    "@name",                "djazz_ui_effect_slot",
                    "@patching_rect",       [0, l * 22, 128, 22],
                    "@presentation",        1,
                    "@presentation_rect",   [0, l * 22, 128, 22]);
                  
    effect_slots_.push(slot);
}
push_back_.local = 1;


function pop_back_()
{   
    var effect_slot = effect_slots_.pop();
    this.patcher.remove(effect_slot);
}
pop_back_.local = 1;

// --------------------------------------------------------------------

function get_x_at_(i)
{   
    return 200;
}
get_x_at_.local = 1


function get_y_at_(i)
{
    return 100 + i * (y_obj_ + y_space_);  
}
get_y_at_.local = 1




function slot_selected(i_menu, i_item)
{
    if ((i_menu === count- 1) && (i_item !== 0))
    {
        push_back_();
    }
}

