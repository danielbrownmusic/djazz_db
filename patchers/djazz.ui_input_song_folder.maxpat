{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 5,
			"revision" : 4,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 309.0, 188.0, 1019.0, 424.0 ],
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
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 8.0, 75.0, 22.0 ],
					"text" : "r #0_clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 308.5, 8.0, 35.0, 22.0 ],
					"text" : "clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 639.0, 157.0, 75.0, 22.0 ],
					"text" : "r #0_clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 324.0, 157.0, 75.0, 22.0 ],
					"text" : "r #0_clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 308.5, 40.0, 77.0, 22.0 ],
					"text" : "s #0_clear"
				}

			}
, 			{
				"box" : 				{
					"comment" : "messages to load song in input_song_folder",
					"id" : "obj-6",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 305.0, 268.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 94.0, 95.0, 22.0 ],
					"text" : "get_form_file $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-25",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 127.0, 231.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_ui_input_song_folder_form_file.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_ui_input_song_folder_form_file.js"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 223.0, 49.0, 22.0 ],
					"text" : "form $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 305.0, 223.0, 47.0, 22.0 ],
					"text" : "solo $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 620.0, 223.0, 55.0, 22.0 ],
					"text" : "comp $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"items" : "BluesFamaj-grid.txt",
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 620.0, 189.0, 155.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Packages/Djazz MIDI 2023/BluesFamaj/grid/",
					"presentation" : 1,
					"presentation_rect" : [ 620.0, 62.0, 266.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 305.0, 94.0, 91.0, 22.0 ],
					"text" : "set_umenus $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"items" : [ "BluesFamaj-new-2016.01.29-09h32.txt", ",", "BluesFamaj-new-2016.01.29-12h24.txt", ",", "BluesFamaj-new-2016.01.29-12h25.txt", ",", "BluesFamaj-new-2016.01.29-12h26.txt", ",", "BluesFamaj-new-2016.01.30-08h36.txt", ",", "BluesFamaj-new-2016.01.30-09h02.txt", ",", "BluesFamaj-new-2016.01.30-09h05.txt", ",", "BluesFamaj-new-2016.01.30-09h06.txt", ",", "BluesFamaj-new-2016.01.30-09h07.txt", ",", "BluesFamaj-new-2016.01.30-09h09.txt", ",", "BluesFamaj-new-2016.01.30-09h10.txt", ",", "BluesFamaj-new-2016.01.30-09h11.txt", ",", "BluesFamaj-new-2016.01.30-09h12.txt", ",", "BluesFamaj-new-2016.01.30-09h13.txt", ",", "BluesFamaj-new-2016.01.30-09h14.txt", ",", "BluesFamaj-new-2016.01.30-09h16.txt", ",", "BluesFamaj-new-2016.01.30-09h17.txt", ",", "BluesFamaj-new-2016.01.30-09h19.txt", ",", "BluesFamaj-new-2016.01.30-09h36.txt", ",", "BluesFamaj-new-2016.01.30-09h37.txt", ",", "BluesFamaj-new-2016.01.30-09h57twist.txt", ",", "BluesFamaj-new-2016.01.30-10h29shuffle.txt", ",", "BluesFamaj-new-2016.05.04-09h27.txt", ",", "BluesFamaj-new-2016.05.04-09h34.txt", ",", "BluesFamaj-new-2016.05.04-10h16.txt", ",", "BluesFamaj-new-2016.05.04-10h17.txt", ",", "BluesFamaj-new-2021.11.23-12h59.txt", ",", "BluesFamaj-new-2021.11.23-13h00.txt" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 305.0, 189.0, 278.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Packages/Djazz MIDI 2023/BluesFamaj/new/",
					"presentation" : 1,
					"presentation_rect" : [ 307.0, 62.0, 261.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 305.0, 127.0, 229.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_ui_input_song_folder_umenus.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_ui_input_song_folder_umenus.js"
				}

			}
, 			{
				"box" : 				{
					"autopopulate" : 1,
					"id" : "obj-4",
					"items" : [ "__DJAZZ MIDI_2022_10_25_043marc.maxpat", ",", "_Corpus", ",", "_Externals", ",", "_MidiArchives", ",", "_ObjectsCommon", ",", "_ObjectsMidi", ",", "_Oracles", ",", "AutumnleavesDoMin", ",", "BluesFamaj", ",", "bordeaux-threads", ",", "Capture d’écran 2022-12-20", ",", "E.txt", ",", "elements", ",", "Free4", ",", "globals", ",", "improtek", ",", "in-files", ",", "MIDI_tunes_and_info.txt", ",", "midibuff.mid", ",", "midibuffAutumnLeavesMarcaccomp.mid", ",", "out-files", ",", "preferences.lisp", ",", "resources", ",", "user" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 30.0, 42.0, 241.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Packages/Djazz MIDI 2023/",
					"presentation" : 1,
					"presentation_rect" : [ 22.0, 62.0, 241.0, 22.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"order" : 0,
					"source" : [ "obj-4", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 1,
					"source" : [ "obj-4", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
 ]
	}

}
