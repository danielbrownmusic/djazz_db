setinletassist(0, "a song folder name");
setoutletassist(0, "the full path of the song's form file");

function get_form_file(folder_full_path)
{
	f = new Folder(folder_full_path);	
	while (!f.end) {
		{
			if (f.extension == '.djazzform')
			{
				outlet(0, folder_full_path + '/' + f.filename + f.extension);
				return;
			}
		}
    	f.next();
	}	
}