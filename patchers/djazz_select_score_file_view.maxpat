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
		"rect" : [ 482.0, 206.0, 872.0, 778.0 ],
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
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "clear", "" ],
					"patching_rect" : [ 31.0, 103.0, 98.0, 22.0 ],
					"text" : "t clear s"
				}

			}
, 			{
				"box" : 				{
					"comment" : "(symbol) full path of chosen score file; \"clear\" if cleared",
					"id" : "obj-5",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 31.0, 743.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 551.0, 467.0, 65.0, 35.0 ],
					"restore" : [ "Allthethingsyouare-new-01.28.2013-16-34.txt" ],
					"saved_object_attributes" : 					{
						"parameter_enable" : 0,
						"parameter_mappable" : 0
					}
,
					"text" : "pattr file_name",
					"varname" : "file_name"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 290.5, 256.0, 62.0, 35.0 ],
					"restore" : [ 5 ],
					"saved_object_attributes" : 					{
						"parameter_enable" : 0,
						"parameter_mappable" : 0
					}
,
					"text" : "pattr subfolder",
					"varname" : "subfolder"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 110.0, 189.0, 91.0, 22.0 ],
					"text" : "routepass clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"linecount" : 3,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 406.5, 467.0, 76.0, 49.0 ],
					"text" : "types TEXT, prefix $1, populate"
				}

			}
