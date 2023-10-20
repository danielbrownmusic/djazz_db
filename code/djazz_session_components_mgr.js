/*
Basic Javascript programming: Global Methods
notifyclients
Notifies any clients (such as the pattr family of objects), that the object’s current value has
changed. Clients can then take appropriate action such as sending a js instance the message 
getvalueof to invoke the getvalueof() method (if defined – see the special function names 
listed above for more information). The notifyclients() method is useful for objects that 
define setvalueof() and getvalueof() functions for pattr compatibility.


Basic Techniques
getvalueof
Defining a function called getvalueof() permits pattr and related objects to attach to and 
query an object's current value. The value of an object returned can be a Number, a String, 
a Dict, or an Array of numbers and/or Strings. 
Note: Dict objects are not supported in an Array return value.

Example:

  var myvalue = 0.25;
  function getvalueof()
  {
    return myvalue;
  }
	
setvalueof
Defining a function called setvalueof() permits pattr and related objects to attach to and set 
an object's current value, passed as argument(s) to the function. Values passed will be of type
 Number, String or Dict. For a value that consists of more than one Number or String, the 
 setvalueof() method will receive multiple arguments. The jsthis object’s arrayfromargs() method
  is useful to handle values that can contain a variable number of elements. A Dict value will 
be passed as a single argument.

Example:
 
  function setvalueof(v)
  {
    myvalue = v;
  }


MaxobjListener Methods
getvalue
Report the value of the Maxobj or its specified attribute. List values are reported in a JS Array object.

setvalue
Set the value of the Maxobj or its specified attribute.

setvalue_silent
Set the value of the Maxobj or its specified attribute, without executing the callback function (also see the silent property).

MaxobjListenerData
The MaxobjListenerData object is the argument to your MaxobjListener's function

MaxobjListenerData Properties
listener [MaxobjListener]
g/s(get)
The MaxobjListener which called the function.

maxobject [Maxobj]
g/s(get)
The Maxobj being observed.

attrname [string]
g/s(get)
If the MaxobjListener is observing an attribute, the attribute's name, otherwise undefined.

value [value or Array]
g/s(get)
The current value of the observed object or attribute. List values are represented by a JS Array object.


*/


autowatch = 1;

outlets = 2;

var dutils = require("dictionary_array_utilities");

var MIDI_PLAYERS    = "midi_players";
var NAVIGATE        = "navigate";
var GENERATE        = "generate";
var MIDI_OUT        = "midi_out";

var DICTIONARY      = "dictionary";

var CMD_LOAD            = "load_from_dict";

var DATABASE_NAME_PREFIX = "database";

var SEPARATOR_DICT = "::";
var SEPARATOR_ADDR = " ";
var SEPARATOR_DATABASE_NAME = "_";



function load_from_file()
{
    var components_file_full_path    = arguments[0];
    var d                            = new Dict();
    d.import_json(components_file_full_path);

/*     d.getkeys().forEach(
        function (key)
        {
            var obj = this.patcher.getnamed("key");
            var obj_file_mgr = obj.subpatcher().getnamed("file_mgr");
            obj_file_mgr.message("load");
        }, 
        this
    ); */

    var file_types = [NAVIGATE, GENERATE, MIDI_OUT];

    for (var i = 0; i < file_types.length; i++)
    {
        var file_type       = file_types[i];
        var a               = [MIDI_PLAYERS, name, file_type];
        var key             = a.join(SEPARATOR_DICT);
        var addr            = a.join(SEPARATOR_ADDR);
        var database_name   = DATABASE_NAME_PREFIX + SEPARATOR_DATABASE_NAME + a.join(SEPARATOR_DATABASE_NAME);
        var file_path       = d.get(key);

        var msg = [addr, CMD_LOAD, database_name, file_path];
    }
}


function load_from_dict()
{
    if (arguments[0] !== "dictionary")
    {
        post ("error loading.\n");
        return;
    }

    var dict_name   = arguments[1];
    var d           = new Dict(dict_name);

    d.getkeys().forEach(
        function (key)
        {
            var obj     = this.patcher.getnamed("key");
            var mgr     = obj.subpatcher().getnamed("component_mgr");
            var msg     = "load_from_dict";
            var args    = d.get(key);
            mgr.message(msg, args);
        }, 
        this
    );
}

/* 
    for (var i = 0; i < dutils.get_array_length(d, MIDI_PLAYERS); i++)
    {
        make_midi_player_(i);
        var addr = "midi_players::" + "midi_player_" + i + "::" + "component_mgr"
        var addr    = "midi_player_" + i;
        var msg     = [addr, "load_from_dict", dutils.get_at(d, MIDI_PLAYERS, i)];
        outlet(0, msg);
    }

} */

//------------------------------------------------------

function make_midi_player_(i)
{
    var a = 0;  var b = 0;
    var c = 0;  var d = 0;

    var x = a * i + b;
    var y = c + i + d;

    var midi_player = this.patcher.newdefault(x, y, "djazz_midi_player", "midi_player_" + i);
    this.patcher.connect(this.box, 0, midi_player, 1);
}


function make_midi_player_view_(i)
{
    var a = 0;  var b = 0;
    var c = 0;  var d = 0;

    var x = a * i + b;
    var y = c + i + d;

    var midi_player = this.patcher.newdefault(x, y, "djazz_midi_player_view", "midi_player_view_" + i);
    this.patcher.connect(this.box, 0, midi_player, 1);
}

make_midi_player_.local = 1;
