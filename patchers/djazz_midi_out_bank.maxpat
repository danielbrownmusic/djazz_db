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
		"rect" : [ -2654.0, 114.0, 1872.0, 1176.0 ],
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
					"id" : "obj-1311",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 938.0, 788.0, 50.0, 22.0 ],
					"text" : "0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1309",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 894.0, 589.0, 79.0, 22.0 ],
					"text" : "getprop send"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1259",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 711.5, 606.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1260",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 725.5, 641.0, 47.0, 22.0 ],
					"text" : "solo $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1258",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 292.0, 621.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1254",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 521.0, 853.0, 50.0, 22.0 ],
					"text" : "0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1204",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 459.0, 623.0, 79.0, 22.0 ],
					"text" : "getprop send"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-954",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 306.0, 656.0, 47.0, 22.0 ],
					"text" : "solo $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 64.0, 60.0, 193.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_bank.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_bank.js topper 8"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-865",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2164.0, 252.0, 103.0, 22.0 ],
					"text" : "djazz_solo_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-866",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2164.0, 284.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-867",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2164.0, 316.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-868",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3004.0, 284.0, 103.0, 22.0 ],
					"text" : "djazz_solo_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-869",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3004.0, 316.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-870",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3004.0, 348.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-871",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3984.0, 316.0, 103.0, 22.0 ],
					"text" : "djazz_solo_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-872",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3984.0, 348.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-873",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3984.0, 380.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-895",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2164.0, 252.0, 103.0, 22.0 ],
					"text" : "djazz_solo_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-896",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2164.0, 284.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-897",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2164.0, 316.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-898",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3004.0, 284.0, 103.0, 22.0 ],
					"text" : "djazz_solo_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-899",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3004.0, 316.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-900",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3004.0, 348.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-901",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3984.0, 316.0, 103.0, 22.0 ],
					"text" : "djazz_solo_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-902",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3984.0, 348.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-903",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 3984.0, 380.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1360",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 64.0, 92.0, 189.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_solo.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_solo.js topper 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1361",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 64.0, 124.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1362",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 64.0, 156.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1363",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 221.0, 768.0, 189.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_solo.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_solo.js topper 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1364",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 221.0, 800.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1365",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 221.0, 832.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1366",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 344.0, 92.0, 189.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_solo.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_solo.js topper 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1367",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 344.0, 124.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1368",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 344.0, 156.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1369",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 484.0, 92.0, 189.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_solo.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_solo.js topper 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1370",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 484.0, 124.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1371",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 484.0, 156.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1372",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 624.0, 92.0, 189.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_solo.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_solo.js topper 4"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1373",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 624.0, 124.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1374",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 624.0, 156.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1375",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 742.0, 706.0, 189.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_solo.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_solo.js topper 5"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1376",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 742.0, 738.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1377",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 742.0, 770.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1378",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 904.0, 92.0, 189.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_solo.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_solo.js topper 6"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1379",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 904.0, 124.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1380",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 904.0, 156.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1381",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1044.0, 92.0, 189.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_solo.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_solo.js topper 7"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1382",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1044.0, 124.0, 108.0, 22.0 ],
					"text" : "djazz_mute_select"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1383",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1044.0, 156.0, 100.0, 22.0 ],
					"text" : "thru"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-1363", 0 ],
					"source" : [ "obj-1204", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-954", 0 ],
					"source" : [ "obj-1258", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1260", 0 ],
					"source" : [ "obj-1259", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1375", 0 ],
					"source" : [ "obj-1260", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1375", 0 ],
					"source" : [ "obj-1309", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1361", 0 ],
					"source" : [ "obj-1360", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1362", 0 ],
					"source" : [ "obj-1361", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1254", 1 ],
					"order" : 0,
					"source" : [ "obj-1363", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1364", 0 ],
					"order" : 1,
					"source" : [ "obj-1363", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1365", 0 ],
					"source" : [ "obj-1364", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1367", 0 ],
					"source" : [ "obj-1366", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1368", 0 ],
					"source" : [ "obj-1367", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1370", 0 ],
					"source" : [ "obj-1369", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1371", 0 ],
					"source" : [ "obj-1370", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1373", 0 ],
					"source" : [ "obj-1372", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1374", 0 ],
					"source" : [ "obj-1373", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1311", 1 ],
					"order" : 0,
					"source" : [ "obj-1375", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1376", 0 ],
					"order" : 1,
					"source" : [ "obj-1375", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1377", 0 ],
					"source" : [ "obj-1376", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1379", 0 ],
					"source" : [ "obj-1378", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1380", 0 ],
					"source" : [ "obj-1379", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1382", 0 ],
					"source" : [ "obj-1381", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1383", 0 ],
					"source" : [ "obj-1382", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-866", 0 ],
					"source" : [ "obj-865", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-867", 0 ],
					"source" : [ "obj-866", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-869", 0 ],
					"source" : [ "obj-868", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-870", 0 ],
					"source" : [ "obj-869", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-872", 0 ],
					"source" : [ "obj-871", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-873", 0 ],
					"source" : [ "obj-872", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-896", 0 ],
					"source" : [ "obj-895", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-897", 0 ],
					"source" : [ "obj-896", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-899", 0 ],
					"source" : [ "obj-898", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-900", 0 ],
					"source" : [ "obj-899", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-902", 0 ],
					"source" : [ "obj-901", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-903", 0 ],
					"source" : [ "obj-902", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1363", 0 ],
					"source" : [ "obj-954", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "djazz_midi_out_bank.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code",
				"patcherrelativepath" : "../code",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_solo.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "thru.maxpat",
				"bootpath" : "C74:/patchers/m4l/Pluggo for Live resources/patches",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
