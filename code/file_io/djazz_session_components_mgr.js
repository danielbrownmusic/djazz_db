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
        outlet (0, "make_component", keys[i]);
        outlet (0, "load_component", keys[i]);
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


function get_view_patcher_()
{
    return get_top_patcher_.getnamed("view");
}
get_top_patcher_.local = 1;


function get_model_patcher_()
{
    return get_top_patcher_.getnamed("model");
}
get_model_patcher_.local = 1;
















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