autowatch = 1;

var count   = jsarguments.length > 1 ? jsarguments[1] : 0;
var solos   = make_array_(count, 0);
var value   = make_array_(count, 1);

inlets      = count !== 0 ? count : 1;


function clear()
{
    for (var i = 0; i < count; i++)
    {
        solos[i] = 0;
    }
    setvalueof(get_value_());
    notifyclients();
}


function msg_int(s)
{
/*     if (s !== 0 || s !== 1)
        return; */
    solos[inlet] = s;
    setvalueof(get_value_());
    notifyclients();
}



function setvalueof(val)
{
    value = val;
    outlet (0, value);
}


function getvalueof()
{
    return value;
}


// ---------------------

function get_value_()
{
    return any_() ? solos : all_ones_();    
}


function any_()
{
    return sum_array_(solos) > 0;
}
any_.local = 1;


function sum_array_(a)
{
    return a.reduce( function (partial_sum, s) { return partial_sum + s; } )
}
sum_array_.local = 1


function make_array_(len, val)
{
    return Array.apply(null, Array(len)).map( function() { return val; });
}
make_array_.local = 1;


function all_ones_()
{
    return make_array_(count, 1);
}
all_ones_.local = 1;


