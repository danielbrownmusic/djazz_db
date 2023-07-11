setinletassist(0, "folder name");
setoutletassist(0, "Folder object");


function open_folder(folder_full_path)
{
	outlet(0, Folder(folder_full_path));	
}