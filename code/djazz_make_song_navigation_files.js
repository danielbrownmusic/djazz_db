autowatch = 1;

setinletassist(0, "");
setoutletassist(0, "");


/* function clear()
{
	song_dict.clear();
} */

function make_song_files(file_path)
{
	post("MAKING SONG FILES!!!!");

	var c = this.patcher.newdefault(0, 0, "coll", "songs");
	var d = new Dict();

	c.message("read", file_path);
	d.pull_from_coll("songs");
	this.patcher.remove(c);

	var f = File(file_path).foldername;

	d.getkeys().forEach(
		function(name)
		{
			var song_folder_path = f + "/" + name;
			var song_data_array = [name].concat(d.get(name));
			make_song_navigation_file(song_folder_path, song_data_array);
		}
	);
}


function make_song_navigation_file(folder_path, song_data_array)
{
	var song_name = song_data_array[0];
    post(song_name, "\n");
	var file_path = folder_path + "/" + song_name + ".json";
	var song_dict = make_song_dict_from_data_array(song_data_array);	
	song_dict.export_json(file_path);
}


function make_song_dict_from_data_array(song_data)
{
	var song_name 				= song_data[0]; 
	var beat_count 				= song_data[1];
	var tempo 					= song_data[2];
	var beats_per_measure 		= song_data[3];
	var chapter_start_measures 	= song_data.slice(4);

	chapter_start_measures = chapter_start_measures	.toString()
													.split(" ")
													.filter(function(e) { return !isNaN(e); })
													.slice(1)
													.map(function(e) { return Number(e) - 1; });
	chapter_start_measures.push(beat_count / beats_per_measure);
	post(chapter_start_measures, "\n");
	var chapter_start_beats = chapter_start_measures.map(function(x) { return x * beats_per_measure; })

	var metadata_dict 	= make_song_metadata_dict	(song_name, tempo);
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


function make_song_metadata_dict(song_name, tempo)
{
	var d = new Dict("metadata");
	d.set("name", song_name);
	d.set("tempo", tempo);
	return song_dict;
}


// ------------------------------------------------------------------------------------------------------


function make_song_chapters_dict(chapter_start_measures, chapter_start_beats)
{	
	post("in make_chapter_dicts \n");
	post(chapter_start_measures, "\n");
	var chapters_dict = new Dict("chapters");
	for (var i = 0; i < chapter_start_measures.length - 1; i++)
	{
		chapters_dict.set(i, make_chapter_dict(i, chapter_start_measures, chapter_start_beats));
	}	
	return chapters_dict;		
}
make_song_chapters_dict.local = 1;


function make_chapter_dict(i, chapter_start_measures, chapter_start_beats)
{
	post("  in make_chapter_dict, i = ", i, "\n");
	post(chapter_start_measures, "\n");
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
	var measures_dict = new Dict("measures");
	post("chapter start meeasures = ", chapter_start_measures,"\n" );
	var n_measures = chapter_start_measures.slice(-1);
	post("n meeasures = ", n_measures,"\n" );
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
	//post("in make_song_beats_dict \n");	
	var beats_dict = new Dict("beats")
	for (var b = 0; b < chapter_start_beats.slice(-1); b++)
	{
		beats_dict.set(b, make_beat_dict(b, beats_per_measure, chapter_start_measures, chapter_start_beats));
	}
	return beats_dict;		
}
make_song_beats_dict.local = 1;


function make_beat_dict(b, beats_per_measure, chapter_start_measures, chapter_start_beats)
{
	//post("  in make_beat_dict, b = ", b, "\n");	
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
	//post("in make_grid_dict \n");		
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
				//post(beat, i, j, k, "\n");
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







// ------------------------------------------------------------------------------------------------------


/* function parse_song_data_string(song_data_string)
{
	var delimiter 		= " ";
	var song_data 		= song_data_string.split(delimiter);

	var song_name 				= song_data[0];
	var beat_count 				= song_data[1];
	var tempo 					= song_data[2];
	var beats_per_measure 		= song_data[3];
	var chapter_start_measures 	= song_data.slice(3);

	return [song_name, beat_count, tempo, beats_per_measure, chapter_start_measures];

}
parse_song_data_string.local = 1; */





/* function compute_data_from_string(song_data_string)
{
	var song_data = parse_song_data_string(song_data_string);
	post(song_data_string);
	compute_data_from_list(song_data);
} */