var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effects_            = [];

var w                   = 128;
var h                   = 44;

declareattribute("effects_dict", "get_effects_dict", "set_effects_dict");


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
        post ("trying to FUCKING  set the effect. varname of effect is", effect.varname, "\n");
        set_effect_(effect, effect_name);
    }
/*     post ("adding last effect slot in model\n");
    add_effect(); */
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
    post ("in model: adding effect. \n");
    var inl 	    = this.patcher.getnamed("events_inlet");

    var x_inlet     = inl.rect[0];
    var y_inlet     = inl.rect[3];

    var i           = effects_.length;
	var x           = x_inlet;
	var y           = y_inlet + h * (i + 2);

    var effect      = this.patcher.newdefault(
                                    x, 
                                    y, 
                                    "djazz_midi_out_effect");

    effect.varname  = "effect_" + i;

    effects_.push(effect);
    //message_effect_(effect, "set_effect_database", effect_database_.name);
    
    return effect;
}


function remove_last_effects(n)
{
    //post ("remove_last_effects in model:", n, "\n");
    for (var i = 0; i < n; i++)
    {
        remove_last_effect();
    }
}


function remove_last_effect()
{   
    if (effects_.length === 0)
        return;

    this.patcher.remove(effects_.pop());
}


function set_effect(effect_index, effect_name)
{
    set_effect_(effects_[effect_index], effect_name);
}


//--------------------------------------------------------------------------------

function set_effect_(effect, effect_name)
{
    get_effect_components_mgr_(effect).message("effect_name", effect_name);
}
set_effect_.local = 1;


function get_effect_components_mgr_(effect)
{
    return effect.subpatcher().getnamed("components");
}
get_effect_components_mgr_.local = 1;


