autowatch = 1;

var pip             = new ParameterInfoProvider(on_pip_changed);
var param_listeners = [];


function loadbang()
{
    bang();
}


function bang()
{
    pip.getnames().forEach(add_parameter_);
}


function on_pip_changed(data)
{
    if (data.added.length) {
        data.added.forEach(add_parameter_);
      }
      if (data.removed.length) {
        data.removed.forEach(remove_parameter_);
      }

    var names = data.provider.getnames();

}


function get_names()
{
    post ("PARAMETER NAMES: \n");
    param_listeners.forEach(
        function (listener)
        {
            post (listener.name);
        }
    )
    post ("\n");
}

//------------------------------------------------------------------------------------------


function on_param_changed(data)
{
    outlet (0, "parameter", data.name, data.value);
}


/* function add_parameter_(name)
{
    if (is_param_already_there_(name))
        return;

    param_listeners.push(new ParameterListener(name, on_param_changed));
}
add_parameter_.local = 1;


function remove_parameter_(name)
{
    d.remove(name, "");
}
remove_parameter_.local = 1;


function is_param_already_there_(name)
{
    var result = false;
    for (var i = 0; i < param_listeners.length; i++)
    {
        if (param_listeners[i].name === name)
            return true;
    }
    return false;
}
is_param_already_there_.local = 1; */


