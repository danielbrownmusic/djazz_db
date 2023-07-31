setinletassist(0, "the full path of the song folder");
setoutletassist(0, "the navigation dictionary");


function load_song_form_file(song_folder_full_path)
{
	outlet(0, make_navigation_dict(song_folder_full_path));
}


make_navigation_dict.local = 1;
function make_navigation_dict(song_folder_full_path)
{
	var song_folder = Folder(song_folder_full_path);
	song_folder.typelist = [ "JSON" ];
	
	var navigation_file = song_folder.next();
	var navigation_dict = new Dict();
	navigation_dict.read(navigation_file);

	const beat_count 				= navigation_dict["beat_count"];
	const tempo 					= navigation_dict["tempo"];
	const beats_per_measure 		= navigation_dict["beats_per_measure"];
	const chapter_start_measures 	= navigation_dict("chapter_start_measures");

	chapter_start_measures = chapter_start_measures.map( function(x) { return x - 1 } );
	chapter_start_measures.append(beat_count / beats_per_measure);

	var chapter_start_beats = chapter_start_measures.map( function(x) { return x * beats_per_measure } );
	chapter_start_beats.append(beat_count + beats_per_measure);
																								
	var chapters_dict 	= make_chapters_dict(chapter_start_measures, chapter_start_beats);
	var beats_dict 		= make_beats_dict(chapter_start_beats, beats_per_measure);
	var song_dict 		= new Dict("song");
	song_dict.set("beats", beats_dict);
	song_dict.set("chapters", chapters_dict);

	return navigation_dict;
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