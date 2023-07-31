
function list()
{
    var min_measure = arguments[0];
    var max_measure = arguments[1];
    var n_measures  = max_measure - min_measure;

    var measure_numbers = Array(n_measures);
    for (var i = 0; i < n_measures; i++)
    {
        measure_numbers[i] = min_measure + i;
    }

    outlet(1, "tabs", measure_numbers);
}