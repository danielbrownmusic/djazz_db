


var i_current_beat 		= 0;
var i_current_chapter 	= 0;
var i_min_measure 		= 0;
var i_max_measure 		= 0;

var song_info = 

function update(beat)
{
	if ((beat < i_min_measure) || (i_max_measure <= beat))
	{
		i_current_chapter = get_chapter(beat);
	}
	
}


function get_chapter(beat, chapter_beat_list)
{
	for (i = 0; i < chapter_beat_list.length; i++)
	{
		if (beat < chapter_beat_list[i][1])
			return [i, chapter_beat_list[i]];
	}
}