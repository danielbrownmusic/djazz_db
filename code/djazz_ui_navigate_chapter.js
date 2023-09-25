autowatch = 1;


function loadbang()
{
    set_tabs(0, 0);
}


function set_tabs()
{
    var min_measure = arguments[0];
    var max_measure = arguments[1];
    var n_measures  = max_measure - min_measure;

/*     if (n_measures <= 0)
    {
        outlet(0, "tabs", " ");
    } */

    var measure_numbers = Array(n_measures);
    //post([min_measure, max_measure, n_measures].join(", "));
    for (var i = 0; i < n_measures; i++)
    {
        measure_numbers[i] = min_measure + i;
    }

    outlet(0, "tabs", measure_numbers);
    set_measure(0);
}


function set_measure(n)
{
    outlet(0, "set", n);
}