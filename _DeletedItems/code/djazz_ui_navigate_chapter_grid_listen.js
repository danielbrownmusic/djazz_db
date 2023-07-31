var state_patch;

var state =
{
    beat:
    {
        number:         state_patch.beat.getnamed("number"),
        chapter:        state_patch.beat.getnamed("chapter"),
        measure:        state_patch.beat.getnamed("measure"),
        position:       state_patch.beat.getnamed("position"),
    },
    chapter:
    {
        min_measure:    state_patch.chapter.getnamed("min_measure"),
        max_measure:    state_patch.chapter.getnamed("max_measure"),
        min_beat:       state_patch.chapter.getnamed("min_beat"),
        max_beat:       state_patch.chapter.getnamed("max_beat")
    }
}

var beat_listener       = new MaxobjListener(state.beat.number,     beat_value_changed);
var chapter_listener    = new MaxobjListener(state.beat.chapter,    chapter_value_changed);


function bind(model_name)
{
    state_patch = this.patcher.parentpatcher.getnamed("model_name").patcher.getnamed("state");
}

function beat_value_changed(data)
{
    var measure = state.beat.measure.value;
    var position = state.beat.position.value; 

    outlet(0, "set " + measure);
}


function chapter_value_changed(data)
{
    var min_measure = state.chapter.min_measure.value;
    var max_measure = state.chapter.max_measure.value; 

    var n_measures = max_measure - min_measure;
    var measure_numbers = Array(n_measures);
    for (var i = 0; i < n_measures; i++)
    {
        measure_numbers[i] = min_measure + i;
    }

    outlet(0, "tabs " + measure_numbers);
}






var chapter_number = get_chapter();

