autowatch = 1;

var channel;
declareattribute("channel");

var inlet_;
var outlet_;

var effects = [];

var y_obj_  = 22;
var y_space_ = 22;


function init()
{
    if (arguments.length > 0)
    {
        channel = arguments[0];
    }
    inlet_ = this.patcher.getnamed("inlet_");
    outlet_ = this.patcher.getnamed("outlet_");
    effects= get_effect_list();
	outlet(0, channel);
}

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
    post("there are", effects.length, "effect slots. \n");
    if (!effects)
    {
        post("no effects \n\n");
    }
    else
    {
        for (var i = 0; i < effects.length; i++)
        {
            print_effect_at(i);
        }
        post("\n");
    }
}


function print_effect_at(i)
{
    var effect = effects[i];
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
    effects.push(null);
    replace(effects.length - 1, effect_name);
    print_effects()
}


function clear()
{
    var count = effects.length;
    for (var i = 0; i < count; i++)
    {
        var effect = effects.pop();
        this.patcher.remove(effect);
    }
    this.patcher.connect(inlet_, 0, outlet_, 0);
    print_effects()
}


function remove(i)
{
    disconnect_all_();
    this.patcher.remove(effects[i]);
    effects[i] = null;
    connect_all_();
    print_effects()
}


function replace(i, effect_name)
{
    disconnect_all_();
    if (effects[i])
    {
        this.patcher.remove(effects[i]);
    }
    var x = get_x_at_(i);
    var y = get_y_at_(i);
    var effect = this.patcher.newdefault(x, y, effect_name);
    effect.varname = i.toString();
    effects[i] = effect;
    connect_all_();
    print_effects()
}





/* function insert(effect_name, i)
{
    // disconnect all
    disconnect_all_();
    var p = effects[i] ? 0 : 1;
    effects.splice(i, p, new_effect);
    for (var i = 0; i < effects.length; i++)
    {
        if (effects[i])
        {
            var x = get_effect_x_(i);
            var y = get_effect_y_(i);
            effects[i].message("patching_position", [x, y]);
        }
    }
    connect_all_();
} */

// ------------------------------------------------
// connect/disconnect cables

function disconnect_all_()
{
    if (!effects)
        return;

    this.patcher.disconnect(inlet_, 0, outlet_, 0);
    var e1 = get_first_effect();
    this.patcher.disconnect(inlet_, 0, e1, 0);
    var e2 = get_next_effect(e1);
    while (e2)
    {
        this.patcher.disconnect(e1, 0, e2, 0);
        e1 = e2;
        e2 = get_next_effect(e1);
    }
    this.patcher.disconnect(e1, 0, outlet_, 0);
}


function connect_all_()
{
    if (!effects)
    {
        this.patcher.connect(inlet_, 0, outlet_, 0);
        return;
    }

    var e1 = get_first_effect();
    this.patcher.connect(inlet_, 0, e1, 0);
    var e2 = get_next_effect(e1);
    while (e2)
    {
        this.patcher.connect(e1, 0, e2, 0);
        e1 = e2;
        e2 = get_next_effect(e1);
    }
    this.patcher.connect(e1, 0, outlet_, 0);
}

// ------------------------------------------------
// Linked-list style functions for accessing effects in the list,
// since there can be empty slots but the cable connections
// must be traced.

function get_first_effect()
{
    for (var i = 0; i < effects.length; i++)
    {
        if (effects[i])
            return effects[i];
    }
    return null;
}


function get_last_effect()
{
    for (var i = effects.length - 1; i >= 0; i--)
    {
        if (effects[i])
            return effects[i];
    }
    return null;
}



function get_next_effect(effect)
{
    var j = effects.indexOf(effect) + 1;
    while (j < effects.length && !effects[j])
    {
        j++;
    }
    if (j < effects.length)
        return effects[j];

    return null;
}


function get_previous_effect(effect)
{
    var j = effects.indexOf(effect) - 1;
    while (j >= 0 && !effects[j])
    {
        j--;
    }
    if (j >= 0)
        return effects[j];

    return null;
}

// -------------------------------------------------
// patcher position accessors

function get_x_at_(i)
{
    return inlet_.rect[0];
}


function get_y_at_(i)
{
    var inlet_bottom   = inlet_.rect[3];
    var list_position    = (1 + i) * (y_obj_ + y_space_);  
    return inlet_bottom + list_position;    
}

// ------------------------------------------------------------------------------------

// Initialization functions that gather the effect list each time the patcher is loaded.

