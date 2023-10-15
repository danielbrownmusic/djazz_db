autowatch = 1;

function translate() //dict_name, i_track, i_effect, effect_number
{
    var dict_name       = arguments[0];
    var track_index     = arguments[1];
    var effect_index    = arguments[2];
    var effect_number   = arguments[3];

     // make track index int into a symbol 
     // so that it can be used as a dict key
    var t_key           = make_track_key_(track_index);
    var d               = new Dict(dict_name);

/*     //var is_effect_empty = (effect_number === 0);
    var is_track_empty  = 1 - ; */
    var count           = d.contains(t_key) ? d.getsize(t_key) : 0;

    if (effect_index === count)
    {
        outlet(0, "append", dict_name, track_index, effect_number);
    }
    else
    {
        outlet(0, "set", dict_name, track_index, effect_index, effect_number);
    }
}
/*     if (is_effect_empty)
    {
        if (effect_index === count) 
        {}
        else if (effect_index === count - 1)
        {
            outlet(0, "remove_last", dict_name, track_index);
        }
        else
        {
            outlet(0, "set", dict_name, track_index, effect_index, effect_number);
        }
    }
    else {
        if (effect_index === count)
        {
            outlet(0, "append", dict_name, track_index, effect_number);
        }
        else
        {
            outlet(0, "set", dict_name, track_index, effect_index, effect_number);
        }
    }
}
 */

function make_track_key_(track_index)
{
    return "effects::" + track_index.toString();
}
make_track_key_.local = 1;

