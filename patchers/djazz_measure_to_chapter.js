inlets = 2
outlets = 2

setinletassist(0, "(int) measure number")
setinletassist(1, "list of chapter start measures (ints)")
setoutletassist(0, "(int) chapter number")
setoutletassist(01, "(int) measure position in chapter")


var chapter_start_measures = [];

function list()
{
	chapter_start_measures = arguments;
}

function msg_int(i)
{
	for (measure in chapter_start_measures)
	{
		if (i >= measure)
			outlet(0, measure);
			outlet(1, Math.floor(i / measure));
		  	return;
	}
}



