var dutils = require("db_dictionary_array_utils");

autowatch = 1;
outlets = 2;

var effect_listeners_ = [];


function on_effect_listener_changed(data)
{
    notifyclients();
}


function getvalueof()
{
    return effect_listeners_.map(listener_to_dict_);
}


function setvalueof(dict_name)
{
    set_slots_(dict_name);
}

//--------------------------------------------------------------------------------

function listener_to_dict_(listener)
{
    var effect_name     = listener.getvalue()[0];
    var active          = listener.getvalue()[1];

    post ("effect name =", effect_name, "\n");
    post ("active =", active, "\n");

    var d = new Dict();
    d.set("name", effect_name);
    d.set("active", active);
    return d;
}
listener_to_dict_.local = 1;


function dict_to_listener_(d)
{
    return [d.get("name", d.get("active"))];
}
dict_to_listener_.local = 1;


function set_slots_(dict_name)
{
    var d = new Dict(dict_name);
    outlet (0, "dictionary", dict_name);
    outlet (0, "bang");
    clear_slots_();
    var effect_array = dutils.get_array(d, "effects");
    for (var i = 0; i < effect_array.length; i++)
    {
        //post (effect_array[i]);
        var slot = add_slot_();
        var slot_value = dict_to_listener_(effect_array[i]);
        slot.setvalue_silent(slot_value);
    }
    add_slot_();
}
set_slots_.local = 1;


function clear_slots_()
{
    var n = effect_listeners_.length;
    for (var i = 0; i < n; i++)
    {
        var listener = effect_listeners_.pop();
        this.patcher.remove(listener.maxobject);
    }
}
clear_slots_.local = 1;


function add_slot_()
{
    var effects_panel   = this.patcher.getnamed("effects_panel");
    var i               = effect_listeners_.length;

    var a = effects_panel.rect[0];
    var b = 128;
    var c = effects_panel.rect[1];
    var d = 0;

    var w = 128;
    var h = 216;

	var x = a + b * i;
	var y = c + d * i;

    var a_pres  = effects_panel.getattr("presentation_rect")[0];
    var b_pres  = 128;
    var c_pres  = effects_panel.getattr("presentation_rect")[1];
    var d_pres  = 0;

    var w_pres  = 128;
    var h_pres  = 216;

	var x_pres  = a_pres + b_pres * i;
	var y_pres  = c_pres + d_pres * i;

    var patching_rect       = [x, y, w, h];
    var presentation_rect   = [x_pres, y_pres, w_pres, h_pres];

    var slot = this.patcher.newdefault(
                    x, 
                    y, 
                    "umenu",
                    "@menumode",            3,
                    "@pattrmode",           1,
                    "@presentation",        1,
                    "@patching_rect",       patching_rect,
                    "@presentation_rect",   presentation_rect);
    //slot.varname = i.toString();
    var effect_listener = new MaxobjListener(slot, on_effect_listener_changed);
    effect_listeners_.push();
    return effect_listener;
}
add_slot_.local = 1;








/* function remove_last_slot_()
{   
    var listener = effect_listeners_.pop();
    this.patcher.remove(listener.maxobject);
}
remove_last_slot_.local = 1; */


/* function load_from_dict()
{
	if (arguments[0] !== "dictionary")
	{
		post ("Error loading.\n");
		return;
	}

    var dict_name       = arguments[1];
    var effects_dict_   = new Dict(dict_name);

    set_slots_(dutils.get_array(d, "tracks"));
} */



/* 
function set_slots_(d)
{
    var effect_array = dutils.get_array("effects");
    var l_old   = effect_listeners_.length;
    var l_new   = effect_array.length;

    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        set_effect_(i, effect_array[i]);
    }

    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            add_slot_();
            set_effect_(i, effect_array[i]);
        }
    }
    else
    {
        for (var i = l_new; i < l_old; i++)
        {
            remove_last_slot_();
        }
    }    
    add_slot_();
}
set_slots_.local = 1; */