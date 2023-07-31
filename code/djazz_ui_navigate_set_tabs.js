autowatch = 1;

function list()
{
    var min_measure = arguments[0];
    var max_measure = arguments[1];
    var n_measures  = max_measure - min_measure;

    var measure_numbers = Array(n_measures);
    post([min_measure, max_measure, n_measures].join(", "));
    for (var i = 0; i < n_measures; i++)
    {
        measure_numbers[i] = min_measure + i;
    }

    outlet(0, "tabs", measure_numbers);
}