var GRID_PARAMS_    = ['bar', 'chapter'];

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
    var g = find_grid_param_in_param_name_(param);
    var f = g ? add_grid_param_ : add_param_;
    f(param, cell_type, cell_value);
}


exports.remove_param = function(cell_type, cell_value)
{
    d_.remove(to_symbol_(cell_type, cell_value));
}


exports.clear = function()
{
    d_.clear();
}

//------------------------------------------------------------------


function find_grid_param_in_param_name_(param)
{
    var a = param.split(" ");
    if (a.length > 1)
    {
        var k = GRID_PARAMS_.indexOf(a[0]);
        if (k > -1)
        {
            return GRID_PARAMS_[k];
        }
    }
    return null;

}
find_grid_param_in_param_name_.local = 1;


function add_grid_param_(param, cell_type, cell_value)
{
    var [grid_param, i] = param.split(" ");
    var key = to_symbol_(cell_type, cell_value); 
    var val = to_symbol_("set_param", make_grid_param_name_(grid_param), i);
    d_.set(key, val);
}
add_grid_param_.local = 1;


function add_param_(param, cell_type, cell_value)
{
    var key = to_symbol_(cell_type, cell_value);
    var val = to_symbol_("toggle_param", param);
    d_.set(key, val);
}
add_param_.local = 1;


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