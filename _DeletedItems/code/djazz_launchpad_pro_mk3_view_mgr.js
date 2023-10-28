autowatch = 1;

outlets = 2;


function init_static_lights(filepath)
{
    f = new File(filepath, "read");
    var data = JSON.parse(f.readstring);
    for (var key in data.midi)
    {
        outlet(0, data.midi[key]);
    }
    for (var key in data.cc)
    {
        outlet(1, data.cc[key]);
    }
}