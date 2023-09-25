autowatch = 1;

var chapter_ctrls   = [];
var bar_ctrls       = []

var x_c = 200;
var y_c = 100;
var w_c = 160;

var x_b = 200;
var y_b = 200;
var w_b = 160;


function add()
{
    switch (arguments[0])
    {
        case "go_to_chapter":
            push_("ctrl_navigate_go_to_chapter", chapter_ctrls, x_c + a * w_c, y_c);
            return;
        case "go_to_bar":
            push_("ctrl_navigate_go_to_bar", bar_ctrls, x_b + a * w_b, y_b);
            return;
    }
}


function remove()
{
    switch (arguments[0])
    {
        case "go_to_chapter":
            pop_ctrl_(chapter_ctrls);
            return;
        case "go_to_bar":
            pop_ctrl_(bar_ctrls);
            return;
    }
}


function push_(ctrl_type, ctrl_list, x, y)
{
    var ctrl = this.patcher.newdefault(x, y, ctrl_type);
    ctrl_list.push(ctrl);
    var ctrl_in = this.patcher.getnamed("ctrl_in");
    var ctrl_out = this.patcher.getnamed("ctrl_out");
    this.patcher.connect(ctrl_in, 0, chapter_ctrl, 0);
    this.patcher.connect(chapter_ctrl, 0, ctrl_out, 0);
}
push_ctrl_.local = 1;


function pop_ctrl_(ctrl_list)
{
    var ctrl = ctrl_list.pop();
    this.patcher.remove(ctrl);
}
pop_ctrl_.local = 1;


