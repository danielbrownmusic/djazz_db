autowatch = 1;

function init_all_pattrs()
{
    this.patcher.applyif(init_pattr, is_pattr);
}


function init_pattr(obj)
{
    obj.message("init");
}


function is_pattr(obj)
{
    return obj.maxclass === "pattr";
}