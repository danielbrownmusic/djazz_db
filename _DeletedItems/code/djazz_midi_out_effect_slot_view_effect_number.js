autowatch = 1;

var value = 0;


function load_umenu(dict_name)
{
    outlet (0, "dictionary", dict_name);
}


function set_value_silent(i)
{
    outlet (0, "set", i);
}


function msg_int(i)
{
    value = i;
    notifyclients();
}


function getvalueof()
{
    return value;
}