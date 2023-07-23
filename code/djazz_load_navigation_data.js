
setinletassist(0, "(symbol) the song data string");
setoutletassist(0, "dict) the song data dictionary");

function anything(song_data_string)
{
	outlet(0, load_navigation_data(song_data_string));
}


function load_navigation_data(song_data_string)
{
	const delimiter 		= " ";
	const song_data 		= song_data_string.split(delimiter);

	const song_name 				= song_data[0];
	const beat_count 				= song_data[1];
	const tempo 					= song_data[2];
	const beats_per_measure 		= song_data[3];
	const chapter_start_measures 	= song_data.slice(3);

	chapter_start_measures = chapter_start_measures.map(x => x - 1);
	chapter_start_measures.append(beat_count / beats_per_measure);

	var chapter_start_beats = chapter_start_measures.map(x => x * beats_per_measure);
	chapter_start_beats.append(beat_count + beats_per_measure);
																								
	var chapters_dict 	= make_chapters_dict(chapter_start_measures, chapter_start_beats);
	var beats_dict 		= make_beats_dict(chapter_start_beats, beats_per_measure);
	var song_dict 		= new Dict("song");
	song_dict.set("beats", beats_dict);
	song_dict.set("chapters", chapters_dict);

	return song_dict;
}


make_chapters_dict.local = 1;

function make_chapters_dict(chapter_start_measures, chapter_start_beats)
{
	
	var chapters_dict = new Dict("chapters")
	for (i = 0; i < chapter_start_measures.len() - 1; i++)
	{
		var chapter_dict = new Dict();	
		chapter_dict.set(	"number", 		i								);
		chapter_dict.set(	"min_measure", 	chapter_start_measures[i]		);
		chapter_dict.set(	"max_measure", 	chapter_start_measures[i + 1]	);
		chapter_dict.set(	"min_beat", 	chapter_start_beats[i]			);
		chapter_dict.set(	"max_beat", 	chapter_start_beats[i + 1]		);
	}
	return chapters_dict;		
}


make_beats_dict.local = 1;
function make_beats_dict(chapter_start_beats, beats_per_measure, n_beats)
{
	var beats_dict = new Dict("beats")
	for (i = 0; i < chapter_start_beats.slice(-1); i++)
	{
		var chapter_dict = new Dict();	
		chapter_dict.set(	"number", 		i																		);
		chapter_dict.set(	"chapter", 		get_chapter(beat, chapter_start_beats)									);
		chapter_dict.set(	"measure", 		get_measure(beat, chapter, chapter_start_measures, beats_per_measure)	);
		chapter_dict.set(	"position", 	get_position(beat, beats_per_measure)									);
	}
	return beats_dict;		
}


get_chapter.local = 1;
function get_chapter(beat, chapter_start_beats)
{
	for (i = 0; i < chapter_start_beats.len(); i++)
	{
		if (beat > chapter_start_beats[i])
			return i;
	}
}


get_measure.local = 1;
function get_measure(beat, chapter, chapter_start_measures, beats_per_measure)
{
	return Math.floor(beat / beats_per_measure) - chapter_start_measures[measure];
}


get_position.local = 1;
function get_position(beat, beats_per_measure)
{
	return beat % beats_per_measure;
}