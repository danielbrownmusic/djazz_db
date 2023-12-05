autowatch = 1;


function make_song_files(songs_text_file_path)
{
	var f = new File(songs_text_file_path);
	while (f.position < f.eof)
	{
		var text_line 			= f.readline();
		var song_data 			= get_song_data_from_text(text_line);
		var song_dict 			= make_song_dict_from_data_array(song_data);

		var song_name 			= song_data[0];
		var song_folder_path 	= f.foldername + "/" + song_name + "/";
		var song_file_name 		= song_name + ".json";
		var song_file_path 		= song_folder_path + song_file_name;

		post(song_name,"\n");
		post(song_data,"\n")
		post(song_file_path,"\n");

		song_dict.export_json(song_file_path);
		//post("exported \n");
		song_dict.freepeer();
	}
}


 function get_song_data_from_text(text_line)
 {
	var s 						= text_line.split(" ");
	var song_name 				= format_song_name(s[0]);
	//post(song_name, "\n");
	var n_beats 				= +s[1];
	var tempo 					= +s[2];
	var beats_per_measure 		= +s[3];
	var chapter_start_measures 	= format_chapter_start_measures(s.slice(4), n_beats, beats_per_measure);
	var chapter_start_beats 	= chapter_start_measures.map(function(x) { return x * beats_per_measure; }) 
	return [song_name, tempo, beats_per_measure, chapter_start_measures, chapter_start_beats];
 }


 function format_song_name(song_name)
 {
	return song_name.slice(0, song_name.length - 1);
 }


 function format_chapter_start_measures(arr, n_beats, time_signature)
 {
	post(arr,"\n");
	arr = arr.slice(1);
	post(arr,"\n");

	var e = arr[arr.length - 1];
	e = e.slice(0, e.length - 2);
	arr[arr.length - 1] = e;

	post(arr,"\n");
	arr = arr.map( function(e) { return +e - 1; } );
	post(arr,"\n");
	arr.push(n_beats / time_signature);
	post(arr,"\n");
	return arr;
}


function make_song_dict_from_data_array([song_name, tempo, beats_per_measure, chapter_start_measures, chapter_start_beats])
{
	var metadata_dict 	= make_song_metadata_dict	(song_name, tempo, beats_per_measure, chapter_start_measures);
	var chapters_dict 	= make_song_chapters_dict	(chapter_start_measures, chapter_start_beats);
	var measures_dict 	= make_song_measures_dict	(chapter_start_measures, beats_per_measure);
    var beats_dict 		= make_song_beats_dict		(beats_per_measure, chapter_start_measures, chapter_start_beats);
    var grid_dict 		= make_grid_dict			(chapter_start_measures, beats_per_measure);

	var song_dict 		= new Dict();

	song_dict.set( "metadata", 	metadata_dict);
	song_dict.set( "chapters",	chapters_dict);
	song_dict.set( "measures",	measures_dict);
	song_dict.set( "beats", 	beats_dict);
	song_dict.set( "grid", 		grid_dict);

	return song_dict;
}


// ------------------------------------------------------------------------------------------------------


function make_song_metadata_dict(song_name, tempo, beats_per_measure, chapter_start_measures)
{
	var d = new Dict();
	d.set("name", song_name);
	d.set("tempo", tempo);
	d.set("beats_per_measure", beats_per_measure);
	d.set("chapter_count", chapter_start_measures.length - 1);
	d.set("beat_count", beats_per_measure * chapter_start_measures[chapter_start_measures.length - 1]); 
	return d;
}


// ------------------------------------------------------------------------------------------------------


function make_song_chapters_dict(chapter_start_measures, chapter_start_beats)
{	
	//post("in make_chapter_dicts \n");
	//post(chapter_start_measures, "\n");
	var chapters_dict = new Dict();
	for (var i = 0; i < chapter_start_measures.length - 1; i++)
	{
		chapters_dict.set(i, make_chapter_dict(i, chapter_start_measures, chapter_start_beats));
	}	
	return chapters_dict;		
}
make_song_chapters_dict.local = 1;


