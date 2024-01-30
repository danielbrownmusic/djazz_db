var dutils      = require("db_dictionary_array_utils");

var d_ = undefined;


exports.load = function (mapping_dict_name)
{
    var grid_dict = new Dict (grid_dict_name);

    if (!is_dict_ok_(grid_dict))
    {
        post_error_();
        return false;
    }    

    add_parameters_(grid_dict);
    return true;
}

// -------------------------------------------------------------


exports.params = function()
{
    return dutils.get_dict_key_array(param_dict_).map
    (
        function (param)
        {
            return [param, param_dict_.get(param)];
        }
    );
}


exports.param_cell = function (param)
{
    return d.get(param).get("cells")[i];
}
get_param_cell_.local = 1;


exports.param_color = function (param, state)
{}


exports.param_states = function (param)
{}


// -------------------------------------------------------------


exports.grid_params = function()
{}


exports.grid_param_cell_ = function (param, i)
{
    return d.get(param).get("cells")[i];
}
get_param_cell_.local = 1;


exports.grid_param_color_ = function (param, state)
{
    return d.get(param).getkeys("colors")[i];
}
get_param_states_.local = 1;


exports.grid_param_states_ = function (param)
{
    return d.get(param).getkeys("colors")[i];
}
get_param_states_.local = 1;


exports.grid_param_count = function (param)
{}


// -------------------------------------------------------------


function is_dict_ok_(d)
{
    return d.get("device") !== device_;
}
is_file_ok_.local = 1;


function post_error_(d)
{
    post ( "Wrong type of preset file loaded:", d.get("device"), "instead of", device_, "\n");
}
post_error_.local = 1;



