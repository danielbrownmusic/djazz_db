autowatch = 1;

//var offset_         = 19;
var measure_count_  = 0;

var off_color_      = 25;
var on_color_       = 79;





function measure_count(n)
{
    measure_count_ = n;
}


function measure_number(k)
{
    for (var i = 0; i < measure_count_; i++)
    {
        var color   = i === k ? on_color_ : off_color_;
        var cell    = measure_to_cell(k);
        var style   = 1;
        outlet(0, [style, cell, color]);
    }
}


function measure_to_cell(i)
{
    return i = 81 - (i % 4) * 10;
}