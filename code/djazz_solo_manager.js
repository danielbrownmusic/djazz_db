autowatch = 1;

var n 		= jsarguments[1];
inlets      = (n && !isNaN(n) && (n > 0)) ? n : 1;
outlets     = inlets + 1;
var any_solos   = 0;
var solos       = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);

function msg_int(s)
{
    solos[inlet] = s;
	any_solos = solos.some(function(e) { return e !== 0; }) ? 1 : 0;
	for (var i = 0; i < n; i++)
	{
		outlet(i, solos[i] === any_solos);
	}
	outlet(n, any_solos);
}
