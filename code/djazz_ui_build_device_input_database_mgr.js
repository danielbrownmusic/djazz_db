autowatch = 1;


function make_color_picker()
{
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    for (var i = 0; i < colors.length; i++)
    {
        var color = colors[i];

        var w = 44;
        var h = 44;

        var x_start = 600;
        var y_start = 40;
 
        var x = x_start + i * w;
        var y = y_start;

        var rgb = color_dict.get(color).get('max');
        var color_button = this.patcher.newdefault
        (
            x, y,"textbutton", 
            "@text",                color, 
            "@texton",              color,
            "@textcolor",           rgb,
            "@textoncolor",         rgb,
            "@bgcolor",             rgb,
            "@bgoncolor",           rgb,
            "@patching_rect",       [x, y, w, h],
            "@presentation",        1,
            "@presentation_rect",   [x, y, w, h]
        );
        this.patcher.connect(color_button, 1, this.box, 0);
    }
}