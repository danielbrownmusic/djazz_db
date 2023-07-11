setinletassist(0, "a folder name");
setoutletassist(0, "the subfolder (Folder object) with the given name");


function anything()
{
	var folder_name = arguments[0];
		post(folder_name);
	f = Folder(folder_name);
	if(jsarguments.length>1) // argument 0 is the name of the js file
	{

   		var subfolder_name = jsarguments[1];
		outlet(0, get_subfolder(f, subfolder_name));
	}	
}


get_subfolder.local = 1;
function get_subfolder(f, subfolder_name)
{
	while(!f.end)
    {
		post(f.filename);
        if ((f.filetype == "fold") && (f.filename == subfolder_name))
        {
            return Folder(f.filename);
        }
        f.next();
    }
}