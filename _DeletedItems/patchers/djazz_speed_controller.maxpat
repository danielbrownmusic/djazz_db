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
		"rect" : [ 1877.0, 781.0, 806.0, 510.0 ],
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
					"id" : "obj-2",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 182.600002110004425, 28.940930306280165, 36.0, 33.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 120.600002110004482, 0.837539131400263, 36.0, 33.0 ],
					"text" : "4",
					"texton" : "4",
					"varname" : "quadruple_speed"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 135.600002110004425, 28.940930306280165, 36.0, 33.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 80.733334740002988, 0.837539131400263, 36.0, 33.0 ],
					"text" : "3",
					"texton" : "3",
					"varname" : "triple_speed"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 92.0, 28.940930306280165, 36.0, 33.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 40.866667370001494, 0.837539131400263, 36.0, 33.0 ],
					"text" : "2",
					"texton" : "2",
					"varname" : "double_speed"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "textbutton",
					"mode" : 1,
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 50.0, 28.940930306280165, 36.0, 33.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1.0, 0.837539131400263, 36.0, 33.0 ],
					"text" : "1/2",
					"texton" : "1/2",
					"varname" : "half_speed"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 262.40000182390213, 28.940930306280165, 56.0, 22.0 ],
					"restore" : 					{
						"double_speed" : [ 0 ],
						"half_speed" : [ 0 ],
						"quadruple_speed" : [ 0 ],
						"triple_speed" : [ 0 ]
					}
,
					"text" : "autopattr",
					"varname" : "u601008832"
				}

			}
 ],
		"lines" : [  ],
		"dependency_cache" : [  ],
		"autosave" : 0,
		"textcolor_inverse" : [ 0.968627450980392, 0.968627450980392, 0.968627450980392, 1.0 ],
		"bgcolor" : [ 0.525490196078431, 0.541176470588235, 0.890196078431372, 1.0 ]
	}

}
