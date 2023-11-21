//var dutils = require("db_dictionary_array_utils");

autowatch = 1;

//outlets = 2;

/* 
//var listener_ = null;

var effect_database_    = null;
var effects_ = [];

var w_effect = 128;
var h_effect = 22;

declareattribute("effects", "get_effects", "set_effects"); */

function anything()
{
    var input   = arrayfromargs(messagename, arguments);
    var args    = input.length === 2 ? input[1] : input.slice(1);
    post (messagename);
    post (args);
    post ("\n");
    
    outlet(0, messagename, args);
}