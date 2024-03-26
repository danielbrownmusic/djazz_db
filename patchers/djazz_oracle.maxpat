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
		"rect" : [ -3226.0, -42.0, 1118.0, 765.0 ],
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
					"id" : "obj-4",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 334.0, 31.0, 77.0, 22.0 ],
					"text" : "clientwindow"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 40.0, 157.0, 156.0, 22.0 ],
					"text" : "djazz_grid_to_factor_oracle",
					"varname" : "djazz_grid_to_factor_oracle"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 1,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-5",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz.grid_to_factor_oracle_view.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 40.0, 30.0, 165.0, 88.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "signal" ],
					"patching_rect" : [ 248.0, 275.0, 141.0, 22.0 ],
					"text" : "djazz_audio_improvisers",
					"varname" : "djazz_audio_improvisers"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-1",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_audio_improvisers_view.maxpat",
					"numinlets" : 3,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 248.0, 81.0, 508.0, 155.0 ],
					"varname" : "djazz_audio_improvisers_view",
					"viewvisibility" : 1
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 2 ],
					"midpoints" : [ 379.5, 315.0, 771.0, 315.0, 771.0, 60.0, 746.5, 60.0 ],
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 257.5, 316.0, 230.5, 316.0, 230.5, 70.0, 257.5, 70.0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"order" : 1,
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 1 ],
					"order" : 0,
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "antescofo~.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "djazz.grid_data.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/grid_data",
				"patcherrelativepath" : "./data_structures/grid_data",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz.grid_to_factor_oracle_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle",
				"patcherrelativepath" : "./data_structures/factor_oracle",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz.score.get_beat_list.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/score",
				"patcherrelativepath" : "./data_structures/score",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz.score.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/score",
				"patcherrelativepath" : "./data_structures/score",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz.string_pattr.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools",
				"patcherrelativepath" : "./tools",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_audio_improvisers.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/improvise_audio",
				"patcherrelativepath" : "./improvise_audio",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_audio_improvisers_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/improvise_audio",
				"patcherrelativepath" : "./improvise_audio",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_audio_play.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/improvise_audio",
				"patcherrelativepath" : "./improvise_audio",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_audio_player_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/improvise_audio",
				"patcherrelativepath" : "./improvise_audio",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_audio_record.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/improvise_audio",
				"patcherrelativepath" : "./improvise_audio",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_factor_oracle_player.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle",
				"patcherrelativepath" : "./data_structures/factor_oracle",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_bangs_and_tempo.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/improvise_audio",
				"patcherrelativepath" : "./improvise_audio",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_grid_to_factor_oracle.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle",
				"patcherrelativepath" : "./data_structures/factor_oracle",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_improvize_oracle_audio.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/improvise_oracles",
				"patcherrelativepath" : "./improvise_oracles",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_play_beat.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/improvise_audio",
				"patcherrelativepath" : "./improvise_audio",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_step_until_count.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/iterators",
				"patcherrelativepath" : "./tools/iterators",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_tempo_to_ms.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/conversion",
				"patcherrelativepath" : "./tools/conversion",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "du.append_dict.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/dict/nested",
				"patcherrelativepath" : "./tools/dict/nested",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "du.dict_to_obj.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/dict/nested",
				"patcherrelativepath" : "./tools/dict/nested",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "du.does_index_exist.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/dict",
				"patcherrelativepath" : "./tools/dict",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "du.does_key_exist.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/dict",
				"patcherrelativepath" : "./tools/dict",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "du.get_at.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/dict",
				"patcherrelativepath" : "./tools/dict",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "du.get_at_no_error_check.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/dict",
				"patcherrelativepath" : "./tools/dict",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "du.get_size.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/dict",
				"patcherrelativepath" : "./tools/dict",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "du.name_to_obj.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools/dict/nested",
				"patcherrelativepath" : "./tools/dict/nested",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "factor_oracle.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle",
				"patcherrelativepath" : "./data_structures/factor_oracle",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.oracle.get_state_dict_name.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/factor_oracle",
				"patcherrelativepath" : "./data_structures/factor_oracle/factor_oracle",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.state.add_link.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/state",
				"patcherrelativepath" : "./data_structures/factor_oracle/state",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.state.compare_labels.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/state",
				"patcherrelativepath" : "./data_structures/factor_oracle/state",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.state.get_label.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/state",
				"patcherrelativepath" : "./data_structures/factor_oracle/state",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.state.get_link_matching_label.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/state",
				"patcherrelativepath" : "./data_structures/factor_oracle/state",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.state.get_link_matching_tag.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/state",
				"patcherrelativepath" : "./data_structures/factor_oracle/state",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.state.get_suffix_link.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/state",
				"patcherrelativepath" : "./data_structures/factor_oracle/state",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.state.get_tag.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/state",
				"patcherrelativepath" : "./data_structures/factor_oracle/state",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fo.state.set_suffix_link.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/data_structures/factor_oracle/state",
				"patcherrelativepath" : "./data_structures/factor_oracle/state",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "supervp.scrub~.mxo",
				"type" : "iLaX"
			}
 ],
		"autosave" : 0
	}

}
