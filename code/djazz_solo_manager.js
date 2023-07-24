

//this.name = name;
solo_objects 	= []; //js objects
solo_listeners = [];
solo_states 	= [];	

function postval(name, val)
{
	post(name + ": " + val + '\n');
}

function add(solo_obj)
{
	var listener = new MaxobjListener(solo_obj, "solo", set_solo_obj_send_attr);
	solo_objects.push(solo_obj);
	solo_listeners.push(listener);
	solo_states.push(0);
};

function set_solo_obj_send_attr(data)
{
	var i = data.maxobject.getattr("index");
	postval("index", i);
	var solo = data.maxobject.getattr("solo");
	postval("solo", solo);
	solo_states[i] = solo;
	var any_soloed = solo_states.some(function(e) { e !== 0; }) ? 1 : 0;
	postval("any_soloed", any_soloed);
	solo_objects.forEach
	( 
		function(e) 
		{ 
			var send = (e.getattr("solo") === any_soloed);
			e.setattr("send", send);
			post("    index: " + e.getattr("index") + " solo: " + e.getattr("solo") + "  send: " +  e.getattr("send"));
		}
	);
}
