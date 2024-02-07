
var d_ = new Dict();


exports.load = function (device_dict_name)
{
    d_.name = device_dict_name;
    if (!is_dict_ok_(d_))
    {
        post_error_(d_);
        return;
    }
}


exports.get_dict = function ()
{
    return d_;
}

exports.name = function ()
{
    return d_.name;
}


exports.midi_count = function()
{
    return d_.get("midi_count")
}


exports.cc_count = function ()
{
    return d_.get("cc_count")
}


exports.chapter_count = function()
{
    return d_.getsize("grid::chapter::cells");
}


exports.bar_count = function()
{
    return d_.getsize("grid::bar::cells");
}


exports.grid_cell = function (param, value)
{
    return d_.get(to_key_("grid", param, "cells"))[value];
}


exports.grid_states = function (param)
{
    return d_.getkeys(to_key_("grid", param, "colors"));
}


exports.color_code = function(color)
{
    post ("color =", color, "\n");
    var data            = color.split(" ");
    var hue             = data[0];
    var is_none         = (hue === 'none'); 
    var value           = is_none? 'bright' : data[1];
    var behavior        = is_none ? 'static' : data[2];

    var color_code      = d_.get("colors").get(hue).get(value);
    var behavior_code   = d_.get("behaviors").get(behavior);
    var velocity        = color_code + behavior_code;
    var channel         = 1;
    return [velocity, channel];
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


function is_dict_ok_(d)
{
    if (!d)
        return false;
    return true;
}
is_dict_ok_.local = 1;


function post_error_()
{
    post ("dict is not ok \n");
}
post_error_.local = 1;


function to_key_()
{
    return Array.prototype.slice.call(arguments).join("::");
}
to_symbol_.local = 1;


/* exports.color_code = function(hue, value)
{
    return d_.get(to_key_("colors", hue, value));    
}


exports.behavior_code = function(behavior)
{
    return d_.get(to_key_("behaviors", behavior));
}
 */



/* 
function make_color_database(d)
{
    var color_database = new Dict();
    d_.get("colors").getkeys().forEach(
        function (hue)
        {
            d_.get("colors").get(hue).getkeys().forEach(
                function (value)
                {
                    d_.get("behaviors").getkeys().forEach(
                        function (behavior)
                        {
                            var color_code = d_.get("colors").get(hue).get(value);
                            var behavior_code = d_.get("behaviors").get(behavior);
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
 */






