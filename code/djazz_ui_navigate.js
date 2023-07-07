// djazz_make_chapter_grid.js


var min_measure_number = 0;
var max_measure_number = 0;
var beats_per_measure = 0;

var	chapter_tab = this.patcher.getnamed("chapter_tab");
chapter_tab.message("tabs", "no chapter loaded");


function make_chapter_grid()
{
	[min_measure_number, max_measure_number, beats_per_measure] = arguments;
	var measure_numbers = Array();
	for (var i = 0; i < max_measure_number - min_measure_number; i++) {
		measure_numbers.push(i);
	}

	chapter_tab.message("tabs", measure_numbers);

}


function activate_tab(beat_number)
{
	var tab_number = beat_number_to_tab_number(beat_number, beats_per_measure);
	chapter_tab.message("set", tab_number);
}


function on_tab_clicked(tab_number)
{
	outlet(0, tab_number_to_beat_number(tab_number));
}


function beat_number_to_tab_number(beat_number)
{
	var measure_number = Math.floor(beat_number / beats_per_measure);
	var tab_number = measure_number - min_measure_number;
	return tab_number;
}


function tab_number_to_beat_number(tab_number)
{
	var measure_number = tab_number + min_measure_number;
	var beat_number = measure_number * beats_per_measure;
	return beat_number;
}

