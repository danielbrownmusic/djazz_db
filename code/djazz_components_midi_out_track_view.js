var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effect_database_    = null;
var effects_ = [];

var w_effect = 128;
var h_effect = 22;


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
    post ("track. name =", effect_database_name);
    post (effect_database_.get("items")[1]);
}


function getvalueof()
{
    var d   = new Dict ();
    var a = effects_.map(get_effect_name_);
    dutils.set_dict_array(d, "effects", a);
    return d;
}


function setvalueof(track_dict)
{
    set_value_silent(track_dict);
}


function set_value_silent()
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


function effect_changed()
{
    var names = effects_.map(get_name_);
    for (var i = names.length - 1; i >= 0; i++)
    {
        if (names[i] !== "")
            break;
        names.pop();
    }
    var d = new Dict();
    dutils.set_dict_array(d, "effects", names);
    setvalueof(d);
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

    post ("messaging");
    post (effect_database_.name);
    message_effect_(effect, "set_effect_database", effect_database_.name);
    post ("messaged");
    this.patcher.connect(effect, 0, this.box, 0);

    return effect;
}
make_effect_.local = 1;


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