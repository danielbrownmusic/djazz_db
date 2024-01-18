var dutils = require("db_dictionary_array_utils");

autowatch = 1;
inlets = 2;
outlets = 2;

var view_dict_          = null;
var params_dict_         = null;


//------------------------------------------------------------------------------------------


function initialize(file_path, view_dict_name, params_dict_name)
{
    view_dict_ = new Dict (view_dict_name);
    //var filepath = get_view_dict_file_path_(device_data_folder_path, device_name);
    view_dict_.import_json(file_path);
    params_dict_ = new Dict (params_dict_name);
    //reset_param_dict_();

 }


function load_mapping(file_path)
{
    params_dict_.clear();
    params_dict_.import_json(file_path);
}


function clear_mapping()
{
    params_dict_.clear();
}


//------------------------------------------------------------------------------------------


function msg_int(n)
{
    switch (inlet)
    {
        case (0) :
        {
            cc_in_(n);
            break;
        }
        case (1) :
        {
            midi_in_(n);
            break;
        }
    }
}


//------------------------------------------------------------------------------------------


/* function cc_in_(value)
{
    if (params_dict_.get('ctrl').get('cc').contains(value) === 1)
    {
        var name        = params_dict_.get('ctrl').get('cc').get(value);
        send_param_change_out_(name);
    }

    else if (view_dict_.get('cc')[value] !== -1)
    {
        var chapter = view_dict_.get('cc')[value];
        send_chapter_change_out_(chapter);
    }    
}
cc_in_.local = 1;


function midi_in_(value)
{
    if (params_dict_.get('ctrl').get('midi').contains(value) === 1)
    {
        var name        = params_dict_.get('ctrl').get('midi').get(value);
        send_param_change_out_(name);
    }

    else if (view_dict_.get('midi')[value] !== -1)
    {
        var bar = view_dict_.get('midi')[value];
        send_bar_change_out_(bar);
    }
}
midi_in_.local = 1; */


//------------------------------------------------------------------------------------------

/* 
function send_param_change_out_(name)
{
    outlet (0 , "toggle_param", name);
}
send_param_change_out_.local = 1;


function send_chapter_change_out_(chapter)
{
    outlet (0, "set_param", "chapter", chapter);
}
send_chapter_change_out_.local = 1;


function send_bar_change_out_(bar)
{
    outlet (0, "set_param", "bar", bar);
}
send_bar_change_out_.local = 1;

 */

//------------------------------------------------------------------------------------------


function parameter(name, value)
{

}




//------------------------------------------------------------------------------------------


function send_param_msg_(name, value)
{
    var position_params = ["chapter_count", "grid"];
    var ignore_params   = ["chapter", "bar"];
    if (position_params.indexOf(name) > -1)
    {
        outlet (0, name, value);
    }
    else if (ignore_params.indexOf(name) === -1)
    {
        outlet (1, name, value);
    }
}
send_param_msg_.local = 1;


//------------------------------------------------------------------------------------------


/* function reset_param_dict_()
{
    params_dict_.clear();

    params_dict_.replace('messages::cc', "");
    params_dict_.replace('messages::midi');

    var exclude_params = ['grid', 'chapter_count', 'bar', 'chapter'];

    pip_.getnames().forEach(
        function (param_name)
        {
            if (exclude_params.indexOf(param_name) === -1)
            {
                params_dict_.replace(make_key_('parameters', param_name));
            }
        }
    )
}
reset_param_dict_.local = 1;


function get_view_dict_file_path_(device_data_folder_path, device_name)
{
    var folder_path = [device_data_folder_path, device_name, "view"].join("/");
    post ("folder path = ", folder_path, "\n");
    var f           = new Folder ( folder_path );
    //f.reset();
    while (!f.end)
    {
        if (f.filetype === "JSON")
        {
            post (f.filename);
            return f.filename;
        }
        f.next();
    }
}
get_view_dict_file_path_.local = 1; */


//------------------------------------------------------------------------------------------




/* 
function make_key_()
{
    return Array.prototype.slice.call(arguments).join("::");
}
make_key_.local = 1; */



    
/*     reset_param_dict_();

    // Read maxmap file to dict.
    var mapping_dict = new Dict ();
    var f = new File(file_path, "read");
    var s = "";
    while (f.position < f.eof)
    {
        s += f.readline();
    }
    f.close();
    mapping_dict.parse(s);

    // Add mappings to param dict.
    var param_names = dutils.get_dict_key_array(mapping_dict.get("parameter_map").get("midi"));
    param_names.forEach(
        function (param_name)
        {
            var srcname = mapping_dict.get("parameter_map").get("midi").get(param_name).get("srcname").split(".");
            var value   = srcname[0];
            var type    = srcname[4];
            type = (type === 'ctrl') ? 'cc' : type;

            var msg_key = make_key_('messages', type, value);
            params_dict_.replace(msg_key, param_name);
            
            var param_key = make_key_('parameters', param_name);
            var param_value = [type, value].join(" ");
            params_dict_.replace(param_key, param_value);
        }
    );

    outlet (0, "get_all_params"); */

/* 

function clear_mapping()
{
    reset_param_dict_();
}

 */




//------------------------------------------------------------------------------------------


/* function on_pip_changed(data)
{
    if (data.added.length)
    {
        data.added.forEach(add_parameter_);
    }
    if (data.removed.length)
    {
        data.removed.forEach(remove_parameter_);
    }
}


function on_param_changed(data)
{
    //send_param_msg_(data.listener.name, data.listener.getvalue());
    send_param_msg_(data.name, data.value);
    post ("PARAM CHANGED: ", data.name, data.value, "\n");
    //get_names();
}
 */



/* var pip_                = new ParameterInfoProvider(on_pip_changed);
var param_listeners_    = [];
 */