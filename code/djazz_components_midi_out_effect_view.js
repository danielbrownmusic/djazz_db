autowatch  = 1;

outlets =  2;

var effect_database_    = null;
var effect_name    = "";
declareattribute("effect_name");


function set_effect_database(effect_database_name)
{
    effect_database_ = new Dict(effect_database_name);
    post ("effect. name =", effect_database_name);
    post (effect_database_.get("items")[1]);
    outlet(0, "dictionary", effect_database_.name);
}


function set_effect()
{
    var is_new_name = set_value_silent(arguments);
    if (is_new_name) 
    {
        outlet (1, "effect_changed");
    }
}


function set_value_silent()
{
    var no_effect       = arguments ? false : true;
    var effect_name_in  = no_effect ? ""    : arguments[0];

    if (effect_name_in === effect_name)
        return false;

    effect_name = effect_name_in;
    var msg     = no_effect ? "set" : "setsymbol";
    var args    = no_effect ? 0     : effect_name;

    outlet (0, msg, args);
    return true;
}
