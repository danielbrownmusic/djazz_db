// empty arrays seem to be stored as NULL in dictionaries!!!!!
// arrays inside messages are sent as JS OBJECTS!!!!
// dict keys that are numbers have to be converted to strings to look up their values!!!!

autowatch = 1;

outlets = 2;

var d = new Dict("MIDI_OUT");
d.parse('{ "1" : [], "2" : [], "3" : [], "4" : [], "5" : [], "6" : [], "7" : [], "8" : []}');


function bang()
{
    for (var i = 1; i <= 8; i++)
    {
        send_track_list(i);
    }
}

function send_track_list(t)
{
    var effect_list = d.get(t.toString());
    var msg = [t, "effects"];
    if (effect_list)
    {
        for (var i = 0; i < effect_list.length; i++)
        {
            msg.push(effect_list[i]);
        }
    }
    post ("sending track list");
    outlet(0, msg);
}


function effect(i_track, i_effect, effect_number)
{
    post ("design controller receiving message from midi_out \n");

    var count = d.getsize(i_track);
    if (i_effect === count)
    {
        d.append(i_track.toString(), effect_number);
    }
    else
    {
        d.set(i_track.toString()[i_effect], effect_number);
    }

    send_track_list(i_track);
    outlet(1, "bang");
}