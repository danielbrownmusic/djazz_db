{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 5,
			"revision" : 5,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 613.0, 202.0, 640.0, 480.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-1",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 50.0, 273.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-151",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 50.0, 120.0, 275.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_get_mappable_commands.js",
						"parameter_enable" : 0
					}
,
					"style" : "dj finished encapsulation",
					"text" : "js djazz_get_mappable_commands.js"
				}

			}
, 			{
				"box" : 				{
					"data" : 					{
						"items" : [ "", "djazz.generate_output::djazz_score_follower::beatnum", "djazz.generate_output[1]::djazz_score_follower::beatnum", "navigate::chapter::chapter_min_max_measures", "navigate::chapter::chapter_min_max_beats", "navigate::chapter::beat_number", "navigate::chapter::measure_number", "navigate::chapter::chapter_number", "navigate::chapter::measure_position", "navigate::song::chapter_count", "djazz_midi_out_bank::8::effects::slot_count", "djazz_midi_out_bank::8::effects::2::active", "djazz_midi_out_bank::8::effects::2::index", "djazz_midi_out_bank::8::effects::1::active", "djazz_midi_out_bank::8::effects::1::index", "djazz_midi_out_bank::8::effects::0::active", "djazz_midi_out_bank::8::effects::0::index", "djazz_midi_out_bank::8::mute::muted", "djazz_midi_out_bank::8::solo::gswitch", "djazz_midi_out_bank::8::solo::soloed", "djazz_midi_out_bank::7::effects::slot_count", "djazz_midi_out_bank::7::effects::2::active", "djazz_midi_out_bank::7::effects::2::index", "djazz_midi_out_bank::7::effects::1::active", "djazz_midi_out_bank::7::effects::1::index", "djazz_midi_out_bank::7::effects::0::active", "djazz_midi_out_bank::7::effects::0::index", "djazz_midi_out_bank::7::mute::muted", "djazz_midi_out_bank::7::solo::gswitch", "djazz_midi_out_bank::7::solo::soloed", "djazz_midi_out_bank::6::effects::slot_count", "djazz_midi_out_bank::6::effects::2::active", "djazz_midi_out_bank::6::effects::2::index", "djazz_midi_out_bank::6::effects::1::active", "djazz_midi_out_bank::6::effects::1::index", "djazz_midi_out_bank::6::effects::0::active", "djazz_midi_out_bank::6::effects::0::index", "djazz_midi_out_bank::6::mute::muted", "djazz_midi_out_bank::6::solo::gswitch", "djazz_midi_out_bank::6::solo::soloed", "djazz_midi_out_bank::5::effects::slot_count", "djazz_midi_out_bank::5::effects::2::active", "djazz_midi_out_bank::5::effects::2::index", "djazz_midi_out_bank::5::effects::1::active", "djazz_midi_out_bank::5::effects::1::index", "djazz_midi_out_bank::5::effects::0::active", "djazz_midi_out_bank::5::effects::0::index", "djazz_midi_out_bank::5::mute::muted", "djazz_midi_out_bank::5::solo::gswitch", "djazz_midi_out_bank::5::solo::soloed", "djazz_midi_out_bank::4::effects::slot_count", "djazz_midi_out_bank::4::effects::2::active", "djazz_midi_out_bank::4::effects::2::index", "djazz_midi_out_bank::4::effects::1::active", "djazz_midi_out_bank::4::effects::1::index", "djazz_midi_out_bank::4::effects::0::active", "djazz_midi_out_bank::4::effects::0::index", "djazz_midi_out_bank::4::mute::muted", "djazz_midi_out_bank::4::solo::gswitch", "djazz_midi_out_bank::4::solo::soloed", "djazz_midi_out_bank::3::effects::slot_count", "djazz_midi_out_bank::3::effects::2::active", "djazz_midi_out_bank::3::effects::2::index", "djazz_midi_out_bank::3::effects::1::active", "djazz_midi_out_bank::3::effects::1::index", "djazz_midi_out_bank::3::effects::0::active", "djazz_midi_out_bank::3::effects::0::index", "djazz_midi_out_bank::3::mute::muted", "djazz_midi_out_bank::3::solo::gswitch", "djazz_midi_out_bank::3::solo::soloed", "djazz_midi_out_bank::2::effects::slot_count", "djazz_midi_out_bank::2::effects::2::active", "djazz_midi_out_bank::2::effects::2::index", "djazz_midi_out_bank::2::effects::1::active", "djazz_midi_out_bank::2::effects::1::index", "djazz_midi_out_bank::2::effects::0::active", "djazz_midi_out_bank::2::effects::0::index", "djazz_midi_out_bank::2::mute::muted", "djazz_midi_out_bank::2::solo::gswitch", "djazz_midi_out_bank::2::solo::soloed", "djazz_midi_out_bank::1::effects::slot_count", "djazz_midi_out_bank::1::effects::2::active", "djazz_midi_out_bank::1::effects::2::index", "djazz_midi_out_bank::1::effects::1::active", "djazz_midi_out_bank::1::effects::1::index", "djazz_midi_out_bank::1::effects::0::active", "djazz_midi_out_bank::1::effects::0::index", "djazz_midi_out_bank::1::mute::muted", "djazz_midi_out_bank::1::solo::gswitch", "djazz_midi_out_bank::1::solo::soloed", "midi_bank_1::8::effects::slot_count", "midi_bank_1::8::effects::2::active", "midi_bank_1::8::effects::2::index", "midi_bank_1::8::effects::1::active", "midi_bank_1::8::effects::1::index", "midi_bank_1::8::effects::0::active", "midi_bank_1::8::effects::0::index", "midi_bank_1::8::mute::muted", "midi_bank_1::8::solo::gswitch", "midi_bank_1::8::solo::soloed", "midi_bank_1::7::effects::slot_count", "midi_bank_1::7::effects::2::active", "midi_bank_1::7::effects::2::index", "midi_bank_1::7::effects::1::active", "midi_bank_1::7::effects::1::index", "midi_bank_1::7::effects::0::active", "midi_bank_1::7::effects::0::index", "midi_bank_1::7::mute::muted", "midi_bank_1::7::solo::gswitch", "midi_bank_1::7::solo::soloed", "midi_bank_1::6::effects::slot_count", "midi_bank_1::6::effects::2::active", "midi_bank_1::6::effects::2::index", "midi_bank_1::6::effects::1::active", "midi_bank_1::6::effects::1::index", "midi_bank_1::6::effects::0::active", "midi_bank_1::6::effects::0::index", "midi_bank_1::6::mute::muted", "midi_bank_1::6::solo::gswitch", "midi_bank_1::6::solo::soloed", "midi_bank_1::5::effects::slot_count", "midi_bank_1::5::effects::2::active", "midi_bank_1::5::effects::2::index", "midi_bank_1::5::effects::1::active", "midi_bank_1::5::effects::1::index", "midi_bank_1::5::effects::0::active", "midi_bank_1::5::effects::0::index", "midi_bank_1::5::mute::muted", "midi_bank_1::5::solo::gswitch", "midi_bank_1::5::solo::soloed", "midi_bank_1::4::effects::slot_count", "midi_bank_1::4::effects::2::active", "midi_bank_1::4::effects::2::index", "midi_bank_1::4::effects::1::active", "midi_bank_1::4::effects::1::index", "midi_bank_1::4::effects::0::active", "midi_bank_1::4::effects::0::index", "midi_bank_1::4::mute::muted", "midi_bank_1::4::solo::gswitch", "midi_bank_1::4::solo::soloed", "midi_bank_1::3::effects::slot_count", "midi_bank_1::3::effects::2::active", "midi_bank_1::3::effects::2::index", "midi_bank_1::3::effects::1::active", "midi_bank_1::3::effects::1::index", "midi_bank_1::3::effects::0::active", "midi_bank_1::3::effects::0::index", "midi_bank_1::3::mute::muted", "midi_bank_1::3::solo::gswitch", "midi_bank_1::3::solo::soloed", "midi_bank_1::2::effects::slot_count", "midi_bank_1::2::effects::2::active", "midi_bank_1::2::effects::2::index", "midi_bank_1::2::effects::1::active", "midi_bank_1::2::effects::1::index", "midi_bank_1::2::effects::0::active", "midi_bank_1::2::effects::0::index", "midi_bank_1::2::mute::muted", "midi_bank_1::2::solo::gswitch", "midi_bank_1::2::solo::soloed", "midi_bank_1::1::effects::slot_count", "midi_bank_1::1::effects::2::active", "midi_bank_1::1::effects::2::index", "midi_bank_1::1::effects::1::active", "midi_bank_1::1::effects::1::index", "midi_bank_1::1::effects::0::active", "midi_bank_1::1::effects::0::index", "midi_bank_1::1::mute::muted", "midi_bank_1::1::solo::gswitch", "midi_bank_1::1::solo::soloed", "midi_bank_2::16::effects::slot_count", "midi_bank_2::16::effects::2::active", "midi_bank_2::16::effects::2::index", "midi_bank_2::16::effects::1::active", "midi_bank_2::16::effects::1::index", "midi_bank_2::16::effects::0::active", "midi_bank_2::16::effects::0::index", "midi_bank_2::16::mute::muted", "midi_bank_2::16::solo::gswitch", "midi_bank_2::16::solo::soloed", "midi_bank_2::15::effects::slot_count", "midi_bank_2::15::effects::2::active", "midi_bank_2::15::effects::2::index", "midi_bank_2::15::effects::1::active", "midi_bank_2::15::effects::1::index", "midi_bank_2::15::effects::0::active", "midi_bank_2::15::effects::0::index", "midi_bank_2::15::mute::muted", "midi_bank_2::15::solo::gswitch", "midi_bank_2::15::solo::soloed", "midi_bank_2::14::effects::slot_count", "midi_bank_2::14::effects::2::active", "midi_bank_2::14::effects::2::index", "midi_bank_2::14::effects::1::active", "midi_bank_2::14::effects::1::index", "midi_bank_2::14::effects::0::active", "midi_bank_2::14::effects::0::index", "midi_bank_2::14::mute::muted", "midi_bank_2::14::solo::gswitch", "midi_bank_2::14::solo::soloed", "midi_bank_2::13::effects::slot_count", "midi_bank_2::13::effects::2::active", "midi_bank_2::13::effects::2::index", "midi_bank_2::13::effects::1::active", "midi_bank_2::13::effects::1::index", "midi_bank_2::13::effects::0::active", "midi_bank_2::13::effects::0::index", "midi_bank_2::13::mute::muted", "midi_bank_2::13::solo::gswitch", "midi_bank_2::13::solo::soloed", "midi_bank_2::12::effects::slot_count", "midi_bank_2::12::effects::2::active", "midi_bank_2::12::effects::2::index", "midi_bank_2::12::effects::1::active", "midi_bank_2::12::effects::1::index", "midi_bank_2::12::effects::0::active", "midi_bank_2::12::effects::0::index", "midi_bank_2::12::mute::muted", "midi_bank_2::12::solo::gswitch", "midi_bank_2::12::solo::soloed", "midi_bank_2::11::effects::slot_count", "midi_bank_2::11::effects::2::active", "midi_bank_2::11::effects::2::index", "midi_bank_2::11::effects::1::active", "midi_bank_2::11::effects::1::index", "midi_bank_2::11::effects::0::active", "midi_bank_2::11::effects::0::index", "midi_bank_2::11::mute::muted", "midi_bank_2::11::solo::gswitch", "midi_bank_2::11::solo::soloed", "midi_bank_2::10::effects::slot_count", "midi_bank_2::10::effects::2::active", "midi_bank_2::10::effects::2::index", "midi_bank_2::10::effects::1::active", "midi_bank_2::10::effects::1::index", "midi_bank_2::10::effects::0::active", "midi_bank_2::10::effects::0::index", "midi_bank_2::10::mute::muted", "midi_bank_2::10::solo::gswitch", "midi_bank_2::10::solo::soloed", "midi_bank_2::9::effects::slot_count", "midi_bank_2::9::effects::2::active", "midi_bank_2::9::effects::2::index", "midi_bank_2::9::effects::1::active", "midi_bank_2::9::effects::1::index", "midi_bank_2::9::effects::0::active", "midi_bank_2::9::effects::0::index", "midi_bank_2::9::mute::muted", "midi_bank_2::9::solo::gswitch", "midi_bank_2::9::solo::soloed", "djazz_tempo::tempo", "input_song_folder::song_folder_full_path", "djazz_beats_per_measure::beats_per_measure", "solo::full_path", "comp::full_path", "djazz_ui_get_score_file_full_path::subfolder", "djazz_ui_get_score_file_full_path::file_name", "djazz_ui_get_score_file_full_path[1]::subfolder", "djazz_ui_get_score_file_full_path[1]::file_name", "djazz_ui_settable_beat_looper::patcher::djazz_ui_set_loop_length_presets::loop_preset", "done" ]
					}
,
					"id" : "obj-131",
					"linecount" : 4,
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 4,
					"outlettype" : [ "dictionary", "", "", "" ],
					"patching_rect" : [ 50.0, 164.133324027061462, 106.0, 62.0 ],
					"saved_object_attributes" : 					{
						"embed" : 1,
						"parameter_enable" : 0,
						"parameter_mappable" : 0
					}
,
					"style" : "dj finished encapsulation",
					"text" : "dict #1 @embed 1"
				}

			}
, 			{
				"box" : 				{
					"comment" : "connect to pattrstorage outlet and send pattrstorage the message \"getclientlist\"",
					"id" : "obj-148",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 50.0, 65.999985365819498, 30.0, 30.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-131", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-151", 0 ],
					"source" : [ "obj-148", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-131", 0 ],
					"source" : [ "obj-151", 0 ]
				}

			}
 ]
	}

}
