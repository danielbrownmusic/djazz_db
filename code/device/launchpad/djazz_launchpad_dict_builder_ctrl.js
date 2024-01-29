var d_ = new Dict ();


exports.set_param(cell_type, cell_value, param)
{
    var key = to_symbol_(cell_type, cell_value);
    var val = to_symbol_("toggle_param", param);
    d_.replace(key, val);
}


exports.set_grid_param()
{
    
}