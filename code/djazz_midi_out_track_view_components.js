autowatch = 1;

var effect_slots_ = [];


function set_effects(effect_menu_items_dict_name, effect_names)
{
    var l_old   = effect_slots_.length;
    var l_new   = effect_names.length;
    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        set_effect_(slot, effect_menu_items_dict_name, effect_names[i]);
    }
    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            var slot = make_slot_(effect_menu_items_dict_name);
            set_effect_(slot, effect_menu_items_dict_name, effect_names[i]);
        }
    }
    else
    {
        for (var i = l_new; i < l_old; i++)
        {
            remove_last_slot_();
        }
    }
}

//--------------------------------------------------------------------------------

function remove_last_slot_()
{   
    var slot = effect_slots_.pop();
    this.patcher.remove(slot);
}
remove_last_slot_.local = 1;


function make_slot_(effect_menu_items_dict_name)
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

    init_slot_umenu_(effect_slot, effect_menu_items_dict_name);
    effect_slots_.push(effect_slot);
    return effect_slot;
}
make_slot_.local = 1;


function set_effect_(slot, effect_menu_items_dict_name, name)
{
    var effect_number_box   = slot.subpatcher().getnamed("effect_number");
    var d                   = new Dict (effect_menu_items_dict_name);
    var effect_names        = d.get("items");

    if (effect_number_box.value !== effect_names.indexOf(name))
    {
        var umenu = slot.subpatcher().getnamed("umenu");
        umenu.message("setsymbol", name);
    }
}
set_effect_.local = 1;



function init_slot_umenu_(effect_slot, effect_menu_items_dict_name)
{
    effect_slot.subpatcher().getnamed("umenu").message("dictionary", effect_menu_items_dict_name);
}
init_slot_umenu_.local = 1;





/* function setvalueof()
{
    var effect_numbers  = arrayfromargs(arguments);
    //var effect_names      = arrayfromargs(arguments);
    //var effect_numbers    = effect_names.map(effect_name_to_number_);
    effect_numbers.push(0);
    set_effect_slots_(effect_numbers);
} */


/* function set_effect_menu_items(effect_menu_items_dict_name)
{
    effect_menu_items_dict_name_ = effect_menu_items_dict_name;
} */







//var dutils = require("db_dictionary_array_utils");



/* function make_listener_(effect_slot)
{
    var effect_number_box       = effect_slot.subpatcher().getnamed("effect_number");
    post("making listener.\n");
    var effect_number_listener  = new MaxobjListener(effect_number_box, on_effect_number_box_changed);
    return effect_number_listener;
}
make_listener_.local = 1; */

//--------------------------------------------------------------------------------


//var effect_number_listeners_ = [];

/* function getvalueof()
{
    return trim_(get_effect_name_array_());
} */



/* function get_effect_name_(effect_number)
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
get_effect_name_array_.local = 1; */


/* function trim_(effect_name_array)
{
    for (var i = effect_name_array.length - 1; i >= 0; i--)
    {
        if (effect_name_array[i] != "")
            break;
        effect_name_array.pop();
    }
    return effect_name_array;
}
trim_.local = 1; */




/* function on_effect_number_box_changed(data)
{
    var i = effect_number_listeners_.indexOf(data.listener);
    if (i !== -1)
    {     post ("   - listener index:", i, "just popped off to", data.value, "\n");
        notifyclients();
    }
}
 */







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



