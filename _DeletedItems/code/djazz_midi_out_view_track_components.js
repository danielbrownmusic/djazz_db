var dutils = require("db_dictionary_array_utils");

autowatch = 1;

var effect_slots_ = [];


function effects(track_dict, effect_patchers_database)
{
    var effect_name_array   = dutils.get_dict_array(track_dict, "effects");
    
    var l_old   = effect_slots_.length;
    var l_new   = effect_name_array.length;

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
            remove_last_slot_();
        }
    }
    
    for (var i = 0; i < effect_slots_.length; i++)
    {
        send_to_slot_(i, "name", [effect_name_array[i], effect_patchers_database]);
    }
}


function effect()
{
    var a       = arrayfromargs(arguments);
    var i       = a[0];
    var msg     = a[1];
    var args    = a.slice(2);

    send_to_slot_(i, msg, args);
}


function add_effect()
{
    effect_slots_.push(make_slot_());
}


function update()
{
    var names = effect_slots_.map(get_name_);
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


function setvalueof()
{
    var d = arguments[0];
    
}


function getvalueof()
{
    var d   = new Dict ();
    var arr = effect_slots_.map( function (slot) { return get_name_(slot); } );
    dutils.set_dict_array(d, "effects", arr);
    return d;
}



//--------------------------------------------------------------------------------


function remove_last_slot_()
{   
    if (effect_slots_.length === 0)
        return;

    var slot = effect_slots_.pop();
    this.patcher.remove(slot);
}
remove_last_slot_.local = 1;


function make_slot_()
{
    var effects_panel   = this.patcher.getnamed("effects_panel");
    var i = effect_slots_.length;
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
                    "djazz_midi_out_view_effect_slot",
                    "@args",                i,                    
                    "@presentation",        1,
                    "@patching_rect",       patching_rect,
                    "@presentation_rect",   presentation_rect);

    effect_slot.varname = "effect_" + i;
    effect_slots_.push(effect_slot);
    this.patcher.connect(effect_slot, 0, this.box, 0);
    //send_to_slot_(i, "menu_items",  effect_patchers_database);
    return effect_slot;
}
make_slot_.local = 1;






//--------------------------------------------------------------------------------


function send_to_slot_(i, msg, args)
{
    var slot   = effect_slots_[i];
    var addr    = [slot.varname, "components"].join("::");    

    outlet (0, addr, msg, args);
}
send_to_slot_.local = 1;


function get_name_(slot)
{
    return slot.subpatcher().getnamed("components").getattr("effect_name");
}

