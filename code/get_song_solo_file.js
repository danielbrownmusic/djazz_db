setinletassist(0, "the full path of the song folder");
setoutletassist(0, "the navigation dictionary");


function anything(song_folder_full_path)
{
	outlet(0, make_navigation_dict(song_folder_full_path));
}


make_navigation_dict.local = 1;
function make_navigation_dict((song_folder_full_path)
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

	chapter_start_measures = chapter_start_measures.map(x => x - 1);
	chapter_start_measures.append(beat_count / beats_per_measure);

	var chapter_start_beats = chapter_start_measures.map(x => x * beats_per_measure);
	chapter_start_beats.append(beat_count + beats_per_measure);
																								
	var chapters_dict 	= make_chapters_dict(chapter_start_measures, chapter_start_beats);
	var beats_dict 		= make_beats_dict(chapter_start_beats, beats_per_measure);
	var song_dict 		= new Dict("song");
	song_dict.set("beats", beats_dict);
	song_dict.set("chapters", chapters_dict);

	return navigation_dict;
}