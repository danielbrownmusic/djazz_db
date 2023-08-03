autowatch = 1;

var inlet_;
var outlet_;

/* var x_;
var y_; */
//var count;
var effects = [];


declareattribute("count");

var y_obj_  = 22;
var y_space_ = 22;

function bang()
{
    loadbang();
}


function loadbang()
{
    inlet_ = this.patcher.getnamed("inlet_");
    outlet_ = this.patcher.getnamed("outlet_");
    this.patcher.connect(inlet_, 0, outlet_, 0);
    //x_      = this.box.rect[0];
    //y_      = this.box.rect[1];
    count  = get_initial_count_();
}


function add(effect_name)
{
    var x_new = get_new_patcher_x_();
    var y_new = get_new_patcher_y_();
    var new_effect = this.patcher.newdefault(x_new, y_new, effect_name);

    var prev = (count === 0) ? inlet_ : get_at_(count);
    this.patcher.disconnect(prev, 0, outlet_, 0);
    this.patcher.connect(prev, 0, new_effect, 0);
    this.patcher.connect(new_effect, 0, outlet_, 0);

    effects.push(new_effect);
    new_effect.varname = effects.length.toString();

    //get_effect_list();
}


function insert(effect_name, i)
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
}


function disconnect_all_()
{
    if (!effects)
        return;

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
        return;

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


function remove(index)
{}


function replace(index, effect_name)
{}


function clear()
{
    var count = effects.length;
    for (var i = 0; i < count; i++)
    {
        var effect = effects.pop();
        this.patcher.remove(effect);
    }
    this.patcher.connect(inlet_, 0, outlet_, 0);
}


function get_at_(i)
{
    return effects[i];
}


function get_effect_x_(i)
{
    return inlet_.rect[0];
}


function get_effect_y_(i)
{
    var inlet_bottom   = inlet_.rect[3];
    var list_position    = (1 + i) * (y_obj_ + y_space_);  
    return inlet_bottom + list_position;    
}


/* function get_new_effect_x_(x_inlet, x_outlet)
{
    return inlet_.rect[0];
}


function get_new_effect_y_()
{
    var inlet_bottom   = inlet_.rect[3];
    var list_length    = (1 + effects.length) * (y_obj_ + y_space_);  
    return inlet_bottom + list_length;    
}
 */

function get_initial_count_()
{
    var effect_list = get_effect_list();
    //post("initial count = " + effect_list.length);
    return effect_list.length;

}


function get_effect_list()
{
    var temp_effect_list= [];
    for (var obj = this.patcher.firstobject; obj !== null; obj = obj.nextobject)
    {
        if (obj.varname && !isNaN(obj.varname))
        {
            //post(obj.varname);
            temp_effect_list.push(obj);
        }
    }

    //post("unordered effect list = ");
    //temp_effect_list.forEach(function(e) {post(e ? e.varname : "_");})
    //post("\n");
    //post("\n");

    var effect_list = Array(temp_effect_list.length);
    temp_effect_list.forEach( 
        function(e) 
        {
            effect_list[Number(e.varname)] = e;
        }
    );

    //post("ordered effect list = ");
    //effect_list.forEach(function(e) {post(e ? e.varname : "-");})
    //post("\n");
    //post("\n");

    return effect_list;
}