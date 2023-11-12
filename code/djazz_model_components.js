autowatch = 1;

function make_component_(name)
{

    var x_player    = x_view;
    var y_player    = y_view + h; 

    var player_name = key;

    var midi_player             = this.patcher.newdefault(   x_player,   y_player,   "djazz_midi_player",        player_name);
    midi_player.varname         = player_name;

    return midi_player;
}

make_component_.local = 1;


function load_component_(name)
{
    var top_patcher = get_top_patcher_();
    post (name); 
    var obj         = top_patcher.getnamed(name);
    var ldr         = obj.subpatcher().getnamed("loader");
    var d           = get_component_dict_(name);

    ldr.message("load", d);
    set_component_dict_(name, d);
}
//load_component_().local = 1;

function remove_component_(name)
{
    var top_patcher = get_top_patcher_();
    top_patcher.remove(top_patcher.getnamed(name));
    top_patcher.remove(top_patcher.getnamed(name + "_view"));
}
remove_component_.local = 1;