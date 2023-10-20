var dutils = require("dictionary_array_utilities");

autowatch = 1;
outlets = 2;


var effects_dict_ = null;

var listeners_ = [];



function update(data)
{
    var effect_numbers = listeners_.map(
        function (listener)
        {
            return listener.getvalue()[0];
        }
    );
    effect_numbers = trim_(effect_numbers);
    setvalueof(effect_numbers);
    notifychanged();

/*     var active_states = listeners_.map(
        function (listener)
        {
            return listener.getvalue()[1];
        }
    ); */
}


function setvalueof(effect_numbers)
{
    effects_dict_.set("effects", effect_numbers);
}


function getvalueof(effect_numbers)
{
    return effects_dict_.get("effects");
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
/*         if (effect_numbers[i] !== old_effect_numbers(i));
        {
            set_effect_(i, effect_numbers[i]);
        }
 */    }

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
    //this.patcher.connect(slot, 0, this.box, 0);
    //this.patcher.connect(this.box, 0, slot, 0);
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



/* function set_effect_(i, val)
{
    //post ("setting effect", i.toString(), "\n");
    get_slot_index_obj_(i).message("set", val);
}
set_effect_.local = 1;


 */


/* function make_slot_()
{
    var effects_panel = this.patcher.getnamed("effects_panel");

    var x_panel         = effects_panel.rect[0];
    var y_panel         = effects_panel.rect[1];
    var x_panel_pres    = effects_panel.getattr("presentation_rect")[0];
    var y_panel_pres    = effects_panel.getattr("presentation_rect")[1];
    
    var slot   = this.patcher.newdefault(
                    x_panel, 
                    y_panel, 
                    "umenu",
                    "@menumode",            3,
                    "@patching_rect",       [x_panel, y_panel + i * 22, 128, 22],
                    "@presentation",        1,
                    "@presentation_rect",   [x_panel_pres, y_panel_pres + i * 22, 128, 22]);
    //this.patcher.connect(slot, 0, this.box, 0);
    //this.patcher.connect(this.box, 0, slot, 0);
    slot.varname = i.toString();
    return new MaxobjListener(slot, update);
}
make_slot_.local = 1;
 */

/* function get_slot_index_obj_(i)
{
    return effect_slots_[i].subpatcher().getnamed("effect_index");
}
get_slot_umenu_.local = 1; */


/* function get_slot_number_box_(i)
{
    return effect_slots_[i].subpatcher().getnamed("effect_number");
}
get_slot_number_box_.local = 1; */


/* function get_effect_(i)
{
    return get_slot_number_box_(i).value;
}
get_effect_.local = 1; */














/* 
function set_slot_count_(n)
{
    if (n < 0)
        return;

    var l = effect_slots_.length;

    if (n === l)
        return;

    if (n < l)
    {
        for (var i = 0; i < l - n; i++)
        {
            pop_back_();
        }
    }
    else
    {
        for (var i = 0; i < n - l; i++)
        {
            push_back_();
        }
    }
}
set_slot_count_.local = 1; */


/* function replace_slot_(i, effect_name)
{
    slots_.splice(i, 1);
    this.patcher.remove(this.patcher.getnamed("effect_" + i.toString()));
    var slot = make_slot_(i, effect_name);
    slots_.splice(i, 0, slot);
}
replace_slot_.local = 1;
 */