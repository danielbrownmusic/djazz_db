autowatch = 1;

var slots_ = [];


/* function loadbang()
{
    set_slot_count(0);
} */


/* function msg_int(n)
{
    set_slot_count(n);
} */


function hi()
{
    post ("hi!!!! \n");
}

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
/* 
    update_spray_();
 */
}


function push_back_()
{
    post ("pushing back in ui  ");
    var midi_in   = this.patcher.getnamed("midi_in");
    var midi_out  = this.patcher.getnamed("midi_out");

    var l       = slots_.length;
    var x       = midi_in.rect[0];
    var y       = midi_in.rect[3] + 22 + l * 44;

    var slot    = this.patcher.newdefault(x, y, "djazz_effect_slot");
    slot.varname = l;
    var prev    = (l === 0) ? midi_in : slots_[l - 1];

    this.patcher.disconnect (prev, 0, midi_out, 0);
    this.patcher.connect    (prev, 0, slot, 0);
    this.patcher.connect    (slot, 0, midi_out, 0);

    slots_.push(slot);
    post ("pushed back in ui  \n");
}
push_back_.local = 1;


function pop_back_()
{
    var slot = slots_.pop();
    this.patcher.remove(slot);

    var midi_in   = this.patcher.getnamed("midi_in");
    var midi_out  = this.patcher.getnamed("midi_out");

    var l       = slots_.length;
    var prev    = (l === 0) ? midi_in : slots_[l - 1];

    this.patcher.connect(prev, 0, midi_out, 0);
}
pop_back_.local = 1;

/* 

function update_spray_()
{
    var spray = this.patcher.getnamed("spray");
    if (spray)
    {
        this.patcher.remove(spray);
    }
    var to_spray = this.patcher.getnamed("route");
    var x = to_spray.rect[0];
    var y = to_spray.rect[3] + 22;
    var l = slots_.length;

    if (l === 0)
        return;

    spray = this.patcher.newdefault(x, y, "spray", l, 0, 1);
    spray.varname = "spray";
    this.patcher.connect(to_spray, 0, spray, 0);
    for (var i = 0; i < l; i++)
    {
        this.patcher.connect(spray, i, slots_[i], 1);
    }
} */