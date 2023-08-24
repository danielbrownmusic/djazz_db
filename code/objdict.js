autowatch = 1;


var nums = new Dict("nums");

function make(n)
{
    var keys = nums.getkeys();
    if (keys)
    {
        var p = this.patcher;
        nums.getkeys().forEach( 
            function (k)
            { 
                p.remove(nums.get(k));
            }
        );
    }
    nums.clear();

    for (var i = 0; i < n; i++)
    {
        x = 20 + 80 * i;
        y = 200;
        var num = this.patcher.newdefault(x, y, "number");
        nums.set(i.toString(), num);
    }
    outlet(0, "dictionary nums");
}


function set(i, n)
{

    nums.get(i.toString()).message("set", n);
}