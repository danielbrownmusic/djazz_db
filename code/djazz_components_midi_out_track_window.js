var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effect_database_    = null;
var effects_ = [];

var w = 264;
var h = 132;


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
}


function setvalueof(track_dict)
{
    set_value_silent(track_dict);
}


function set_value_silent(track_dict)
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


/* function getvalueof()
{
    var d   = new Dict ();
    var a = effects_.map( function (e) { return e.getvalue(); } );
    dutils.set_dict_array(d, "effects", a);
    return d;
} */


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
}


function add_effect()
{
    effects_.push(make_effect_());
}


//--------------------------------------------------------------------------------



function make_effect_()
{
    var i = effects_.length;
    var x = this.box.rect[0] + w * i;
    var y = this.box.rect[3] + h;

    var effect = this.patcher.newdefault(
                                    x, 
                                    y, 
                                    "djazz_midi_out_effect_window", 
                                    i);

    effect.varname = "effect_" + i;
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
