autowatch = 1;

var ctrls   = [];

/* var x_c = 200;
var y_c = 100;
var w_c = 160; */

function make_ctrls(n)
{

    if (n < 0)
        return;
   
    var l = ctrls.length;

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

    update_spray_();
}


function push_back_()
{
    var ctrl_in = this.patcher.getnamed("ctrl_in");
    var l       = ctrls.length;
    var x       = ctrl_in.rect[0] + l * 160;
    var y       = ctrl_in.rect[3] + 66;

    var ctrl    = this.patcher.newdefault(x, y, "dtrl_go_to_chapter");
    ctrl.varname = l;
    ctrls.push(ctrl);
}
push_back_.local = 1;


function pop_back_()
{
    var ctrl = ctrls.pop();
    this.patcher.remove(ctrl);
}
pop_back_.local = 1;



function update_spray_()
{
    var spray = this.patcher.getnamed("spray");
    if (spray)
    {
        this.patcher.remove(spray);
    }
    var to_spray = this.patcher.getnamed("ctrl_in");
    var x = to_spray.rect[0];
    var y = to_spray.rect[3] + 22;
    var l = ctrls.length;

    if (l === 0)
        return;

    spray = this.patcher.newdefault(x, y, "spray", l, 0, 1);
    spray.varname = "spray";
    this.patcher.connect(to_spray, 0, spray, 0);
    for (var i = 0; i < l; i++)
    {
        this.patcher.connect(spray, i, ctrls[i], 0);
    }
}


/* function update_funnel_()
{
    var funnel = this.patcher.getnamed("funnel");
    if (funnel)
    {
        this.patcher.remove(funnel);
    }

    var l = ctrls.length;

    if (l === 0)
        return;

    var from_funnel   = this.patcher.getnamed("ctrl_out");
    var x           = from_funnel.rect[0];
    var y           = from_funnel.rect[1] - 44;        
    funnel          = this.patcher.newdefault(x, y, "funnel", l);
    funnel.varname  = "funnel";

    this.patcher.connect(funnel, 0, from_funnel, 0);
    for (var i = 0; i < l; i++)
    {
        this.patcher.connect(ctrls[i], 0, funnel, i);
    }
} */


/* 
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

 */
