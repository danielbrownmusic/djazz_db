autowatch = 1;

var slots_  = []


function on_next_to_last_slot_changed(data)
{
    post("changing next to last - " + data.value);
    if (data.value !== 0) 
        return;

    set_slot_count(slots_.length - 1);
}

var next_to_last_slot_listener_ = null;//new MaxobjListener(null, on_next_to_last_slot_changed);


function on_last_slot_changed(data)
{
    post("changing last - " + data.value);
    if (data.value === 0)
        return;
    set_slot_count(slots_.length + 1);
}

var last_slot_listener_ = null;//new MaxobjListener(null, on_last_slot_changed);

// ------------------------------------------------------------------------------------

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
    var slots_panel = this.patcher.getnamed("slots_panel");
    var l   = slots_.length;
    var x   = slots_panel.rect[0];
    var y   = slots_panel.rect[1] + l * 22;

    var slot   = this.patcher.newdefault(x, y, "bpatcher",
                    "@name",                "djazz_ui_effect_slot",
                    "@patching_rect",       [x, y, 128, 22],
                    "@presentation",        1,
                    "@presentation_rect",   [0, l * 22, 128, 22]);
    post ("made slot");
    slot.varname = l;

    slots_.push(slot);
    set_listeners_();

}
push_back_.local = 1;


function pop_back_()
{   
    slot = slots_.pop();
    this.patcher.remove(slot);
    set_listeners_();
}
pop_back_.local = 1;


function set_slot_count(n)
{
    post ("setting slot count to ", n, "\n");
    this.patcher.getnamed("slot_count").message(n);
}


function set_listeners_()
{
/*     last_slot_listener_.maxobject = (slots_.length > 0) ?
        null;
    

    next_to_last_slot_listener_.maxobject = (slots_.length > 1) ?
        slots_.slice(-2)[0].subpatcher().getnamed("effect_index") : 
        null;
        post ("next-to-last slot listener ", next_to_last_slot_listener_.maxobject.varname, "\n");
    }
 */
/*     if (slots_.length > 0)
    {
        var obj             = slots_.slice(-1)[0].subpatcher().getnamed("effect_index");
        last_slot_listener_ = new MaxobjListener(obj, on_last_slot_changed);
        post ("last slot listener ", last_slot_listener_.maxobject.varname, "\n");
    }
    else
    {
        last_slot_listener_ = null;
    } */

    last_slot_listener_ =
        (slots_.length > 0) ?
        new MaxobjListener
        (
            slots_.slice(-1)[0].subpatcher().getnamed("effect_index"), 
            on_last_slot_changed
        ) :
        null;

    next_to_last_slot_listener_ =
        (slots_.length > 1) ?
        new MaxobjListener
        (
            slots_.slice(-2)[0].subpatcher().getnamed("effect_index"), 
            on_next_to_last_slot_changed
        ) :
        null;



/*     if (slots_.length > 1)
    {
        var obj                     = slots_.slice(-2)[0].subpatcher().getnamed("effect_index");
        next_to_last_slot_listener_ = new MaxobjListener(obj, on_next_to_last_slot_changed);
    }   */

}


set_listeners_.local = 1;


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