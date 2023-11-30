autowatch = 1;

var count   = jsarguments.length > 1 ? jsarguments[1] : 0;
outlets     = count !== 0 ? count : 1;


function list()
{
    setvalueof(arrayfromargs(arguments));
}


function setvalueof(solos)
{
    for (var i = 0; i < count; i++)
    {
        outlet(i, solos[i]);
    }
}