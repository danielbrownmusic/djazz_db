/* 

var commands =
[
// BEAT
    "metro tempo"       ,       "input      metro       tempo",

// NAVIGATION
    "chapter count"     ,       "navigate   song        chapter_count       $i          ",
    "go to chapter"     ,       "navigate   song        chapter_number      $i          ",
    "loop song"         ,       "navigate   song        loop                1          ",
    "loop song off"     ,       "navigate   song        loop                0          ",

    "go to bar"         ,       "navigate   chapter     measure_number      $i          ",
    "measure count"     ,       "navigate   chapter     min_max_measures    $i1 $i2     ",
    "loop chapter"      ,       "navigate   chapter     loop                $b          ",
    "loop song off"     ,       "navigate   song        loop                $b          ",

    "loop: record"      ,       "loop       record                          1",
    "loop: record off"      ,       "loop       record                          0",

    "loop: play"      ,       "loop       play                      1",
    "loop: play off"      ,       "loop       play                          0",

    "loop next n"      ,       "loop       length                          $i   ",
    "loop next n off"      ,       "loop       length                          0   ",

    "channel j mute",
    "channel j unmute",
    "channel j solo",
    "channel j unsolo",
    "channel j effect k ctrl h ...",
]; 

*/

/* var interface_list =
[
    input, navigate, midi_bank_1, ...
]
 */

var ctrl_input_to_command = new Dict();     //  
var commend_to_ctrl_input = new Dict();     //  


function add()
{}

function remove()
{}

// input comes from pattrstorage.getclientlist():
function clientlist()
{
    add_command_to_dictionary(arrayfromargs(arguments));
}

function add_command_to_dictionary(command_as_word_array)
{


}



