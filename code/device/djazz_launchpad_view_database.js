var d_ = new Dice ();


exports.set_param = function(param, state, cell, color_code)
{
    var key         = to_key_(param, state);
    var val         = to_symbol_(cell, color_code);
    d_.replace(key, val)    
}