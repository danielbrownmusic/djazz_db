
var d_ = new Dict ();

var dev_rdr_    = null;//require ('djazz_launchpad_dict_reader_device_mini');

// ------------------------------------------------------------------------------

exports.get_dict = function()
{
    return d_.name;
}


exports.set_reader = function(rdr)
{
    dev_rdr_ = rdr;
}

exports.set_dict = function(dict_name)
{
    d_ = new Dict (dict_name);
}


exports.load_device_dict = function(device_dict_name)
{
    return dev_rdr_.load (device_dict_name);
}


exports.add_param = function(param, state, cell_type, cell_value, color)
{
    var color_code  = dev_rdr_.color_code(color);
    var key         = to_key_(param, state);
    var val         = to_symbol_(cell, color_code); 
    d_.set(key, val);
}


//------------------------------------------------------------------


function to_symbol_()
{
    return Array.prototype.slice.call(arguments).join(" ");
}
to_symbol_.local = 1;