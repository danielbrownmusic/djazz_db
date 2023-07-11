outlets = 2;

setinletassist(0, "a songfolder name");
setoutletassist(0, "messages to fill a umenu from the 'new' folder");
setoutletassist(1, "messages to fill a umenu from the 'grid' folder");

function set_umenus(folder_full_path)
{
	f = Folder(folder_full_path);
	outlet(0, 'prefix', folder_full_path + '/new');
	outlet(0, 'populate');

	outlet(1, 'prefix', folder_full_path + '/grid');
	outlet(1, 'populate');
}