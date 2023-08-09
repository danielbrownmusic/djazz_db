autowatch = 1;

var count;
var y_obj_  = 22;
var y_space_ = 22;


function clear()
{
    set_slot_count(0);
}


function bang()
{
    loadbang();
}


function loadbang()
{
    count = 0;
    set_slot_count(3);
}


function set_slot_count(n)
{
    if (n < 0)
        return;

    if (n === count)
        return;

    if (n < count)
    {
        for (var i = n; i < count; i++)
        {
            pop_back_();
        }        
        return;
    }

    if (n > count)
    {
        for (var i = 0; i < n - count; i++)
        {
            push_back_();
        }
    }
}


function slot_selected(i_menu, i_item)
{
    if ((i_menu === count- 1) && (i_item !== 0))
    {
        push_back_();
    }
}

// --------------------------------------------------------------------

function push_back_()
{
    new_effect_slot_(count);
    count++;
}
push_back_.local = 1;


function pop_back_()
{   
    count--;
    delete_effect_slot_(count);
}
pop_back_.local = 1;

// --------------------------------------------------------------------

function new_effect_slot_(i)
{
    var x       = get_x_at_(i);
    var y       = get_y_at_(i);

    var slot    = this.patcher.newdefault(x, y, "djazz_ui_effect_slot", i);
    this.patcher.connect(slot, 0, this.box, 0);
    this.patcher.connect(slot, 1, this.patcher.getnamed("outlet"), 0);

    slot.varname    = "effect_" + i.toString();

}
new_effect_slot_.local = 1;


function delete_effect_slot_(i)
{
    var slot_varname    = "effect_" + i.toString();
    var slot            = this.patcher.getnamed(slot_varname);
    
    this.patcher.remove(slot);

}
delete_effect_slot_.local = 1;

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