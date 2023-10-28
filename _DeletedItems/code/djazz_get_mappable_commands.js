autowatch = 1;
/* 
for (var i = 0; i < players.length; i++)
{
    for (var j = 0; j < players[i].channels.length; j++)
    {
        var cmd;
        cmd = ["players", i, "solo", "soloed"].join("::");
        cmd = ["players", i, "mute", "muted"].join("::");

        cmd = "";
        cmd = "";
    
    }

}


var mappable_commands =
[
djazz_input_presets
djazz_ui_settable_beat_looper::patcher::djazz_ui_set_loop_length_presets::loop_preset

     djazz_tempo::tempo 
     midi_bank_2::9::solo::soloed 
     midi_bank_2::9::mute::muted
     midi_bank_2::9::effects::0::index
     midi_bank_2::9::effects::0::active
     midi_bank_2::9::effects::1::index
     midi_bank_2::9::effects::1::active
     midi_bank_2::9::effects::2::index midi_bank_2::9::effects::2::active midi_bank_2::9::effects::slot_count midi_bank_2::10::solo::soloed midi_bank_2::10::solo::gswitch midi_bank_2::10::mute::muted midi_bank_2::10::effects::0::index midi_bank_2::10::effects::0::active midi_bank_2::10::effects::1::index midi_bank_2::10::effects::1::active midi_bank_2::10::effects::2::index midi_bank_2::10::effects::2::active midi_bank_2::10::effects::slot_count midi_bank_2::11::solo::soloed midi_bank_2::11::solo::gswitch midi_bank_2::11::mute::muted midi_bank_2::11::effects::0::index midi_bank_2::11::effects::0::active midi_bank_2::11::effects::1::index midi_bank_2::11::effects::1::active midi_bank_2::11::effects::2::index midi_bank_2::11::effects::2::active midi_bank_2::11::effects::slot_count midi_bank_2::12::solo::soloed midi_bank_2::12::solo::gswitch midi_bank_2::12::mute::muted midi_bank_2::12::effects::0::index midi_bank_2::12::effects::0::active midi_bank_2::12::effects::1::index midi_bank_2::12::effects::1::active midi_bank_2::12::effects::2::index midi_bank_2::12::effects::2::active midi_bank_2::12::effects::slot_count midi_bank_2::13::solo::soloed midi_bank_2::13::solo::gswitch midi_bank_2::13::mute::muted midi_bank_2::13::effects::0::index midi_bank_2::13::effects::0::active midi_bank_2::13::effects::1::index midi_bank_2::13::effects::1::active midi_bank_2::13::effects::2::index midi_bank_2::13::effects::2::active midi_bank_2::13::effects::slot_count midi_bank_2::14::solo::soloed midi_bank_2::14::solo::gswitch midi_bank_2::14::mute::muted midi_bank_2::14::effects::0::index midi_bank_2::14::effects::0::active midi_bank_2::14::effects::1::index midi_bank_2::14::effects::1::active midi_bank_2::14::effects::2::index midi_bank_2::14::effects::2::active midi_bank_2::14::effects::slot_count midi_bank_2::15::solo::soloed midi_bank_2::15::solo::gswitch midi_bank_2::15::mute::muted midi_bank_2::15::effects::0::index midi_bank_2::15::effects::0::active midi_bank_2::15::effects::1::index midi_bank_2::15::effects::1::active midi_bank_2::15::effects::2::index midi_bank_2::15::effects::2::active midi_bank_2::15::effects::slot_count midi_bank_2::16::solo::soloed midi_bank_2::16::solo::gswitch midi_bank_2::16::mute::muted midi_bank_2::16::effects::0::index midi_bank_2::16::effects::0::active midi_bank_2::16::effects::1::index midi_bank_2::16::effects::1::active midi_bank_2::16::effects::2::index midi_bank_2::16::effects::2::active midi_bank_2::16::effects::slot_count midi_bank_1::1::solo::soloed midi_bank_1::1::solo::gswitch midi_bank_1::1::mute::muted midi_bank_1::1::effects::0::index midi_bank_1::1::effects::0::active midi_bank_1::1::effects::1::index midi_bank_1::1::effects::1::active midi_bank_1::1::effects::2::index midi_bank_1::1::effects::2::active midi_bank_1::1::effects::slot_count midi_bank_1::2::solo::soloed midi_bank_1::2::solo::gswitch midi_bank_1::2::mute::muted midi_bank_1::2::effects::0::index midi_bank_1::2::effects::0::active midi_bank_1::2::effects::1::index midi_bank_1::2::effects::1::active midi_bank_1::2::effects::2::index midi_bank_1::2::effects::2::active midi_bank_1::2::effects::slot_count midi_bank_1::3::solo::soloed midi_bank_1::3::solo::gswitch midi_bank_1::3::mute::muted midi_bank_1::3::effects::0::index midi_bank_1::3::effects::0::active midi_bank_1::3::effects::1::index midi_bank_1::3::effects::1::active midi_bank_1::3::effects::2::index midi_bank_1::3::effects::2::active midi_bank_1::3::effects::slot_count midi_bank_1::4::solo::soloed midi_bank_1::4::solo::gswitch midi_bank_1::4::mute::muted midi_bank_1::4::effects::0::index midi_bank_1::4::effects::0::active midi_bank_1::4::effects::1::index midi_bank_1::4::effects::1::active midi_bank_1::4::effects::2::index midi_bank_1::4::effects::2::active midi_bank_1::4::effects::slot_count midi_bank_1::5::solo::soloed midi_bank_1::5::solo::gswitch midi_bank_1::5::mute::muted midi_bank_1::5::effects::0::index 
     djazz_midi_out_bank::5::mute::muted 
     djazz_midi_out_bank::5::effects::0::index 
     djazz_midi_out_bank::5::effects::0::active 
     djazz_midi_out_bank::5::effects::1::index 
     djazz_midi_out_bank::5::effects::1::active 
     djazz_midi_out_bank::5::effects::2::index 
     djazz_midi_out_bank::5::effects::2::active 
     djazz_midi_out_bank::5::effects::slot_count 
     djazz_midi_out_bank::6::solo::soloed 
     djazz_midi_out_bank::6::solo::gswitch 
     djazz_midi_out_bank::6::mute::muted 
     djazz_midi_out_bank::6::effects::0::index 
     djazz_midi_out_bank::6::effects::0::active 
     djazz_midi_out_bank::6::effects::1::index 
     djazz_midi_out_bank::6::effects::1::active 
     djazz_midi_out_bank::6::effects::2::index 
     djazz_midi_out_bank::6::effects::2::active 
     djazz_midi_out_bank::6::effects::slot_count 
     djazz_midi_out_bank::7::solo::soloed 
     djazz_midi_out_bank::7::solo::gswitch 
     djazz_midi_out_bank::7::mute::muted 
     djazz_midi_out_bank::7::effects::0::index 
     djazz_midi_out_bank::7::effects::0::active 
     djazz_midi_out_bank::7::effects::1::index 
     djazz_midi_out_bank::7::effects::1::active 
     djazz_midi_out_bank::7::effects::2::index 
     djazz_midi_out_bank::7::effects::2::active 
     djazz_midi_out_bank::7::effects::slot_count 
     djazz_midi_out_bank::8::solo::soloed 
     djazz_midi_out_bank::8::solo::gswitch 
     djazz_midi_out_bank::8::mute::muted 
     djazz_midi_out_bank::8::effects::0::index 
     djazz_midi_out_bank::8::effects::0::active 
     djazz_midi_out_bank::8::effects::1::index 
     djazz_midi_out_bank::8::effects::1::active 
     djazz_midi_out_bank::8::effects::2::index 
     djazz_midi_out_bank::8::effects::2::active 
     djazz_midi_out_bank::8::effects::slot_count 
     navigate::song::chapter_count 
     navigate::chapter::measure_position 
     navigate::chapter::chapter_number 
     navigate::chapter::measure_number 
     navigate::chapter::beat_number 
     navigate::chapter::chapter_min_max_beats navigate::chapter::chapter_min_max_measures 
     djazz.generate_output[1]::djazz_score_follower::beatnum 
     djazz.generate_output::djazz_score_follower::beatnum

     idi_bank_1::3::mute::muted 
     midi_bank_1::3::effects::0::djazz_add_octaves::vb8 
     midi_bank_1::3::effects::0::djazz_add_octaves::va8 
     midi_bank_1::3::effects::0::djazz_add_octaves::va16

] */


function bang()
{
    loadbang();
}

function loadbang()
{
    outlet(0, "set", "items", []);
}


function clientlist()
{
    outlet(0, "append", "items", arguments[0]);
}