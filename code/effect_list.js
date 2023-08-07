autowatch = 1;

var channel;
declareattribute("channel");

var effect_slots_ = [];

var y_obj_  = 22;
var y_space_ = 22;



function clear()
{
    set_slot_count(0);
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


function set_effect(i, name)
{
    post(effect_slots_.join(", "), "\n");
    effect_slots_[i].subpatcher().getnamed("effect_type").message(name);
}


//---------------------------------------------------------


function push_back_()
{
    var l       = effect_slots_.length;
    var x       = get_x_at_(l);
    var y       = get_y_at_(l);
    var prev    = (l === 0) ? inlet : effect_slots_[l - 1];

    var slot    = this.patcher.newdefault(x, y, "djazz_effect_slot");

    var inlet      = this.patcher.getnamed("inlet");
    var outlet     = this.patcher.getnamed("outlet");

    this.patcher.disconnect (prev, 0, outlet, 0);
    this.patcher.connect    (prev, 0, slot, 0);
    this.patcher.connect    (slot, 0, outlet, 0);

    effect_slots_.push(slot);
}
push_back_.local = 1;


function pop_back_()
{
    var effect = effect_slots_.pop();
    this.patcher.remove(effect);

    var inlet      = this.patcher.getnamed("inlet");
    var outlet     = this.patcher.getnamed("outlet");

    var l       = effect_slots_.length;
    var prev    = (l === 0) ? inlet : effect_slots_[l - 1];

    this.patcher.connect(prev, 0, outlet, 0);
}
pop_back_.local = 1;

//---------------------------------------------------------


function get_x_at_(i)
{
    var inlet = this.patcher.getnamed("inlet");    
    return inlet.rect[0];
}
get_x_at_.local = 1


function get_y_at_(i)
{
    var inlet          = this.patcher.getnamed("inlet");    
    var inlet_bottom    = inlet.rect[3];
    var list_position   = (1 + i) * (y_obj_ + y_space_);  
    return inlet_bottom + list_position;    
}
get_y_at_.local = 1



/* function disconnect_all_()
{
    if (!effect_slots_)
        return;

    this.patcher.disconnect(inlet, 0, outlet, 0);
    var e1 = get_first_effect();
    this.patcher.disconnect(inlet, 0, e1, 0);
    var e2 = get_next_effect(e1);
    while (e2)
    {
        this.patcher.disconnect(e1, 0, e2, 0);
        e1 = e2;
        e2 = get_next_effect(e1);
    }
    this.patcher.disconnect(e1, 0, outlet, 0);
}
disconnect_all_.local = 1


function connect_all_()
{
    if (!effect_slots_)
    {
        this.patcher.connect(inlet, 0, outlet, 0);
        return;
    }

    var e1 = get_first_effect();
    this.patcher.connect(inlet, 0, e1, 0);
    var e2 = get_next_effect(e1);
    while (e2)
    {
        this.patcher.connect(e1, 0, e2, 0);
        e1 = e2;
        e2 = get_next_effect(e1);
    }
    this.patcher.connect(e1, 0, outlet, 0);
}
connect_all_.local = 1 */










//------------------------------------------------

/* 
function get_effect_list()
{
    var temp_effect_list = [];
    for (var obj = this.patcher.firstobject; obj !== null; obj = obj.nextobject)
    {
        if (obj.varname && !isNaN(obj.varname))
        {
            temp_effect_list.push(obj);
        }
    }
    var effect_list = Array(temp_effect_list.length);
    temp_effect_list.forEach( 
        function(e) 
        {
            effect_list[Number(e.varname)] = e;
        }
    );

    return effect_list;
}


//------------------------------------------------
// debugging

function print_effects()
{
    post("there are", effect_slots_.length, "effect slots. \n");
    if (!effect_slots_)
    {
        post("no effect_slots_ \n\n");
    }
    else
    {
        for (var i = 0; i < effect_slots_.length; i++)
        {
            print_effect_at(i);
        }
        post("\n");
    }
}


function print_effect_at(i)
{
    var effect = effect_slots_[i];
    post("effect ", i.toString(), ": ");
    if (effect)
    {
        post(effect.subpatcher.name, "\n");
    }
    else
    {
        post("none \n");
    }
}

//------------------------------------------------


function add(effect_name)
{
    effect_slots_.push(null);
    replace(effect_slots_.length - 1, effect_name);
    print_effects()
}


function clear()
{
    var count = effect_slots_.length;
    for (var i = 0; i < count; i++)
    {
        var effect = effect_slots_.pop();
        this.patcher.remove(effect);
    }
    this.patcher.connect(inlet, 0, outlet, 0);
    print_effects()
}


function remove(i)
{
    disconnect_all_();
    this.patcher.remove(effect_slots_[i]);
    effect_slots_[i] = null;
    connect_all_();
    print_effects()
}


function replace(i, effect_name)
{
    disconnect_all_();
    if (effect_slots_[i])
    {
        this.patcher.remove(effect_slots_[i]);
    }
    var x = get_x_at_(i);
    var y = get_y_at_(i);
    var effect = this.patcher.newdefault(x, y, effect_name);
    effect.varname = i.toString();
    effect_slots_[i] = effect;
    connect_all_();
    print_effects()
}





/* function insert(effect_name, i)
{
    // disconnect all
    disconnect_all_();
    var p = effect_slots_[i] ? 0 : 1;
    effect_slots_.splice(i, p, new_effect);
    for (var i = 0; i < effect_slots_.length; i++)
    {
        if (effect_slots_[i])
        {
            var x = get_effect_x_(i);
            var y = get_effect_y_(i);
            effect_slots_[i].message("patching_position", [x, y]);
        }
    }
    connect_all_();
} */

// ------------------------------------------------
// connect/disconnect cables


// ------------------------------------------------
// Linked-list style functions for accessing effect_slots_ in the list,
// since there can be empty slots but the cable connections
// must be traced.

/*
function get_first_effect()
{
    for (var i = 0; i < effect_slots_.length; i++)
    {
        if (effect_slots_[i])
            return effect_slots_[i];
    }
    return null;
}


function get_last_effect()
{
    for (var i = effect_slots_.length - 1; i >= 0; i--)
    {
        if (effect_slots_[i])
            return effect_slots_[i];
    }
    return null;
}



function get_next_effect(effect)
{
    var j = effect_slots_.indexOf(effect) + 1;
    while (j < effect_slots_.length && !effect_slots_[j])
    {
        j++;
    }
    if (j < effect_slots_.length)
        return effect_slots_[j];

    return null;
}


function get_previous_effect(effect)
{
    var j = effect_slots_.indexOf(effect) - 1;
    while (j >= 0 && !effect_slots_[j])
    {
        j--;
    }
    if (j >= 0)
        return effect_slots_[j];

    return null;
}

// -------------------------------------------------
// patcher position accessors

function get_x_at_(i)
{
    return inlet.rect[0];
}


function get_y_at_(i)
{
    var inlet_bottom   = inlet.rect[3];
    var list_position    = (1 + i) * (y_obj_ + y_space_);  
    return inlet_bottom + list_position;    
}

// ------------------------------------------------------------------------------------

// Initialization functions that gather the effect list each time the patcher is loaded.

 */