autowatch  = 1;

var EMPTY_STRING        = "EMPTY STRING";
//var NO_EFFECT           = "NO EFFECT";

var effect_database_    = null;

var effect_name         = EMPTY_STRING;
declareattribute("effect_name", null, "set_effect");


function set_effect(effect_name_in)
{
    post ("WTFFFFFFFFFFFFFF \n");
    if (effect_name_in === effect_name)
        return false;
    post ("1\n");
    effect_name = effect_name_in;
    post ("2\n");

    remove_effect_();
    post ("3\n");

    if (effect_name === EMPTY_STRING)
        return true;
        post ("4\n");

    make_effect_(effect_name);
        return true;
        post ("5\n");

    }


function set_effect_database(file_path)
{
    effect_database_ = new Dict();
    effect_database_.import_json(file_path);
}

//----------------------------------------------------------------------------------------------------


function remove_effect_()
{
    var effect  = this.patcher.getnamed('effect');    
    if (effect)
    {
        var bypass_switch  = this.patcher.getnamed("active");
        var midi_outlet    = this.patcher.getnamed("midi_out");
                
        this.patcher.remove(effect);
        this.patcher.connect(bypass_switch, 1, midi_outlet, 0);
    }
}
remove_effect_.local = 1;


function make_effect_(effect_name)
{
    var bypass_switch   = this.patcher.getnamed("active");
    var midi_outlet     = this.patcher.getnamed("midi_out");

    var x               = bypass_switch.rect[0] + 22;
    var y               = bypass_switch.rect[3] + 22;
    var patcher_class   = get_patcher_class_(effect_name);

    if (!patcher_class)
    return;

    var effect          = this.patcher.newdefault(x, y, patcher_class);
    effect.varname      = make_varname_(effect_name);

    this.patcher.disconnect (bypass_switch, 1, midi_outlet,  0);
    this.patcher.connect    (bypass_switch, 1, effect,       0);
    this.patcher.connect    (effect,        0, midi_outlet,  0);
}
make_effect_.local = 1;


function get_patcher_class_(effect_name)
{
    var d = new Dict (effect_database_.get("effects").name);
    var p = d.contains(effect_name) === 1       ?
            d.get(effect_name).get("patcher")   :
            null;
    return p;
}
get_patcher_class_.local = 1;


function make_varname_(effect_name)
{
    return effect_name.split(" ").join("_");
}
make_varname_.local = 1;