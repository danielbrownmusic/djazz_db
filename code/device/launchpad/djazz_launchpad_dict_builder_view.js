
var d_ = new Dict ();

// var dev_rdr_    = require('launchpad_mini_device_database_reader');
var grid_rdr_   = require('launchpad_grid_reader');
var map_rdr_    = require('launchpad_mapping_reader') 


var device_dict_ = null;
var grid_dict_ = null;

var BAR = 'bar';
var CHAPTER = 'chapter';

exports.load_device_dict(device_dict_name)
{
    device_dict_ = new Dict (device_dict_name);
}


exports.set_grid(grid_dict_name)
{
    grid_rdr_.load(grid_dict_name);
    make_grid_param_entries_(BAR);
    make_grid_param_entries_(CHAPTER);
}


exports.set_mapping(mapping_dict_name)
{
    map_rdr_.load(mapping_dict_name);
    make_param_entries_();
}


//------------------------------------------------------------------

function make_grid_param_entries_(param)
{
    for (var i = 0; i < grid_rdr_.count(param); i ++)
    {
        grid_rdr_.states(param).forEach(
            function (state)
            {
                var [key, val] = make_grid_param_entry_(param, i, state);
                d_.set(key, val);
            }
        ) 
    }
}
make_grid_param_entries_.local = 1;


function make_grid_param_entry_(param, i, state)
{
    // ["bar 3 waiting", "midi 14 42 1"]
    param           = to_symbol_(param, i);
    var cell        = grid_rdr_.cell(param, i);
    var color       = grid_rdr_.color(param, state);
    var color_code  = dev_rdr_.color_code(color);

    return make_entry(param, state, cell, color_code)
}
make_grid_param_entry_make_grid_entry_.local = 1;


//------------------------------------------------------------------



function make_param_entries_(param, cell, hue)
{
    map_rdr_.parameters().forEach(make_param_entry_);

}
make_param_entries_.local = 1;


function make_param_entry_(param)
{
    // ["loop_chapter 0", "midi 35 68 1"]
    var [name, state]   = param.split(" ");
    var color           = make_mapping_color_(param, state);
    var color_code      = dev_rdr_.color_code(color);
    var cell            = map_rdr_.cell(param);
    return make_entry(name, state, cell, color_code);
}


function make_entry(param, state, cell, color_code)
{
    var key = to_key_(param, state);
    var val = to_symbol_(cell, color_code);
    return [key, val];
}


//-------------------------------------------------------------


