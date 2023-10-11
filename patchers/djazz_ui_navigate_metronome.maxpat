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
		"rect" : [ 1262.0, 525.0, 1101.0, 699.0 ],
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
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 127.0, 19.0, 56.0, 22.0 ],
					"restore" : 					{
						"active" : [ 0 ],
						"tempo" : [ 0.0 ]
					}
,
					"text" : "autopattr",
					"varname" : "u873012208"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "led",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 14.213877700209196, 19.0, 22.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 0.0, 32.0, 32.0 ],
					"style" : "default",
					"varname" : "active"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.223529411764706, 0.168627450980392, 0.066666666666667, 1.0 ],
					"fontsize" : 18.0,
					"format" : 6,
					"id" : "obj-10",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 51.713877700209196, 19.0, 64.0, 29.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 42.0, 1.5, 78.0, 29.0 ],
					"varname" : "tempo"
				}

			}
 ],
		"lines" : [  ],
		"dependency_cache" : [  ],
		"autosave" : 0,
		"color" : [ 0.870588235294118, 0.682352941176471, 0.341176470588235, 1.0 ],
		"bgcolor" : [ 0.329411764705882, 0.76078431372549, 0.490196078431373, 1.0 ],
		"editing_bgcolor" : [ 0.329411764705882, 0.76078431372549, 0.490196078431373, 1.0 ]
	}

}
