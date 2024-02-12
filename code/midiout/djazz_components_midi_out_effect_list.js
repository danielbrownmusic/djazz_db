var dutils      = require("db_dictionary_array_utils");
autowatch       = 1;

var effects_    = [];
var w           = 128;
var h           = 44;

declareattribute("effects_dict", "get_effects_dict", "set_effects_dict");

//--------------------------------------------------------------------------------

function get_effects_dict()
{
    //post ("getting effects dict \n");
    var d   = new Dict ();
    var a   = effects_.map(get_effect_name_);
/*     if (a[a.length - 1] === EMPTY_STRING)
    {
        a.pop();
    } */
    post ("1\n");
    dutils.set_dict_array(d, "effects", a);
    post ("2\n");

    return d.name;
}


function set_effects_dict(effects_dict_name)
{
    clear();

    var effects_dict =  effects_dict_name                               ? 
                        new Dict (effects_dict_name)                    : 
                        null;

    var effect_names =  effects_dict                                    ? 
                        dutils.get_dict_array(effects_dict, "effects")  : 
                        [];

    for (var i = 0; i < effect_names.length; i++)
    {
        var effect      = add_effect();
        var effect_name = effect_names[i];
        set_effect_(effect, effect_name);
    }
}

//--------------------------------------------------------------------------------

function clear()
{
    remove_last_effects(effects_.length);
}


function add_effects(n)
{
    for (var i = 0; i < n; i++)
    {
        add_effect();
    }
}


function add_effect()
{
    //post ("in model: adding effect. \n");
    var inl 	    = this.patcher.getnamed("events_inlet");

    var x_inlet     = inl.rect[0];
    var y_inlet     = inl.rect[3];

    var i           = effects_.length;
	var x           = x_inlet;
	var y           = y_inlet + h * (i + 2);

    disconnect_effects_();
    var effect      = this.patcher.newdefault(
                                    x, 
                                    y, 
                                    "djazz_midi_out_effect",
                                    i);

    effect.varname  = "effect_" + i;
    effects_.push(effect);
    connect_effects_();
    
    return effect;
}


function remove_last_effects(n)
{
    for (var i = 0; i < n; i++)
    {
        remove_last_effect();
    }
}


function remove_last_effect()
{   
    disconnect_effects_();
    if (effects_.length !== 0)
    {
        this.patcher.remove(effects_.pop());
    }
    connect_effects_();
}


function set_effect(effect_index, effect_name)
{
    set_effect_(effects_[effect_index], effect_name);
}


//--------------------------------------------------------------------------------


function get_effect_components_mgr_(effect)
{
    return effect.subpatcher().getnamed("components");
}
get_effect_components_mgr_.local = 1;


function get_effect_name_(effect)
{
    //post (get_effect_components_mgr_(effect).getattr("effect_name"));
    return get_effect_components_mgr_(effect).getattr("effect_name");
}
get_effect_name_.local = 1;


function set_effect_(effect, effect_name)
{
    get_effect_components_mgr_(effect).message("effect_name", effect_name);
}
set_effect_.local = 1;


//--------------------------------------------------------------------------------


function connect_effects_()
{
    var inl     = this.patcher.getnamed("events_inlet");
    var outl    = this.patcher.getnamed("events_outlet");

    if (effects_.length === 0)
    {
        this.patcher.connect(inl, 0, outl, 0);
        return;
    }
    this.patcher.connect(inl, 0, effects_[0], 0);
    this.patcher.connect(effects_.slice(-1)[0], 0, outl, 0);
    for (var i = 0; i < effects_.length - 1; i++)
    {
        this.patcher.connect(effects_[i], 0, effects_[i+1], 0);
    }
}

connect_effects_.local = 1;


function disconnect_effects_()
{
    var inl     = this.patcher.getnamed("events_inlet");
    var outl    = this.patcher.getnamed("events_outlet");

    if (effects_.length === 0)
    {
        this.patcher.disconnect(inl, 0, outl, 0);
        return;
    }
    this.patcher.disconnect(inl, 0, effects_[0], 0);
    this.patcher.disconnect(effects_.slice(-1)[0], 0, outl, 0);
    for (var i = 0; i < effects_.length - 1; i++)
    {
        this.patcher.disconnect(effects_[i], 0, effects_[i+1], 0);
    }
}
disconnect_effects_.local = 1;