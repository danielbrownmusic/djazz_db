
var d_ = new Dict ();

var dev_rdr_ = require ('djazz_launchpad_dict_reader_device_mini');

// ------------------------------------------------------------------------------



exports.load = function(device_dict_name, view_dict_name)
{
    dev_rdr_.load (device_dict_name);
    d_.name = view_dict_name;
    init_dict_();
    post ("view dict loaded FUCK YOU YOU FUCK")
}


exports.add_param = function(param, state, cell_type, cell_value, color)
{
    var color_code  = dev_rdr_.color_code(color).join(" ");
    var key         = to_symbol_(param, state);
    var val         = to_symbol_(cell_type, cell_value, color_code); 
    d_.set(key, val);
}


/* exports.add_grid_param = function(param, i, state, cell_type, cell_value, color)
{
    var color_code  = to_symbol_(dev_rdr_.color_code(color));
    var key         = to_symbol_(param, state);
    var val         = to_symbol_(cell_type, cell_value, color_code); 
    d_.set(key, val);
}
 */

//------------------------------------------------------------------


function init_dict_()
{
    d_.set("midi_count",    dev_rdr_.midi_count());
    d_.set("cc_count",      dev_rdr_.cc_count());
}
init_dict_.local = 1;


function to_symbol_()
{
    return Array.prototype.slice.call(arguments).join(" ");
}
to_symbol_.local = 1;


/* exports.get_dict = function()
{
    return d_.name;
}
 */
