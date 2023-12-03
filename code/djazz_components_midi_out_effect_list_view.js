var dutils = require("db_dictionary_array_utils");

autowatch               = 1;
inlets                  = 2;
outlets                 = 2;

var EMPTY_STRING        = "EMPTY STRING";

var w_effect            = 128;
var h_effect            = 22;

//var effect_database_    = null;
var effects_            = [];


/* function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
}*/


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
	var y_patch             = effects_panel.rect[1] + h_effect * i;

    var patching_rect       = [x_patch, y_patch, w_effect, h_effect];

	var x_pres              = effects_panel.getattr("presentation_rect")[0];
	var y_pres              = effects_panel.getattr("presentation_rect")[1] + h_effect * i;

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
    //this.patcher.connect(effect, 0, this.box, 1);
    make_funnel_();
    //message_effect_(effect, "set_effect_database", effect_database_.name);
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


//--------------------------------------------------------------------------------


function list()
{
    if (inlet !== 1)
        return;

    var effect_index    = arguments[0];
    var patcher_name   = arguments[1];

    outlet (0, "set_effect", effect_index, patcher_name);

    var n_empty_effects_at_end = remove_empty_effects_at_end_();
    outlet (0, "remove_last_effects", n_empty_effects_at_end - 1); // subtract 1 because we do not count the empty slot that is always at the end in ctrl but not in model

    add_effect();
}


//--------------------------------------------------------------------------------


function remove_empty_effects_at_end_()
{
    var n_empty_effects_at_end  = 0;
    var names                   = effects_.map(get_effect_name_);
    var n                       = names.length - 1; // because last effect slot is always empty

    //post ("NAMES: ");
/*     for (var i = 0; i < names.length; i++)
    {
        post (names[i]);
    } */
    //post ("\n");
    for (var i = n; i >= 0; i--)
    {
        if (names[i] !== EMPTY_STRING)
        {
            //post (names[i], "is not the empty string.\n");
            break;
        }
        //post (names[i], "is the empty string.\n");
        n_empty_effects_at_end++;
    }
    remove_last_effects(n_empty_effects_at_end);
    return n_empty_effects_at_end;
}


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
    return effect.subpatcher().getnamed("components").getattr("effect_name");
}
get_effect_name_.local = 1;


/* function get_patcher_name_(effect_name)
{
    post (effect_name);
    var patcher_name    = effect_database_.get("effects").get(effect_name).get("patcher");
    post (patcher_name);

    return patcher_name;
} */



/* function message_effect_(effect, msg, args)
{
    var addr = [effect.varname, "components"].join("::");
    outlet (0, addr, msg, args);
}
message_effect_.local = 1; */




/*
function get_effects()
{
    var d   = new Dict ();
    var a   = effects_.map(get_effect_name_);
    dutils.set_dict_array(d, "effects", a);
    return d;
} */

/* 
function set_effects()
{
    var effects_dict    = arguments  ? arguments[0] : null;
    var effect_names    = effects_dict ? dutils.get_dict_array(effects_dict, "effects") : [];

    var l_old           = effects_.length;
    var l_new           = effect_names.length;

    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            add_effect();
        }
    }
    
    else
    {
        for (var i = l_new; i < l_old; i++)
        {
            remove_last_effect();
        }
    }
    
    for (var i = 0; i < effects_.length; i++)
    {
        message_effect_(effects_[i], "set_effect_silently", effect_names[i]);
    }

    add_effect();
} */


/* function effect()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);
    if (i >= effects_.length)
    {
        post ("There is no effect", i + ".\n");
        return;
    }
    message_effect_(effects_[i], msg, args);
} */
