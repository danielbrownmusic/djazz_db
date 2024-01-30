
var d_ = new Dict ();

var dev_rdr_    = require ('djazz_launchpad_dict_reader_device_mini');
var grid_rdr_   = require('launchpad_grid_reader');
var map_rdr_    = require('launchpad_mapping_reader') 


var device_dict_ = null;
//var grid_dict_ = null;

var BAR = 'bar';
var CHAPTER = 'chapter';

exports.load_device_dict(device_dict_name)
{
    device_dict_ = new Dict (device_dict_name);
}


exports.add_param(param, state, cell, color)
{

}



//------------------------------------------------------------------


function get_color_code_(color)
{
    var [hue, value, behavior] = color.split(" ");
    post ( "hue =", hue, "value =", value, "behavior =", behavior, "\n");
    if (hue == "none")
        return "0 1";
    var color_code      = device_dict_.get(to_key_("colors", hue, value));
    var behavior_code   = ;
    return [color_code, behavior_code].join(" ");
}
get_color_code_.local = 1;





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
