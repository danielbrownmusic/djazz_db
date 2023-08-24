autowatch = 1;


var slots_ = []
var last_slot_listener_ = new MaxobjListener(null, on_slot_changed_);

var y_obj_ = 22;
var y_space_ = 22;


/* function loadbang()
{
    set_slot_count_no_output(jsarguments.length > 1 ? arguments[1] : 0);    
} */


function loadbang()
{
    clear();
    set_slot_count(2);
}


function clear() {
    set_slot_count(0);
}


// ----------------------------------------------------------------------


function dictionary() {
    var name = arguments[0];
    slots_.forEach(
        function (slot) {
            post(name);
            slot.message("dictionary", name);
        }
    );
}


// ----------------------------------------------------------------------


function set_slot_count(n) {
    set_slot_count_no_output(n);
    outlet(0, "slot_count", slots_.length);
}


function set_slot_count_no_output(n) {
    if (n < 0)
        return;

    var l = slots_.length;

    if (n === l)
        return;

    if (n < l) {
        for (var i = n; i < l; i++) {
            pop_back_();
        }
    }
    else {
        for (var i = 0; i < n - l; i++) {
            push_back_();
        }
    }

    //update_spray_();
    update_funnel_();
}


// ----------------------------------------------------------------------


function on_slot_changed_(data) {
    if (value === 0) {
        pop_back_();
    }
    else {
        push_back_();
    }
}
on_slot_changed_.local = 1;


// --------------------------------------------------------------------


function push_back_() {
    var slots_panel = this.patcher.getnamed("slots_panel");

    var l = slots_.length;
    var x = slots_panel.rect[0];
    var y = slots_panel.rect[1] + l * 22;

    var slot = this.patcher.newdefault(x, y, "umenu",
        "@patching_rect", [x, y, 128, 22],
        "@presentation", 1,
        "@presentation_rect", [0, l * 22, 128, 22]);

    slots_.push(slot);
    last_slot_listener_.maxobject = slot;
}
push_back_.local = 1;


function pop_back_() {
    last_slot_listener_.maxobject = null;
    var slot = slots_.pop();
    this.patcher.remove(slot);
    last_slot_listener_.maxobject = slots_ ? slots_.slice(-1) : null;
}
pop_back_.local = 1;


// ----------------------------------------------------------------------


function update_funnel_() {
    var funnel = this.patcher.getnamed("funnel");
    if (funnel) {
        this.patcher.remove(funnel);
    }

    var l = slots_.length;

    if (l === 0)
        return;

    var out1 = this.patcher.getnamed("out1");
    var out2 = this.patcher.getnamed("out2");
    var x = out1.rect[0];
    var y = out1.rect[1] - 44;
    funnel = this.patcher.newdefault(x, y, "funnel", l);
    funnel.varname = "funnel";

    this.patcher.connect(funnel, 0, out1, 0);
    for (var i = 0; i < l; i++) {
        this.patcher.connect(slots_[i], 0, funnel, i);
        this.patcher.connect(slots_[i], 1, out2, 0);
    }
}

// --------------------------------------------------------------------


function get_x_at_(i) {
    return 200;
}
get_x_at_.local = 1


function get_y_at_(i) {
    return 100 + i * (y_obj_ + y_space_);
}
get_y_at_.local = 1





/* function update_spray_()
{
    var spray = this.patcher.getnamed("spray");
    if (spray)
    {
        this.patcher.remove(spray);
    }

    var l = slots_.length;

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
        this.patcher.connect(spray, i, slots_[i], 0);
    }    
} */