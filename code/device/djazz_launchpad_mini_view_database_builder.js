
var d_ = new Dict ();

var L_ = require('launchpad_mini_device_database_reader');
var G_ = require('launchpad_device_reader');
var V_ = require('');
var dbu = require('database_utils');

exports.load(device_db_file_path)
{
    device_db_reader_.load(device_db_file_path);
}


exports.load_grid(grid_file_path)
{
    G_.load(grid_file_path);
    make_bar_entries_();
    make_chapter_entries_();
}



//------------------------------------------------------------------

function make_grid_param_entries_()
{
    var entries = [];
    for (var i = 0; i < G_.count(param); i ++)
    {
       entries.concat(make_grid_param_states_entries_(param, i));
    }
    return entries;
}
make_grid_param_entries_.local = 1;


function make_grid_param_states_entries_(param, i)
{
    var entries = [];
    G_.states(param).forEach(
        function (state)
        {
            var [key, val] = make_grid_param_entry_(param, i, state);
            entries.push([key, val]);
        }
    ) 
    return entries;
}
make_grid_param_states_entries_.local = 1;


function make_grid_param_entry_(param, i, state)
{
    var color       = G_.color(param, state);
    var color_code  = L_.color_code(color);
    var key         = to_symbol_(param, i, state);
    var val         = to_symbol_(G_.cell(param, i), color_code)
    return [key, val];
}
make_grid_param_entry_make_grid_entry_.local = 1;


//------------------------------------------------------------------


function make_param_entries_(param, cell, hue)
{

    [0, 1].forEach(
        function (state)
        {
            var color       = make_mapping_color_(hue, state);
            var color_code  = L_.color_code(color);
            view_.set_param(param, state, cell_type, color_code);
        }
    )

    var key         = to_key_(param, state);
    var val         = to_symbol_(cell, color_code);
    d_.replace(key, val)    
}


function make_param_entry_(param, cell, hue)
{

}



function make_bar_entries_()
{
    return make_param_entries_('bar');
}
make_bar_entries_.local = 1;


function make_chapter_entries_()
{
    return make_param_entries_('chapter');
}
make_chapter_entries_.local = 1;

function make_mapping_color_(color, state)
{
    var brightness = (state === 0) ? "dim" : "bright";
    var color = [color, brightness, "static"].join(" ");    
}
make_mapping_color_.local = 1;