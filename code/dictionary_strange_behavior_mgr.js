autowatch = 1;

function bang()
{
    var d = new Dict ("WEIRD");

/*     d.set("things");
    post ("size =    ", d.getsize("things"), "\n");
    post ("things =   ", d.get("things"),"\n");
    post ("things[0] =", d.get("things")[0],"\n");
    post ("things[0] =", d.get("things[" + 0 + "]"), "\n"); */

    post ("not there =", d.get("not there") === null, "\n");
    d.set("things", []);

    post ("things =   ", d.get("things"),"\n");
    post ("things[0] =", d.get("things")[0],"\n");
    post ("things[0] =", d.get("things[" + 0 + "]"), "\n");
    d.append("things", 1, 2, 3);
    post ("things =   ", d.get("things"),"\n");
    post ("things[0] =", d.get("things")[0],"\n");
    post ("things[0] =", d.get("things[" + 0 + "]"), "\n");
    post ("size =    ", d.getsize("things"), "\n");    
/*     a.splice(0,1);
    post (a);
 */

/*     d.setparse("foo", "bar:");
    post ("size =    ", d.getsize("foo::bar"), "\n");
    post ("foo::bar =   ", d.get("foo::bar"),"\n");
    post ("foo::bar[0] =", d.get("foo::bar")[0],"\n");
    post ("foo::bar[0] =", d.get("foo::bar[" + 0 + "]"), "\n");

    d.append("foo::bar");
    post ("size =    ", d.getsize("foo::bar"), "\n");
    post ("foo::bar =   ", d.get("foo::bar"),"\n");
    post ("foo::bar[0] =", d.get("foo::bar")[0],"\n");
    post ("foo::bar[0] =", d.get("foo::bar[" + 0 + "]"), "\n"); */

    //post ("things =   ", d.get("things") === "" ? "empty string" : "some garbage", "\n");
    //post ("things[0] =", d.get("things")[0] === undefined ? "empty string" : "some garbage", "\n");
    //post ("things[0] =", d.get("things[" + 0 + "]") === "" ? "empty string" : "some garbage", "\n");
/* 
    if ((d.getsize("things") === 1) && (d.get("things") === ""))
    {
        post ("size = 0 \n");
    }
    else{
        post ("WTFFFFFF \n");
    }    
    post ("\n");
    post ("setting first value to 1: \n");
    d.set("things[" + 0 + "]", 10);
    post ("things =   ", d.get("things"),"\n");
    post ("things[0] =", d.get("things")[0],"\n");
    post ("things[0] =", d.get("things[" + 0 + "]"), "\n");
    post ("size = ", d.getsize("things"), "\n");
    post ("\n");

    post ("things =   ", d.get("things") === 10 ? 10 : "some garbage", "\n");
    post ("things[0] =",d.get("things")[0], "\n");
    post ("things[0] =",d.get("things")[0] === 10 ? 10 : "some garbage", "\n");
    post ("things[0] =",d.get("things[" + 0 + "]") === 10 ? 10 : "some garbage", "\n");

    if ((d.getsize("things") === 1) && (d.get("things[" + 0 + "]") === 10))
    {
        post ("size =", d.getsize("things"),"\n");
    }
    else{
        post ("WTFFFFFF \n");
    }
    post ("\n");
    post ("\n");
    post ("appending 2: \n");
    d.append("things", 2);
    post ("size =    ", d.getsize("things"), "\n");
    post ("things[0] =",d.get("things")[0] === 10 ? 10 : "some garbage", "\n");
    post ("things[0] =",d.get("things[" + 0 + "]") === 10 ? 10 : "some garbage", "\n");
    post ("\n");
    post ("things[1] =",d.get("things")[1] === 2 ? 2 : "some garbage", "\n");
    post ("things[1] =",d.get("things[" + 1 + "]") === 2 ? 2 : "some garbage", "\n");    

    if ((d.getsize("things") === 2) && (d.get("things[" + 1 + "]") === 2))
    {
        post ("size =", d.getsize("things"),"\n");
    }
    else{
        post ("WTFFFFFF \n");
    }


    post ("\n");
    post ("\n");
    post ("\n");
    var a = arrayfromargs(d.get("things"));
    for (var i = 0; i < d.get("things").length; i++)
    {
        post (d.get("things")[i]);
        post ("\n");
    }

    post ("\n");
    post ("\n");
    post ("\n");

    var a = arrayfromargs(d.get("things"));
    for (var i = 0; i < a.length; i++)
    {
        post (a[i]);
        post ("\n");
    }
 */


}
/*     d.setparse("stuff", "things:");
    //d.append("stuff");
    post ("size =    ", d.getsize("stuff::things"), "\n");
    post ("stuff =   ", d.get("stuff::things"), "\n");
    post ("stuff[0] =",d.get("stuff::things[" + 0 + "]"), "\n");





   
     */
/* 
    post ("setting", 1, "\n");
    d.set("stuff::things[" + 0 + "]", 1);
    post ("size =    ", d.getsize("stuff::things"), "\n");
    post ("stuff =   ", d.get("stuff::things"), "\n");
    post ("stuff[0] =",d.get("stuff::things[" + 0 + "]"), "\n");

    post ("appending", 2, "\n");
    d.append("stuff::things", 2);
    post ("size =    ", d.getsize("stuff::things"), "\n");
    post ("stuff =   ", d.get("stuff::things"), "\n");
    post ("stuff[1] =", d.get("stuff::things[" + 1 + "]"), "\n");
    post ("stuff[1] =", d.get("stuff::things")[1], "\n");    

    post ("setting", 3, "\n");
    d.set("stuff::things[" + 0 + "]", 3);
    post ("size =    ", d.getsize("stuff::things"), "\n");
    post ("stuff =   ", d.get("stuff::things"), "\n");
    post ("stuff[0] =",d.get("stuff::things[" + 0 + "]"), "\n");

    var a = arrayfromargs(d.get("stuff::things"));
    for (var i = 0; i < d.get("stuff::things").length; i++)
    {
        post (d.get("stuff::things")[i]);
        post ("\n");
    }

    var a = arrayfromargs(d.get("stuff::things"));
    for (var i = 0; i < a.length; i++)
    {
        post (a[i]);
        post ("\n");
    } */