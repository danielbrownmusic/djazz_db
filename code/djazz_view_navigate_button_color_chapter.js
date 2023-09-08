autowatch = 1;

outlets = 2;

var offset_         = 19;
var chapter_count_  = 0;

var off_color_      = 25;
var on_color_       = 79;

var navigate_dict = null;

function dictionary(name)
{
    navigate_dict   = new Dict(name);
    chapter_count_  = navigate_dict["metadata"]["chapter_count"];

    for (var i = 0; i < chapter_count_; i++)
    {
        var color   = off_color_;        
        var cell    = i + offset_;
        var style   = 1;
        outlet(0, [color, cell, style]);
    } 
}

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

        var max_measure     = navigate_dict["chapters"][k][max_measure];
        var min_measure     = navigate_dict["chapters"][k][min_measure];
        var measure_count   = max_measure - min_measure;

        outlet(1, "measure_count", measure_count);
    }
}