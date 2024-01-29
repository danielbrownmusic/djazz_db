var dutils      = require("db_dictionary_array_utils");

var param_dict_ = undefined;


exports.load = function (mapping_dict_name)
{
    var d = new Dict (mapping_dict_name);

    if (!is_dict_ok_(d))
    {
        post_error_();
        return false;
    }    

    add_parameters_(d);
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
    get_mappings_(d).forEach(add_parameter_);
}
add_parameters_.local = 1;


function add_parameter_()
{
    [0, 1].forEach(
        function (state)
        {
            var data = mappings.get("parameters").get(param).split(" ");
            //var cell = data.slice(0, 2).join(" ");
            data.splice(2, 1, make_color_(data[2], state));
            var key = to_symbol_(param, state);
            var val = data.join(" ");
            param_dict_.set(key, val);
        }
    )
}
add_parameter_.local = 1;


function make_color_(hue, state)
{
    var brightness = (state === 0) ? "dim" : "bright";
    return [hue, brightness, "static"].join(" ");    
}
make_mapping_color_.local = 1;

// -----------------------------------------------------------------------------


function get_mappings_(d)
{
    return dutils.get_dict_key_array(d).map(get_mapping_);
}
get_mappings_.local = 1;


function get_mapping_(param, d)
{
    return [param, d.get("parameters").get(param)];
}
get_mapping_.local = 1;


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