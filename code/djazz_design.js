autowatch = 1;

outlets = 2;

/*
midi_out
    banks
        count
        1
            channels
                min
                max
                count
                1
                    effects
                        count
                            1
                                name



*/


/*
0: effect_0, effect_1, ...
1: ...
...
*/

var effect_names    = ["", "djazz_add_octaves", "djazz_pitch_shift"];

var ddd = new Dict("*DESIGN*"); // Djazz Design Dictionary
ddd.replace("effects", effect_names);


function set_effect(i_channel, i_slot, i_effect)
{
    if (i_slot > ddd.get_size)
        return; //error
    if (i_slot === ddd.getsize(i_channel))
    {
        ddd.append(i_channel, i_effect);
    }
    else
    {
        ddd.set(i_channel[i_slot], i_effect);
    }
    var effect_name = ddd.get("effects"[i_effect]);
    output(0, [i_channel, i_slot, effect_name])
    output(1, ddd);
}






function loadbang()
{
    midi_bank(1, 1, 8);
    midi_bank(2, 9, 16);

}



function midi_bank(index, min_channel, max_channel)
{

    var key = "midi_out::banks::" + index.toString() + "::";

    ddd.replace(key + "channels::count" ,   max_channel - min_channel);
    ddd.replace(key + "channels::min"   ,   min_channel);
    ddd.replace(key + "channels::max"   ,   max_channel);

    for (var i = min_channel; i <= max_channel; i++)
    {
        ddd.replace(key + "channels::" + i.toString());
    }
}

