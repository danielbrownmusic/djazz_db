var dutils = require("db_dictionary_array_utils");

function MidiOutComponent()
{
    effect_database : null
    ,
    components : []    
}

MidiOutComponent.prototype =
{
    effect_database : null
    ,
    components : []
}


/* function MidiOutBank()
{} */

MidiOutBank.prototype = 
{
    __proto__   : MidiOutComponent.prototype
    ,
    patcher     : null
    ,
    tracks      : []
    ,
    add_track : function() 
    {}
    ,
    set value (bank_dict)
    {
        clear();
        var track_array = dutils.get_dict_array(bank_database, "tracks");

        for (var i = 0; i < track_array.length; i++)
        {      
            var track       = this.add_track();
            var comp        = this.get_track_components_mgr_(track);
            var track_dict  = track_array[i];  

            comp.message("set_effect_database", effect_database_);
            comp.setvalue(track_dict);
        }
    }
    ,
    get value()
    {
        var d = new Dict ();
        var a = this.tracks.map( function (t) { return t.getvalue(); } );
        dutils.set_dict_array(d, "tracks", a);
        return d;        
    }
    ,
    track : function()
    {
        var a       = arrayfromargs(arguments);
        var i       = a[0];
        var msg     = a[1];
        var args    = a.slice(2);
        var comp    = get_track_components_mgr_(tracks[i]);
    
        comp.message(msg, args);
    }
    ,
    clear : function()
    {
        var l = tracks.length;
        for (var i = 0; i < l; i++)
        {
            remove_last_track_();
        }
    }
    ,
    add_tracks : function(n)
    {
        for (var i = 0; i < n; i++)
        {
            add_track();
        }
    }    
    ,
    remove_last_track_ : function()
    {
        if (tracks.length === 0)
            return;
        
        var track = tracks.pop();
        patcher.remove(track);
    }
    ,
    get_track_components_mgr_ : function(track)
    {
        return track.subpatcher().getnamed("components");
    }

}




/* 
MidiOutTrack.prototype = 
{
    __proto__   : MidiOutComponent.prototype
    ,
    effects : []
    ,
    set value(track_dict)
    {
        var effect_names   = dutils.get_dict_array(track_dict, "effects");
    
        var l_old   = effects_.length;
        var l_new   = effect_names.length;
    
        if (l_old < l_new)
        {
            for (var i = l_old; i < l_new; i++)
            {
                add_effect();
            }
        }
        else
        {
            for (var i = l_new; i < l_old; i++)
            {
                remove_last_effect_();
            }
        }
        
        for (var i = 0; i < effects_.length; i++)
        {
            message_effect_(effects_[i], "set_effect_silent", effect_names[i]);
        }        
    }
    ,
    get value()
    {
        var d   = new Dict ();
        var a = effects_.map( function (e) { return e.getvalue(); } );
        dutils.set_dict_array(d, "effects", a);
        return d;        
    }
    ,
    effect()
    {
        var a       = arrayfromargs(arguments);
        var i       = a[0];
        var msg     = a[1];
        var args    = a.slice(2);
        var effect  = effects_[i];

        message_effect_(effect, msg, args);
    }
    ,
    clear()
    {
        var l = tracks_.length;
        for (var i = 0; i < l; i++)
        {
            remove_last_effect_();
        }
    }
    ,
    add_effect()
    {
        effects_.push(make_effect_());
    }
}
 */

// ------------------------------------------------------------------

/* 
MidiOutEffect.prototype =
{
    set effect(name)
    {
        var no_effect       = name === "" ? true          : false;
    
        if (name === effect_name)
            return false;
    
        effect_name = name;
        var msg     = no_effect ? "set" : "setsymbol";
        var args    = no_effect ? 0     : effect_name;        
    }
}

 */