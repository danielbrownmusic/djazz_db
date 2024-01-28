
var d = new Dict ();

exports.load = function (file_path)
{
    d.import_json(file_path);
}

exports.get_bar_cell = function(i)
{
    return get_param_cell_("bar", i);
}

exports.get_bar_states = function()
{
    return d.get("bar").colors
}




function get_param_cell_ (param, i)
{
    return d.get(param).get("cells")[i];
}
get_param_cell_.local = 1;


function get_param_states_ (param)
{
    return d.get(param).getkeys("colors")[i];
}
get_param_states_.local = 1;
