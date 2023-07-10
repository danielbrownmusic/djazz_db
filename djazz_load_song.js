

function load_song(song_folder_path)
{
	f = new Folder(song_folder_path);
	f.typelist = [ "JSON" ];	 
	
	while (!f.end) {
    	if (f.ext == ".djazz")
		{
    		post(f.filename);			
		}
    	f.next();
	}

	const song_info_string 	= get_song_info_string();
	const delimiter 		= " ";
	const song_info 		= song_info_string.split(delimiter);

	const song_name 				= get_song_name(song_info);
	const tempo 					= get_tempo(song_info);
	const n_beats					= get_number_of_beats(song_info);
	const n_measures				= get_number_of_measures(song_info);
	const n_chapters				= get_number_of_chapters(song_info);
	
	const beats_per_measure			= get_beats_per_measure(song_info);
	const chapter_start_measures 	= get_chapter_start_measures(song_info);
	const chapter_start_beats 		= chapter_start_beats(song_info);
		
	var chapters_dict 	= make_chapters_dict(chapter_start_measures, chapter_start_beats);
	var beats_dict 		= make_beats_dict(chapter_start_beats, beats_per_measure);
	var song_dict 		= new Dict("song");
	song_dict.set("beats", beats_dict);
	song_dict.set("chapters", chapters_dict);

	return song_dict;
}


make_chapters_dict.local = 1;

function make_chapters_dict(chapter_start_measures, chapter_start_beats, n_measures, n_beats)
{
	
	var chapters_dict = new Dict("chapters")
	for (i = 0; i < chapter_start_measures.len() - 1; i++)
	{
		var chapter_dict = new Dict();	
		chapter_dict.set("index", i);
		chapter_dict.set("min_measure", chapter_start_measures[i]);
		chapter_dict.set("max_measure", chapter_start_measures[i + 1]);
		chapter_dict.set("min_beat", chapter_start_beats[i]);
		chapter_dict.set("max_beat", chapter_start_beats[i + 1]);
	}
	return chapters_dict;		
}


make_beats_dict.local = 1;

function make_beats_dict(chapter_start_beats, beats_per_measurem, n_beats)
{
	var beats_dict = new Dict("beats")
	for (i = 0; i < chapter_start_measures.len() - 1; i++)
	{
		var chapter_dict = new Dict();	
		chapter_dict.set("index", i);
		chapter_dict.set("min_measure", chapter_start_measures[i]);
		chapter_dict.set("max_measure", chapter_start_measures[i + 1]);
		chapter_dict.set("min_beat", chapter_start_beats[i]);
		chapter_dict.set("max_beat", chapter_start_beats[i + 1]);
	}
	return chapters_dict;		
}