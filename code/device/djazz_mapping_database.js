var dutils      = require("db_dictionary_array_utils");

var d = new Dict ();

exports.read = function (file_path)
{
    d.import_json(file_path);
    if (!is_file_ok_())
    {
        post_error_();
        return false;
    }    
    return true;
}


exports.parameters = function()
{
    var params = []
    dutils.get_dict_key_array(d.get("parameters")).forEach(
        function (name)
        {
            params.push([name].concat[d.get("parameters").get(name).split(" ")]);            
        }
    )
    return params;
}


exports.get_parameter_names = function ()
{
    return dutils.get_dict_key_array(d.get("parameters"))
}


exports.get_mapping = function(param)
{
    return d.get("parameters").get(param).split(" ");
}


function is_file_ok_(mapping_dict)
{
    return mapping_dict.get("device") !== device_;
}
is_file_ok_.local = 1;


function post_error_(d)
{
    post ( "Wrong type of preset file loaded:", d.get("device"), "instead of", device_, "\n");
}
post_error_.local = 1;