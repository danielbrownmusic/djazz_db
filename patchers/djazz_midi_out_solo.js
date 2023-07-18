this.index = undefined;
declareattribute("index");
this.solo = 0;
declareattribute("solo");
this.send = 1;
declareattribute("send");
function anything()
{
    if (this.send)
        outlet(0, arguments);
}