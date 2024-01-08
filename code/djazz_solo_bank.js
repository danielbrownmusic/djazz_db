autowatch = 1;

var solos_  = [];
var count   = 0;
declareattribute("count", null, "set_count");

setinletassist  (0, "set_size + int; solo + track_index + soloed (0 or 1)");
setoutletassist (0, "sequence of messages \"track_i::active\" + 0/1");


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
    solos_ = arrayfromargs(arguments);

    var any = any_();
    for (var i = 0; i < count; i++)
    {
        var msg     = ["track_", i, "::active"].join("");
        var active  = any ? solos_[i] : 1;
        outlet(0, msg, active);
    }
}


function getvalueof()
{
    return solos_;
}


function any_()
{
    for (var i = 0; i < count; i++)
    {
        if (solos_[i] === 1)
            return true;
    }
    return false;
}
