var dutils = require("db_dictionary_array_utils");

autowatch = 1;
outlets = 2;


var effect_menu_items_dict_;

var effect_slots_ = [];
var effect_number_listeners_ = [];


function on_effect_number_box_changed(data)
{
    var i = effect_number_listeners_.indexOf(data.listener);

 /*   post ();
    post ("   - listener value:", data.value, "\n");
    post ("   notifying track_listener in bank.\n");
 */    if (i !== -1)
    {     post ("   - listener index:", i, "just popped off to", data.value, "\n");
        notifyclients();
    }
}


function getvalueof()
{
    //var d = new Dict();
    //var effect_array = effect_number_listeners_.map(listener_to_dict_);
    //dutils.set_array(d, "effects", effect_array);
    //return d;
    //post ("getting value of effect list with", effect_number_listeners_.length, "listeners. \n");
    return trim_(get_effect_name_array_());
}


function setvalueof()
{
    var effect_name_array = null;
    if (arguments[0] === dutils.EMPTY_ARRAY_TOKEN)
    {
        effect_name_array = [];
    }
    else
    {
        effect_name_array = dutils.get_array(arrayfromargs(arguments));
    }
/*     post ("setting effects value\n");
    post ("effects:\n");
    for (var i = 0; i < effect_name_array.length; i++)
    {
        post (effect_name_array[i]);
    }
    post ("\n"); */
    set_effect_slots_(effect_name_array);
}


function set_effect_menu_items(effect_menu_items_dict_name)
{
    effect_menu_items_dict_ = new Dict (effect_menu_items_dict_name);
}

//--------------------------------------------------------------------------------

function mlog(name, val)
{
    post (name, "=", val, "\n");
}

function set_effect_slots_(effect_name_array)
{
    //var effect_array = dutils.get_array("effects");
    var l_old   = effect_slots_.length;
    var l_new   = effect_name_array.length;
/*     mlog ("l old", l_old);
    mlog ("l_new", l_new); */
    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        var effect_number = get_effect_number_(effect_name_array[i]);
        post ("1 - setting listener", i, "value silent to", effect_number, ". \n");
        effect_number_listeners_[i].setvalue_silent(effect_number);
    }

    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            var slot = make_slot_();
            effect_slots_.push(slot);

            var listener = make_listener_(slot);
            effect_number_listeners_.push(listener);

            var effect_number = get_effect_number_(effect_name_array[i]);
            post ("2 - setting listener", i, "value silent to", effect_number, ". \n");
            listener.setvalue_silent(effect_number);
        }
    }
    else
    {
        for (var i = l_new; i < l_old; i++)
        {
            remove_last_slot_();
            remove_last_listener_();
        }
    }

    var slot = make_slot_();
    effect_slots_.push(slot);
    var listener = make_listener_(slot);
    effect_number_listeners_.push(listener);
    post ("3 - setting listener", effect_number_listeners_.length - 1, "value silent to", 0, ". \n");
    listener.setvalue_silent(0);
}

set_effect_slots_.local = 1;


function remove_last_slot_()
{   
    var slot = effect_slots_.pop();
    this.patcher.remove(slot);
}
remove_last_slot_.local = 1;


function remove_last_listener_()
{   
    var listener = effect_number_listeners_.pop();
    listener.silent = 1;
    listener = null;
/*     listener.maxobject = null;

 */}
remove_last_listener_.local = 1;


function make_slot_()
{
    var effects_panel   = this.patcher.getnamed("effects_panel");
    var i               = effect_slots_.length;

    var w = 128;
    var h = 22;
	var x = effects_panel.rect[0];
	var y = effects_panel.rect[1] + h * i;

    var patching_rect       = [x, y, w, h];

    var w_pres  = 128;
    var h_pres  = 22;
	var x_pres  = effects_panel.getattr("presentation_rect")[0];
	var y_pres  = effects_panel.getattr("presentation_rect")[1] + h_pres * i;

    var presentation_rect   = [x_pres, y_pres, w_pres, h_pres];

    var effect_slot = this.patcher.newdefault(
                    x, 
                    y,
                    "bpatcher",
                    "djazz_midi_out_effect_slot_view",
                    "@presentation",        1,
                    "@patching_rect",       patching_rect,
                    "@presentation_rect",   presentation_rect);

    var umenu = effect_slot.subpatcher().getnamed("umenu");
    umenu.message("dictionary", effect_menu_items_dict_.name);
    return effect_slot;
}
make_slot_.local = 1;


function make_listener_(effect_slot)
{
    var effect_number_box       = effect_slot.subpatcher().getnamed("effect_number");
    post("making listener.\n");
    var effect_number_listener  = new MaxobjListener(effect_number_box, on_effect_number_box_changed);
    return effect_number_listener;
}
make_listener_.local = 1;

//--------------------------------------------------------------------------------

function get_effect_number_(effect_name)
{
    return effect_menu_items_dict_.get("items").indexOf(effect_name);
}
get_effect_number_.local = 1;


function get_effect_name_(effect_number)
{
    var effect_name = effect_menu_items_dict_.get("items")[effect_number];
    //post ("effect name for", effect_number, "is", effect_name, "\n");
    return effect_menu_items_dict_.get("items")[effect_number];
}
get_effect_name_.local = 1;


function get_listener_effect_name_(listener)
{
    //post ("listener value =", listener.getvalue(), "\n");
    return get_effect_name_(listener.getvalue());
}
get_listener_effect_name_.local = 1;


function get_effect_name_array_()
{
    return effect_number_listeners_.map(get_listener_effect_name_);
}
get_effect_name_array_.local = 1;


function trim_(effect_name_array)
{
    for (var i = effect_name_array.length - 1; i >= 0; i--)
    {
        if (effect_name_array[i] != "")
            break;
        effect_name_array.pop();
    }
    return effect_name_array;
}
trim_.local = 1;












/* function listener_to_dict_(listener)
{
    var d = new Dict();
    d.parse( {"name" : listener.getvalue()[0], "active" : listener.getvalue()[1] } );
    return d;
}
listener_to_dict_.local = 1;


function dict_to_listener_(d)
{
    return ["name", 1];
}
dict_to_listener_.local = 1;
 */



/* function set_slots_(effect_array)
{
    post ("clearing slots \n");
    clear_slots_();
    post ("slots cleared \n");

    //var d               = new Dict(dict_name);
    //outlet(1, d);
    //var effect_array    = dutils.get_array(d, "effects");

    for (var i = 0; i < effect_array.length; i++)
    {
        add_slot_(effect_array[i]);
    }
    post ("adding last slot \n");
    add_slot_(null);
    post ("last slot added \n");
}
set_slots_.local = 1; */


/* function clear_slots_()
{
    var n = effect_number_listeners_.length;
    for (var i = 0; i < n; i++)
    {
        var listener = effect_number_listeners_.pop();
        var umenu = listener.maxobject;
        this.patcher.remove(umenu);
        listener.maxobject = null; // necessary to keep the listener from popping off occasionally randomly like it seems to be doing?
    }
}
clear_slots_.local = 1; */






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



