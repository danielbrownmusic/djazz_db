/*
CONVENTION for grid stuff:
'grid param' = "bar" or "chapter"
'param' = "bar i", "chapter j"
*/


var dutils = require("db_dictionary_array_utils");

var GRID_PARAMS_    = ['bar', 'chapter'];
var PARAM_STATES_   = [0, 1];

var d_              = new Dict();

// -------------------------------------------------------------


exports.set_dict = function (device_name, mapping_dict_name)
{
    d_.name = mapping_dict_name;
    //post (d_.name);
    //post (d_.getkeys());
    if (!is_dict_ok_(device_name))
    {
        post_error_(device_name);
        return false;
    }
    return true;
}


exports.close = function()
{
    d_ = new Dict();
}


// -------------------------------------------------------------


exports.contains = function(param)
{
    return (d_.get("parameters").contains(param) === 1) ? true : false;
}


exports.chapter_count = function()
{
    return get_grid_param_count_("chapter");
}


exports.bar_count = function()
{
    return get_grid_param_count_("bar");
}

exports.params = function ()
{
    return get_grid_params_().concat(get_params_());
}


exports.states = function (param)
{
    var     grid_param = find_grid_param_in_param_name_(param);
    return  grid_param ? get_grid_param_states_(grid_param) : PARAM_STATES_;
}


exports.cell_data = function (param)
{
    var     grid_param = find_grid_param_in_param_name_(param);
    return  grid_param ? 
            get_grid_param_cell_data_   (param) : 
            get_param_cell_data_        (param);
}


exports.color = function (param, state)
{
    var     grid_param = find_grid_param_in_param_name_(param);
    return  grid_param ? 
            get_grid_param_color_   (grid_param, state) : 
            get_param_color_        (param, state);
}



// -------------------------------------------------------------

function get_grid_params_()
{
    var result = [];
    GRID_PARAMS_.forEach(
        function (param)
        {
            for (var i = 0; i < get_grid_param_count_(param); i++)
            {
                result.push(to_symbol_(param, i));
            }
        }
    )
    return result;
}
get_grid_params_.local = 1;


function get_params_()
{
    return params = dutils.get_dict_key_array(d_.get("parameters"));
}

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


function get_grid_param_states_ (grid_param)
{
    return dutils.get_dict_key_array(d_.get("grid").get(grid_param).get("colors"));
}
get_grid_param_states_.local = 1;


function get_param_cell_data_(param)
{
    return d_.get("parameters").get(param).split(" ").slice(0, 2);
}
get_param_cell_data_.local;


function get_grid_param_cell_data_(param)
{
    var [grid_param, i] = param.split(" ");
/*     post ("get_grid_param_cell_data_");
    post (grid_param, i); */
    return d_.get("grid").get(grid_param).get("cells")[i].split(" ");
}
get_grid_param_cell_data_.local = 1;


function get_param_color_(param, state)
{
    //post ("param =",param, "state =", state, "\n");
    var hue         = d_.get("parameters").get(param).split(" ")[2];
    var value       = state === 0 ? "dim" : "bright";
    var behavior    = "static";
    //post ("param color =", hue, value, behavior, "\n");
    return [hue, value, behavior].join(" ");
}
get_param_color_.local = 1;


function get_grid_param_color_(grid_param, state)
{
    return d_.get("grid").get(grid_param).get("colors").get(state);
}
get_grid_param_color_.local = 1;


function get_grid_param_count_(param)
{
    return dutils.get_dict_array_length(d_, to_key_("grid", param, "cells"));
}
get_grid_param_count_.local = 1;


// -------------------------------------------------------------

function is_dict_ok_(device_name)
{
    // (d_.get("device"), "\n");
    return d_.get("device") == device_name;
}
is_dict_ok_.local = 1;


function post_error_(device_name)
{
    post ( "Wrong type of preset file loaded:", d_.get("device"), "instead of", device_name, "\n");
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






/* exports.grid_param_cell_value = function (param, i)
{
    return grid_param_val_as_array_(param, i)[1];
}


exports.grid_param_color = function (param, state)
{
    post ("param =",param, "state =", state, "\n");
    post ("grid param color =", d_.get("grid").get(param).get("colors").get(state), "\n");
    return d_.get("grid").get(param).get("colors").get(state);
}


exports.grid_param_count = function (param)
{
    return grid_param_count_(param);
} */



/* 
exports.grid_params = function()
{
    return GRID_PARAMS_;
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
    post ("param =",param, "state =", state, "\n");
    post ("grid param color =", d_.get("grid").get(param).get("colors").get(state), "\n");
    return d_.get("grid").get(param).get("colors").get(state);
}


exports.grid_param_states = function (param)
{
    return dutils.get_dict_key_array(d_.get("grid").get(param).get("colors"));
}


exports.grid_param_count = function (param)
{
    return grid_param_count_(param);
} */










/* function param_val_as_array_(param)
{
    return d_.get(param).split(" ");
}
param_val_as_array_.local = 1;


function grid_param_val_as_array_(grid_param)
{
    var [param, i] = grid_param.split(" ");
    return d_.get("grid").get(param).get("cells")[i].split(" ");
}
grid_param_val_as_array_.local = 1; */





/* exports.get_dict = function ()
{
    return d_.name;
} */