autowatch = 1;

var channels = [];


function channel_count(min_channel, max_channel)
{
    for (var i = min_channel; i <= max_channel; i++)
    {
        var x   = (i - min_channel) * 100;
        var y   = 0;
        var channel = this.patcher.newdefault(x, y, "djazz_midi_out_channel_load", i);

    }
}


function channel_count(min_channel, max_channel)
{
    if (n < 0)
        return;

    var l = channels.length;

    if (n === l)
        return;

    if (n < l)
    {
        for (var i = n; i < l; i++)
        {
            pop_back_();
        }
    }
    else
    {
        for (var i = 0; i < n - l; i++)
        {
            push_back_();
        }
    }
}

// --------------------------------------------------------------------

function push_back_()
{
    var l   = channels.length;
    var x   = l * 100;
    var y   = 0;

    var channel    = this.patcher.newdefault(x, y, "djazz_midi_out_channel_load", );
                  
    channels.push(channel);
}
push_back_.local = 1;


function pop_back_()
{   
    var channel = channels.pop();
    this.patcher.remove(channel);
}
pop_back_.local = 1;