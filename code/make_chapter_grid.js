// djazz_make_chapter_grid.js

inlets = 1;
outlets = 1;


var min_measure_number = 0;
var max_measure_number = 0;

var chapter_tab;

// Maxobj variables for scripting
var controlin = new Array(128);
var thesliders = new Array(128);
var thefunnel;

// methods start here
function make_chapter_grid()
{
	[min_measure_number, max_measure_number] = arguments;

	var total_measures = max_measure_number - min_measure_number;
	var measure_numbers = Array();
	for (var i = 0; i < total_measures; i++) {
		measure_numbers.push(i);
	}

	if (chapter_tab) this.patcher.remove(chapter_tab);
	chapter_tab = this.patcher.newdefault(0, 0, "tab");
	chapter_tab.message("tabs", measure_numbers);
}