function getit()
{
	//messnamed("testo", "setprop", "x 5");
	testo = this.patcher.getnamed('testo');
	//testo.setprop("x", 5);
	a = testo.getattr("x");
	outlet(0, a[2]);
}