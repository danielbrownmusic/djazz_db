autowatch = 1;

var solos_  = [];
var count   = 0;
declareattribute("count", null, "set_count");

setinletassist  (0, "set_size + int; solo + track_index + soloed (0 or 1)");
setoutletassist (0, "sequence of messages \"track_i::active\" + 0/1");


/* function list()
{
    setvalueof(arrayfromargs(arguments));
} */

function set_count(n)
{
    if (n < count)
    {
        solos_.splice(n, count - n);
    }
    else if (n > count)
    {
        for (var i = count; i < n; i++)
        {
            solos_.push(0);
        }
    }
    count = n;
}


function setvalueof()
{
    post ("setting value in model:\n");
    solos_ = arrayfromargs(arguments);

    var any = any_();
    for (var i = 0; i < count; i++)
    {
        var msg     = ["track_", i, "::active"].join();
        var active  = any ? solos_[i] : 1;
        outlet(0, msg, active);
    }
    post (solos_, "\n");
}


function getvalueof()
{
    post ("getting value in model:\n");
    post (solos_);
    post("\n");
    return solos_;
}

// ---------------------------------------------------


/* function get_actives_()
{
    return any_() ? solos_ : all_ones_();    
}
get_actives_.local = 1; */


function any_()
{
    for (var i = 0; i < count; i++)
    {
        if (solos_[i] === 1)
            return true;
    }
    return false;
}


/* 
function sum_array_(a)
{
    return a.reduce( function (partial_sum, s) { return partial_sum + s; } )
}
sum_array_.local = 1
 */

/* function all_ones_()
{
    return make_array_(count, 1);
}
all_ones_.local = 1; */
