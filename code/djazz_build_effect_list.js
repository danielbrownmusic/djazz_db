autowatch = 1;

var effect_names = [];


function set()
{
    effect_names = argstoarray(arguments);
}


function add(effect_name)
{
    effect_names.push(effect_name);
    print_effects()
}


function clear()
{
    effect_names = []
    print_effects()
}


function remove(i)
{
    replace(i, null);
    print_effects()
}


function replace(i, effect_name)
{
    effect_names.splice(i, 1, effect_name);
    print_effects()
}