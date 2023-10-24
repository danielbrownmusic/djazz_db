autowatch = 1;

// MAX MSP DICTIONARY FUNCTIONS
// Because combining dictionaries with arrays is extremely unintuitive and undocumented.

/*

Empty arrays are stored as empty strings. So an empty array has a size of 1 (ONE); i.e., d.getsize("key") = 1 !!!!!!!!
Arrays with one element are stored as just that element. So d.get("key")[0] will return undefined if it's a number, and a character if it's a string, because you're subscripting an element.
BUT d.get("key" + "[" + 0 + "]") WILL return the element. They put in a kluj!
d.getsize("key") = 1;

Arrays with more than one element operate like normal arrays.
For an integer n > 0, d.get("key" + "[" + n + "]") and d.get("key")[n] will return the same thing: the desired element.
d.getsize("key") = actual size of the array;


IF YOU INITIALIZE A VALUE OF A KEY WITH AN ACTUAL EMPTY ARRAY ([]), IT WILL TREAT THIS AS 
THE FIRST ELEMENT IN ITS ARRAY WHEN YOU CALL APPEND!
d.set("a", []);
d.append("a", 1, 2, 3);

gives you:

[], 1, 2, 3
size = 4
WTF


BUT............
An empty subkey is stored as the string "*". So an empty subkey also has a size of 1 (ONE); i.e., d.getsize("key::subkey") = 1.


d = new Dict()
d.set("foo");

post ("foo =   ", d.get("foo"),"\n");
post ("foo[0] =", d.get("foo")[0],"\n");
post ("foo[0] =", d.get("foo[" + 0 + "]"), "\n");
post ("size = ", d.getsize("foo"), "\n");

    js: foo =                        // the empty string ""
    js: foo[0] =  <undefined>         
    js: foo[0] =                     // the empty string ""
    js: size = 1                     // !!!!!!!! because the empty string is there. Wtf.


d.setparse("foo", "bar:");
post ("size =    ", d.getsize("foo::bar"), "\n");
post ("foo::bar =   ", d.get("foo::bar"),"\n");
post ("foo::bar[0] =", d.get("foo::bar")[0],"\n");
post ("foo::bar[0] =", d.get("foo::bar[" + 0 + "]"), "\n");

    js: foo::bar =     *            // a placeholder "*". Not the empty string.
    js: foo::bar[0] =  *   
    js: foo::bar[0] =  *   
    js: size =      1   


d.append("foo::bar");
post ("size =    ", d.getsize("foo::bar"), "\n");
post ("foo::bar =   ", d.get("foo::bar"),"\n");
post ("foo::bar[0] =", d.get("foo::bar")[0],"\n");
post ("foo::bar[0] =", d.get("foo::bar[" + 0 + "]"), "\n");

    js: foo::bar =     *            // a placeholder "*". Not the empty string.
    js: foo::bar[0] =  *   
    js: foo::bar[0] =  *   
    js: size =      1   




*/


exports.get_array_of_keys = function(d)
{
    var entry = d.getkeys();

    if (!entry)
    {
        post ("WARNING: get_array_of_keys(", d.name, ") returned NULL.\n")
        return null;
    }

    else if (entry === "" || entry === "*")
        return [];

    else if (Array.isArray(entry) === false)
        return [entry];

    return entry;
}


exports.make_key = function () 
{
    return arguments.join("");
}


exports.get_array = function (d, key)
{
    var entry = d.get(key);

    if (!entry)
    {
        post ("WARNING: get_array(", d.name, ", ", key, ") returned NULL.\n")
        return null;
    }

    else if (entry === "" || entry === "*")
        return [];

    else if (d.getsize(key) === 1)
        return [entry];

    return entry;
}


exports.set_array = function (d, key, a)
{
    if (a.length === 0)
    {
        d.set(key);

    }
    else if (a.length === 1)
    {
        d.set(key, a[0]);
    }
    else
    {
        d.set(key, a);
    }
    return true;
}



exports.get_at = function (d, key, index)
{
    var is_in = d.contains(key);

    if (!is_in)
    {
        post ("WARNING: get_subscript(", d.name, ", ", key, ", ", index, ") called on an array which is null. Null returned.\n")
        return null;
    }

    return get_array(d, key)[index];        
}


