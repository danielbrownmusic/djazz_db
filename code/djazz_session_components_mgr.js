var dutils = require("db_dictionary_array_utils");

autowatch = 1;

outlets = 3;

var SESSION_COMPONENTS_DICT_NAME    = "SESSION_COMPONENTS";
var SESSION_COMPONENTS_DICT         = null;

var NAVIGATION_DICT_NAME            = "NAVIGATION";
var NAVIGATION_DICT                 = null;

var x = 66;
var y = 528;
var h = 88;


function load_session_from_file(components_file_full_path)
{
    SESSION_COMPONENTS_DICT = new Dict(SESSION_COMPONENTS_DICT_NAME);
    SESSION_COMPONENTS_DICT.import_json(components_file_full_path);

    make_components_();
    outlet (0, "load_player_from_dict", SESSION_COMPONENTS_DICT_NAME);
    outlet (1, SESSION_COMPONENTS_DICT_NAME);
    outlet (2, "dictionary", SESSION_COMPONENTS_DICT_NAME);

    load_navigation_file(SESSION_COMPONENTS_DICT.get("navigation"));
}


function clear()
{

    if (SESSION_COMPONENTS_DICT)
    {
        remove_components_();
        SESSION_COMPONENTS_DICT.clear();
        outlet (2, "dictionary", SESSION_COMPONENTS_DICT_NAME);
        outlet (1, "set");
    
        SESSION_COMPONENTS_DICT.freepeer();
        SESSION_COMPONENTS_DICT = null;
    }
}


function load_navigation_file(navigation_file_full_path)
{
    NAVIGATION_DICT = new Dict(NAVIGATION_DICT_NAME);
    NAVIGATION_DICT.import_json(navigation_file_full_path);
    send_out_navigation_dict_();
}


function get_loaders_()
{
    var keys    = dutils.get_dict_key_array(SESSION_COMPONENTS_DICT.get("components"));
    return keys.map(get_loader_, this);

}
get_loaders_.local = 1;


function get_loader_(obj_varname)
{
    post (obj_varname, "is the damn varname.\n");
    return this.patcher.getnamed(obj_varname).subpatcher().getnamed("loader");
}
get_loaders_.local = 1;


function send_out_navigation_dict_()
{
    get_loaders_().forEach(
        function (ldr)
        {
            loader.message("load_navigation_dict", NAVIGATION_DICT_NAME);
        },
        this
    );
}
send_out_navigation_dict_.local = 1;

// ----------------------------------------------------------------------------------

function make_components_()
{
    var keys = dutils.get_dict_key_array(SESSION_COMPONENTS_DICT.get("components"));
    for (var i = 0; i < keys.length; i++)
    {
        var key = keys[i];        
        make_component_(i, key);
    }
}
make_components_.local = 1;


function remove_components_()
{
    var keys = dutils.get_dict_key_array(SESSION_COMPONENTS_DICT);
    for (var i = 0; i < keys.length; i++)
    {
        var key = keys[i];
        remove_component_(SESSION_COMPONENTS_DICT.get(key));
    }
}
remove_components_.local = 1;


function make_component_(i, key)
{
        var x_view      = x;
        var y_view      = y + 2 * h * i;
        var x_player    = x_view;
        var y_player    = y_view + h; 

        var top_patcher         = this.patcher.box.patcher;

        var d = SESSION_COMPONENTS_DICT.get("components").get(key);
        var player_name = key;
        var view_name   = key + "_view";

        var midi_player_view    = top_patcher.newdefault(   x_view,     y_view,     "djazz_midi_player_view",   player_name);
        var midi_player         = top_patcher.newdefault(   x_player,   y_player,   "djazz_midi_player",        player_name);
        midi_player.varname        = player_name;
        midi_player_view.varname   = view_name
        
        top_patcher.connect(    midi_player_view,   0,  midi_player,        0);
        top_patcher.connect(    midi_player,        1,  midi_player_view,   0);
        top_patcher.connect(    midi_player,        2,  midi_player_view,   1);

        midi_player.subpatcher().getnamed("loader").message("load_player_from_dict", key);
}
make_component_.local = 1;


function remove_component_(d)
{
    var [player_name, view_name]    = get_varnames_(d);
    var top_patcher                 = this.patcher.box.patcher;

    top_patcher.remove(top_patcher.getnamed(player_name));
    top_patcher.remove(top_patcher.getnamed(view_name));
}
remove_component_.local = 1;


function get_varnames_(d)
{
    var name        = d.get("name");
    var player_name = name;
    var view_name   = name + "_view";

    return [player_name, view_name];
}
get_varnames_.locval = 1;

/* function dispatch_(addr, msg, args)
{
    var slot   = effect_slots_[i];
    var addr    = [addr, "loader"].join("::");    

    outlet (0, addr, msg, args);
}
dispatch_.local = 1;
 */



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



/*


MAXOBJLISTENERS HANG AROUND UNTIL THE GC PICKS THEM UP. IF THEY ARE POPPED FROM AN ARRAY, THEY BECOME UNDETECTABLE, BUT STILL OPERATE FOR A LITTLE WHILE.


JS require: if you change something in a required file, you must re-require it in any files that use it. For autowatched files, make a change in the require declaration, fix the change manually, then save the file. 



Sending arrays in js:

to objects and objectlisteners, as well as just object messages, you can use arrayfromargs(arguments) to get variable numbers of passed arguments.
BUT
if you are expressly passing an array, it will be passed as a bunch of arguments that you must use the function arrayfrom arguments to receive.

Otherwise, the argument received will just be the first element of the array.

example: function f sends [1, 2, 3, 4] to function g
function g receives 1, 2, 3, 4.
if function g is defined as function g(arg), expecting arg to be an array, it will not work. 
In this case, arg = 1.
arrayfromargs(arg) = [1, 2, 3, 4]

Ok fine. BUT:

Empty arrays are NOT received!

If f sends [] to g, g will NOT be called. 

You could use a placekeeper like Max uses for arrays in dicts, like sending "*".
Then you have to check if arg = "*", and if it does, convert that to []. Otherwise, take arrayfromargs.
And be sure not to use arrayfromargs BEFORE checking if it's a placeholder! Because the, of course, you'll be looking at ["*"].
*/




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


/* 
function load_from_file()
{
    var components_file_full_path    = arguments[0];
    var d                            = new Dict();
    d.import_json(components_file_full_path);

       d.getkeys().forEach(
        function (key)
        {
            var obj = this.patcher.getnamed("key");
            var obj_file_mgr = obj.subpatcher().getnamed("file_mgr");
            obj_file_mgr.message("load");
        }, 
        this
    );

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
 */



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
/* 
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
 */