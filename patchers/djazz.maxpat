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
		"rect" : [ -3125.0, -97.0, 2871.0, 1227.0 ],
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
					"id" : "obj-198",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1036.0, 2389.0, 89.0, 22.0 ],
					"text" : "storagewindow"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-195",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 916.0, 2389.0, 77.0, 22.0 ],
					"text" : "clientwindow"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-184",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 707.243395255543874, 1364.666725754737854, 153.0, 22.0 ],
					"text" : "djazz_device_input_design"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-183",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 483.243395255543874, 1506.133355686493815, 243.0, 22.0 ],
					"text" : "djazz_device_input"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-182",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2974.666742563247681, 2121.666725754737854, 73.0, 22.0 ],
					"text" : "pattrforward"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-181",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 1439.099877893924713, 1793.666719675064087, 79.0, 22.0 ],
					"text" : "autopattr baz",
					"varname" : "baz"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-180",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 1516.00004518032074, 2150.666730761528015, 56.0, 22.0 ],
					"text" : "autopattr",
					"varname" : "u538015491"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-174",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 670.999972910484757, 1749.133412530592977, 87.0, 22.0 ],
					"text" : "r runtime_view"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-173",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 946.601610180908892, 2471.430564911205238, 89.0, 22.0 ],
					"text" : "s runtime_view"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-169",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1834.599874079227448, 2368.481230638137276, 98.0, 22.0 ],
					"text" : "djazz_send_midi"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-160",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "list" ],
					"patching_rect" : [ 1550.266555666923523, 2282.666659116744995, 29.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-157",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "list" ],
					"patching_rect" : [ 1378.099877893924713, 2318.59174647147529, 148.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 2771.000088214874268, 3127.443745238103475, 223.0, 22.0 ],
					"text" : "djazz_midi_out_bank 9 16",
					"varname" : "midi_bank_1[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-156",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 0,
					"patching_rect" : [ 1834.599874079227448, 2175.53335876209394, 121.0, 22.0 ],
					"text" : "djazz_play_midi 1 16"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-151",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1834.599874079227448, 2264.481230638137276, 106.0, 22.0 ],
					"text" : "djazz_record_midi"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-149",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 212.999999284744263, 2285.430484564144081, 99.0, 22.0 ],
					"text" : "djazz_input_beat"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 1,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-147",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_navigate.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 670.999972910484757, 1921.800020406075419, 275.510001394228311, 225.533366987534464 ],
					"presentation" : 1,
					"presentation_rect" : [ 60.466676890850067, 62.0, 275.510001394228311, 225.533366987534464 ],
					"varname" : "djazz_ui_navigate",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-113",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_settable_beat_looper.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 972.999946536225252, 1921.800020406075419, 385.00005274851901, 70.399999737739563 ],
					"presentation" : 1,
					"presentation_rect" : [ 45.466676890850067, 311.339078972075185, 529.5999995470047, 60.399999737739563 ],
					"varname" : "djazz_ui_settable_beat_looper",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"args" : [ 1, 16 ],
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-190",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_output_midi.maxpat",
					"numinlets" : 1,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 1439.099877893924713, 1864.466686913796366, 229.333354592323303, 134.666668772697449 ],
					"presentation" : 1,
					"presentation_rect" : [ 335.466676890850067, 26.0, 2330.333354592323303, 252.666668772697449 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-39",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 34.0, 34.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-16",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 153.5, 150.0, 71.0, 22.0 ],
									"text" : "prepend file"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-15",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 257.0, 150.0, 71.0, 22.0 ],
									"text" : "prepend file"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 150.0, 89.0, 22.0 ],
									"text" : "prepend tempo"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-13",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "", "", "" ],
									"patching_rect" : [ 50.0, 100.0, 226.0, 22.0 ],
									"text" : "dict.unpack tempo: solo_file: comp_file:"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-18",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.000007720386634, 40.0, 30.0, 30.0 ],
									"varname" : "u603018513"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-19",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 50.000007720386634, 232.0, 30.0, 30.0 ],
									"varname" : "u925018515"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-20",
									"index" : 2,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 153.500007720386634, 232.0, 30.0, 30.0 ],
									"varname" : "u252018514"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-21",
									"index" : 3,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 257.000007720386634, 232.0, 30.0, 30.0 ],
									"varname" : "u583018516"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-14", 0 ],
									"source" : [ "obj-13", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"source" : [ "obj-13", 2 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-16", 0 ],
									"source" : [ "obj-13", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"source" : [ "obj-14", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-21", 0 ],
									"source" : [ "obj-15", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-20", 0 ],
									"source" : [ "obj-16", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-13", 0 ],
									"source" : [ "obj-18", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 1200.701602605158769, 2238.763851563599928, 137.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p load_generate_events"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 946.601610180908892, 2427.24505668158281, 181.0, 22.0 ],
					"saved_object_attributes" : 					{
						"client_rect" : [ 1057, 45, 1440, 407 ],
						"parameter_enable" : 0,
						"parameter_mappable" : 0,
						"storage_rect" : [ 583, 69, 1034, 197 ]
					}
,
					"text" : "pattrstorage foo @outputmode 1",
					"varname" : "foo"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-53",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 670.999972910484757, 1793.666719675064087, 79.0, 22.0 ],
					"text" : "autopattr boo",
					"varname" : "boo"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-67",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "list" ],
					"patching_rect" : [ 1378.099877893924713, 2270.445089938419642, 141.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 2756.000088214874268, 3112.443745238103475, 223.0, 22.0 ],
					"text" : "djazz_midi_out_bank 1 8",
					"varname" : "midi_bank_1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-68",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 891.999946536225252, 2285.814564607253487, 181.0, 22.0 ],
					"text" : "djazz_settable_beat_looper"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-75",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 600.999999284744263, 2272.481230876555856, 158.99994725148099, 22.0 ],
					"text" : "djazz_navigate",
					"varname" : "navigate"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 12.0,
					"id" : "obj-77",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 1121.333330988883972, 2318.59174647147529, 182.0, 22.0 ],
					"text" : "djazz_generate_events mnote2",
					"varname" : "djazz.generate_output[1]"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 12.0,
					"id" : "obj-80",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 1121.333330988883972, 2271.347931117950793, 176.99994725148099, 22.0 ],
					"text" : "djazz_generate_events mnote",
					"varname" : "djazz.generate_output"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-29",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2884.801623997265779, 2177.200049817562103, 82.0, 22.0 ],
					"text" : "r design_view"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "dictionary" ],
					"patching_rect" : [ 1830.28968871977122, 2029.133355686493815, 142.0, 22.0 ],
					"text" : "djazz_design"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-176",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2292.28968871977122, 1833.639019377917066, 174.0, 22.0 ],
					"text" : "djazz_load_midi_out_database"
				}

			}
, 			{
				"box" : 				{
					"args" : [ 1, 16 ],
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-175",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_output_notes.maxpat",
					"numinlets" : 1,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "list", "" ],
					"patching_rect" : [ 1885.599874079227448, 2120.466685473918915, 156.623353613875224, 31.733372092247009 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-172",
					"maxclass" : "dict.view",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2225.099674940109253, 2026.623330884319785, 224.000003695487976, 201.333336353302002 ]
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-170",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_midi_out_preset_menu.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 2307.923109187147929, 1649.139085972384237, 282.0, 24.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-167",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "dictionary" ],
					"patching_rect" : [ 2287.733100533485413, 1770.639019377917066, 183.0, 22.0 ],
					"text" : "djazz_load_navigation_database"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 48.0,
					"id" : "obj-165",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 3403.176717327572987, 204.776658168109407, 233.33332884311676, 60.0 ],
					"text" : "DEVICE",
					"textcolor" : [ 0.0, 0.0, 0.0, 0.980392156862745 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 48.0,
					"id" : "obj-164",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2225.0, 204.776658168109407, 167.33332884311676, 60.0 ],
					"text" : "LOAD",
					"textcolor" : [ 0.0, 0.0, 0.0, 0.980392156862745 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 48.0,
					"id" : "obj-163",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 757.988450827675479, 204.776658168109407, 233.33332884311676, 60.0 ],
					"text" : "RUNTIME",
					"textcolor" : [ 0.0, 0.0, 0.0, 0.980392156862745 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 48.0,
					"id" : "obj-162",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 125.0, 1512.150334799832308, 205.33332884311676, 60.0 ],
					"text" : "MODEL",
					"textcolor" : [ 0.0, 0.0, 0.0, 0.980392156862745 ]
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 48.0,
					"id" : "obj-161",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 84.0, 804.472295071888311, 353.33332884311676, 167.0 ],
					"text" : "       VIEW\n---------------------\nCONTROLLER",
					"textcolor" : [ 0.0, 0.0, 0.0, 0.980392156862745 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-159",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2225.099674940109253, 1953.433269842281334, 96.33333146572113, 35.0 ],
					"text" : "djazz_database *SESSION*"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-121",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1898.523107661269023, 1809.666725754737854, 182.223261846564128, 22.0 ],
					"text" : "djazz_build_generate_database"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-110",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1898.523107661269023, 1884.666725754737854, 182.0, 22.0 ],
					"text" : "djazz_build_midi_play_database"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-55",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2292.28968871977122, 1801.639019377917066, 113.0, 22.0 ],
					"text" : "djazz_load_session",
					"varname" : "djazz_load_session"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-42",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1898.523107661269023, 1846.666725754737854, 182.0, 22.0 ],
					"text" : "djazz_build_midi_out_database"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 908.446398663085347, 1297.100645829332279, 196.0, 22.0 ],
					"text" : "djazz_load_device_input_database"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-86",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2866.321779670792239, 2109.069480581188145, 87.0, 22.0 ],
					"text" : "r runtime_view"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-37",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2974.666742563247681, 2086.350335860794985, 111.0, 22.0 ],
					"text" : "djazz_ctrl_navigate",
					"varname" : "djazz_ctrl_navigate"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-194",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 978.146399187606221, 1376.666725754737854, 236.0, 35.0 ],
					"text" : "djazz_database *DEVICE_INTERFACE_TO_COMMAND*"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-193",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 686.018573108000055, 1297.100645829332279, 199.0, 22.0 ],
					"text" : "djazz_build_device_input_database"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-192",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_input_device_menu.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 1053.770327110702056, 1058.401407202760311, 164.000001072883606, 23.999996900558472 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-191",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_session_menu.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 2312.399769067764282, 1683.54312533717075, 300.000005125999451, 29.333330392837524 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-171",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 416.466646730899811, 3986.776658168109407, 309.00000536441803, 26.0 ],
					"style" : "dj finished encapsulation",
					"text" : "djazz_input_beat"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-166",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_input.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 212.999999284744263, 2016.639245363079681, 198.400004982948303, 73.078157681890843 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-153",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 795.818572225851312, 1198.972352750986829, 152.0, 35.0 ],
					"text" : "djazz_database *MAPPABLE_COLORS*"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-154",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 509.632455195111106, 1207.517000759190523, 165.0, 35.0 ],
					"text" : "djazz_database *MAPPABLE_COMMANDS*"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-127",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 795.818572225851312, 1162.692164085673539, 227.0, 22.0 ],
					"text" : "djazz_make_mappable_colors_database"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-126",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "dictionary" ],
					"patching_rect" : [ 509.632455195111106, 1170.992489782384382, 253.0, 22.0 ],
					"text" : "djazz_make_mappable_commands_database"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-118",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_input_mapping_launchpad_pro_mk3.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 493.646399187606221, 655.881611208135837, 550.496115075720809, 212.000031709671021 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-150",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_load_device_input_mapping.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 497.646399187606221, 891.401404103318782, 563.0, 121.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-123",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 509.632455195111106, 1127.958774809592342, 155.0, 22.0 ],
					"text" : "djazz_init_command_menu"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-82",
					"linecount" : 5,
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 5,
					"outlettype" : [ "", "", "", "", "" ],
					"patching_rect" : [ 602.047171436190183, 4098.069477600955906, 57.0, 76.0 ],
					"text" : "route midi navigate input load"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-119",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 590.552269064030043, 4049.616620360896832, 170.0, 22.0 ],
					"text" : "djazz_preset_message_to_list"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-146",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 386.243395255543874, 1590.158774916880702, 183.0, 22.0 ],
					"text" : "djazz_command_to_device_msg"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-137",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 483.243395255543874, 1449.053541074977147, 144.0, 22.0 ],
					"text" : "djazz_input_device_msg"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-79",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_get_score_file_full_path.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 1866.233202278614044, 1669.709790533589512, 407.0, 57.0 ],
					"varname" : "djazz_ui_get_score_file_full_path[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-76",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_get_score_file_full_path.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 1866.233202278614044, 1593.709788268613011, 407.0, 57.0 ],
					"varname" : "djazz_ui_get_score_file_full_path",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-72",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 429.466652452945709, 3944.035936989223956, 275.666669249534607, 26.0 ],
					"style" : "dj finished encapsulation",
					"text" : "djazz_beats_per_measure",
					"varname" : "djazz_beats_per_measure"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-78",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_input_song_folder_full_path.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 1866.233202278614044, 1471.548896031459662, 402.733343601226807, 83.333334565162659 ],
					"presentation" : 1,
					"presentation_rect" : [ 22.0, 20.0, 405.400006532669067, 108.666667819023132 ],
					"varname" : "input_song_folder",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-112",
					"linecount" : 5,
					"maxclass" : "newobj",
					"numinlets" : 6,
					"numoutlets" : 6,
					"outlettype" : [ "", "", "", "", "", "" ],
					"patching_rect" : [ 410.466714680194855, 4106.864589287322815, 60.0, 76.0 ],
					"text" : "route midi loop navigate input load"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-88",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 410.466714680194855, 4060.362258646296141, 170.0, 22.0 ],
					"text" : "djazz_preset_message_to_list"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "list" ],
					"patching_rect" : [ 1834.90511352069916, 5474.07363079899369, 141.0, 22.0 ],
					"text" : "djazz_midi_out_bank 1 8",
					"varname" : "djazz_midi_out_bank"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 1,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-108",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_make_song_navigation_files.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 2585.843379186131642, 295.069480342769566, 403.0, 148.000000238418579 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1566.0, 544.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-3",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "list: pitch and velocity of MIDI note to play or send",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 133.0, 125.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2702.187392500252827, 5690.397499129803691, 151.0, 26.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_output_midi"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-26",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2585.223953854496358, 5278.843066055451345, 162.0, 26.0 ],
					"style" : "dj finished encapsulation",
					"text" : "djazz_events_to_midi"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2393.640646320040105, 5278.843066055451345, 172.0, 26.0 ],
					"style" : "dj finished encapsulation",
					"text" : "djazz_events_to_notes"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1990.709546347883588, 5220.658352557824401, 162.0, 26.0 ],
					"style" : "dj finished encapsulation",
					"text" : "djazz_events_to_midi"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 16.0,
					"id" : "obj-32",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 0,
					"patching_rect" : [ 2393.640646320040105, 5320.670345613743848, 147.0, 26.0 ],
					"style" : "dj finished encapsulation",
					"text" : "djazz_output_notes"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-64",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1896.767338945992378, 5876.242408304146011, 35.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "ui"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-61",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2213.350680425293831, 6137.402815384769383, 59.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "UDP"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-58",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2061.738487693148272, 6437.737093539295529, 35.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "ui"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-56",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1661.615136941823948, 6642.894231557247622, 80.137772726962339, 29.0 ],
					"prototypename" : "p3",
					"text" : "trigger"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-48",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 34.0, 62.0, 3372.0, 1344.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 107.0, 63.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 87.0, 43.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1691.905111613350527, 5697.191702965901641, 223.0, 26.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_beat_to_MIDI"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-40",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2522.155123891907351, 4452.574402197627023, 86.5, 29.0 ],
					"prototypename" : "p3",
					"text" : "encode"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-38",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2526.655118289070742, 4309.982683057869508, 93.000003099441528, 29.0 ],
					"prototypename" : "p3",
					"text" : "run time"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontsize" : 20.0,
					"id" : "obj-35",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1742.488463016825335, 6364.397499129803691, 65.0, 29.0 ],
					"text" : "input"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-24",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2626.303025654895464, 6085.963223657485287, 57.935414622758117, 29.0 ],
					"prototypename" : "p3",
					"text" : "send"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-19",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2253.850679710038094, 4318.537939349427688, 87.499999523162842, 29.0 ],
					"prototypename" : "p3",
					"text" : "receive"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-16",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2370.905111613350527, 5796.064767285255584, 87.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "decode"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-9",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2040.155133339243548, 6929.952755421360962, 86.5, 29.0 ],
					"prototypename" : "p3",
					"text" : "encode"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-139",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 159.0, 206.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1703.571778478699343, 6186.736147684954631, 187.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_output_archive_audio"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-140",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 159.0, 206.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1703.571778478699343, 6149.402815384769383, 183.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_output_archive_MIDI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-141",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 159.0, 206.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1338.571778478699343, 6074.402815384769383, 141.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_output_audio"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-142",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 134.0, 181.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1430.571778478699343, 6166.069477600955906, 141.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_output_mods"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-143",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 109.0, 156.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 323.0, 141.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1703.571778478699343, 6039.011750055633456, 135.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_output_beat"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-144",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1901.0, 546.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-3",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "list: pitch and velocity of MIDI note to play or send",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 133.0, 125.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1494.571778478699343, 5971.665010503943449, 137.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_output_UDP"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-145",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1870.0, 546.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-3",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "list: pitch and velocity of MIDI note to play or send",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 133.0, 125.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1703.571778478699343, 5912.736144227886143, 137.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_output_MIDI"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 72.0,
					"id" : "obj-138",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1587.571777882652896, 5470.902815384769383, 187.0, 87.0 ],
					"text" : "djazz"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 16.0,
					"id" : "obj-136",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2592.998519513086649, 457.0694805811886, 267.0, 26.0 ],
					"style" : "dj finished encapsulation",
					"text" : "djazz_make_song_navigation_files"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-133",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1684.155128809290545, 6395.397499129803691, 105.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "new song"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-129",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2027.488462539988177, 6685.300512373923993, 88.5, 29.0 ],
					"prototypename" : "p3",
					"text" : "perform"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-125",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2111.826895478048755, 4947.271528192313781, 118.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "output mod"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-105",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 159.0, 206.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2502.738440277653353, 6179.402815384769383, 168.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_output_archive_audio"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-106",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2502.738440277653353, 6137.402815384769383, 156.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "archive (audio)"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-102",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 159.0, 206.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2308.905111613350527, 6174.402815384769383, 164.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_output_archive_MIDI"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-103",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2302.405111613350527, 6137.402815384769383, 150.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "archive (MIDI)"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-99",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2328.655121388512271, 5942.16501050394254, 73.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "audio"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-98",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 134.0, 181.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2292.354061988205103, 5684.397499129803691, 183.051049625145424, 26.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_output_mods"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-96",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2490.655121388512271, 5942.16501050394254, 185.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "mods (for Sabina)"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-95",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 109.0, 156.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 323.0, 141.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1725.905111613350527, 5756.75812798347124, 167.0, 26.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_output_beat"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-93",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1990.071790399628298, 5942.548343877012485, 53.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "beat"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-83",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 59.0, 106.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 205.0, 272.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2119.655121865349429, 4741.316966815232263, 186.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_input_TO_MAX_OR_IAC"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-73",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 662.0, 668.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-3",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "(anything) control messages",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 113.0, 265.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1843.488454165535586, 4732.827963391931917, 160.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_input_beat_UDP"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-74",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 59.0, 447.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-3",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "(anything) control messages",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 113.0, 265.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1843.488454165535586, 4695.67916551068447, 160.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_input_beat_MIDI"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-71",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2045.321779670792239, 4452.574402197627023, 32.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "ui"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-69",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2598.155121388512271, 5899.048343877011575, 81.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "output"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-65",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2269.655123891907351, 4452.574402197627023, 71.500003099441528, 29.0 ],
					"prototypename" : "p3",
					"text" : "input"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-63",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1978.655128809290545, 6326.507907700543001, 102.500003099441528, 29.0 ],
					"prototypename" : "p3",
					"text" : "load time"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-45",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2279.155121179896014, 7033.674574446682527, 145.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "existing song"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-43",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2156.071781339722293, 5941.215006093199008, 68.778886985829104, 29.0 ],
					"prototypename" : "p3",
					"text" : "MIDI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-30",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2127.655121865349429, 4816.28229263292269, 58.0, 22.0 ],
					"style" : "dj_unfinished_message",
					"text" : "speed $1"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-22",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2203.655124368744509, 4786.099349327171694, 146.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "compose mod"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-25",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2127.655121865349429, 4586.004466815232263, 58.0, 29.0 ],
					"prototypename" : "p3",
					"text" : "beat"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1849.0, 543.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-3",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "list: pitch and velocity of MIDI note to play or send",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 133.0, 125.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1932.738435151653903, 6092.402815384769383, 207.0, 26.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_output_UDP"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 84.0, 131.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "anything: control message",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 123.0, 116.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "bang when next beat received",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 113.0, 265.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2119.655121865349429, 4711.816966815232263, 141.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_input_beat_UDP"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 59.0, 106.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "anything: control message",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 123.0, 116.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "bang when next beat received",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 113.0, 265.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2117.721593408090484, 4656.316966815232263, 141.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_input_beat_MIDI"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 1566.0, 544.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-3",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "list: pitch and velocity of MIDI note to play or send",
									"id" : "obj-1",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 133.0, 125.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2533.937392500251917, 5690.397499129803691, 147.0, 26.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_output_mdi"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-158",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 84.0, 131.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 1867.136238402192248, 4539.910345307824173, 173.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p djazz_UI_live_audio_capture"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-92",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 84.0, 131.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-4",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 340.0, 260.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 320.0, 240.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [  ]
					}
