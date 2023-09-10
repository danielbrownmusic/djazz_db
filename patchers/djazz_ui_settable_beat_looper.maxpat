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
		"rect" : [ 231.0, 313.0, 893.0, 605.0 ],
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
					"id" : "obj-9",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 406.0, 143.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"bubblesize" : 14,
					"id" : "obj-5",
					"maxclass" : "preset",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "preset", "int", "preset", "int", "" ],
					"patching_rect" : [ 406.0, 73.0, 212.0, 32.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 172.0, 8.0, 149.0, 22.0 ],
					"preset_data" : [ 						{
							"number" : 1,
							"data" : [ 5, "obj-9", "number", "int", 1 ]
						}
, 						{
							"number" : 2,
							"data" : [ 5, "obj-9", "number", "int", 2 ]
						}
, 						{
							"number" : 3,
							"data" : [ 5, "obj-9", "number", "int", 3 ]
						}
, 						{
							"number" : 4,
							"data" : [ 5, "obj-9", "number", "int", 4 ]
						}
, 						{
							"number" : 5,
							"data" : [ 5, "obj-9", "number", "int", 5 ]
						}
, 						{
							"number" : 6,
							"data" : [ 5, "obj-9", "number", "int", 6 ]
						}
, 						{
							"number" : 7,
							"data" : [ 5, "obj-9", "number", "int", 7 ]
						}
, 						{
							"number" : 8,
							"data" : [ 5, "obj-9", "number", "int", 8 ]
						}
 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-85",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 299.0, 192.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-83",
					"maxclass" : "led",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offcolor" : [ 0.07843137254902, 0.482352941176471, 0.474509803921569, 1.0 ],
					"oncolor" : [ 0.094117647058824, 0.894117647058824, 1.0, 1.0 ],
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 299.0, 73.0, 51.0, 51.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 144.0, 8.0, 22.0, 22.0 ],
					"varname" : "length"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-82",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 406.0, 200.0, 41.0, 22.0 ],
					"text" : "set $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-80",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 299.0, 250.0, 46.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 92.0, 8.0, 46.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-122",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 27.0, 404.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-1",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 36.0, 26.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "led",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offcolor" : [ 0.427450980392157, 0.411764705882353, 0.003921568627451, 1.0 ],
					"oncolor" : [ 1.0, 0.968627450980392, 0.0, 1.0 ],
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 97.0, 107.0, 51.0, 51.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 38.0, 8.0, 22.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "led",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offcolor" : [ 0.572549019607843, 0.070588235294118, 0.070588235294118, 1.0 ],
					"oncolor" : [ 1.0, 0.023529411764706, 0.023529411764706, 1.0 ],
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 36.0, 107.0, 51.0, 51.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 9.0, 8.0, 22.0, 22.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-82", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-85", 0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-85", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-82", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [  ],
		"autosave" : 0,
		"bgcolor" : [ 0.329411764705882, 0.349019607843137, 0.76078431372549, 1.0 ],
		"editing_bgcolor" : [ 0.329411764705882, 0.349019607843137, 0.76078431372549, 1.0 ]
	}

}
