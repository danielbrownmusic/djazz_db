var sizes = require("max_layout_sizes");


function effectChain(index, patcher, x, y)
{
	view_: {patcher: patcher; x: x; y: y};
	index_: index;
	effects_: [];

    disconnect_cables_ = function()
    {
        if (effects_.length > 1)
        {
            for (var i = 0; i < effects_.length - 1; i++)
            {
                patcher.disconnect(effects_[i], 0, effects_[i + 1], 0);
            }
        }
    };

    connect_cables_ = function()
    {
        if (effects_.length > 1)
        {
            for (var i = 0; i < effects_.length - 1; i++)
            {
                view.patcher.connect(effects_[i], 0, effects_[i + 1], 0);
            }
        }
    };

    make_positioned_effect_ = function(index, effect_name)
    {
        return view.patcher.newdefault(view_.x, view_.y + index * sizes.cell.h, effect_name);
    };

    return {

        add: function(effect_name)
        {
            disconnect_cables();
            var effect = this.make_positioned_effect(effects_.length_, effect_name);
            effects_.push(effect);
            connect_cables();
        },

        insert: function(index, effect_name)
        {
            disconnect_cables();
            var effect = this.make_positioned_effect_(index, effect_name);
            effects_.splice(index, 0, effect);
            connect_cables();
        },

        remove: function(index)
        {
            disconnect_cables();
            effects_.splice(index, 1);
            connect_cables();
        },

        replace: function(index, mod_name)
        {
            disconnect_cables();
            var effect = this.make_positioned_effect(index, effect_name);	
            effects_.splice(index, 1, effect);
            connect_cables();
        },

        clear: function()
        {
            var patcher = this.patcher;
            effects_.forEach( function(e) { patcher.remove(e); } );
            effects_ = [];
        },

        first: function()
        {
            return effects_[0];
        },

        last: function()
        {
            return effects_.slice(-1)[0];
        },

    }
}