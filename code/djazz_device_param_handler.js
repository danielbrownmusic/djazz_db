autowatch = 1;

outlets = 3;

var pip         = new ParameterInfoProvider(on_pip_changed);
var param_dict  = new Dict ();

//param_dict.import_json("data/device/launchpad_pro_mk3/parameter_view_map_example.json");

var d_name = "PARAMS_MAYBE";
var d = new Dict (d_name);
function bang()
{
    //outlet (1, pip.getnames());
    pip.getnames().forEach(
        function (name)
        {
            post (name);
            var listener        = new Lcycli(name, on_param_changed);
            d.append(name, "");
        }
    );
    outlet (1, "dictionary", d_name)
    outlet (2, d_name)
}


function on_pip_changed(data)
{
/*     for (var i = 0; i < data.removed.length; i++)
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
    } */

    var names = data.provider.getnames();
    for (var i = 0; i < names.length; i++)
    {
        post (names[i]);
    }
}


function on_param_changed(data)
{
    outlet (0, "parameter", data.name, data.value);

/*     var info = pip.getinfo(data.name);
    for (var i in info) 
    {
        post(i + ": " + info[i] + "\n");
    } */
}
