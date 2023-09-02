autowatch = 1;

var slots_          = []
var slot_waiting_   = null;


function on_last_slot_changed(data)
{
    post("changing - " + data.value);
    if (data.value !== 0)
    {
        push_back_();
    }
}


function on_slot_waiting_changed(data)
{
    post("changing - " + data.value);
    if (data.value !== 0)
    {
        push_back_();
    }
}

var last_slot_listener_     = new MaxobjListener(null, on_last_slot_changed);
var slot_waiting_listener_  = new MaxobjListener(null, on_slot_waiting_changed);

// -----------------------------------------------------------------------

function loadbang()
{
    make_slot_waiting_(0);
}



function msg_int(n)
{
    set_slot_count(n);
}


// -----------------------------------------------------------------------


function set_slot_count(n)
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

    make_slot_waiting_();
/*     update_spray_();
    update_funnel_(); */
}

function push_back_()
{
    slots_.push(slot_waiting_);

    var slots_panel = this.patcher.getnamed("slots_panel");
    var l   = slots_.length;
    var x   = slots_panel.rect[0];
    var y   = slots_panel.rect[1] + l * 22;

    make_slot_waiting_(l);
}
push_back_.local = 1;


function pop_back_()
{   
    var slot = slots_.pop();
    this.patcher.remove(slot_waiting_);
    slot_waiting_ = slot;
    slot_waiting_listener_.maxobject = slot_waiting_.subpatcher().getnamed("effect_index");
    if (slots_.length > 0)
    {
        last_slot_listener_.maxobject = slots_.slice[-1].subpatcher().getnamed("effect_index");
    }
}
pop_back_.local = 1;


function make_slot_waiting_(i)
{
    slot_waiting_   = this.patcher.newdefault(x, y, "bpatcher",
                    "@name",                "djazz_ui_effect_slot",
                    "@patching_rect",       [x, y, 128, 22],
                    "@presentation",        1,
                    "@presentation_rect",   [0, i * 22, 128, 22]);
    slot_waiting_.varname = l;
    slot_waiting_listener_.maxobject = slot_waiting_.subpatcher().getnamed("effect_index");
    last_slot_listener_.maxobject = slots_.slice[-1].subpatcher().getnamed("effect_index");   
}
make_slot_waiting_.local = 1;

// --------------------------------------------------------------------

/* function get_x_at_(i)
{   
    return 200;
}
get_x_at_.local = 1


function get_y_at_(i)
{
    return 100 + i * (y_obj_ + y_space_);  
}
get_y_at_.local = 1
 */






/* function update_spray_()
{
    var spray = this.patcher.getnamed("spray");
    if (spray)
    {
        this.patcher.remove(spray);
    }

    var l = effect_slots_.length;

    if (l === 0)
        return;    

    var slots_in    = this.patcher.getnamed("slots_in");
    var x           = slots_in.rect[0];
    var y           = slots_in.rect[3] + 22;
    spray           = this.patcher.newdefault(x, y, "spray", l, 0, 1);
    spray.varname   = "spray";

    this.patcher.connect(slots_in, 0, spray, 0);
    for (var i = 0; i < l; i++)
    {
        this.patcher.connect(spray, i, effect_slots_[i], 0);
    }    
} */


/* function update_funnel_()
{
    var funnel = this.patcher.getnamed("funnel");
    if (funnel)
    {
        this.patcher.remove(funnel);
    }

    var l = effect_slots_.length;

    if (l === 0)
        return;

    var slots_out   = this.patcher.getnamed("slots_out");
    var x           = slots_out.rect[0];
    var y           = slots_out.rect[1] - 44;        
    funnel          = this.patcher.newdefault(x, y, "funnel", l);
    funnel.varname  = "funnel";

    this.patcher.connect(funnel, 0, slots_out, 0);
    for (var i = 0; i < l; i++)
    {
        this.patcher.connect(effect_slots_[i], 0, funnel, i);
    }
} */


// --------------------------------------------------------------------

