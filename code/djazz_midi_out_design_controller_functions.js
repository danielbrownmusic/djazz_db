autowatch = 1;

outlets = 2;

var d = null;

function anything()
{
    var addr    = messagename.split("::");
    var key     = addr[0];
    var index   = addr[2];
    var value   = arguments[0];

    var count = d.getsize(key);

    if (index === count)
    {
        d.append(key, value);
        outlet(0, key, "append", value);
    }
    else
    {
        d[key][index] = value;
        outlet(0, key, "replace", index, value);
    }
}