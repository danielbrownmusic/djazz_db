outlets = jsarguments.length - 1;

setinletassist(0, "a folder name");
for (var i = 0; i < outlets; i++)
{
	setoutletassist(i, "populates a umenu with the subfolder named ", jsarguments[i]);
}

function set_umenus(folder_full_path)
{
	f = Folder(folder_full_path);
	for (var i = 0; i < outlets; i++)
{
	outlet(0, 'prefix', folder_full_path + '/new');
	outlet(0, 'populate');
}


	outlet(1, 'prefix', folder_full_path + '/grid');
	outlet(1, 'populate');
}