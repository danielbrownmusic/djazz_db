var dutils = require("db_dictionary_array_utils");

autowatch = 1;

outlets = 5;

var SESSION_COMPONENTS_DICT_NAME   = "SESSION_COMPONENTS";                                                                                                                                
var session_components_dict_         = null;

var NAVIGATION_DICT_NAME           = "NAVIGATION";
var navigation_dict_                 = null;

var x = 66;
var y = 528;
var h = 88;


function load_session_from_file(components_file_full_path)
{
    session_components_dict_ = new Dict(SESSION_COMPONENTS_DICT_NAME);
    session_components_dict_.import_json(components_file_full_path);

    var keys = get_component_keys_();
    for (var i = 0; i < keys.length; i++)
    {
        make_component_(i, keys[i]);
        load_component_(keys[i]);
    }

    //log output:
    outlet (1, SESSION_COMPONENTS_DICT_NAME);
    outlet (2, "dictionary", SESSION_COMPONENTS_DICT_NAME);
}


function clear()
{
    if (session_components_dict_)
    {
        var keys = get_component_keys_();
        for (var i = 0; i < keys.length; i++)
        {
            remove_component_(keys[i]);
        }

        session_components_dict_.clear();
        session_components_dict_.freepeer();
        session_components_dict_ = null;

        outlet (1, "set");
        outlet (2, "dictionary", SESSION_COMPONENTS_DICT_NAME);
    }
}

function load_navigation_file(navigation_file_full_path)
{
    navigation_dict_ = new Dict(NAVIGATION_DICT_NAME);
    navigation_dict_.import_json(navigation_file_full_path);
    send_out_navigation_dict_();

    //log output:
    outlet (3, NAVIGATION_DICT_NAME);
    outlet (4, "dictionary", NAVIGATION_DICT_NAME);
}


// ----------------------------------------------------------------------------------


function make_component_(i, key)
{
        var x_view      = x;
        var y_view      = y + 2 * h * i;
        var x_player    = x_view;
        var y_player    = y_view + h; 

        var player_name = key;
        var view_name   = key + "_view";

        var top_patcher             = get_top_patcher_(); 

        var midi_player_view        = top_patcher.newdefault(   x_view,     y_view,     "djazz_midi_player_view",   player_name);
        var midi_player             = top_patcher.newdefault(   x_player,   y_player,   "djazz_midi_player",        player_name);
        midi_player.varname         = player_name;
        midi_player_view.varname    = view_name
        
        top_patcher.connect(    midi_player_view,   0,  midi_player,        0);
        top_patcher.connect(    midi_player,        1,  midi_player_view,   0);
        top_patcher.connect(    midi_player,        2,  midi_player_view,   1);
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


// --------------------------------------------------------------------------------------------


function send_out_navigation_dict_()
{
    get_loaders_().forEach(
        function (ldr)
        {
            loader.message("load_navigator", navigation_dict_name_);
        },
        this
    );
}
send_out_navigation_dict_.local = 1;


// --------------------------------------------------------------------------------------------


function get_component_dict_(name)
{
    var key = ["components", name].join("::");
    return session_components_dict_.get(key);
}
get_component_dict_.local = 1;


function set_component_dict_(name, d)
{
    var key = ["components", name].join("::");
    session_components_dict_.set("fullkey", d);
}
set_component_dict_.local = 1;


function get_component_keys_()
{
    return dutils.get_dict_key_array(session_components_dict_.get("components"));    
}
get_component_keys_.local = 1;


function get_top_patcher_()
{
    return this.patcher.box.patcher;    
}
get_top_patcher_.local = 1;


















/* 
function get_loaders_()
{
    var keys    = dutils.get_dict_key_array(session_components_dict_.get("components"));
    var p       = this.patcher;
    return keys.map( function (key) { p.getnamed(key).subpatcher().getnamed("loader") })
}
get_loaders_.local = 1;
 */




/* function make_components_()
{
    var keys = get_component_keys_();
    for (var i = 0; i < keys.length; i++)
    {   
        make_component_(i, keys[i]);
    }
}
make_components_.local = 1;


function load_components_()
{
    var keys = get_component_keys_();
    for (var i = 0; i < keys.length; i++)
    {
        var key = keys[i];
        load_component_(key);
    }
}
load_components_.local = 1;


function remove_components_()
{
    var keys = get_component_keys_();
    for (var i = 0; i < keys.length; i++)
    {
        remove_component_(keys[i]);
    }
}
remove_components_.local = 1;
 */

// --------------------------------------------------------------------------------------------