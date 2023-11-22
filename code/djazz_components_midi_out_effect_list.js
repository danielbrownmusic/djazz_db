var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effect_database_    = null;
var effects_            = [];

var w                   = 128;
var h                   = 44;


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
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
        message_effect_(effects_[i], "set_effect", effect_names[i]);
    }
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
    var l = tracks_.length;
    for (var i = 0; i < l; i++)
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
    var inl 	    = this.patcher.getnamed("events_inlet");

    var x_inlet     = inl.rect[0];
    var y_inlet     = inl.rect[3];

    var i           = effects_.length;
	var x           = x_inlet;
	var y           = y_inlet + h * (i + 1);

    var effect      = this.patcher.newdefault(
                                    x, 
                                    y, 
                                    "djazz_midi_out_effect");

    effect.varname  = "effect_" + i;

    effects_.push(effect);
    message_effect_(effect, "set_effect_database", effect_database_.name);
    
    return effect;
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