, 			{
				"box" : 				{
					"comment" : "(symbol) full path of song folder",
					"id" : "obj-21",
					"index" : 1,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 31.0, 18.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"linecount" : 4,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 182.0, 256.0, 75.0, 62.0 ],
					"text" : "types fold, prefix $1, populate, symbol #1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"items" : [ "comping", ",", "grid", ",", "harmo", ",", "HarmonizedPhrases", ",", "linear", ",", "new", ",", "new Jovino", ",", "new2", ",", "new2 Jovino", ",", "realtime" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 312.0, 387.0, 208.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Projects/djazz_db/data/Scores-Djazz-MIDI/Allthethingsyouare/",
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 0.0, 85.0, 22.0 ],
					"types" : "fold",
					"varname" : "umenu"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"items" : [ "_Jerome_a_tester_02.21.2013-23-47.txt", ",", "Allthethingsyouare-new-01.28.2013-16-14.txt", ",", "Allthethingsyouare-new-01.28.2013-16-30.txt", ",", "Allthethingsyouare-new-01.28.2013-16-31.txt", ",", "Allthethingsyouare-new-01.28.2013-16-33.txt", ",", "Allthethingsyouare-new-01.28.2013-16-34.txt", ",", "Allthethingsyouare-new-01.28.2013-16-42.txt", ",", "Allthethingsyouare-new-01.28.2013-17-22.txt", ",", "Allthethingsyouare-new-01.28.2013-17-25.txt", ",", "Allthethingsyouare-new-01.28.2013-17-29.txt", ",", "Allthethingsyouare-new-01.28.2013-17-34.txt", ",", "Allthethingsyouare-new-01.28.2013-17-36.txt", ",", "Allthethingsyouare-new-01.28.2013-17-37.txt", ",", "Allthethingsyouare-new-01.28.2013-17-41.txt", ",", "Allthethingsyouare-new-01.28.2013-17-45OK.txt", ",", "Allthethingsyouare-new-01.28.2013-17-46.txt", ",", "Allthethingsyouare-new-01.28.2013-19-01.txt", ",", "Allthethingsyouare-new-01.28.2013-19-47.txt", ",", "Allthethingsyouare-new-01.28.2013-19-51.txt", ",", "Allthethingsyouare-new-01.29.2013-10-41.txt", ",", "Allthethingsyouare-new-01.29.2013-10-45.txt", ",", "Allthethingsyouare-new-01.29.2013-10-46.txt", ",", "Allthethingsyouare-new-01.29.2013-10-50.txt", ",", "Allthethingsyouare-new-01.29.2013-10-53.txt", ",", "Allthethingsyouare-new-01.29.2013-10-57.txt", ",", "Allthethingsyouare-new-01.29.2013-10-58.txt", ",", "Allthethingsyouare-new-01.29.2013-11-07.txt", ",", "Allthethingsyouare-new-02.21.2013-10-38.txt", ",", "Allthethingsyouare-new-02.21.2013-11-13.txt", ",", "Allthethingsyouare-new-02.21.2013-11-22.txt", ",", "Allthethingsyouare-new-02.21.2013-11-48.txt", ",", "Allthethingsyouare-new-02.21.2013-11-49.txt", ",", "Allthethingsyouare-new-02.21.2013-12-12.txt", ",", "Allthethingsyouare-new-02.21.2013-12-14.txt", ",", "Allthethingsyouare-new-02.21.2013-12-15.txt", ",", "Allthethingsyouare-new-02.21.2013-13-34.txt", ",", "Allthethingsyouare-new-02.22.2013-00-28.txt", ",", "Allthethingsyouare-new-02.22.2013-00-33.txt", ",", "Allthethingsyouare-new-02.22.2013-00-40.txt", ",", "Allthethingsyouare-new-02.22.2013-09-15.txt", ",", "Allthethingsyouare-new-02.23.2013-10-32.txt", ",", "Allthethingsyouare-new-02.23.2013-14-25.txt", ",", "Allthethingsyouare-new-02.23.2013-15-22.txt", ",", "Allthethingsyouare-new-02.23.2013-15-30.txt", ",", "Allthethingsyouare-new-02.23.2013-15-39.txt", ",", "Allthethingsyouare-new-02.23.2013-15-41.txt", ",", "Allthethingsyouare-new-02.23.2013-15-42.txt", ",", "Allthethingsyouare-new-02.23.2013-15-47.txt", ",", "Allthethingsyouare-new-02.23.2013-15-51.txt", ",", "Allthethingsyouare-new-02.23.2013-15-53.txt", ",", "Allthethingsyouare-new-02.23.2013-16-04.txt", ",", "Allthethingsyouare-new-02.23.2013-16-18.txt", ",", "Allthethingsyouare-new-02.23.2013-16-25.txt", ",", "Allthethingsyouare-new-02.23.2013-23-22.txt", ",", "Allthethingsyouare-new-02.23.2013-23-23.txt", ",", "Allthethingsyouare-new-02.23.2013-23-40.txt", ",", "Allthethingsyouare-new-02.23.2013-23-41.txt", ",", "Allthethingsyouare-new-02.23.2013-23-44.txt", ",", "Allthethingsyouare-new-02.24.2013-14-46.txt", ",", "Allthethingsyouare-new-02.24.2013-14-47.txt", ",", "Allthethingsyouare-new-02.24.2013-14-50.txt", ",", "Allthethingsyouare-new-2013.07.08-20h38.txt", ",", "Allthethingsyouare-new-2013.07.09-14h29.txt", ",", "Allthethingsyouare-new-2013.07.09-14h32.txt", ",", "Allthethingsyouare-new-2013.07.09-14h34.txt", ",", "Allthethingsyouare-new-2013.07.09-14h42.txt", ",", "Allthethingsyouare-new-2013.07.09-15h04.txt", ",", "Allthethingsyouare-new-2013.07.09-17h30.txt", ",", "Allthethingsyouare-new-2013.07.09-17h35.txt", ",", "Allthethingsyouare-new-2013.07.09-17h41.txt", ",", "Allthethingsyouare-new-2013.07.09-17h47.txt", ",", "Allthethingsyouare-new-2013.07.09-17h50.txt", ",", "Allthethingsyouare-new-2015.02.24-19h38.txt", ",", "Allthethingsyouare-new-2015.05.26-18h47.txt", ",", "Allthethingsyouare-new-2015.05.26-18h57.txt", ",", "Allthethingsyouare-new-2015.05.27-08h32.txt", ",", "Allthethingsyouare-new-2015.05.27-08h38.txt", ",", "Allthethingsyouare-new-2015.05.27-08h39.txt", ",", "Allthethingsyouare-new-2015.05.27-08h45.txt", ",", "Allthethingsyouare-new-2015.05.27-08h46.txt", ",", "Allthethingsyouare-new-2015.05.27-08h48.txt", ",", "Allthethingsyouare-new-2015.05.27-08h50.txt", ",", "Allthethingsyouare-new-2016.08.12-16h10.txt", ",", "Allthethingsyouare-new-2017.07.26-15h31.txt", ",", "Allthethingsyouare-new-2017.10.17-22h58.txt", ",", "Allthethingsyouare-new-2017.10.17-23h01.txt", ",", "Allthethingsyouare-new-2017.10.18-18h53.txt", ",", "Allthethingsyouare-new-2017.10.18-19h04.txt" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 574.0, 602.0, 208.0, 22.0 ],
					"pattrmode" : 1,
					"prefix" : "~/Documents/Max 8/Projects/djazz_db/data/Scores-Djazz-MIDI/Allthethingsyouare/new/",
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 0.0, 392.0, 22.0 ],
					"types" : "TEXT",
					"varname" : "umenu[1]"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"source" : [ "obj-13", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"midpoints" : [ 678.0, 699.0, 40.5, 699.0 ],
					"source" : [ "obj-14", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"midpoints" : [ 191.5, 353.0, 321.5, 353.0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"midpoints" : [ 416.0, 567.5, 583.5, 567.5 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"midpoints" : [ 119.5, 352.5, 321.5, 352.5 ],
					"order" : 1,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"midpoints" : [ 119.5, 568.0, 583.5, 568.0 ],
					"order" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"source" : [ "obj-3", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-4", 1 ]
				}

			}
 ]
	}

}
