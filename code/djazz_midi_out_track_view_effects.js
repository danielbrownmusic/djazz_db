var dutils = require("dictionary_array_utilities");

autowatch = 1;
outlets = 2;

var effects_dict_ = null;
var listeners_ = [];


function listener_to_dict_(listener)
{
    var effect_number   = listener.getvalue()[0];
    var active          = listener.getvalue()[1];
    return make_effect_dict_(effect_number, active);;
}
listener_to_dict_.local = 1;


function make_effect_dict_(effect_number, active)
{
    var d = new Dict();
    d.set("number", effect_number);
    d.set("active", active);
    return d;
}
make_effect_dict_.local = 1;


function update(data)
{
    var dict_array = listeners_.map(listener_to_dict_);
    dict_array = trim_(dict_array);
    setvalueof(dict_array);
    notifychanged();
}


function setvalueof(dict_array)
{
    effects_dict_.set("effects", dict_array);
}


function getvalueof()
{
    return effects_dict_.name;
}


function load_from_dict()
{
	if (arguments[0] !== "dictionary")
	{
		post ("Error loading.\n");
		return;
	}

    var dict_name       = arguments[1];
    var effects_dict_   = new Dict(dict_name);

    set_slots_(dutils.get_array(d, "tracks"));
}


function set_slots_(effect_numbers)
{
    var l_old   = listeners_.length;
    var l_new   = effect_numbers.length;

    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        set_effect_(i, effect_numbers[i]);
    }

    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            add_slot_();
            set_effect_(i, effect_numbers[i]);
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
set_slots_.local = 1;

//--------------------------------------------------------------------------------


function add_slot_()
{
    var effects_panel = this.patcher.getnamed("effects_panel");

    var x_panel         = effects_panel.rect[0];
    var y_panel         = effects_panel.rect[1];
    var x_panel_pres    = effects_panel.getattr("presentation_rect")[0];
    var y_panel_pres    = effects_panel.getattr("presentation_rect")[1];
    
    var L = listeners_.length;

    var w = 128;
    var h = 22;

    var x       = x_panel;
    var y       = y_panel + L * h;
    var x_pres  = x_panel_pres;
    var y_pres  = y_panel_pres + L * h;

    var patching_rect       = [x, y, w, h];
    var presentation_rect   = [x_pres, y_pres, w, h]

    var slot = this.patcher.newdefault(
                    x, 
                    y, 
                    "umenu",
                    "@menumode",            3,
                    "@presentation",        1,
                    "@patching_rect",       patching_rect,
                    "@presentation_rect",   presentation_rect);
    slot.varname = i.toString();
    listeners_.push(new MaxobjListener(slot, update));
}
add_slot_.local = 1;


function remove_last_slot_()
{   
    var listener = listeners_.pop();
    this.patcher.remove(listener.maxobject);
}
remove_last_slot_.local = 1;
