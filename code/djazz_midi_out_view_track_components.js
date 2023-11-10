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
            effect_slots_.push(make_slot_(i, effect_patchers_database));
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

    dispatch_(i, msg, args);
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


function make_slot_(i, effect_patchers_database)
{
    var effects_panel   = this.patcher.getnamed("effects_panel");

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
    send_to_slot_(i, "menu_items",  effect_patchers_database);
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
