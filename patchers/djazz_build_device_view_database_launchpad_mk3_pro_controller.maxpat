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
		"rect" : [ -2026.0, -139.0, 828.0, 933.0 ],
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
					"id" : "obj-1646",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 60.0, 104.0, 129.0, 22.0 ],
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
					"patching_rect" : [ 60.0, 183.0, 419.0, 22.0 ],
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
					"patching_rect" : [ 60.0, 20.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-1643",
					"index" : 1,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 192.0, 700.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-291",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 192.0, 652.0, 71.0, 22.0 ],
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
					"patching_rect" : [ 60.0, 266.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 0.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 60.0, 310.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 44.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 60.0, 354.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 88.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 60.0, 398.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 132.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 60.0, 442.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 176.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 60.0, 486.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 220.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 60.0, 530.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 264.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 60.0, 574.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 308.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 104.0, 266.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 44.0, 0.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 104.0, 310.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 44.0, 44.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 104.0, 354.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 44.0, 88.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 104.0, 398.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 44.0, 132.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 104.0, 442.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 44.0, 176.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 104.0, 486.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 44.0, 220.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 104.0, 530.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 44.0, 264.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 104.0, 574.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 44.0, 308.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 148.0, 266.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 0.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 148.0, 310.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 44.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 148.0, 354.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 88.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 148.0, 398.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 132.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 148.0, 442.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 176.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 148.0, 486.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 220.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 148.0, 530.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 264.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 148.0, 574.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 88.0, 308.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 192.0, 266.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 132.0, 0.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 192.0, 310.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 132.0, 44.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 192.0, 354.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 132.0, 88.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 192.0, 398.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 132.0, 132.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 192.0, 442.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 132.0, 176.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 192.0, 486.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 132.0, 220.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 192.0, 530.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 132.0, 264.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 192.0, 574.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 132.0, 308.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 236.0, 266.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.0, 0.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 236.0, 310.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.0, 44.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 236.0, 354.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.0, 88.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 236.0, 398.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.0, 132.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 236.0, 442.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.0, 176.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 236.0, 486.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.0, 220.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 236.0, 530.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.0, 264.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 236.0, 574.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.0, 308.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 280.0, 266.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 220.0, 0.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 280.0, 310.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 220.0, 44.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 280.0, 354.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 220.0, 88.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 280.0, 398.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 220.0, 132.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 280.0, 442.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 220.0, 176.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 280.0, 486.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 220.0, 220.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 280.0, 530.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 220.0, 264.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 280.0, 574.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 220.0, 308.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 324.0, 266.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 0.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 324.0, 310.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 44.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 324.0, 354.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 88.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 324.0, 398.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 132.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 324.0, 442.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 176.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 324.0, 486.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 220.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 324.0, 530.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 264.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 324.0, 574.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 264.0, 308.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 368.0, 266.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 308.0, 0.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 368.0, 310.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 308.0, 44.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 368.0, 354.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 308.0, 88.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 368.0, 398.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 308.0, 132.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 368.0, 442.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 308.0, 176.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 368.0, 486.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 308.0, 220.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 368.0, 530.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 308.0, 264.0, 44.0, 44.0 ],
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
					"patching_rect" : [ 368.0, 574.0, 44.0, 44.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 308.0, 308.0, 44.0, 44.0 ],
					"text" : "18",
					"texton" : "18",
					"usebgoncolor" : 1,
					"varname" : "18"
				}

			}
 ],
		"lines" : [ 			{
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
					"destination" : [ "obj-1643", 0 ],
					"source" : [ "obj-291", 0 ]
				}

			}
 ]
	}

}
