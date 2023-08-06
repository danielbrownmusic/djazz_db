autowatch  = 1;

var inlet_;
var outlet_;
var effect_;

function init()
{
    inlet_ = this.patcher.getnamed("in");
    outlet_ = this.patcher.getnamed("out");
    if (arguments > 0)
    {
        var effect_name = arguments[0];
        effect_ = this.patcher.newdefault(50, 100, effect_name);
        this.patcher.disconnect(inlet_, 0, outlet_, 0);
        this.patcher.connect(inlet_, 0, effect_, 0);
        this.patcher.connect(effect_, 0, outlet_, 0);
    }
}

function anything()
{
    effect_.message(arrayfromargs(messagename, arguments));
}
