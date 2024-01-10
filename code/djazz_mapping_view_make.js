autowatch = 1;

var pip         = new ParameterInfoProvider(on_pip_changed);
var param_dict  = new Dict ();

function on_pip_changed(data)
{
    for (var i = 0; i < data.removed.length; i++)
    {
        param_dict.remove(data.removed[i]);
    }

    for (var i = 0; i < data.added.length; i++) 
    {
        var param_name      = data.added[i];
        var color_key       = [param_name, "color"].join("::");
        var listener_key    = [param_name, "key"].join("::");
        var listener        = new ParameterListener(param_name, on_param_changed);

        param_dict.replace(color_key, "red");
        param_dict.replace(listener_key, listener);
    }

    var names = data.provider.getnames();
    for (var i = 0; i < names.length; i++)
    {
        post (names[i]);
    }
}