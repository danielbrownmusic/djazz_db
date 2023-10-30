var dutils = require("db_dictionary_array_utils");

outlets = 2;
setoutletassist(0, "log messages sent");
setoutletassist(1, "log messages received");

autowatch = 1;

var effect_slots_ = [];


function effects(track_dict_name, effect_menu_items_dict_name)
{
    post ("hey");
    log_msg_received_(messagename, arrayfromargs(arguments));

    var d                   = new Dict(track_dict_name);
    var effect_name_array   = dutils.get_dict_array(d, "effects");
    //post (effect_name_array);
    var l_old   = effect_slots_.length;
    var l_new   = effect_name_array.length;
    for (var i = 0; i < Math.min(l_old, l_new); i++)
    {
        set_effect_(slot, effect_menu_items_dict_name, effect_name_array[i]);
    }
    if (l_old < l_new)
    {
        for (var i = l_old; i < l_new; i++)
        {
            var slot = make_slot_();
            set_effect_(slot, effect_menu_items_dict_name, effect_name_array[i]);
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


function make_slot_()
{
    var inl 	= this.patcher.getnamed("events_inlet");

    var x_inlet 	= inl.rect[0];
    var y_inlet 	= inl.rect[3];

    var i = effect_slots_.length;

    var w = 128;
    var h = 44;
	var x = x_inlet;
	var y = y_inlet + h * i;

    var effect_slot = this.patcher.newdefault(x, y, "djazz_midi_out_effect_slot");
    effect_slots_.push(effect_slot);
    return effect_slot;
}
make_slot_.local = 1;


function set_effect_(slot, effect_menu_items_dict_name, effect_name)
{
    var d                   = new Dict (effect_menu_items_dict_name);
    var new_patcher_name    = d.get("effects").get(effect_name).get("patcher");
    var c                   = slot.subpatcher().getnamed("components");

    var addr = [slot.varname, c.varname].join("::");
    log_msg_sending_(addr, "effect", new_patcher_name);

    c.message("effect", new_patcher_name);
}
set_effect_.local = 1;


//----------------------------------------------------------------------------------------------------


function log_msg_received_(msg, args)
{
    outlet (1, msg, args);
}
log_msg_received_.local = 1;


function log_msg_sending_(addr, msg, args)
{
    outlet (0, addr, msg, args);
}
log_msg_sending_.local = 1;