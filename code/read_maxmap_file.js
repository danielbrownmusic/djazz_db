autowatch = 1;

var dutils = require("db_dictionary_array_utils");

outlets = 3;

var d = new Dict();


function set_name(name)
{
    d.name = name;
}


function dictionary(name)
{
    var d2 = new Dict (name);
    d.clone(d2);


}


function read(filepath)
{
    var f = new File(filepath, "read");
    //f.open();

    var s = "";
    while (f.position < f.eof)
    {
        s += f.readline();
    }
    f.close();

    var d2 = new Dict ();
    d2.parse(s);
    var keys = dutils.get_dict_key_array(d2.get("parameter_map").get("midi"));
    keys.forEach(
        function (key)
        {
            post (key);
            var srcname = d2.get( glue_("parameter_map", "midi", key, "srcname") ).split(".");
            var value   = srcname[0];
            var type    = srcname[4];
            var msg = [type, value].join(" ");
            var re = /\[/;
            if (key.search(re) === -1)
            {
                key += "[0]";
            }
            post (key, msg, "\n");
            d.set(key, msg);
/* 
            var s = [type, val].join(" ");
            d.set(key, s);
 */        }
    );
    outlet (0, d.name);
    outlet (1, keys);
}



function glue_()
{
    return arrayfromargs(arguments).join("::");
}