function make_chapter_dict(i, chapter_start_measures, chapter_start_beats)
{
	//post("  in make_chapter_dict, i = ", i, "\n");
	//post(chapter_start_measures, "\n");
	var chapter_dict = new Dict();	
	chapter_dict.set( "min_measure", 	chapter_start_measures[i]		);
	chapter_dict.set( "max_measure", 	chapter_start_measures[i + 1]	);
	chapter_dict.set( "min_beat", 		chapter_start_beats[i]			);
	chapter_dict.set( "max_beat", 		chapter_start_beats[i + 1]		);
	return chapter_dict;
}
make_chapter_dict.local = 1;


// ------------------------------------------------------------------------------------------------------


function make_song_measures_dict(chapter_start_measures, beats_per_measure)
{
	var measures_dict = new Dict();
	//post("chapter start meeasures = ", chapter_start_measures,"\n" );
	var n_measures = chapter_start_measures.slice(-1);
	//post("n meeasures = ", n_measures,"\n" );
	for (var m = 0; m < n_measures; m++)
	{
		measures_dict.set(m, make_measure_dict(m, beats_per_measure));
	}
	return measures_dict;
}
make_song_measures_dict.local = 1;


function make_measure_dict(measure_number, beats_per_measure)
{
	var measure_dict = new Dict();
	measure_dict.set("min_beat", measure_number * beats_per_measure);
	measure_dict.set("length_in_beats", beats_per_measure);
	return measure_dict;
}
make_measure_dict.local = 1;

// ------------------------------------------------------------------------------------------------------


function make_song_beats_dict(beats_per_measure, chapter_start_measures, chapter_start_beats)
{
	var beats_dict = new Dict()
	for (var b = 0; b < chapter_start_beats.slice(-1); b++)
	{
		beats_dict.set(b, make_beat_dict(b, beats_per_measure, chapter_start_measures, chapter_start_beats));
	}
	return beats_dict;		
}
make_song_beats_dict.local = 1;


function make_beat_dict(b, beats_per_measure, chapter_start_measures, chapter_start_beats)
{
	var beat_dict = new Dict();
	var chapter = get_chapter(b, chapter_start_beats);

	beat_dict.set(	"chapter", 	chapter);
	beat_dict.set(	"measure", 	get_measure(b, chapter, chapter_start_measures, beats_per_measure));
	beat_dict.set(	"position", get_position(b, beats_per_measure));

	return beat_dict;
}
make_beat_dict.local = 1;


function get_chapter(beat, chapter_start_beats)
{
	for (var i = 1; i < chapter_start_beats.length; i++)
	{
		if (beat < chapter_start_beats[i])
			return i - 1;
	}
}
get_chapter.local = 1;


function get_measure(beat, chapter, chapter_start_measures, beats_per_measure)
{
	return Math.floor(beat / beats_per_measure) - chapter_start_measures[chapter];
}
get_measure.local = 1;


function get_position(beat, beats_per_measure)
{
	return beat % beats_per_measure;
}
get_position.local = 1;


// ------------------------------------------------------------------------------------------------------


function make_grid_dict(chapter_start_measures, beats_per_measure)
{
	var beat = 0;

	var chapters = new Dict();
	var n_chapters = chapter_start_measures.length - 1;

	for (var i = 0; i < n_chapters; i++)
	{
		var measures = new Dict();
		var n_measures = chapter_start_measures[i+1] - chapter_start_measures[i];

		for (var j = 0; j < n_measures; j++)
		{
			var positions = new Dict();
			var n_positions = beats_per_measure;
			for (var k = 0; k < n_positions; k++)
			{
				positions.set(k, beat);
				beat++;
			}
			measures.set(j, positions);
		}
		chapters.set(i, measures);
	}
	return chapters;
}
make_grid_dict.local = 1;