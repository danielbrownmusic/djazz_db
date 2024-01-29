autowatch = 1;




function dictionary(name)
{
    var d = new Dict (name);
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
                            var val = ["midi", color_code + behavior_code, 1].join(" ");
                            color_database.set(key, val);
                        }
                    )
                }
            )
        }    
    )
    outlet (0, "dictionary", color_database.name);
}