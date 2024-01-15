var dutils = require("db_dictionary_array_utils");

autowatch = 1;
outlets = 2;

var pip_                 = new ParameterInfoProvider(on_pip_changed);
var param_dict_          = new Dict ();
var param_listeners_     = [];


//------------------------------------------------------------------------------------------


function on_pip_changed(data)
{
    if (data.added.length)
    {
        data.added.forEach(add_parameter_);
    }
    if (data.removed.length)
    {
        data.removed.forEach(remove_parameter_);
    }
}


function on_param_changed(data)
{
    post ("<>><><>><><><><info,", data.listener.name, data.listener.getvalue());
    get_names();
    send_param_msg_(data.listener.name, data.listener.getvalue());
}


//------------------------------------------------------------------------------------------


function initialize(params_dict_name)
{
    param_dict_.name = params_dict_name;
    param_dict_.clear();
    var names = arrayfromargs(pip_.getnames());
    for (var i = 0; i < names.length; i++)
    {
        add_parameter_(names[i]);
    }
}


function read(file_path)
{
    var mapping_dict = new Dict ();

    read_maxmap_file_to_dict_   (file_path, mapping_dict.name)
    clear_dict_entries_         (param_dict_.name);
    add_mappings_               (mapping_dict.name);
    set_view_                   ();
}


function anything()
{
    var param_name  = messagename;
    var param_value = arrayfromargs(messagename, arguments).slice(1);
    var listener    = get_listener_(param_name);
    if (!listener)
        return null;
    listener.setvalue(param_value);
}


function get_names()
{
    post ("PARAMETER NAMES: \n");
    param_listeners_.forEach(
        function (listener)
        {
            post (listener.name, listener.getvalue());
        }
    )
    post ("\n");
}

//------------------------------------------------------------------------------------------


function send_param_msg_(name, value)
{
    var position_params = ["chapter_count", "grid"];
    var ignore_params   = ["chapter", "bar"];
    if (position_params.indexOf(name) > -1)
    {
        outlet (0, name, value);
    }
    else if (ignore_params.indexOf(name) === -1)
    {
        outlet (1, name, value);
    }
}
send_param_msg_.local = 1;



function read_maxmap_file_to_dict_(file_path, dict_name)
{
    var d = new Dict (dict_name);
    var f = new File(file_path, "read");
    var s = "";
    while (f.position < f.eof)
    {
        s += f.readline();
    }
    f.close();
    d.parse(s);
}
read_maxmap_file_to_dict_.local = 1;


function clear_dict_entries_(dict_name)
{
    var d = new Dict (dict_name);
    dutils.get_dict_key_array(d).forEach(
        function (key)
        {
            d.set(key);
        }
    );
}
clear_dict_entries_.local = 1;


function add_mappings_(dict_name)
{
    var d = new Dict(dict_name);
    var keys = dutils.get_dict_key_array(d.get("parameter_map").get("midi"));
    keys.forEach(
        function (key)
        {
            //post (key);
            var srcname = d.get("parameter_map").get("midi").get(key).get("srcname").split(".");
            var value   = srcname[0];
            var type    = srcname[4];
            var msg     = [type, value].join(" ");
            param_dict_.set(key, msg);
        }
    );
}
add_mappings_.local = 1;


function set_view_()
{
    param_listeners_.forEach(
        function (listener)
        {
            send_param_msg_(listener.name, listener.getvalue());
        }
    )
}
set_view_.local = 1;


//------------------------------------------------------------------------------------------

function add_parameter_(name)
{
    if (is_param_already_there_(name))
        return;

    param_dict_.set(name, "");
    var p = new ParameterListener(name, on_param_changed);
    param_listeners_.push(p);
}
add_parameter_.local = 1;


function remove_parameter_(name)
{
    param_dict_.remove(name);
}
remove_parameter_.local = 1;


function is_param_already_there_(name)
{
    return param_dict_.contains(name) === 1 ? true : false;
}
is_param_already_there_.local = 1;


function get_listener_(name)
{
    for (var i = 0; i < param_listeners_.length; i++)
    {
        if (param_listeners_[i].name === name)
            return param_listeners_[i];
    }
    return null;
}
get_listener_.local = 1;