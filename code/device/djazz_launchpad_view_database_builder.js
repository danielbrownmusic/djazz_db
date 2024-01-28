var d_ = new Dict ();


exports.set_param = function(param, state, cell, color, device_dict_)
{
    [0, 1].forEach(
        function (state)
        {
            var color_code  = dev_.color_code(make_mapping_color_(color, state));
            view_.set_param(param, state, cell_type, color_code);
        }
    )

    var key         = to_key_(param, state);
    var val         = to_symbol_(cell, color_code);
    d_.replace(key, val)    
}