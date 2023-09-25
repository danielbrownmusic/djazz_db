autowatch = 1;
var slots_ = [];
function msg_int(n)
{
    if (n < 0)
        return;
   
    var l = slots_.length;

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
}


function push_back_()
{
    var midi_out    = this.patcher.getnamed("out");

    var l           = slots_.length;
    var x           = 22;
    var y           = 22 + l * 44;

    var slot        = this.patcher.newdefault(x, y, "djazz_view_effect_slot_button_color");
    slot.varname    = l;
    slots_.push(slot);
}
push_back_.local = 1;


function pop_back_()
{
    var slot = slots_.pop();
    this.patcher.remove(slot);
    var midi_out = this.patcher.getnamed("out");
}
pop_back_.local = 1;