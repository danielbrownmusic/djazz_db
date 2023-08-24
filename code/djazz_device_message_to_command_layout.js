
autowatch = 1;

var cmd_mgrs = [];


function clear()
{
    for (var i = 0; i < cmd_mgrs.length; i++)
    {
        pop_back();
    }
}


function set(key, value)
{
    this.patcher.getnamed("cmd_dict").message("set", key, value);

    var cmd_mgr = this.patcher.getnamed(key);
    if (cmd_mgr)
    {
        reset(cmd_mgr, value);
    }
    else{
        cmd_mgrs.push(create_mgr(key, value));
    }
}


function remove(key)
{
    this.patcher.getnamed("cmd_dict").message("remove", key);

    var cmd_mgr = this.patcher.getnamed(key);
    if (cmd_mgr)
    {
        remove_mgr(cmd_mgr);
    }
}


function reset_mgr(cmd_mgr, value)
{
    cmd_mgr.hit_count.value = 0;
}


function create_mgr(key, value)
{
    var x = 20 + cmd_mgrs.length * 180;
    var y = 200
    var cmd_mgr = this.patcher.newdefault(x, y, "bpatcher", 
                                        "@name", "djazz_command_manager", 
                                        "@args", key, value);
    cmd_mgr.varname = key;
    cmd_mgrs.push(cmd_mgr);
}


function remove_mgr(cmd_mgr)
{
    remove_at(cmd_mgrs.indexOf(cmd_mgr));
}


function pop_back()
{
    remove_at(-1);
}


function remove_at(index)
{
    var cmd_mgr = cmd_mgrs.splice(index, 1);
    this.patcher.remove(cmd_mgr);
}