,
					"patching_rect" : [ 2117.721593408090484, 4539.910345307824173, 119.0, 62.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"style" : "dj unfinished encapsulation",
					"text" : "p live_audio_capture"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-90",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2117.721593408090484, 4507.099349327171694, 62.0, 20.0 ],
					"prototypename" : "p3",
					"style" : "djazz_ui_panel",
					"text" : "live audio"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-60",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1802.238454165535586, 4441.574402197627023, 288.5, 658.605150789065419 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-66",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1681.071781101303714, 5869.902813894653264, 264.5, 358.166663706302415 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-62",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2090.738445284443515, 6129.402815384769383, 191.0, 85.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-57",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1591.495688876002532, 6613.66501050394254, 313.318886780713683, 302.222313732357179 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-128",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1810.321781697350161, 4939.286355800129968, 798.33334219455719, 153.433974383776672 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-41",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2361.821788194256442, 4441.574402197627023, 257.833333194255829, 658.605150789065419 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-21",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1811.321779670792239, 4576.816966815232263, 797.333344221115112, 194.333333134651184 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-23",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1811.321779670792239, 4782.099349446380984, 797.333344221115112, 147.131829353721969 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-36",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2100.155121388512271, 4441.574402197627023, 253.5, 658.605150789065419 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-31",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1788.155121388512271, 4297.095571959346671, 843.333333611488342, 811.083981027345999 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-27",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2080.655111613350527, 6078.069477600955906, 619.5, 150.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-20",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2100.155121388512271, 4309.982683057869508, 253.5, 118.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-17",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2002.905111613350527, 5788.548342267686166, 472.5, 84.999999999999886 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-15",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1978.321792455988543, 6922.397499129803691, 170.333336353302002, 277.500001490116119 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-44",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2152.071781339722293, 5935.66501050394254, 157.0, 98.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-134",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2171.821786614733355, 6953.397499129803691, 531.33334219455719, 67.159296594848001 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-46",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1984.571790399628298, 7030.401044807396829, 718.583338409662247, 82.220098013898337 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-130",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1941.696811112242358, 6563.66501050394254, 196.083322405815125, 254.025000000000205 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-100",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2322.655121388512271, 5935.66501050394254, 147.0, 98.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-107",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2495.238440277653353, 6129.402815384769383, 189.0, 85.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-104",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2298.905111613350527, 6129.402815384769383, 189.0, 85.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-97",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2487.155121388512271, 5935.66501050394254, 192.0, 98.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-94",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1984.571790399628298, 5935.66501050394254, 154.0, 98.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-70",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1961.23845982797684, 5888.114767285256676, 738.666643023490906, 164.073015779655293 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 1.0, 1.0, 1.0, 0.01 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-33",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 2195.821791770535128, 6593.99239992969342, 293.333336353302002, 277.500001490116119 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-115",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1959.321793826895373, 6874.737093539295529, 766.333332240581512, 343.391199520964165 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"background" : 1,
					"border" : 2,
					"id" : "obj-91",
					"maxclass" : "panel",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1811.321779670792239, 4500.099349446380984, 797.333344221115112, 67.866252272210318 ],
					"prototypename" : "clear_with_black_border",
					"style" : "djazz_ui_panel"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.549019607843137, 0.792156862745098, 0.882352941176471, 0.0 ],
					"border" : 2,
					"id" : "obj-59",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1821.655131908732073, 6364.397499129803691, 259.5, 277.500001490116119 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border",
					"style" : "djazz_ui_panel"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-172", 0 ],
					"order" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-180", 0 ],
					"order" : 1,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-181", 0 ],
					"order" : 2,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-184", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-140", 0 ],
					"source" : [ "obj-102", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-139", 0 ],
					"source" : [ "obj-105", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.595981121063232, 0.71068662405014, 0.792471170425415, 1.0 ],
					"destination" : [ "obj-136", 0 ],
					"source" : [ "obj-108", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-173", 0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-110", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-68", 1 ],
					"source" : [ "obj-113", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.595981121063232, 0.71068662405014, 0.792471170425415, 1.0 ],
					"destination" : [ "obj-193", 0 ],
					"source" : [ "obj-118", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-82", 0 ],
					"source" : [ "obj-119", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-74", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-121", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-126", 0 ],
					"source" : [ "obj-123", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-154", 0 ],
					"source" : [ "obj-126", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-153", 0 ],
					"source" : [ "obj-127", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-73", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-183", 0 ],
					"source" : [ "obj-137", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-105", 0 ],
					"source" : [ "obj-139", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-144", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-102", 0 ],
					"source" : [ "obj-140", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-98", 0 ],
					"source" : [ "obj-142", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 0 ],
					"source" : [ "obj-143", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-144", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-145", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 1 ],
					"source" : [ "obj-147", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"source" : [ "obj-149", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.63137948513031, 0.73795622587204, 0.818884968757629, 1.0 ],
					"destination" : [ "obj-193", 0 ],
					"source" : [ "obj-150", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-193", 0 ],
					"source" : [ "obj-153", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-193", 0 ],
					"source" : [ "obj-154", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-160", 0 ],
					"source" : [ "obj-157", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-92", 0 ],
					"source" : [ "obj-158", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-151", 0 ],
					"order" : 1,
					"source" : [ "obj-160", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-156", 0 ],
					"order" : 2,
					"source" : [ "obj-160", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-169", 0 ],
					"order" : 0,
					"source" : [ "obj-160", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-149", 0 ],
					"source" : [ "obj-166", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"order" : 0,
					"source" : [ "obj-167", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-121", 0 ],
					"order" : 1,
					"source" : [ "obj-167", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-176", 0 ],
					"source" : [ "obj-170", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 0 ],
					"source" : [ "obj-174", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-110", 0 ],
					"source" : [ "obj-175", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-156", 1 ],
					"source" : [ "obj-175", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"source" : [ "obj-176", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-157", 0 ],
					"order" : 0,
					"source" : [ "obj-180", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"order" : 2,
					"source" : [ "obj-180", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 0 ],
					"order" : 1,
					"source" : [ "obj-180", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-68", 0 ],
					"order" : 3,
					"source" : [ "obj-180", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"order" : 4,
					"source" : [ "obj-180", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-113", 0 ],
					"order" : 2,
					"source" : [ "obj-181", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 0 ],
					"order" : 1,
					"source" : [ "obj-181", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-190", 0 ],
					"order" : 0,
					"source" : [ "obj-181", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-146", 0 ],
					"source" : [ "obj-183", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-183", 1 ],
					"source" : [ "obj-184", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"source" : [ "obj-190", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 1 ],
					"source" : [ "obj-190", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-55", 0 ],
					"source" : [ "obj-191", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"source" : [ "obj-192", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-184", 0 ],
					"source" : [ "obj-193", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-195", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-198", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-102", 0 ],
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-32", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-77", 2 ],
					"source" : [ "obj-39", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-77", 2 ],
					"order" : 0,
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 2 ],
					"source" : [ "obj-39", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 2 ],
					"order" : 1,
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-42", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 0 ],
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-113", 0 ],
					"order" : 2,
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 0 ],
					"order" : 1,
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-190", 0 ],
					"order" : 0,
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-160", 0 ],
					"source" : [ "obj-67", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-68", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"source" : [ "obj-73", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"source" : [ "obj-74", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-68", 0 ],
					"order" : 1,
					"source" : [ "obj-75", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-77", 0 ],
					"order" : 0,
					"source" : [ "obj-75", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-121", 1 ],
					"source" : [ "obj-76", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-157", 0 ],
					"source" : [ "obj-77", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.595981121063232, 0.71068662405014, 0.792471170425415, 1.0 ],
					"destination" : [ "obj-167", 0 ],
					"order" : 0,
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.595981121063232, 0.71068662405014, 0.792471170425415, 1.0 ],
					"destination" : [ "obj-76", 0 ],
					"order" : 2,
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.595981121063232, 0.71068662405014, 0.792471170425415, 1.0 ],
					"destination" : [ "obj-79", 0 ],
					"order" : 1,
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-121", 2 ],
					"source" : [ "obj-79", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-102", 0 ],
					"order" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"order" : 1,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-145", 0 ],
					"order" : 2,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 0 ],
					"source" : [ "obj-80", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-112", 0 ],
					"source" : [ "obj-88", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-158", 0 ],
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"order" : 0,
					"source" : [ "obj-95", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-143", 0 ],
					"order" : 1,
					"source" : [ "obj-95", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"order" : 0,
					"source" : [ "obj-98", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-142", 0 ],
					"order" : 1,
					"source" : [ "obj-98", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-147::obj-7::obj-39" : [ "chapters[1]", "chapters", 0 ],
			"obj-157::obj-8::obj-1::obj-8" : [ "gswitch[4]", "gswitch", 0 ],
			"obj-18::obj-8::obj-1::obj-8" : [ "gswitch[2]", "gswitch", 0 ],
			"obj-67::obj-8::obj-1::obj-8" : [ "gswitch[3]", "gswitch", 0 ],
			"obj-68::obj-56::obj-14::obj-64" : [ "gswitch2[7]", "gswitch2[1]", 0 ],
			"obj-68::obj-56::obj-9::obj-26" : [ "gswitch2[6]", "gswitch2", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
				}

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "antescofo~.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "ctrl_navigate_bars.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "ctrl_navigate_chapters.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_UI_input_beat_manual_tap.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_UI_input_beat_metro.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_bang_when_n_received.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_bbu_string_to_ms.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_beats_per_measure.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_build_generate_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_build_midi_out_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_build_midi_play_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_chapter_state.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_command_to_device_msg.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_convert_antescofo_output_to_event.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ctrl_navigate.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_design.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_design.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_device_input.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_device_input_design.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_effect_list.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_effect_list.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_events_to_midi.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_events_to_notes.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_generate_events.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_beat_data.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_beat_data.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_chapter_count.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_chapter_data.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_chapter_data.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_chapter_state.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_mappable_commands.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_next_beat.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_init_command_menu.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_input_beat.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_input_beat_manual_tap.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_input_beat_metro.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_input_device_msg.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_input_mapping_cell_umenu_list.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_input_mapping_launchpad_pro_mk3.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_input_mapping_launchpad_pro_mk3_cell.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_input_mapping_launchpad_pro_mk3_layout.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_load_device_input_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_load_device_input_mapping.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_load_midi_out_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_load_navigation_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_load_session.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_loop_beats.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/_DeletedItems/patchers",
				"patcherrelativepath" : "../_DeletedItems/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_loop_next_n_beats.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_make_input_mapping.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_make_mappable_colors_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_make_mappable_commands_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_make_song_navigation_files.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_make_song_navigation_files.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_bank.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_bank_layout.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_channel.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_mute.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_solo.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_nav_database.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_navigate.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_output_notes.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_output_notes_layout.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_play_loop.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/_DeletedItems/patchers",
				"patcherrelativepath" : "../_DeletedItems/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_play_midi.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_preset_message_to_list.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_record_loop.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/_DeletedItems/patchers",
				"patcherrelativepath" : "../_DeletedItems/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_record_midi.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_score_follower.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_send_midi.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_set_message_from_pattr.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_set_message_from_pattr_with_no_output.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_set_message_from_pattr_with_output.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_settable_beat_looper.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_solo_manager.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_solo_manager.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_solo_manager_layout.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_song_state.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_effect_bypass.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_effect_list.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_effect_list.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_effect_list_impl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_effect_select.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_effect_slot.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_get_score_file_full_path.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_input.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_input_device_menu.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_input_song_folder_full_path.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_input_song_folder_navigation_file.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_make_song_navigation_files.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_midi_out.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_midi_out_bank.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_midi_out_bank_layout.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_midi_out_mute.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_midi_out_preset_menu.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_midi_out_solo.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_navigate.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_navigate_chapter.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_navigate_chapter.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_navigate_chapter_tab_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_navigate_loop_chapter.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_navigate_song.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_navigate_song.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_output_midi.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_output_notes.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_output_notes_layout.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_session_menu.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_set_loop_length.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_set_loop_length_presets.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_settable_beat_looper.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_umenu_list.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_umenu_list.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "dummy.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "modf.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "thru.maxpat",
				"bootpath" : "C74:/patchers/m4l/Pluggo for Live resources/patches",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "dj FINISDHED encapsulation",
				"parentstyle" : "dj unfinished encapsulation",
				"multi" : 0
			}
, 			{
				"name" : "dj finished encapsulation",
				"default" : 				{
					"accentcolor" : [ 0.737254901960784, 0.643137254901961, 0.356862745098039, 1.0 ],
					"bgcolor" : [ 0.654901960784314, 0.325490196078431, 0.847058823529412, 1.0 ],
					"fontsize" : [ 16.0 ]
				}
,
				"parentstyle" : "dj FINISDHED encapsulation",
				"multi" : 0
			}
, 			{
				"name" : "dj finished message",
				"default" : 				{
					"bgfillcolor" : 					{
						"angle" : 270.0,
						"autogradient" : 0.0,
						"color" : [ 0.654901960784314, 0.325490196078431, 0.847058823529412, 1.0 ],
						"color1" : [ 0.654901960784314, 0.325490196078431, 0.847058823529412, 1.0 ],
						"color2" : [ 0.2, 0.2, 0.2, 1.0 ],
						"proportion" : 0.5,
						"type" : "color"
					}
,
					"fontsize" : [ 16.0 ]
				}
,
				"message" : 				{
					"bgfillcolor" : 					{
						"angle" : 270.0,
						"autogradient" : 0.0,
						"color" : [ 0.654901960784314, 0.325490196078431, 0.847058823529412, 1.0 ],
						"color1" : [ 0.654901960784314, 0.325490196078431, 0.847058823529412, 1.0 ],
						"color2" : [ 0.2, 0.2, 0.2, 1.0 ],
						"proportion" : 0.5,
						"type" : "color"
					}
,
					"fontsize" : [ 12.0 ]
				}
,
				"parentstyle" : "dj_unfinished_message",
				"multi" : 0
			}
, 			{
				"name" : "dj unfinished encapsulation",
				"default" : 				{
					"accentcolor" : [ 0.709803921568627, 0.482352941176471, 0.0, 0.980392156862745 ],
					"bgcolor" : [ 0.847058823529412, 0.345098039215686, 0.325490196078431, 1.0 ],
					"fontsize" : [ 16.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "dj_unfinished_message",
				"default" : 				{
					"bgfillcolor" : 					{
						"angle" : 270.0,
						"autogradient" : 0.0,
						"color" : [ 0.654901960784314, 0.325490196078431, 0.847058823529412, 1.0 ],
						"color1" : [ 0.654901960784314, 0.325490196078431, 0.847058823529412, 1.0 ],
						"color2" : [ 0.2, 0.2, 0.2, 1.0 ],
						"proportion" : 0.5,
						"type" : "color"
					}

				}
,
				"message" : 				{
					"bgfillcolor" : 					{
						"angle" : 270.0,
						"autogradient" : 0.0,
						"color" : [ 0.843137254901961, 0.572549019607843, 0.0, 0.980392156862745 ],
						"color1" : [ 0.654901960784314, 0.325490196078431, 0.847058823529412, 1.0 ],
						"color2" : [ 0.2, 0.2, 0.2, 1.0 ],
						"proportion" : 0.5,
						"type" : "color"
					}

				}
,
				"parentstyle" : "",
				"multi" : 1
			}
, 			{
				"name" : "djazz_ui_panel",
				"default" : 				{
					"bgfillcolor" : 					{
						"angle" : 270.0,
						"autogradient" : 0.0,
						"color" : [ 0.549019607843137, 0.792156862745098, 0.882352941176471, 1.0 ],
						"color1" : [ 0.301961, 0.301961, 0.301961, 1.0 ],
						"color2" : [ 0.2, 0.2, 0.2, 1.0 ],
						"proportion" : 0.5,
						"type" : "color"
					}
,
					"color" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ],
		"default_bgcolor" : [ 0.184313725490196, 0.258823529411765, 0.815686274509804, 1.0 ],
		"elementcolor" : [ 0.258823529411765, 0.254901960784314, 0.254901960784314, 1.0 ],
		"accentcolor" : [ 0.701960784313725, 0.529411764705882, 0.290196078431373, 1.0 ],
		"textcolor" : [ 0.945098039215686, 0.913725490196078, 0.580392156862745, 0.980392156862745 ],
		"textcolor_inverse" : [ 1.0, 0.968627450980392, 0.654901960784314, 0.98 ],
		"patchlinecolor" : [ 0.831372549019608, 0.831372549019608, 0.419607843137255, 1.0 ],
		"bgcolor" : [ 1.0, 0.980392156862745, 0.952941176470588, 0.96078431372549 ],
		"stripecolor" : [ 0.250980392156863, 0.247058823529412, 0.235294117647059, 1.0 ],
		"editing_bgcolor" : [ 0.945098039215686, 0.901960784313726, 0.83921568627451, 0.96078431372549 ],
		"bgfillcolor_type" : "gradient",
		"bgfillcolor_color1" : [ 0.223529411764706, 0.211764705882353, 0.211764705882353, 1.0 ],
		"bgfillcolor_color2" : [ 0.2, 0.2, 0.2, 1.0 ],
		"bgfillcolor_color" : [ 0.223529411764706, 0.211764705882353, 0.211764705882353, 1.0 ]
	}

}
