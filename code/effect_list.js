autowatch = 1;

var inlet_;
var outlet_;

/* var x_;
var y_; */
var count;
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

    new_effect.varname = count.toString();
    count++;

    //get_effect_list();
}


function insert(index)
{}


function remove(index)
{}


function replace(index, effect_name)
{}


function clear()
{
    var patcher = this.patcher;
    get_effect_list().forEach(
        function(e)
        {
            patcher.remove(e);
        }
    )
    count = 0;
    this.patcher.connect(inlet_, 0, outlet_, 0);
}


function get_at_(index)
{
    return this.patcher.getnamed(index.toString());
}


function get_new_patcher_x_(x_inlet, x_outlet)
{
    return inlet_.rect[0];
}


function get_new_patcher_y_()
{
    var inlet_bottom   = inlet_.rect[3];
    //post("inlet bottom = " + inlet_bottom + "\n");
    var list_length    = (1 + count) * (y_obj_ + y_space_);  
    return inlet_bottom + list_length;    
}


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