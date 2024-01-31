var d_ = undefined;


exports.get_dict = function()
{
    return d_.name;
}

exports.set_dict = function(dict_name)
{
    d_ = new Dict (dict_name);
}


exports.add_param = function(param, cell_type, cell_value)
{
    var key = to_symbol_(cell_type, cell_value);
    var val = to_symbol_("toggle_param", param);
    d_.set(key, val);
}


exports.add_grid_param = function(param, i, cell_type, cell_value)
{
    var key = to_symbol_(cell_type, cell_value); 
    var val = to_symbol_("set_param", make_grid_param_name_(param), i);
    d_.set(key, val);
}


//------------------------------------------------------------------


function make_grid_param_name_(param)
{
    return [param, "_button"].join("");
}
make_grid_param_name_.local = 1;


function to_symbol_()
{
    return Array.prototype.slice.call(arguments).join(" ");
}
to_symbol_.local = 1;