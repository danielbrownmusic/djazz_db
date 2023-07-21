function anything()
{
	var object = this.patcher.getnamed(messagename);
	var theAttr = object.getattr("bgfillcolor");
	//post(theAttr.stringify());
	
	var keys = theAttr.getkeys();
	
	for (i=0; i < keys.length; i++)
	{
		outlet(0, keys[i], theAttr.get(keys[i]));
	}
	
		
}