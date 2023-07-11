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
		"rect" : [ 59.0, 119.0, 312.0, 168.0 ],
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
					"comment" : "(symbol) full path of song folder",
					"id" : "obj-1",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 22.0, 103.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 22.0, 25.0, 35.0, 22.0 ],
					"text" : "clear"
				}

			}
, 			{
				"box" : 				{
					"autopopulate" : 1,
					"id" : "obj-4",
					"items" : [ "BluesFamaj-new-2016.01.29-09h32.txt", ",", "BluesFamaj-new-2016.01.29-12h24.txt", ",", "BluesFamaj-new-2016.01.29-12h25.txt", ",", "BluesFamaj-new-2016.01.29-12h26.txt", ",", "BluesFamaj-new-2016.01.30-08h36.txt", ",", "BluesFamaj-new-2016.01.30-09h02.txt", ",", "BluesFamaj-new-2016.01.30-09h05.txt", ",", "BluesFamaj-new-2016.01.30-09h06.txt", ",", "BluesFamaj-new-2016.01.30-09h07.txt", ",", "BluesFamaj-new-2016.01.30-09h09.txt", ",", "BluesFamaj-new-2016.01.30-09h10.txt", ",", "BluesFamaj-new-2016.01.30-09h11.txt", ",", "BluesFamaj-new-2016.01.30-09h12.txt", ",", "BluesFamaj-new-2016.01.30-09h13.txt", ",", "BluesFamaj-new-2016.01.30-09h14.txt", ",", "BluesFamaj-new-2016.01.30-09h16.txt", ",", "BluesFamaj-new-2016.01.30-09h17.txt", ",", "BluesFamaj-new-2016.01.30-09h19.txt", ",", "BluesFamaj-new-2016.01.30-09h36.txt", ",", "BluesFamaj-new-2016.01.30-09h37.txt", ",", "BluesFamaj-new-2016.01.30-09h57twist.txt", ",", "BluesFamaj-new-2016.01.30-10h29shuffle.txt", ",", "BluesFamaj-new-2016.05.04-09h27.txt", ",", "BluesFamaj-new-2016.05.04-09h34.txt", ",", "BluesFamaj-new-2016.05.04-10h16.txt", ",", "BluesFamaj-new-2016.05.04-10h17.txt", ",", "BluesFamaj-new-2021.11.23-12h59.txt", ",", "BluesFamaj-new-2021.11.23-13h00.txt" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 22.0, 62.0, 241.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Packages/Djazz MIDI 2023/BluesFamaj/new/",
					"presentation" : 1,
					"presentation_rect" : [ 22.0, 62.0, 241.0, 22.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
 ],
		"dependency_cache" : [  ],
		"autosave" : 0
	}

}
