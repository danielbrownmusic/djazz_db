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
		"rect" : [ -1514.0, -127.0, 1315.0, 1160.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
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
		"subpatcher_template" : "empty_in_out",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1113.0, 150.0, 35.0, 22.0 ],
					"text" : "clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 388.0, 761.0, 103.0, 22.0 ],
					"text" : "join 3 @triggers 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 78.5, 654.0, 106.0, 35.0 ],
					"text" : "combine addr :: 0 @triggers -1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 165.5, 603.5, 50.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 643.0, 62.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1059.0, 854.5, 65.0, 22.0 ],
					"text" : "replace $1"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-2",
					"index" : 2,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1251.0, 1001.5, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 989.0, 854.5, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 989.0, 150.0, 89.0, 22.0 ],
					"text" : "route done"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 388.0, 818.0, 95.0, 22.0 ],
					"text" : "prepend replace"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 685.5, 660.5, 29.0, 22.0 ],
					"text" : "thru"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-1",
					"index" : 2,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 989.0, 22.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-87",
					"items" : [ "generate_solo::beats_per_measure", ",", "generate_solo::tempo", ",", "generate_comp::beats_per_measure", ",", "generate_comp::tempo", ",", "navigate::bar", ",", "navigate::beat", ",", "navigate::chapter[2]", ",", "navigate::loop_chapter", ",", "navigate::step", ",", "midi_out::u616000464", ",", "midi_out::2::16::mute", ",", "midi_out::2::16::solo", ",", "midi_out::2::16::effects::slot_count", ",", "midi_out::2::15::mute", ",", "midi_out::2::15::solo", ",", "midi_out::2::15::effects::slot_count", ",", "midi_out::2::14::mute", ",", "midi_out::2::14::solo", ",", "midi_out::2::14::effects::slot_count", ",", "midi_out::2::13::mute", ",", "midi_out::2::13::solo", ",", "midi_out::2::13::effects::slot_count", ",", "midi_out::2::12::mute", ",", "midi_out::2::12::solo", ",", "midi_out::2::12::effects::slot_count", ",", "midi_out::2::11::mute", ",", "midi_out::2::11::solo", ",", "midi_out::2::11::effects::slot_count", ",", "midi_out::2::10::mute", ",", "midi_out::2::10::solo", ",", "midi_out::2::10::effects::slot_count", ",", "midi_out::2::9::mute", ",", "midi_out::2::9::solo", ",", "midi_out::2::9::effects::slot_count", ",", "midi_out::1::8::mute", ",", "midi_out::1::8::solo", ",", "midi_out::1::8::effects::slot_count", ",", "midi_out::1::7::mute", ",", "midi_out::1::7::solo", ",", "midi_out::1::7::effects::slot_count", ",", "midi_out::1::6::mute", ",", "midi_out::1::6::solo", ",", "midi_out::1::6::effects::slot_count", ",", "midi_out::1::5::mute", ",", "midi_out::1::5::solo", ",", "midi_out::1::5::effects::slot_count", ",", "midi_out::1::4::mute", ",", "midi_out::1::4::solo", ",", "midi_out::1::4::effects::slot_count", ",", "midi_out::1::3::mute", ",", "midi_out::1::3::solo", ",", "midi_out::1::3::effects::slot_count", ",", "midi_out::1::2::mute", ",", "midi_out::1::2::solo", ",", "midi_out::1::2::effects::slot_count", ",", "midi_out::1::1::mute", ",", "midi_out::1::1::solo", ",", "midi_out::1::1::effects::slot_count" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 38.0, 603.5, 100.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 21.5, 40.0, 218.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-86",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 38.0, 535.0, 65.0, 22.0 ],
					"text" : "append $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-80",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "dictionary" ],
					"patching_rect" : [ 1113.0, 923.0, 157.0, 35.0 ],
					"text" : "djazz_database *VIEW_BUTTON_COLOR*"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-59",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 989.0, 93.0, 267.0, 22.0 ],
					"text" : "route clientlist clear"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-5",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1113.0, 1001.5, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-162",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 698.0, 50.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 375.0, 418.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 255.0, 0.0, 0.0, 1.0 ],
					"bgoncolor" : [ 255.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-810",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 673.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 718.0, 62.0, 44.0, 44.0 ],
					"text" : "red",
					"textcolor" : [ 255.0, 0.0, 0.0, 1.0 ],
					"texton" : "red",
					"textoncolor" : [ 255.0, 0.0, 0.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 1.0, 0.647058823529412, 0.0, 1.0 ],
					"bgoncolor" : [ 255.0, 64.0, 0.0, 1.0 ],
					"id" : "obj-812",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 717.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 762.0, 62.0, 44.0, 44.0 ],
					"text" : "orange",
					"textcolor" : [ 255.0, 64.0, 0.0, 1.0 ],
					"texton" : "orange",
					"textoncolor" : [ 1.0, 0.647058823529412, 0.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 255.0, 255.0, 0.0, 1.0 ],
					"bgoncolor" : [ 255.0, 255.0, 0.0, 1.0 ],
					"id" : "obj-814",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 761.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 806.0, 62.0, 44.0, 44.0 ],
					"text" : "yellow",
					"textcolor" : [ 255.0, 255.0, 0.0, 1.0 ],
					"texton" : "yellow",
					"textoncolor" : [ 255.0, 255.0, 0.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 255.0, 0.0, 1.0 ],
					"bgoncolor" : [ 0.0, 255.0, 0.0, 1.0 ],
					"id" : "obj-816",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 805.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 850.0, 62.0, 44.0, 44.0 ],
					"text" : "green",
					"textcolor" : [ 0.0, 255.0, 0.0, 1.0 ],
					"texton" : "green",
					"textoncolor" : [ 0.0, 255.0, 0.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 255.0, 255.0, 1.0 ],
					"bgoncolor" : [ 0.0, 255.0, 255.0, 1.0 ],
					"id" : "obj-818",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 849.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 894.0, 62.0, 44.0, 44.0 ],
					"text" : "blue",
					"textcolor" : [ 0.0, 255.0, 255.0, 1.0 ],
					"texton" : "blue",
					"textoncolor" : [ 0.0, 255.0, 255.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 255.0, 1.0 ],
					"bgoncolor" : [ 0.0, 0.0, 255.0, 1.0 ],
					"id" : "obj-820",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 893.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 938.0, 62.0, 44.0, 44.0 ],
					"text" : "indigo",
					"textcolor" : [ 0.0, 0.0, 255.0, 1.0 ],
					"texton" : "indigo",
					"textoncolor" : [ 0.0, 0.0, 255.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 255.0, 0.0, 255.0, 1.0 ],
					"bgoncolor" : [ 255.0, 0.0, 255.0, 1.0 ],
					"id" : "obj-822",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 937.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 982.0, 62.0, 44.0, 44.0 ],
					"text" : "violet",
					"textcolor" : [ 255.0, 0.0, 255.0, 1.0 ],
					"texton" : "violet",
					"textoncolor" : [ 255.0, 0.0, 255.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1646",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 298.0, 106.0, 129.0, 22.0 ],
					"text" : "prepend set_cell_color"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1645",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 298.0, 185.0, 419.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_build_device_view_database_launchpad_mk3_pro_controller_mgr.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_build_device_view_database_launchpad_mk3_pro_controller_mgr.js"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-1644",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 298.0, 22.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-291",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 430.0, 654.0, 71.0, 22.0 ],
					"text" : "fromsymbol",
					"varname" : "selected_cell"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1514",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 298.0, 268.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 40.0, 44.0, 44.0 ],
					"text" : "81",
					"texton" : "81",
					"usebgoncolor" : 1,
					"varname" : "81"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1516",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 298.0, 312.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 84.0, 44.0, 44.0 ],
					"text" : "71",
					"texton" : "71",
					"usebgoncolor" : 1,
					"varname" : "71"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1518",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 298.0, 356.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 128.0, 44.0, 44.0 ],
					"text" : "61",
					"texton" : "61",
					"usebgoncolor" : 1,
					"varname" : "61"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1520",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 298.0, 400.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 172.0, 44.0, 44.0 ],
					"text" : "51",
					"texton" : "51",
					"usebgoncolor" : 1,
					"varname" : "51"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1522",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 298.0, 444.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 216.0, 44.0, 44.0 ],
					"text" : "41",
					"texton" : "41",
					"usebgoncolor" : 1,
					"varname" : "41"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1524",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 298.0, 488.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 260.0, 44.0, 44.0 ],
					"text" : "31",
					"texton" : "31",
					"usebgoncolor" : 1,
					"varname" : "31"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1526",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 298.0, 532.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 304.0, 44.0, 44.0 ],
					"text" : "21",
					"texton" : "21",
					"usebgoncolor" : 1,
					"varname" : "21"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 255.0, 0.0, 255.0, 1.0 ],
					"bgoncolor" : [ 0.0, 0.0, 255.0, 1.0 ],
					"id" : "obj-1528",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 298.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 348.0, 44.0, 44.0 ],
					"text" : "11",
					"texton" : "11",
					"usebgoncolor" : 1,
					"varname" : "11"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1530",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.0, 268.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 305.0, 40.0, 44.0, 44.0 ],
					"text" : "82",
					"texton" : "82",
					"usebgoncolor" : 1,
					"varname" : "82"
				}

			}
