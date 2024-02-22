
var d_ = new Dict();

// -------------------------------------------------------------


exports.set_dict = function (mapping_dict_name)
{
    d_.name = mapping_dict_name;
    return true;
}


exports.close = function()
{
    d_ = new Dict();
}


exports.add_param = function (param, cell_type, cell_value, color)
{
    var key = to_key_("parameters", param);
    d_.replace(key, to_symbol_(cell_type, cell_value, color));
}


exports.remove_param = function (param)
{
    d_.get("parameters").remove(param);
}


exports.clear = function()
{
    d_.replace("grid");
    d_.replace("parameters");
}


// -------------------------------------------------------------


function to_key_()
{
    return Array.prototype.slice.call(arguments).join("::");
}
to_key_.local = 1;


function to_symbol_()
{
    return Array.prototype.slice.call(arguments).join(" ");
}
to_symbol_.local = 1;