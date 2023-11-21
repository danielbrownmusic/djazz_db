var dutils = require("db_dictionary_array_utils");

autowatch = 1;

outlets = 3;

var EMPTY_STRING = "empty_string";


var effect_database_    = null;
var effects_ = [];

var w_effect = 128;
var h_effect = 22;

declareattribute("effects", "get_effects", "set_effects");


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
}


function get_effects()
{
    var d   = new Dict ();
    var a = effects_.map(get_effect_name_);
    dutils.set_dict_array(d, "effects", a);
    post (effects_.length);
    post (a.length);
    post (a, "\n");
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
    /*
    connect_effects_();
    for (var i = 0; i < effects_.length; i++)
    {
        outlet(0, i, ["set_effect_silently", effect_names[i]]);
    } */

}


function effect()
{
    outlet(0, arrayfromargs(arguments));
}


function clear()
{
/*     remove_spray_();
    remove_funnel_(); */
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
    effects_.push(make_effect_());
    connect_effects_();

    var i = effects_.length - 1;
    if (effect_database_)
    {
        message_effect_(effects_[i], "set_effect_database", effect_database_.name);
    }
}


function effect_changed() //j, effect_name)
{
    var names = effects_.map(get_effect_name_);
    var n = names.length - 1;
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

    var effect = effects_.pop();
    this.patcher.remove(effect);
}
remove_last_effect_.local = 1;


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
    //message_effect_(effect, "set_effect_database", effect_database_.name);
    return effect;
}
make_effect_.local = 1;


//-----------------------------------------------------------------------------------------------


function connect_effects_()
{
/*     remove_spray_();
    remove_funnel_(); */

    var n = effects_.length;

    if (n === 0)
        return;

/*     var spray   = make_spray_(n);
    var funnel  = make_funnel_(n); */


    var connect_in = this.patcher.getnamed("connect_in");

    for (var i = 0; i < n; i++)
    {
/*         this.patcher.connect(   spray,         i,   effects_[i],    0);
        this.patcher.connect(   effects_[i],   0,   funnel,         i);
 */        this.patcher.connect(   effects_[i],   0,   connect_in,         0);
    }
}
connect_effects_.local = 1;


function remove_spray_()
{
    var spray   = this.patcher.getnamed("spray");
    if (spray)
    {
        this.patcher.remove(spray);
    }
}
remove_spray_.local = 1;


function make_spray_(n)
{
    var connect_in  = this.box;//this.patcher.getnamed("connect_in");

    var x_in        = connect_in.rect[0];
    var y_in        = connect_in.rect[3];

    var x_spray     = x_in;
    var y_spray     = y_in + 66;

    var spray       = this.patcher.newdefault(x_spray,  y_spray,  "spray",  n, 0, 1);
    spray.varname   = "spray";

    this.patcher.connect(connect_in, 0, spray, 0);
    return spray;
}
make_spray_.local = 1;


function remove_funnel_()
{
    var funnel  = this.patcher.getnamed("funnel");
    if (funnel)
    {
        this.patcher.remove(funnel);
    }    
}
remove_funnel_.local = 1;


function make_funnel_(n)
{
    var connect_out = this.patcher.getnamed("connect_funnel");//this.patcher.getnamed("connect_out");
    var x_out       = connect_out.rect[0];
    var y_out       = connect_out.rect[1];
    var x_funnel    = x_out;
    var y_funnel    = y_out - 66;

    var funnel      = this.patcher.newdefault(x_funnel, y_funnel, "funnel", n);
    funnel.varname  = "funnel";

    this.patcher.connect(funnel, 0, connect_out, 0);
    return funnel;
}
make_funnel_.local = 1;



//-----------------------------------------------------------------------------------------------


function message_effect_(effect, msg, args)
{
    var addr = [effect.varname, "components"].join("::");
    outlet (1, addr, msg, args);
}
message_effect_.local = 1;


function message_pattr_(msg, args)
{
    outlet (2, msg, args);
}
message_pattr_.local = 1;


function get_effect_name_(effect)
{
    return effect.subpatcher().getnamed("components").getattr("effect_name");
}
get_effect_name_.local = 1;