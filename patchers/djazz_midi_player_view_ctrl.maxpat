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
		"rect" : [ 960.0, 630.0, 1142.0, 621.0 ],
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
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"comment" : "score_file",
					"id" : "obj-3",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 426.0, 20.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-39",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_select_score_file_view.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 426.0, 134.0, 300.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 12.0, 10.0, 300.0, 22.0 ],
					"varname" : "score_file",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 285.0, 100.0, 51.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 247.0, 46.0, 45.0, 20.0 ],
					"text" : "LOOP",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 95.0, 100.0, 51.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 12.0, 46.0, 51.0, 20.0 ],
					"text" : "SPEED",
					"textcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-2",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_navigate_view_loop_ctrl.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "int" ],
					"patching_rect" : [ 231.0, 134.0, 141.0, 33.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 301.0, 46.0, 141.0, 33.0 ],
					"varname" : "djazz_navigate_view_loop_ctrl",
					"viewvisibility" : 1
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
					"name" : "djazz_navigate_view_speed_ctrl.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 50.0, 134.0, 141.0, 33.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 73.0, 46.0, 141.0, 33.0 ],
					"varname" : "djazz_navigate_view_speed_ctrl",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"comment" : "speed",
					"id" : "obj-9",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 50.0, 20.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "loop_length",
					"id" : "obj-10",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 231.0, 20.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "speed",
					"id" : "obj-11",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 50.0, 272.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "loop",
					"id" : "obj-12",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 231.0, 272.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "score_file",
					"id" : "obj-13",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 426.0, 272.0, 30.0, 30.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "djazz_navigate_view_loop_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_navigate_view_speed_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_select_score_file_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"bgcolor" : [ 0.219607843137255, 0.443137254901961, 0.462745098039216, 1.0 ],
		"editing_bgcolor" : [ 0.219607843137255, 0.443137254901961, 0.462745098039216, 1.0 ]
	}

}
