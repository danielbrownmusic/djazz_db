var rdr = require ('djazz_launchpad_dict_reader_map');
outlets = 2;
autowatch = 1;

function load (name)
{
    rdr.load(name);
    for (var i = 0; i < rdr.grid_param_count("bar"); i++)
    {
        post (rdr.grid_param_cell_type("bar", i));
    }
    rdr.grid_param_states("chapter").forEach(
        function (state)
        {
            post (state);
        }
    )
}


function dump()
{
    outlet (1, rdr.get_dict());
}