, 			{
				"box" : 				{
					"bgoncolor" : [ 0.0, 255.0, 0.0, 1.0 ],
					"id" : "obj-1532",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.0, 312.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 305.0, 84.0, 44.0, 44.0 ],
					"text" : "72",
					"texton" : "72",
					"usebgoncolor" : 1,
					"varname" : "72"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1534",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.0, 356.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 305.0, 128.0, 44.0, 44.0 ],
					"text" : "62",
					"texton" : "62",
					"usebgoncolor" : 1,
					"varname" : "62"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1536",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.0, 400.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 305.0, 172.0, 44.0, 44.0 ],
					"text" : "52",
					"texton" : "52",
					"usebgoncolor" : 1,
					"varname" : "52"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1538",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.0, 444.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 305.0, 216.0, 44.0, 44.0 ],
					"text" : "42",
					"texton" : "42",
					"usebgoncolor" : 1,
					"varname" : "42"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1540",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.0, 488.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 305.0, 260.0, 44.0, 44.0 ],
					"text" : "32",
					"texton" : "32",
					"usebgoncolor" : 1,
					"varname" : "32"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1542",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.0, 532.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 305.0, 304.0, 44.0, 44.0 ],
					"text" : "22",
					"texton" : "22",
					"usebgoncolor" : 1,
					"varname" : "22"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1544",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 342.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 305.0, 348.0, 44.0, 44.0 ],
					"text" : "12",
					"texton" : "12",
					"usebgoncolor" : 1,
					"varname" : "12"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1546",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 386.0, 268.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 349.0, 40.0, 44.0, 44.0 ],
					"text" : "83",
					"texton" : "83",
					"usebgoncolor" : 1,
					"varname" : "83"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1548",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 386.0, 312.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 349.0, 84.0, 44.0, 44.0 ],
					"text" : "73",
					"texton" : "73",
					"usebgoncolor" : 1,
					"varname" : "73"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1550",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 386.0, 356.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 349.0, 128.0, 44.0, 44.0 ],
					"text" : "63",
					"texton" : "63",
					"usebgoncolor" : 1,
					"varname" : "63"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1552",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 386.0, 400.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 349.0, 172.0, 44.0, 44.0 ],
					"text" : "53",
					"texton" : "53",
					"usebgoncolor" : 1,
					"varname" : "53"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1554",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 386.0, 444.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 349.0, 216.0, 44.0, 44.0 ],
					"text" : "43",
					"texton" : "43",
					"usebgoncolor" : 1,
					"varname" : "43"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1556",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 386.0, 488.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 349.0, 260.0, 44.0, 44.0 ],
					"text" : "33",
					"texton" : "33",
					"usebgoncolor" : 1,
					"varname" : "33"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1558",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 386.0, 532.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 349.0, 304.0, 44.0, 44.0 ],
					"text" : "23",
					"texton" : "23",
					"usebgoncolor" : 1,
					"varname" : "23"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1560",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 386.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 349.0, 348.0, 44.0, 44.0 ],
					"text" : "13",
					"texton" : "13",
					"usebgoncolor" : 1,
					"varname" : "13"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 255.0, 0.0, 1.0 ],
					"bgoncolor" : [ 255.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-1562",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 268.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 393.0, 40.0, 44.0, 44.0 ],
					"text" : "84",
					"texton" : "84",
					"usebgoncolor" : 1,
					"varname" : "84"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1564",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 312.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 393.0, 84.0, 44.0, 44.0 ],
					"text" : "74",
					"texton" : "74",
					"usebgoncolor" : 1,
					"varname" : "74"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 255.0, 255.0, 0.0, 1.0 ],
					"bgoncolor" : [ 0.0, 255.0, 0.0, 1.0 ],
					"id" : "obj-1566",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 356.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 393.0, 128.0, 44.0, 44.0 ],
					"text" : "64",
					"texton" : "64",
					"usebgoncolor" : 1,
					"varname" : "64"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1568",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 400.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 393.0, 172.0, 44.0, 44.0 ],
					"text" : "54",
					"texton" : "54",
					"usebgoncolor" : 1,
					"varname" : "54"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1570",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 444.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 393.0, 216.0, 44.0, 44.0 ],
					"text" : "44",
					"texton" : "44",
					"usebgoncolor" : 1,
					"varname" : "44"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1572",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 488.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 393.0, 260.0, 44.0, 44.0 ],
					"text" : "34",
					"texton" : "34",
					"usebgoncolor" : 1,
					"varname" : "34"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1574",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 532.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 393.0, 304.0, 44.0, 44.0 ],
					"text" : "24",
					"texton" : "24",
					"usebgoncolor" : 1,
					"varname" : "24"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1576",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 430.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 393.0, 348.0, 44.0, 44.0 ],
					"text" : "14",
					"texton" : "14",
					"usebgoncolor" : 1,
					"varname" : "14"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1578",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 474.0, 268.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.0, 40.0, 44.0, 44.0 ],
					"text" : "85",
					"texton" : "85",
					"usebgoncolor" : 1,
					"varname" : "85"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1580",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 474.0, 312.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.0, 84.0, 44.0, 44.0 ],
					"text" : "75",
					"texton" : "75",
					"usebgoncolor" : 1,
					"varname" : "75"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1582",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 474.0, 356.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.0, 128.0, 44.0, 44.0 ],
					"text" : "65",
					"texton" : "65",
					"usebgoncolor" : 1,
					"varname" : "65"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 255.0, 0.0, 1.0 ],
					"bgoncolor" : [ 255.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-1584",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 474.0, 400.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.0, 172.0, 44.0, 44.0 ],
					"text" : "55",
					"texton" : "55",
					"usebgoncolor" : 1,
					"varname" : "55"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 255.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-1586",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 474.0, 444.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.0, 216.0, 44.0, 44.0 ],
					"text" : "45",
					"texton" : "45",
					"usebgoncolor" : 1,
					"varname" : "45"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1588",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 474.0, 488.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.0, 260.0, 44.0, 44.0 ],
					"text" : "35",
					"texton" : "35",
					"usebgoncolor" : 1,
					"varname" : "35"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1590",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 474.0, 532.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.0, 304.0, 44.0, 44.0 ],
					"text" : "25",
					"texton" : "25",
					"usebgoncolor" : 1,
					"varname" : "25"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1592",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 474.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.0, 348.0, 44.0, 44.0 ],
					"text" : "15",
					"texton" : "15",
					"usebgoncolor" : 1,
					"varname" : "15"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1594",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 518.0, 268.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.0, 40.0, 44.0, 44.0 ],
					"text" : "86",
					"texton" : "86",
					"usebgoncolor" : 1,
					"varname" : "86"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1596",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 518.0, 312.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.0, 84.0, 44.0, 44.0 ],
					"text" : "76",
					"texton" : "76",
					"usebgoncolor" : 1,
					"varname" : "76"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1598",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 518.0, 356.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.0, 128.0, 44.0, 44.0 ],
					"text" : "66",
					"texton" : "66",
					"usebgoncolor" : 1,
					"varname" : "66"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1600",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 518.0, 400.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.0, 172.0, 44.0, 44.0 ],
					"text" : "56",
					"texton" : "56",
					"usebgoncolor" : 1,
					"varname" : "56"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1602",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 518.0, 444.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.0, 216.0, 44.0, 44.0 ],
					"text" : "46",
					"texton" : "46",
					"usebgoncolor" : 1,
					"varname" : "46"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 255.0, 255.0, 0.0, 1.0 ],
					"id" : "obj-1604",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 518.0, 488.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.0, 260.0, 44.0, 44.0 ],
					"text" : "36",
					"texton" : "36",
					"usebgoncolor" : 1,
					"varname" : "36"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1606",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 518.0, 532.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.0, 304.0, 44.0, 44.0 ],
					"text" : "26",
					"texton" : "26",
					"usebgoncolor" : 1,
					"varname" : "26"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1608",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 518.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.0, 348.0, 44.0, 44.0 ],
					"text" : "16",
					"texton" : "16",
					"usebgoncolor" : 1,
					"varname" : "16"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1610",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 562.0, 268.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 525.0, 40.0, 44.0, 44.0 ],
					"text" : "87",
					"texton" : "87",
					"usebgoncolor" : 1,
					"varname" : "87"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1612",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 562.0, 312.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 525.0, 84.0, 44.0, 44.0 ],
					"text" : "77",
					"texton" : "77",
					"usebgoncolor" : 1,
					"varname" : "77"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1614",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 562.0, 356.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 525.0, 128.0, 44.0, 44.0 ],
					"text" : "67",
					"texton" : "67",
					"usebgoncolor" : 1,
					"varname" : "67"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 0.0, 255.0, 1.0 ],
					"id" : "obj-1616",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 562.0, 400.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 525.0, 172.0, 44.0, 44.0 ],
					"text" : "57",
					"texton" : "57",
					"usebgoncolor" : 1,
					"varname" : "57"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1618",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 562.0, 444.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 525.0, 216.0, 44.0, 44.0 ],
					"text" : "47",
					"texton" : "47",
					"usebgoncolor" : 1,
					"varname" : "47"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.0, 255.0, 0.0, 1.0 ],
					"id" : "obj-1620",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 562.0, 488.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 525.0, 260.0, 44.0, 44.0 ],
					"text" : "37",
					"texton" : "37",
					"usebgoncolor" : 1,
					"varname" : "37"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1622",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 562.0, 532.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 525.0, 304.0, 44.0, 44.0 ],
					"text" : "27",
					"texton" : "27",
					"usebgoncolor" : 1,
					"varname" : "27"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1624",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 562.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 525.0, 348.0, 44.0, 44.0 ],
					"text" : "17",
					"texton" : "17",
					"usebgoncolor" : 1,
					"varname" : "17"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1626",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 606.0, 268.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 569.0, 40.0, 44.0, 44.0 ],
					"text" : "88",
					"texton" : "88",
					"usebgoncolor" : 1,
					"varname" : "88"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1628",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 606.0, 312.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 569.0, 84.0, 44.0, 44.0 ],
					"text" : "78",
					"texton" : "78",
					"usebgoncolor" : 1,
					"varname" : "78"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1630",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 606.0, 356.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 569.0, 128.0, 44.0, 44.0 ],
					"text" : "68",
					"texton" : "68",
					"usebgoncolor" : 1,
					"varname" : "68"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1632",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 606.0, 400.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 569.0, 172.0, 44.0, 44.0 ],
					"text" : "58",
					"texton" : "58",
					"usebgoncolor" : 1,
					"varname" : "58"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1634",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 606.0, 444.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 569.0, 216.0, 44.0, 44.0 ],
					"text" : "48",
					"texton" : "48",
					"usebgoncolor" : 1,
					"varname" : "48"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1636",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 606.0, 488.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 569.0, 260.0, 44.0, 44.0 ],
					"text" : "38",
					"texton" : "38",
					"usebgoncolor" : 1,
					"varname" : "38"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1638",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 606.0, 532.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 569.0, 304.0, 44.0, 44.0 ],
					"text" : "28",
					"texton" : "28",
					"usebgoncolor" : 1,
					"varname" : "28"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1640",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 606.0, 576.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 569.0, 348.0, 44.0, 44.0 ],
					"text" : "18",
					"texton" : "18",
					"usebgoncolor" : 1,
					"varname" : "18"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-59", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 2 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"order" : 0,
					"source" : [ "obj-12", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-86", 0 ],
					"midpoints" : [ 1068.5, 235.0, 47.5, 235.0 ],
					"order" : 1,
					"source" : [ "obj-12", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1514", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1516", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1518", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1520", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1522", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1524", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1526", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1528", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1530", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1532", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1534", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1536", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1538", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1540", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1542", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1544", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1546", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1548", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1550", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1552", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1554", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1556", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1558", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1560", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1562", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1564", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1566", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1568", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1570", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1572", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1574", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1576", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1578", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1580", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1582", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1584", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1586", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1588", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1590", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1592", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1594", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1596", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1598", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1600", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1602", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1604", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1606", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1608", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1610", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1612", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1614", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1616", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1618", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 1 ],
					"source" : [ "obj-162", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1620", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1622", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1624", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1626", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1628", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1630", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1632", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1634", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1636", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1638", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-291", 0 ],
					"source" : [ "obj-1640", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1646", 0 ],
					"source" : [ "obj-1644", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1514", 0 ],
					"source" : [ "obj-1645", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1645", 0 ],
					"source" : [ "obj-1646", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"order" : 0,
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-87", 0 ],
					"midpoints" : [ 1122.5, 255.0, 114.0, 255.0, 114.0, 588.0, 47.5, 588.0 ],
					"order" : 1,
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-162", 0 ],
					"order" : 0,
					"source" : [ "obj-291", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1645", 0 ],
					"midpoints" : [ 439.5, 678.0, 272.0, 678.0, 272.0, 180.0, 307.5, 180.0 ],
					"order" : 1,
					"source" : [ "obj-291", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"source" : [ "obj-59", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"source" : [ "obj-59", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 2 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-80", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-80", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-810", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-812", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-814", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-816", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-818", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-820", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-822", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-87", 0 ],
					"source" : [ "obj-86", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 0 ],
					"source" : [ "obj-87", 1 ]
				}

			}
 ]
	}

}
