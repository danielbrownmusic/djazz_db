autowatch = 1;

outlets = 2;

var d = null;
var d2 = null;

function bang()
{
    outlet (0, "dictionary", d.name);
    outlet (1, "dictionary", d2.name);
    post (Object.getOwnPropertyNames(d).length);

}

function init()
{
    d = new Dict ("D");
    d.replace("a::b", 2, 3, 4);

}


function pass()
{
    d2 = d;
    d2.append("a::b", 5);
}

function pass2()
{
    var d2 = new Dict ("yo");
    d.replace("a::b", d2);
    post (d.get("a::b").name);
    d.append("a::b", 8);
}