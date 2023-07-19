outlets = 2;

autowatch = 1;
var gah = [];
declareattribute("gah");

post("yes");

function bang()
{
    var heyman = this.patcher.getnamed("heyman");
    var bar = heyman.getattr("bar");
    post(bar);
    gah = bar;

}

function glob()
{
    outlet(0, gah[0]["foo"]);
    outlet(1, gah[1]["foo"]);
}