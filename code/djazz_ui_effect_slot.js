autowatch = 1;

function loadbang(i)
{
    var x       = get_x_at_(i);
    var y       = get_y_at_(i);

    var slot    = this.patcher.newdefault(x, y, "umenu");
    slot.message("prefix", i.toString());
    slot.message("prefix_mode", 1);
    effect_names.forEach( function(e) { slot.message("append", e); } );
    slot.message("set", 0);

    this.patcher.connect(slot, 1, this.box, 0);
}
make_effect_slot_.local = 1;