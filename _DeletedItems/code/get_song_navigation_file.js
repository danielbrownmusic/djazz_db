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
	return navigation_dict;

}
