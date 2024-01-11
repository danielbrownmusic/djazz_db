autowatch = 1;

var dutils = require("db_dictionary_array_utils");

outlets = 3;
function read(filepath)
{
    var f = new File(filepath, "read");
    //f.open();

    var s = "";
    post ("fuckyousohard\n");
    while (f.position < f.eof)
    {
        s += f.readline();
    }
    f.close();

    var d = new Dict();
    d.parse(s);
    outlet (2, d.name);
    d2 = new Dict ();
    var keys = dutils.get_dict_key_array(d.get("parameter_map").get("midi"));
    keys.forEach(
        function (key)
        {
            post (key);
            var srcname = d.get( glue_("parameter_map", "midi", key, "srcname") ).split(".");
            var value   = srcname[0];
            var type    = srcname[4];
            //d.remove(key);
            var d2key = [key, "_param"].join("");
            post (d2key);
            d2.set(d2key);
            d2.replace( glue_(d2key, "type"), type);
            d2.replace( glue_(d2key, "value"), value);
/* 
            var s = [type, val].join(" ");
            d.set(key, s);
 */        }
    );
    outlet (0, d2.name);
    outlet (1, keys);

}



function glue_()
{
    return arrayfromargs(arguments).join("::");
}