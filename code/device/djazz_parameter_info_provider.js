autowatch = 1;

var pip_  = new ParameterInfoProvider(on_pip_changed);


function on_pip_changed(data)
{
/*     if (data.added.length)
    {
        data.added.forEach(
            function (name)
            {
                outlet (0, "append", name);
            }
        );
    }
    if (data.removed.length)
    {
        data.removed.forEach(remove_parameter_);
    } */
}


function get_names()
{
    var names = pip_.getnames();
    for (var i = 0; i < names.length; i++)
    {
        outlet (0, names[i]);
    }
}