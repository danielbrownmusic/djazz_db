autowatch = 1;


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


var ddd = new Dict("*DESIGN*"); // Djazz Design Dictionary

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

