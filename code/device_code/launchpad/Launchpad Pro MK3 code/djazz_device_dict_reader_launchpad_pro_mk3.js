
var d = new Dict ();



function make_color_database(d)
{
    var color_database = new Dict();
    d.get("colors").getkeys().forEach(
        function (hue)
        {
            d.get("colors").get(hue).getkeys().forEach(
                function (value)
                {
                    d.get("behaviors").getkeys().forEach(
                        function (behavior)
                        {
                            var color_code = d.get("colors").get(hue).get(value);
                            var behavior_code = d.get("behaviors").get(behavior);
                            var key = [hue, value, behavior].join(" ");
                            var val = ["midi", color_code + behavior_code, 1];
                            color_database.set(key, val);
                        }
                    )
                }
            )
        }    
    )
    return color_database;
}











exports.name = function ()
{
    return d.name;
}


exports.load = function (device_name)
{
    d.import_json(get_device_file_path_(device_name));
}

function midi_count()
{
    return d.get("midi_count")
}


exports.cc_count = function ()
{
    return d.get("cc_count")
}


exports.chapter_count = function()
{
    return d.getsize("chapter::cells");
}


exports.bar_count = function()
{
    return d.getsize("chapter::cells");
}


exports.grid_cell_ = function (param, value)
{
    return d.get(to_key_(param, "cells"))[value];
}


exports.grid_states_ = function (param)
{
    return d.getkeys(to_key_(param, "colors"));
}


exports.color_code = function (color_data_string)
{
    var [hue, value, behavior] = color_data_string.split(" ");
    post ( "hue =", hue, "value =", value, "behavior =", behavior, "\n");
    if (hue == "none")
        return "0 1";
    var color_code      = d.get(to_key_("colors", hue, value));
    var behavior_code   = d.get(to_key_("behaviors", behavior));
    return [color_code, behavior_code].join(" ");    
}


//-------------------------------------------------------

function get_device_file_path_(device_name)
{
    var system_folder = "djazz_db";
    var folders     = this.patcher.filepath.split("/");
    var i           = folders.indexOf(system_folder);
    var folder_path = folders.slice(0, i + 1).concat(["device", device_name]).join("/");
    var f           = new Folder(folder_path);

    while (!f.end)
    {
        if (f.extension === ".json")
        {
            var file_path = [f.pathname, f.filename].join("/");
            return file_path;
        }
        f.next();
    }
}
get_device_file_path_.local = 1;




/* exports.color_code = function(hue, value)
{
    return d.get(to_key_("colors", hue, value));    
}


exports.behavior_code = function(behavior)
{
    return d.get(to_key_("behaviors", behavior));
}
 */
