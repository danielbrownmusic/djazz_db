autowatch = 1;

var deep = 0;
declareattribute("deep");


function bang()
{
    if (deep >= 0)
    {
        init_all_pattrs_deep();
    }
    else
    {
        init_all_pattrs();
    }
}


function init_all_pattrs()
{
    this.patcher.applyif(init_pattr, is_pattr);
}


function init_all_pattrs_deep()
{
    this.patcher.applydeepif(init_pattr, is_pattr);
}


function init_pattr(obj)
{
    obj.message("init");
}


function is_pattr(obj)
{
    return obj.maxclass === "pattr";
}