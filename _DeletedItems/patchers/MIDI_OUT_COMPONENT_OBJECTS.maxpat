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
		"rect" : [ 1408.0, 201.0, 992.0, 914.0 ],
		"bglocked" : 1,
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
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 336.0, 461.1899340779662, 257.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_window_slot_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_window_slot_components.js",
					"varname" : "djazz_midi_out_effect_slot[2]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 245.0, 671.0, 153.0, 22.0 ],
					"text" : "djazz_pitch_shift_controller",
					"varname" : "djazz_pitch_shift[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.0, 626.0, 125.0, 22.0 ],
					"text" : "djazz_add_semitones",
					"varname" : "djazz_add_semitones"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 43.0, 671.0, 167.0, 22.0 ],
					"text" : "djazz_add_octaves_controller",
					"varname" : "djazz_add_octaves[1]"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.701960784313725, 0.529411764705882, 0.290196078431373, 1.0 ],
					"id" : "obj-52",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 651.142439778224798, 507.1899340779662, 295.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_view_window_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_view_window_components.js",
					"varname" : "djazz_midi_out_view_effect_slot[5]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-53",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 651.142439778224798, 416.0, 283.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_view_window_list_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_view_window_list_components.js",
					"varname" : "djazz_midi_out_view_effect_slot[6]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-54",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 651.142439778224798, 325.620131844067373, 295.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_view_window_bank_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_view_window_bank_components.js",
					"varname" : "midi_out_1[3]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-55",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 651.142439778224798, 461.1899340779662, 287.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_view_window_slot_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_view_window_slot_components.js",
					"varname" : "djazz_midi_out_view_effect_slot[7]"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.701960784313725, 0.529411764705882, 0.290196078431373, 1.0 ],
					"id" : "obj-57",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 651.142439778224798, 370.810065922033687, 295.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_view_window_track_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_view_window_track_components.js",
					"varname" : "djazz_midi_out_view_track[2]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-63",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 336.142439778224798, 416.0, 272.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_view_effect_list_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_view_effect_list_components.js",
					"varname" : "djazz_midi_out_view_effect_slot[8]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-72",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 336.142439778224798, 325.620131844067373, 276.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_view_bank_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_view_bank_components.js",
					"varname" : "midi_out_1[4]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-80",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.0, 325.620131844067373, 246.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_bank_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_bank_components.js",
					"varname" : "djazz_midi_out_bank[2]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-81",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.0, 416.0, 246.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_effect_list_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_effect_list_components.js",
					"varname" : "djazz_midi_out_effect_list[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-82",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.0, 461.1899340779662, 246.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_midi_out_effect_slot_components.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_midi_out_effect_slot_components.js",
					"varname" : "djazz_midi_out_effect_slot[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-50",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 468.142439778224798, 227.1899340779662, 199.0, 22.0 ],
					"text" : "djazz_midi_out_view_window",
					"varname" : "djazz_midi_out_view_effect_slot[4]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-45",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 468.142439778224798, 136.0, 187.0, 22.0 ],
					"text" : "djazz_midi_out_view_window_list",
					"varname" : "djazz_midi_out_view_effect_slot[2]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-46",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 468.142439778224798, 45.620131844067373, 199.0, 22.0 ],
					"text" : "djazz_midi_out_view_window_bank",
					"varname" : "midi_out_1[2]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-47",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 468.142439778224798, 181.1899340779662, 191.0, 22.0 ],
					"text" : "djazz_midi_out_view_window_slot",
					"varname" : "djazz_midi_out_view_effect_slot[3]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-49",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 468.142439778224798, 90.810065922033687, 199.0, 22.0 ],
					"text" : "djazz_midi_out_view_window_track",
					"varname" : "djazz_midi_out_view_track[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-35",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 238.142439778224798, 45.620131844067373, 180.0, 22.0 ],
					"text" : "djazz_midi_out_view_bank",
					"varname" : "midi_out_1[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 43.0, 45.620131844067373, 150.0, 22.0 ],
					"text" : "djazz_midi_out_bank",
					"varname" : "djazz_midi_out_bank[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.0, 136.0, 150.0, 22.0 ],
					"text" : "djazz_midi_out_effect_list",
					"varname" : "djazz_midi_out_effect_list"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.0, 181.1899340779662, 150.0, 22.0 ],
					"text" : "djazz_midi_out_effect_slot",
					"varname" : "djazz_midi_out_effect_slot"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.0, 90.810065922033687, 150.0, 22.0 ],
					"text" : "djazz_midi_out_track",
					"varname" : "djazz_midi_out_track"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 238.142439778224798, 181.1899340779662, 180.0, 22.0 ],
					"text" : "djazz_midi_out_view_effect_slot",
					"varname" : "djazz_midi_out_view_effect_slot"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 0,
					"patching_rect" : [ 238.142439778224798, 90.810065922033687, 180.0, 22.0 ],
					"text" : "djazz_midi_out_view_track",
					"varname" : "djazz_midi_out_view_track"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.36078431372549, 0.772549019607843, 0.815686274509804, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-115",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 9.0, 9.0, 696.5, 270.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.462745098039216, 0.694117647058824, 0.588235294117647, 1.0 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-8",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 8.0, 587.5, 766.0, 157.5 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.313725490196078, 0.815686274509804, 0.788235294117647, 0.55 ],
					"border" : 2,
					"bordercolor" : [ 0.16078431372549, 0.180392156862745, 0.184313725490196, 1.0 ],
					"id" : "obj-87",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 8.0, 289.0, 981.5, 270.0 ],
					"proportion" : 0.5,
					"prototypename" : "clear_with_black_border"
				}

			}
 ],
		"lines" : [  ],
		"bgcolor" : [ 0.298039215686275, 0.309803921568627, 0.294117647058824, 1.0 ],
		"editing_bgcolor" : [ 0.298039215686275, 0.309803921568627, 0.294117647058824, 1.0 ]
	}

}
