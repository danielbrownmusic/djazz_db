autowatch = 1;

var octaves_    = [0, 0, 0, 0];
var values_     = [-16, -8, 8, 16]

function set_octaves(octaves)
{
    octaves_ = octaves;
}


function list()
{
    var event = arrayfromargs(arguments);
    outlet_(0, event);
    for (var i = 0; i < octaves_.length; i++)
    {
        var new_event = event;
        new_event[1] += values_[i];
        outlet_(0, new_event);
    }
}