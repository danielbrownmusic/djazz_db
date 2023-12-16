autowatch = 1;

var solos_      = [];
var mutes_      = [];
var actives_    = [];

var count_      = (jsarguments.length > 1)  ? jsarguments[1]    : 0;
inlets          = (count_ !== 0)            ? count_            : 1;
clear();

//outlets     = inlets;

for (var i = 0; i < count_; i++)
{
    var str = ["solo/mute + 0/1 from track view", i].join(" ");
    setinletassist(i, str);

    //setoutletassist(0, "");
    //var str = ["solo/mute + 0/1 from track view", i].join(" ");
}


function setvalueof(actives)
{
    actives_ = actives;
    //outlet (0, value);
}


function getvalueof()
{
    return actives_;
}


function clear()
{
    solos_      = make_array_(count_, 0);
    mutes_      = make_array_(count_, 0);
    actives_    = make_array_(count_, 1);
    setvalueof(get_value_());
    //notifyclients();
}


function solo(s)
{
    solos_[inlet] = s;
    setvalueof(get_value_());
    //notifyclients();
}


function mute(s)
{
    mutes_[inlet] = s;
    setvalueof(get_value_());
}


// ---------------------


function make_array_(len, val)
{
    return Array.apply(null, Array(len)).map( function() { return val; });
}
make_array_.local = 1;


function get_value_()
{
    var active_solos = any_(solos_) ? solos_ : all_ones_();    
    var active_mutes = flip_array_(mutes_);
    return intersection_(active_solos, active_mutes);
}

// bit twiddling --------------------

function any_(a)
{
    return sum_array_(a) > 0;
}
any_.local = 1;


function sum_array_(a)
{
    return a.reduce( function (partial_sum, s) { return partial_sum + s; } )
}
sum_array_.local = 1


function flip_array_(a)
{
    return a.map( function (s) { return 1 - s; })
}
flip_array_.local = 1;


function intersection_(a1, a2)
{
    return a1.map( function (s, i) { return s & a2[i]; } );
}
intersection_.local = 1;


function all_ones_()
{
    return make_array_(count_, 1);
}
all_ones_.local = 1;