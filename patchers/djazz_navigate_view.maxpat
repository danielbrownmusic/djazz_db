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
		"rect" : [ 36.0, 111.0, 876.0, 437.0 ],
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
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 377.000002145767212, 18.599996328353882, 114.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 351.189688472374428, 16.037536854502832, 114.0, 20.0 ],
					"text" : "LOOP CHAPTER"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "led",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 338.600002110004425, 18.599996328353882, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 325.189688472374428, 16.037536854502832, 24.0, 24.0 ],
					"varname" : "loop_chapter"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-56",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_speed_controller.maxpat",
					"numinlets" : 0,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 104.399998128414154, 182.057594194376975, 406.856508119423324, 34.850007012486458 ],
					"presentation" : 1,
					"presentation_rect" : [ 107.004619144544449, 168.837539131400263, 356.4565073684048, 34.766671270132065 ],
					"varname" : "speed_control",
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
					"id" : "obj-118",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_navigate_max.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 5.599997520446777, 6.495332526230754, 505.656508727390701, 159.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 6.889684407337654, 6.687545547840273, 458.943188981692856, 157.0 ],
					"varname" : "song_position",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 551.000007510185242, 84.599996328353882, 53.0, 22.0 ],
					"text" : "pattrhub"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-20",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 551.000007510185242, 274.159168183803558, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"linecount" : 3,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 551.000007510185242, 196.978694328353868, 97.0, 49.0 ],
					"saved_object_attributes" : 					{
						"client_rect" : [ 16, 590, 436, 939 ],
						"parameter_enable" : 0,
						"parameter_mappable" : 0,
						"storage_rect" : [ 583, 87, 1034, 215 ]
					}
,
					"text" : "pattrstorage @greedy 1 @outputmode 5",
					"varname" : "u050003700"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-18",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 551.000007510185242, 13.599996328353882, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 551.000007510185242, 139.162257996500102, 56.0, 22.0 ],
					"restore" : 					{
						"loop_chapter" : [ 0 ]
					}
,
					"text" : "autopattr",
					"varname" : "u758003386"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 1.0, 0.0, 0.0, 1.0 ],
					"blinkcolor" : [ 0.996078431372549, 1.0, 0.047058823529412, 1.0 ],
					"id" : "obj-150",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"outlinecolor" : [ 1.0, 0.576470588235294, 0.0, 1.0 ],
					"parameter_enable" : 0,
					"patching_rect" : [ 5.599997520446777, 177.340929865205794, 39.566671341657639, 39.566671341657639 ],
					"presentation" : 1,
					"presentation_rect" : [ 6.889684407337654, 168.837539131400263, 34.766671270132065, 34.766671270132065 ]
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-11",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_UI_input_beat_metro.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 104.399998128414154, 223.657594814265281, 112.0, 39.566671341657639 ],
					"presentation" : 1,
					"presentation_rect" : [ 6.889684407337654, 217.287546167728578, 115.0, 42.0 ],
					"varname" : "metronome",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.72156862745098, 0.372549019607843, 0.372549019607843, 1.0 ],
					"bgmode" : 1,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-120",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_ui_settable_beat_looper.maxpat",
					"numinlets" : 0,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 225.856506808121139, 223.657594814265281, 285.399999439716339, 40.366671353578568 ],
					"presentation" : 1,
					"presentation_rect" : [ 177.461126512949249, 217.287546167728578, 286.0, 42.0 ],
					"varname" : "loop_control",
					"viewvisibility" : 1
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-19", 0 ]
				}

			}
 ],
		"bgcolor" : [ 0.129411764705882, 0.074509803921569, 0.074509803921569, 1.0 ]
	}

}
