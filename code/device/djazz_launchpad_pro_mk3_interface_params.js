var dutils = require("db_dictionary_array_utils");

autowatch = 1;
outlets = 2;

var pip_                = new ParameterInfoProvider(on_pip_changed);
var param_dict_         = new Dict ();
var view_dict_          = new Dict ();
var param_listeners_    = [];


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
    //send_param_msg_(data.listener.name, data.listener.getvalue());
    send_param_msg_(data.name, data.value);
    post ("PARAM CHANGED: ", data.name, data.value, "\n");
    //get_names();
}


//------------------------------------------------------------------------------------------


function initialize(params_dict_name)
{
    param_dict_.name = params_dict_name;
    reset_param_dict_();

    param_listeners_ = [];
    pip_.getnames().forEach(
        function (param_name)
        {
            param_listeners_.push(new ParameterListener(param_name, on_param_changed));            
        }
    );
}

function read(file_path)
{
    reset_param_dict_();

    // Read maxmap file to dict.
    var mapping_dict = new Dict ();
    var f = new File(file_path, "read");
    var s = "";
    while (f.position < f.eof)
    {
        s += f.readline();
    }
    f.close();
    mapping_dict.parse(s);

    // Add mappings to param dict.
    var param_names = dutils.get_dict_key_array(mapping_dict.get("parameter_map").get("midi"));
    param_names.forEach(
        function (param_name)
        {
            var srcname = mapping_dict.get("parameter_map").get("midi").get(param_name).get("srcname").split(".");
            var value   = srcname[0];
            var type    = srcname[4];
            type = (type === 'ctrl') ? 'cc' : type;

            var msg_key = make_key_('messages', type, value);
            param_dict_.replace(msg_key, param_name);
            
            var param_key = make_key_('parameters', param_name);
            var param_value = [type, value].join(" ");
            param_dict_.replace(param_key, param_value);
        }
    );

    // Send all parameters out to set the view.
    param_listeners_.forEach(
        function (listener)
        {
            send_param_msg_(listener.name, listener.getvalue());
        }
    )

}


function midi_in(value)
{
    if (param_dict_.get('messages').get('midi').contains(value) === 1)
    {
        var name        = param_dict_.get('messages').get('midi').get(value);
        var listener    = get_listener_(name);
        post ("MIDI_IN:,", listener.name, listener.getvalue(), "\n");
        //listener.setvalue(value);
    }

    else if (view_dict_.get('midi')[value] !== -1)
    {
        var bar = view_dict_.get('midi')[value];
        var listener = get_listener_('bar');
        listener.set_value(bar);
    }
}


function cc_in(value)
{
    if (param_dict_.get('messages').get('cc').contains(value) === 1)
    {
        var name        = param_dict_.get('messages').get('cc').get(value);
        var listener    = get_listener_(name);
        post ("CC_IN:,", listener.name, listener.getvalue(), "\n");

        //listener.setvalue(value);
    }

    else if (view_dict_.get('cc')[value] !== -1)
    {
        var bar = view_dict_.get('cc')[value];
        var listener = get_listener_('chapter');
        listener.set_value(chapter);
    }    
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


//------------------------------------------------------------------------------------------


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


function reset_param_dict_()
{
    param_dict_.clear();

    param_dict_.replace('messages::cc', "");
    param_dict_.replace('messages::midi');

    var exclude_params = ['grid', 'chapter_count', 'bar', 'chapter'];

    pip_.getnames().forEach(
        function (param_name)
        {
            if (exclude_params.indexOf(param_name) === -1)
            {
                param_dict_.replace(make_key_('parameters', param_name));
            }
        }
    )
}
reset_param_dict_.local = 1;


function make_key_()
{
    return Array.prototype.slice.call(arguments).join("::");
}
make_key_.local = 1;