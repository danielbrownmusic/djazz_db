autowatch = 1;

setinletassist(0, "a song folder name");
setoutletassist(0, "the full path of the song's json file");

function anything()
{
	var folder_full_path = messagename;
	f = new Folder(folder_full_path);	
	while (!f.end) {
		{
			post(f.filename);
			if (f.extension == '.djazz')
			{
				outlet(0, folder_full_path + '/' + f.filename);
				return;
			}
		}
    	f.next();
	}
}