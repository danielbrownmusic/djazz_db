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
		"rect" : [ 1063.0, 270.0, 1011.0, 1073.0 ],
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
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 229.333333000000039, 155.0, 213.0, 22.0 ],
					"text" : "djazz_midi_player_parameter_handler",
					"varname" : "parameters"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 249.833333000000039, 108.228515625, 53.0, 22.0 ],
					"text" : "pattrhub",
					"varname" : "u945001749"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 318.833333000000039, 108.228515625, 56.0, 22.0 ],
					"text" : "autopattr",
					"varname" : "u289001804"
				}

			}
, 			{
				"box" : 				{
					"comment" : "midi",
					"id" : "obj-4",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 21.0, 273.45703125, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"active" : 					{
						"master_clock" : 0,
						"master_clock::u933007353" : 0,
						"master_clock::beat_out" : 0,
						"master_clock::loop_end_beat" : 0,
						"master_clock::loop_start_beat" : 0,
						"master_clock::next_beat" : 0,
						"master_clock::step" : 0,
						"midi_player_1::midi_out" : 0,
						"midi_player_1::midi_out::u421000787" : 0,
						"midi_player_1::tap" : 0,
						"midi_player_1::tap::u494008851" : 0,
						"midi_player_1::tap::count" : 0,
						"midi_player_1::tap::tempo" : 0,
						"midi_player_1::loop_beats" : 0,
						"midi_player_1::loop_beats::u346010348" : 0,
						"midi_player_1::loop_beats::mode" : 0,
						"midi_player_1::loop_beats::play" : 0,
						"midi_player_1::loop_beats::record" : 0,
						"midi_player_1::beat_clock::loop_end_beat" : 0,
						"midi_player_1::beat_clock::loop_start_beat" : 0,
						"midi_player_1::beat_clock::next_beat" : 0,
						"midi_player_1::beat_clock::step" : 0
					}
,
					"id" : "obj-1",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 466.833333000000039, 203.228515625, 112.0, 35.0 ],
					"saved_object_attributes" : 					{
						"client_rect" : [ -521, 279, -113, 1013 ],
						"parameter_enable" : 0,
						"parameter_mappable" : 0,
						"storage_rect" : [ 583, 69, 1034, 197 ]
					}
,
					"text" : "pattrstorage model @outputmode 1",
					"varname" : "model"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-100",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 161.833333000000039, 198.228515625, 154.0, 22.0 ],
					"text" : "djazz_midi_player player_1",
					"varname" : "midi_player_1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-47",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 21.0, 108.228515625, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-45",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 59.5, 108.228515625, 137.0, 22.0 ],
					"text" : "djazz_input_beat_metro",
					"varname" : "metro"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-42",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 21.0, 198.228515625, 101.0, 22.0 ],
					"text" : "djazz_beat_clock",
					"varname" : "master_clock"
				}

			}
, 			{
				"box" : 				{
					"comment" : "bang",
					"id" : "obj-110",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 21.0, 11.999999624999987, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "ctrl",
					"id" : "obj-113",
					"index" : 2,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 249.833333000000039, 11.999999624999987, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "components",
					"id" : "obj-114",
					"index" : 3,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 548.833333000000039, 11.999999624999987, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "ctrl",
					"id" : "obj-115",
					"index" : 2,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 466.833333000000039, 283.45703125, 30.0, 30.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-115", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-100", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"source" : [ "obj-110", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-113", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-100", 2 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-100", 0 ],
					"order" : 0,
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"order" : 1,
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-100", 1 ],
					"source" : [ "obj-5", 0 ]
				}

			}
 ]
	}

}
