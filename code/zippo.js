autowatch = 1;
outlets = 3;
function zippo()
{
    var a = arrayfromargs(arguments);
    var l1 = a.slice(0,3);
    var l2 = a.slice(3, 6);
    var l3 = []
    for (var i = 0; i < l1.length; i++)
    {
        l3.push([l1[i], l2[i]]);
    }
    for (var i = 0; i < l3.length; i++)
    {
        outlet (i, l3[i]);

    }

}