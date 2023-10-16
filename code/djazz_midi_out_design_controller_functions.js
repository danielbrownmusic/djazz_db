/* empty arrays seem to be stored as NULL in dictionaries!!!!!
 arrays inside messages are sent as JS OBJECTS!!!!
 dict keys that are numbers have to be converted to strings to look up their values!!!!

 USING ARRAYS AS VALUES FOR KEYS:
 for a dictionary d, track index t, array index i, and value v:

    keys are strings, not numbers
    array indices are numbers, not strings.
   
 d.get(t.toString())[i] = v         WORKS
 d.set(t.toString())[i], v)         DOES NOT WORK. YOU MUST JUST REWRITE THE WHOLE FUCKING ARRAY.

An array of one element is stored as an element, not an array. 
So d.get(key)[0] returns a fucking error.
You just call d.get(key).

You can't fucking store an array of zero elements. Every key must have non-null value, I guess, and an empty list ([]) is null.

THIS IS WHY I WROTE THESE RIDICULOUS INEFFICIENT HELPER METHODS. 
THIS SHOULD BE EASY, NOT REALLY COMPLICATED.
THIS FILE SHOULD BE ABOUT TEN LINES OF CODE, NOT 200.
AND IT SHOULD BE FUCKING DOCUMENTED.
FIGURING THIS OUT HAS WASTED A FUCKING WEEK OF MY LIFE IN PARIS.
*/


autowatch = 1;
outlets = 2;

function load(dict_name)
{
    var d           = new Dict(dict_name);
    var min_track   = d.get("min_track");
    var max_track   = d.get("max_track");

    for (var i = min_track; i <= max_track; i++)
    {
        send_effect_array_(d, i);
    }
}


/* function remove_last()
{
    var dict_name   = arguments[0];
    var track_index = arguments[1];
  
    var d = new Dict(dict_name);    

    remove_last_(d, track_index);
    send_effect_array_(d, track_index);
} */


function append()
{
    var dict_name       = arguments[0];
    var track_index     = arguments[1];
    var effect_number   = arguments[2];

    var d = new Dict(dict_name);

    append_(d, track_index, effect_number);
    send_effect_array_(d, track_index);
}


function set()
{
    var dict_name       = arguments[0];
    var track_index     = arguments[1];
    var effect_index    = arguments[2];
    var effect_number   = arguments[3];

    var d = new Dict(dict_name);

    set_(d, track_index, effect_index, effect_number);
    send_effect_array_(d, track_index);   
}

// ----------------------------------------------------------------

/* function remove_last_(d, track_index)
{
    var effects = get_effect_array_(d, track_index);
    set_effect_array_(d, track_index, effects.slice(0, -1));
}
remove_last_.local = 1;
 */

function append_(d, track_index, effect_number)
{
    var t_sym = make_track_key_(track_index);
    d.append(t_sym, effect_number);
    remove_trailing_zeroes_(d, track_index);
}
append_.local = 1;


function set_(d, track_index, effect_index, effect_number)
{
    var effects = get_effect_array_(d, track_index);
    effects[effect_index] = effect_number;
    set_effect_array_(d, track_index, effects);
    remove_trailing_zeroes_(d, track_index);
}
set_.local = 1;


function send_effect_array_(d, track_index)
{
    var msg = ["set_effect_slots", track_index];
    var effects = get_effect_array_(d, track_index);
    for (var i = 0; i < effects.length; i++)
    {
        msg.push(effects[i]);
    }
    //post ("sending track list \n");
    //post (effects);
    outlet(0, msg);
    //post ("sent track list \n");
    outlet(1, "bang");
}
send_effect_array_.local = 1;

// ----------------------------------------------------------------

function make_track_key_(track_index)
{
    return "effects::" + track_index.toString();
}
make_track_key_.local = 1;


function get_effect_array_(d, track_index)
{
    var t_sym       = make_track_key_(track_index);
    var count       = (d.contains(t_sym) === 0) ? 0 : d.getsize(t_sym);
    var effect_list = [];

    if (count === 1)
    {
        effect_list.push(d.get(t_sym));
    }
    else
    {
        for (var j = 0; j < count; j++)
        {
            var effect_number = d.get(t_sym)[j];
            effect_list.push(effect_number);
        }
    }
    return effect_list;
}
get_effect_array_.local = 1;


function set_effect_array_(d, track_index, effect_array)
{
    var t_sym = make_track_key_(track_index);
    if (d.contains(t_sym))
    {
        d.remove(t_sym);
    }
    for (var j = 0; j < effect_array.length; j++)
    {
        d.append(t_sym, effect_array[j]);
    }
}


function remove_trailing_zeroes_(d, track_index)
{
    post ("removing trailing zeroes in track", track_index,"\n");
    var effects = get_effect_array_(d, track_index);
    var L = effects.length;
    var count = 0;
    for (var i = L - 1; i >= 0; i--)
    {
        if (effects[i] !== 0)
            break;
        count++;
    }
    post ("there are", count, "trailing zeroes. \n");
    effects.splice(L - count, count);
    if (effects.length === 0)
    {
        d.remove(make_track_key_(track_index));
    }
    else
    {
        set_effect_array_(d, track_index, effects);
    }
    post ("removed trailing zeroes \n");
}
remove_trailing_zeroes_.local = 1;



/* function make_track_subscript_key_(track_index, effect_index)
{
    return track_index.toString() + "[" + effect_index + "]";
}
make_track_subscript_key_.local = 1;
 */
