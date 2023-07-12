
var channel_count	= (jsarguments.length > 1) ? jsarguments[1] : 0;

var solo_bank 		= Array.apply(null, Array(channel_count)).map(Number.prototype.valueOf,0);
var mute_bank 		= Array.apply(null, Array(channel_count)).map(Number.prototype.valueOf,0);
var audible_bank 	= Array.apply(null, Array(channel_count)).map(Number.prototype.valueOf,0);

var any_soloed 		= false;


function bang()
{	
	outlet(channel_count, 'soloed:  ' + solo_bank.toString() + '  muted:   ' + mute_bank.toString() + '  audible: ' + audible_bank.toString());
}
	

function solo(channel, soloed)
{
	solo_bank[channel] = soloed;
	any_soloed = !soloed_bank.none();
	update_audible_bank();
}


function mute(channel, muted)
{
	mute_bank[channel] = muted;
	update_audible_bank();
}


update_audible_bank.local = 1;
function update_audible_bank()
{
	for (var i = 0; i < channel_count; i++)
	{
		soloed 	= solo_bank[i] == any_soloed;
		muted 	= mute_bank[i];
		audible = soloed & !muted;
		
		audible_bank[i] = audible;
	}
	
}
