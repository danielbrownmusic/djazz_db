var dutils = require("db_dictionary_array_utils");

autowatch = 1;

outlets = 2;


//var listener_ = null;

var effect_database_    = null;
var effects_ = [];

var w_effect = 128;
var h_effect = 22;

declareattribute("effects", "get_effects", "set_effects");

/* function set_listener(listener)
{
    listener_ = listener;
} */


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
}



function get_effects()
{
    var d   = new Dict ();
    var a = effects_.map(get_effect_name_);
    dutils.set_dict_array(d, "effects", a);
    return d;
}


function set_effects(track_dict)
{
    set_effects(track_dict);
    outlet (0, effect_name);
    if (listener_)
    {
        listener_.notify_changed();            
    }
}


function set_effects_silent()
{
    var track_dict      = arguments  ? arguments[0] : null;
    var effect_names    = track_dict ? dutils.get_dict_array(track_dict, "effects") : [];
    
    var l_old   = effects_.length;
    var l_new   = effect_names.length;

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
        message_effect_(effects_[i], "set_value_silent", effect_names[i]);
    }
}


function effect()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);
    var effect  = effects_[i];

    message_effect_(effect, msg, args);
}


function clear()
{
    var l = tracks_.length;
    for (var i = 0; i < l; i++)
    {
        remove_last_effect_();
    }
    set_size_();
}


function add_effect()
{
    effects_.push(make_effect_());
}


function effect_changed(effect_slot_name, effect_name)
{
    post ("effect changed \n");
    var names = effects_.map(get_effect_name_);
    for (var i = names.length - 1; i >= 0; i++)
    {
        if (names[i] !== "")
            break;
        names.pop();
    }
    var d = new Dict();
    dutils.set_dict_array(d, "effects", names);
    set_value(d);
}


//--------------------------------------------------------------------------------

function make_effect_()
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

    message_effect_(effect, "set_effect_database", effect_database_.name);
    connect_effects_();

    return effect;
}
make_effect_.local = 1;


function connect_effects_()
{
    var x_spray     = 200;
    var y_spray     = 44;
    var x_funnel    = 200;
    var y_funnel    = 244;

    var spray = this.patcher.getnamed("spray");
    var funnel = this.patcher.getnaned("funnel");

    if (spray)
    {
        this.patcher.remove(funnel);
    }
    if (funnel)
    {
        this.patcher.remove(funnel);
    }

    var n   = effects_.length;

    spray   = this.patcher.newdefault(x_spray,  y_spray,  "spray",  n);
    funnel  = this.patcher.newdefault(x_funnel, y_funnel, "funnel", n);

    this.patcher,connect(funnel, 0, this.box, 0);
    for (var i = 0; i < effects_.length; i++)
    {
        this.patcher.connect(   spray,         i,   effects_[i],    0);
        this.patcher.connect(   effects_[i],   0,   funnel,         i);
    }

}


function remove_last_effect_()
{   
    if (effects_.length === 0)
        return;

    var effect = effects_.pop();
    this.patcher.remove(effect);
}
remove_last_effect_.local = 1;


function message_effect_(effect, msg, args)
{
    var addr = [effect.varname, "components"].join("::");
    outlet (0, addr, msg, args);
}
message_effect_.local = 1;


function get_effect_name_(effect)
{
    return effect.subpatcher().getnamed("components").getattr("effect_name");
}
get_effect_name_.local = 1;