this.index;
declareattribute("index");
this.bank_name;
declareattribute("bank_name");

this.solo = 0;
declareattribute("solo");
this.send = 1;
declareattribute("send");

function anything()
{
    if (this.send)
        outlet(0, arrayfromargs(messagename,arguments));
}