exports.set_at = function (d, key, index, value)
{
    var is_in = d.contains(key);

    if (!is_in)
    {
        post ("WARNING: set_subscript(", d.name, ", ", key, ", ", index, ") called on a nonexistent key. Nothing done. Null returned.\n")
        return null;
    }

    var indexed_key = key + "[" + index.toString() + "]";
    d.set(indexed_key, value)
    return true;
/*     var a = get_array(d, key);
    a[index] = value;
    return set_array(d, key, a);
 */}


exports.clear_entry = function (d, key)
{
    d.set(key);
}


exports.remove_from_array = function (d, key, index)
{
    var is_in = d.contains(key);

    if (!is_in)
    {
        post ("WARNING: remove_from_array(", d.name, ", ", key, ", ", index, ") called on a nonexistent key. Nothing done. Null returned.\n")
        return null;
    }

    var a = get_array(d, key);
    a.splice(index, 1);
    return set_array(d, key, a);
}


exports.trim_array = function (d, key, value)
{
    var is_in = d.contains(key);

    if (!is_in)
    {
        post ("WARNING: trim_array(", d.name, ", ", key, ", ", value, ") called on a nonexistent key. Nothing done. Null returned.\n")
        return null;
    }

    var a = get_array(d, key);
    for (var i = a.length - 1; a >= 0; a--)
    {
        if (a[i] !== value)
            break;
        a.pop();
    }
    return set_array(d, key, a);
}


exports.get_array_length = function (d, key)
{
    var entry = d.get(key);

    if (!entry)
    {
        post ("WARNING: get_array_length(", d.name, ", ", key, ") returned NULL.\n")
        return null;
    }

    else if (entry === "" || entry === "*")
        return 0;

    else
        return d.getsize(key);
}



exports.is_array_empty = function (d, key)
{
    var is_in = d.contains(key);

    if (!is_in)
    {
        post ("WARNING: get_arrayis_array_empty_length(", d.name, ", ", key, ") called on a nonexistent key. Null returned.\n")
        return null;
    }

    return get_array_length(d, key) === 0;
}



/* function remove_last(d, key)
{
    var is_in = d.contains(key);

    if (!is_in)
    {
        post ("WARNING: remove_last(", d.name, ", ", key, ") called on a nonexistent key. Nothing done. Null returned.\n")
        return null;
    }

    return remove_from_array(d, key, index)
} */








/*     d.setparse("stuff", "things:");
    //d.append("stuff");
    post ("size =    ", d.getsize("stuff::things"), "\n");
    post ("stuff =   ", d.get("stuff::things"), "\n");
    post ("stuff[0] =",d.get("stuff::things[" + 0 + "]"), "\n");





   
     */
/* 
    post ("setting", 1, "\n");
    d.set("stuff::things[" + 0 + "]", 1);
    post ("size =    ", d.getsize("stuff::things"), "\n");
    post ("stuff =   ", d.get("stuff::things"), "\n");
    post ("stuff[0] =",d.get("stuff::things[" + 0 + "]"), "\n");

    post ("appending", 2, "\n");
    d.append("stuff::things", 2);
    post ("size =    ", d.getsize("stuff::things"), "\n");
    post ("stuff =   ", d.get("stuff::things"), "\n");
    post ("stuff[1] =", d.get("stuff::things[" + 1 + "]"), "\n");
    post ("stuff[1] =", d.get("stuff::things")[1], "\n");    

    post ("setting", 3, "\n");
    d.set("stuff::things[" + 0 + "]", 3);
    post ("size =    ", d.getsize("stuff::things"), "\n");
    post ("stuff =   ", d.get("stuff::things"), "\n");
    post ("stuff[0] =",d.get("stuff::things[" + 0 + "]"), "\n");

    var a = arrayfromargs(d.get("stuff::things"));
    for (var i = 0; i < d.get("stuff::things").length; i++)
    {
        post (d.get("stuff::things")[i]);
        post ("\n");
    }

    var a = arrayfromargs(d.get("stuff::things"));
    for (var i = 0; i < a.length; i++)
    {
        post (a[i]);
        post ("\n");
    } */
