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
		"rect" : [ 42.0, 819.0, 688.0, 236.0 ],
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
					"id" : "obj-10",
					"linecount" : 11,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 479.0, 93.0, 179.0, 167.0 ],
					"text" : "VIEW SURFACE PARAMS\n(from in & out params, load)\n\n1. master chapter count\n2. master cbb/status list\n\n\n\n\n\n\n"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontsize" : 12.0,
					"id" : "obj-57",
					"linecount" : 11,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 4.25, 89.5, 237.0, 154.0 ],
					"text" : "CTRL SURFACE PARAMS\n\n1. master bar\n2. master chapter\n3. master loop chapter button\n\n2. cbb view params\n3. tempo\n4. metro on/off\n5. speed button\n6. loop length button"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 254.5, 252.0, 214.0, 60.0 ],
					"text" : "OUT PARAMS (FROM MODEL)\n\nbeat just played\ntempo just played"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"linecount" : 9,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 267.0, 325.0, 169.0, 127.0 ],
					"text" : "THRU PARAMS (TO MODEL)\n\n1. beat in\n2. tempo\n3. bangs per tap (count)\n4. loop record\n5. loop play\n6. loop section min beat\n7. loop section max beat"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"linecount" : 11,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 254.5, 93.0, 214.0, 154.0 ],
					"text" : "IN PARAMS (FROM CTRL)\n(these are the params that must be\n saved in a pattrstorage preset)\n\n1. beat\n2. tempo\n3. speed\n4. loop length\n5. loop section start beat\n6. loop section end beat\n7. score file"
				}

			}
 ],
		"lines" : [  ],
		"dependency_cache" : [  ],
		"autosave" : 0
	}

}
