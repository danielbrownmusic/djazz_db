var dutils      = require("db_dictionary_array_utils");

var d_ = undefined;


exports.load = function (mapping_dict_name)
{
    d_  = new Dict (mapping_dict_name);

    if (!is_dict_ok_(d_))
    {
        post_error_();
        return false;
    }
    return true;
}

exports.get_dict = function ()
{
    return d_.name;
}

// -------------------------------------------------------------


exports.params = function()
{
    return dutils.get_dict_key_array(d_);
}


exports.param_cell_type = function (param)
{
    return param_val_as_array_(param)[0];
}


exports.param_cell_value = function (param)
{
    return parseInt(param_val_as_array_(param)[1]);
}


exports.param_color = function (param, state)
{
    var hue         = param_val_as_array_(param)[2];
    var value       = state === 0 ? "dim" : "bright";
    var behavior    = "static";
    return [hue, value, behavior].join(" ");
}


exports.param_states = function (param)
{
    return [0, 1];
}


// -------------------------------------------------------------


exports.grid_params = function()
{
    return ["bar", "chapter"];
}


exports.grid_param_cell_type = function (param, i)
{
    return grid_param_val_as_array_(param, i)[0];
}


exports.grid_param_cell_value = function (param, i)
{
    return grid_param_val_as_array_(param, i)[1];
}


exports.grid_param_color = function (param, state)
{
    return d_.get("grid").get(param).get("colors").get(state);
}


exports.grid_param_states = function (param)
{
    return dutils.get_dict_key_array(d_.get("grid").get(param).get("colors"));
}


exports.grid_param_count = function (param)
{
    return d_.getsize(to_key_("grid", param, "cells"));
}


// -------------------------------------------------------------


function param_val_as_array_(param)
{
    return d_.get(param).split(" ");
}
param_val_as_array_.local = 1;


function grid_param_val_as_array_(param, i)
{
    return d_.get("grid").get(param).get("cells")[i].split(" ");
}
grid_param_val_as_array_.local = 1;


function is_dict_ok_(d)
{
    return true;//d_.get("device") !== device_;
}
is_dict_ok_.local = 1;


function post_error_(d)
{
    post ( "Wrong type of preset file loaded:", d_.get("device"), "instead of", device_, "\n");
}
post_error_.local = 1;


function to_symbol_()
{
    return Array.prototype.slice.call(arguments).join(" ");
}
to_symbol_.local = 1;


function to_key_()
{
    return Array.prototype.slice.call(arguments).join("::");
}
to_key_.local = 1;