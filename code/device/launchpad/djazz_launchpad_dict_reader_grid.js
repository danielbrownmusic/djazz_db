var dutils      = require("db_dictionary_array_utils");

var grid_dict_ = undefined;


exports.load = function (grid_dict_name)
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


exports.parameters = function()
{
    return dutils.get_dict_key_array(param_dict_).map
    (
        function (param)
        {
            return [param, param_dict_.get(param)];
        }
    );
}

// -----------------------------------------------------------------------------


function add_parameters_(d)
{
    ['chapter', 'bar'].forEach(add_parameter_);
}
add_parameters_.local = 1;


function add_parameter_(param)
{
    for (var i = 0; i < get_count_(param); i ++)
    {
        get_states_(param).forEach(
            function (state)
            {
                var [key, val] = make_param_entry_(param, i, state);
                d_.set(key, val);
            }
        )
    }
}
add_parameter_.local = 1;



// -----------------------------------------------------------------------------

function get_params_()
{
    return ;
}
get_params_.local = 1;


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
