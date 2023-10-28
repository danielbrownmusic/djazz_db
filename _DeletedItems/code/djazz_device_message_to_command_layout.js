
autowatch = 1;

var cmd_mgrs = [];


function clear()
{
    for (var i = 0; i < cmd_mgrs.length; i++)
    {
        pop_back_();
    }
}


function set(key, value)
{
    //this.patcher.getnamed("cmd_dict").message("set", key, value);

    var cmd_mgr = this.patcher.getnamed(key);
    if (cmd_mgr)
    {
        reset(cmd_mgr, value);
    }
    else{
        cmd_mgrs.push(create_mgr_(key, value));
    }
}


function remove(key)
{
    //this.patcher.getnamed("cmd_dict").message("remove", key);

    var cmd_mgr = this.patcher.getnamed(key);
    if (cmd_mgr)
    {
        remove_mgr_(cmd_mgr);
    }
}

// ------------------------------------------------------------



function reset_mgr_(cmd_mgr, value)
{
    cmd_mgr.hit_count.value = 0;
}
reset_mgr_.local = 1;


function create_mgr_(key, value)
{
    var x = 20 + cmd_mgrs.length * 180;
    var y = 200
    var cmd_mgr = this.patcher.newdefault(x, y, "bpatcher", 
                                        "@name", "djazz_command_manager", 
                                        "@args", key, value);
    cmd_mgr.varname = key;
    cmd_mgrs.push(cmd_mgr);
}
create_mgr_.local = 1;


function remove_mgr_(cmd_mgr)
{
    remove_at_(cmd_mgrs.indexOf(cmd_mgr));
}
remove_mgr_.local = 1;


function pop_back_()
{
    remove_at_(-1);
}
pop_back_.local = 1;


function remove_at_(index)
{
    var cmd_mgr = cmd_mgrs.splice(index, 1);
    this.patcher.remove(cmd_mgr);
}
remove_at_.local = 1;