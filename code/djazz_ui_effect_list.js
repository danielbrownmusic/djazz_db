autowatch = 1;

var channel;
declareattribute("channel");

var effect_slots_ = [];

var y_obj_  = 22;
var y_space_ = 22;

var thru;

var effect_names =
[
    " ",
    "add octaves",
    "pitch shift"
];



function clear()
{
    set_slot_count(0);
}


function loadbang()
{
    clear();
    set_slot_count(3);
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
        for (var i = l - 1; i > n - 1; i--)
        {
            pop_back_();
        }        
        return;
    }

    if (n > l)
    {
        for (var i = 0; i < n - l; i++)
        {
            push_back_();
        }
    }
}


function anything()
{
    var i_menu = arguments[0];
    var item_name = arguments[1];
    post(i_menu,"\n");
    post(item_name,"\n");
    post(effect_slots_.length,"\n");

    if ((i_menu === effect_slots_.length - 1) && (effect_names[0] !== item_name))
    {
        push_back_();
    }

}


function push_back_()
{
    var slot = make_effect_slot_(effect_slots_.length);
    effect_slots_.push(slot);
}
push_back_.local = 1;


function pop_back_()
{
    var slot = effect_slots_.pop();
    this.patcher.remove(slot);
}
pop_back_.local = 1;


function make_effect_slot_(i)
{
    var x       = get_x_at_(i);
    var y       = get_y_at_(i);

    var slot    = this.patcher.newdefault(x, y, "umenu");
    slot.message("prefix", i.toString());
    slot.message("prefix_mode", 1);
    effect_names.forEach( function(e) { slot.message("append", e); } );
    slot.message("set", 0);

    this.patcher.connect(slot, 1, this.box, 0);
}
make_effect_slot_.local = 1;



function get_x_at_(i)
{   
    return 100;
}
get_x_at_.local = 1


function get_y_at_(i)
{
    return 100 + i * (y_obj_ + y_space_);  
}
get_y_at_.local = 1