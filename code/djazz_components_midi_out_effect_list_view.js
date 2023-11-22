var dutils = require("db_dictionary_array_utils");

autowatch               = 1;
inlets                  = 2;
outlets                 = 2;

var EMPTY_STRING        = "empty_string";

var w_effect            = 128;
var h_effect            = 22;

var effect_database_    = null;
var effects_            = [];


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
}


function get_effects()
{
    var d   = new Dict ();
    var a   = effects_.map(get_effect_name_);
    dutils.set_dict_array(d, "effects", a);
    return d;
}


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
            remove_last_effect_();
        }
    }
    
    for (var i = 0; i < effects_.length; i++)
    {
        message_effect_(effects_[i], "set_effect_silently", effect_names[i]);
    }

    add_effect();
}


function effect()
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
}


function clear()
{
    var n = effects_.length;
    for (var i = 0; i < n; i++)
    {
        remove_last_effect_();
    }
}


function add_effects(n)
{
    post ("adding effects", n, "\n");
    for (var i = 0; i < n; i++)
    {
        add_effect();
    }
}


function add_effect()
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
    this.patcher.connect(effect, 0, this.box, 1);
    message_effect_(effect, "set_effect_database", effect_database_.name);
    return effect;
}


function anything()
{
    if (inlet !== 1)
        return;

        var names   = effects_.map(get_effect_name_);
    var n       = names.length - 1;

    for (var i = n; i >= 0; i--)
    {
        if (names[i] !== EMPTY_STRING)
            break;
        names.pop();
    }
    var d = new Dict ();
    dutils.set_dict_array(d, "effects", names);
    set_effects(d);

    message_pattr_(get_effects());
    message_pattr_("invisible", 0);
}


//--------------------------------------------------------------------------------


function remove_last_effect_()
{
    if (effects_.length === 0)
        return;

    this.patcher.remove(effects_.pop());
}
remove_last_effect_.local = 1;


function message_effect_(effect, msg, args)
{
    var addr = [effect.varname, "components"].join("::");
    outlet (0, addr, msg, args);
}
message_effect_.local = 1;


function message_pattr_(msg, args)
{
    outlet (1, msg, args);
}
message_pattr_.local = 1;


function get_effect_name_(effect)
{
    return effect.subpatcher().getnamed("components").getattr("effect_name");
}
get_effect_name_.local = 1;