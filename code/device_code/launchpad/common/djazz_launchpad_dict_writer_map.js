var d_ = new Dict ();

exports.add_param = function (param, cell_type, cell_value, color)
{
    d_.set(param, to_symbol_(cell_type, cell_value, color));
}
