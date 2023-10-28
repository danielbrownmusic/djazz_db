autowatch = 1;

inlets = 2;
outlets = 2;

var octaves_    = [0, 0, 0, 0];
var values_     = [-16, -8, 8, 16]


function list()
{
    switch (outlet)
    {
        case 0:
            process_event(arrayfromargs(arguments));
            return;
        case 1:
            set_octave(arrayfromargs(arguments));
            return;
    }
}


function set_octave(i, active)
{
    octaves_[i] = active;
    outlet(1, octaves_);
}


function process_event()
{
    var event = arrayfromargs(arguments);
    outlet_(0, event);
    for (var i = 0; i < octaves_.length; i++)
    {
        outlet_(0, translate_pitch_(values_[i], event));
    }
}


function translate_pitch_(semitones, midi_event)
{
    midi_event[1] += semitones;
    return midi_event;
}
translate_pitch_.local = 1;