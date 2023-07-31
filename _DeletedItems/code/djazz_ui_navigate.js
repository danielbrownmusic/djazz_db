function set_tabs(min_measure, max_measure)
{
    var n_measures = max_measure - min_measure;
    var measure_numbers = Array(n_measures);
    for (var i = 0; i < n_measures; i++)
    {
        measure_numbers[i] = min_measure + i;
    }
    outlet(0, "tabs", measure_numbers);
}