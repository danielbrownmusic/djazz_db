autowatch = 1;

var offset_         = 19;
var chapter_count_  = 0;

var off_color_      = 25;
var on_color_       = 79;


function chapter_count(n)
{
    chapter_count_ = n;
}


function chapter_number(k)
{
    for (var i = 0; i < chapter_count_; i++)
    {
        var color   = i === k ? on_color_ : off_color_;        
        var cell    = i + offset_;
        var style   = 1;
        outlet(0, [color, cell, style]);
    }
}