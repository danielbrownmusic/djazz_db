var dutils = require("db_dictionary_array_utils");

autowatch               = 1;
inlets                  = 2;
outlets                 = 2;

var EMPTY_STRING        = "EMPTY STRING";

var w_effect            = 128;
var h_effect            = 22;
var h_offset            = 30;
var effects_            = [];

declareattribute("effects_dict", "get_effects_dict", "set_effects_dict");


/* function loadbang()
{
    set_effects_dict();
} */


function get_effects_dict()
{
    var d   = new Dict ();
    var a   = effects_.map(get_effect_name_);
    if (a[a.length - 1] === EMPTY_STRING)
    {
        a.pop();
    }
    post (a);
    dutils.set_dict_array(d, "effects", a);
    return d.name;
}


function set_effects_dict(effects_dict_name)
{
    clear_();

    var effects_dict =  effects_dict_name                               ? 
                        new Dict (effects_dict_name)                    : 
                        null;

    var effect_names =  effects_dict                                    ? 
                        dutils.get_dict_array(effects_dict, "effects")  : 
                        [];

    for (var i = 0; i < effect_names.length; i++)
    {
        var effect = add_effect_();
        set_effect_(effect, effect_names[i]);
    }
/*     post ("adding last effect slot \n");
    add_effect_(); */
    // Don't send message to model! This is handled by the bank dict.
}

//--------------------------------------------------------------------------------

function clear()
{
    clear_();
    outlet (0, "clear");
}


function add_effects(n)
{
    add_effects_(n);
    outlet (0, "add_effects", n);
}


function add_effect()
{
    add_effect_();
    outlet (0, "add_effect");
}


function remove_last_effects(n)
{
    remove_last_effects_(n);
    outlet (0, "remove_last_effects", n);
}


function remove_last_effect()
{
    remove_last_effect_();
    outlet (0, "remove_last_effect");
}


//--------------------------------------------------------------------------------


function clear_()
{
    var n = effects_.length;
    for (var i = 0; i < n; i++)
    {
        remove_last_effect_();
    }
}
clear_.local = 1;

function add_effects_(n)
{
    for (var i = 0; i < n; i++)
    {
        add_effect_();
    }
}
add_effects_.local = 1;


function add_effect_()
{
    var i                   = effects_.length;
    var effects_panel       = this.patcher.getnamed("effects_panel");

	var x_patch             = effects_panel.rect[0];
	var y_patch             = effects_panel.rect[1] + h_effect * (i + 1);

    var patching_rect       = [x_patch, y_patch, w_effect, h_effect];

	var x_pres              = effects_panel.getattr("presentation_rect")[0];
	var y_pres              = effects_panel.getattr("presentation_rect")[1] + h_offset + h_effect * i;

    var presentation_rect   = [x_pres, y_pres, w_effect, h_effect];

    var effect              = this.patcher.newdefault(
                                x_patch, 
                                y_patch,
                                "bpatcher",
                                "djazz_midi_out_effect_view",
                                "@args",                i,                    
                                "@presentation",        1,
                                "@patching_rect",       patching_rect,
                                "@presentation_rect",   presentation_rect);

    effect.varname          = "effect_" + i;
    
    effects_.push(effect);
    make_funnel_();

    return effect;
}
add_effect_.local = 1;


function remove_last_effect_()
{
    if (effects_.length === 0)
        return;

    var effect = effects_.pop();
    if (effect)
    {
        this.patcher.remove(effect);
    }
    make_funnel_();
}
remove_last_effect_.local = 1;


function remove_last_effects_(n)
{
    for (var i = 0; i < n; i++)
    {
        remove_last_effect_();
    }
}
remove_last_effects_.local = 1;


function set_effect_(effect, effect_name)
{
    get_effect_components_mgr_(effect).message("effect_name", effect_name);    
}
set_effect_.local = 1;

//--------------------------------------------------------------------------------


function list()
{
    if (inlet !== 1)
        return;

    var effect_index   = arguments[0];
    var effect_name   = arguments[1];

    outlet (0, "set_effect", effect_index, effect_name);

    //var n_empty_effects_at_end = remove_empty_effects_at_end_();
    //outlet (0, "remove_last_effects", n_empty_effects_at_end - 1); // subtract 1 because we do not count the empty slot that is always at the end in ctrl but not in model

    //add_effect();
}


//--------------------------------------------------------------------------------


/* function remove_empty_effects_at_end_()
{
    var n_empty_effects_at_end  = 0;
    var names                   = effects_.map(get_effect_name_);
    var n                       = names.length - 1; // because last effect slot is always empty

    for (var i = n; i >= 0; i--)
    {
        if (names[i] !== EMPTY_STRING)
        {
            break;
        }
        n_empty_effects_at_end++;
    }
    remove_last_effects(n_empty_effects_at_end);
    return n_empty_effects_at_end;
} */


function make_funnel_()
{
    var funnel = this.patcher.getnamed("funnel");
    if (funnel)
    {
        this.patcher.remove(funnel);
    }

    var n = effects_.length;

    if (n === 0)
        return;

    var x = this.box.rect[0] + 44;
    var y = this.box.rect[1] - 44;

    var funnel = this.patcher.newdefault(x, y, "funnel", n);
    this.patcher.connect(funnel, 0, this.box, 1);
    for (var i = 0; i < n; i++)
    {
        this.patcher.connect(effects_[i], 0, funnel, i);
    }
    funnel.varname = "funnel";
}


function get_effect_name_(effect)
{
    return get_effect_components_mgr_(effect).getattr("effect_name");
}
get_effect_name_.local = 1;


function get_effect_components_mgr_(effect)
{
    return effect.subpatcher().getnamed("components");
}
get_effect_components_mgr_.local = 1;