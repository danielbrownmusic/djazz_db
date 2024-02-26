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
		"rect" : [ -2505.0, 0.0, 2141.0, 1145.0 ],
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
					"id" : "obj-20",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 0.0, 0.0, 640.0, 480.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-15",
									"linecount" : 2,
									"maxclass" : "newobj",
									"numinlets" : 4,
									"numoutlets" : 0,
									"patching_rect" : [ 50.0, 137.833346179382261, 156.0, 35.0 ],
									"text" : "print TRIED TO CHANGE OUTPUTMODE!"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-14",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 109.833304643630981, 100.0, 128.0, 22.0 ],
									"text" : "routepass outputmode"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-16",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 109.833312999999976, 40.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-19",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 218.833312999999976, 232.833344000000011, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-15", 0 ],
									"source" : [ "obj-14", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"source" : [ "obj-14", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-14", 0 ],
									"source" : [ "obj-16", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 677.833304643630981, 20.833346179382261, 147.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p filter_pattrstorage_msgs"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-11",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_udp_send_view.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 1276.904728949069977, -78.317596884029399, 177.333334803581238, 93.333332300186157 ],
					"presentation" : 1,
					"presentation_rect" : [ 895.029533248931784, 149.801217428756843, 146.666667222976685, 75.999998450279236 ],
					"varname" : "udp_send",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 4,
					"outlettype" : [ "int", "int", "int", "int" ],
					"patching_rect" : [ 565.833278059959412, 75.999999284744263, 50.5, 22.0 ],
					"text" : "key"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-33",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 59.0, 119.0, 804.0, 893.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-13",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 5,
											"revision" : 5,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 0.0, 0.0, 640.0, 480.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-22",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 50.0, 100.0, 65.0, 22.0 ],
													"text" : "route clear"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-14",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 96.0, 376.5, 135.0, 22.0 ],
													"text" : "dict.unpack beat_count:"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-13",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 96.0, 292.25, 126.0, 22.0 ],
													"text" : "dict.unpack metadata:"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-11",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 96.0, 200.0, 77.0, 22.0 ],
													"text" : "dictionary $1"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-10",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 50.0, 40.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-12",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 96.0, 458.5, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-22", 0 ],
													"source" : [ "obj-10", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"source" : [ "obj-11", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-14", 0 ],
													"source" : [ "obj-13", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-12", 0 ],
													"source" : [ "obj-14", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-22", 1 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 29.0, 184.0, 92.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p get_end_beat"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-9",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 5,
											"revision" : 5,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 0.0, 0.0, 640.0, 480.0 ],
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
										"boxes" : [ 											{
												"box" : 												{
													"id" : "obj-22",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 50.0, 100.0, 65.0, 22.0 ],
													"text" : "route clear"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-2",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 96.0, 177.5, 77.0, 22.0 ],
													"text" : "dictionary $1"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-4",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 96.0, 336.0, 109.0, 22.0 ],
													"text" : "dict.unpack tempo:"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-11",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 96.0, 256.75, 126.0, 22.0 ],
													"text" : "dict.unpack metadata:"
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-5",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 50.000006199999802, 40.0, 30.0, 30.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "",
													"id" : "obj-8",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 96.000006199999802, 418.0, 30.0, 30.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-4", 0 ],
													"source" : [ "obj-11", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-2", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-2", 0 ],
													"source" : [ "obj-22", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-8", 0 ],
													"source" : [ "obj-4", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-22", 0 ],
													"source" : [ "obj-5", 0 ]
												}

											}
 ]
									}
,
									"patching_rect" : [ 217.849999999999994, 184.0, 75.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p get_tempo"
								}

							}
, 							{
								"box" : 								{
									"comment" : "(symbol) dict name",
									"id" : "obj-3",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 29.0, 22.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "intial values to params",
									"id" : "obj-6",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 29.0, 458.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-7",
									"linecount" : 2,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 217.849999999999994, 291.75, 135.0, 35.0 ],
									"text" : "master::params::tempo $1"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"linecount" : 2,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 29.0, 291.75, 152.0, 35.0 ],
									"text" : "master::params::end_beat $1"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"source" : [ "obj-13", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-13", 0 ],
									"order" : 1,
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-9", 0 ],
									"order" : 0,
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-6", 0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-6", 0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-7", 0 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 102.333195209503174, 336.250000533546427, 122.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p load_initial_params"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-48",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_view_session_file.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 913.166605234146118, -48.333333253860474, 157.33333420753479, 37.333330631256104 ],
					"presentation" : 1,
					"presentation_rect" : [ 19.696199041396994, 6.666668176651001, 157.33333420753479, 37.333330631256104 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-45",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 5,
							"revision" : 5,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 59.0, 119.0, 685.0, 705.0 ],
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
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-42",
									"maxclass" : "dict.view",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 375.000010649363276, 490.333349227905273, 189.0, 173.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-36",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "bang", "" ],
									"patching_rect" : [ 122.0, 278.0, 92.0, 22.0 ],
									"text" : "t b s"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-37",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 122.0, 436.0, 116.0, 22.0 ],
									"text" : "VIEW_SONG_DICT"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 195.0, 340.0, 92.0, 22.0 ],
									"text" : "import $1, bang"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-38",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 50.0, 100.0, 91.0, 22.0 ],
									"text" : "routepass clear"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-39",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 122.0, 230.0, 197.0, 22.0 ],
									"saved_object_attributes" : 									{
										"filename" : "djazz_get_navigation_file_path.js",
										"parameter_enable" : 0
									}
,
									"text" : "js djazz_get_navigation_file_path.js"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-31",
									"linecount" : 2,
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "", "", "" ],
									"patching_rect" : [ 351.666677633921381, 287.166662128227244, 65.666666030883789, 35.0 ],
									"restore" : [ 										{
											"metadata" : 											{
												"name" : "AutumnleavesDoMin",
												"tempo" : 182,
												"beats_per_measure" : 4,
												"chapter_count" : 2,
												"beat_count" : 192
											}
,
											"chapters" : 											{
												"0" : 												{
													"min_measure" : 0,
													"max_measure" : 32,
													"min_beat" : 0,
													"max_beat" : 128
												}
,
												"1" : 												{
													"min_measure" : 32,
													"max_measure" : 48,
													"min_beat" : 128,
													"max_beat" : 192
												}

											}
,
											"measures" : 											{
												"0" : 												{
													"min_beat" : 0,
													"length_in_beats" : 4
												}
,
												"1" : 												{
													"min_beat" : 4,
													"length_in_beats" : 4
												}
,
												"2" : 												{
													"min_beat" : 8,
													"length_in_beats" : 4
												}
,
												"3" : 												{
													"min_beat" : 12,
													"length_in_beats" : 4
												}
,
												"4" : 												{
													"min_beat" : 16,
													"length_in_beats" : 4
												}
,
												"5" : 												{
													"min_beat" : 20,
													"length_in_beats" : 4
												}
,
												"6" : 												{
													"min_beat" : 24,
													"length_in_beats" : 4
												}
,
												"7" : 												{
													"min_beat" : 28,
													"length_in_beats" : 4
												}
,
												"8" : 												{
													"min_beat" : 32,
													"length_in_beats" : 4
												}
,
												"9" : 												{
													"min_beat" : 36,
													"length_in_beats" : 4
												}
,
												"10" : 												{
													"min_beat" : 40,
													"length_in_beats" : 4
												}
,
												"11" : 												{
													"min_beat" : 44,
													"length_in_beats" : 4
												}
,
												"12" : 												{
													"min_beat" : 48,
													"length_in_beats" : 4
												}
,
												"13" : 												{
													"min_beat" : 52,
													"length_in_beats" : 4
												}
,
												"14" : 												{
													"min_beat" : 56,
													"length_in_beats" : 4
												}
,
												"15" : 												{
													"min_beat" : 60,
													"length_in_beats" : 4
												}
,
												"16" : 												{
													"min_beat" : 64,
													"length_in_beats" : 4
												}
,
												"17" : 												{
													"min_beat" : 68,
													"length_in_beats" : 4
												}
,
												"18" : 												{
													"min_beat" : 72,
													"length_in_beats" : 4
												}
,
												"19" : 												{
													"min_beat" : 76,
													"length_in_beats" : 4
												}
,
												"20" : 												{
													"min_beat" : 80,
													"length_in_beats" : 4
												}
,
												"21" : 												{
													"min_beat" : 84,
													"length_in_beats" : 4
												}
,
												"22" : 												{
													"min_beat" : 88,
													"length_in_beats" : 4
												}
,
												"23" : 												{
													"min_beat" : 92,
													"length_in_beats" : 4
												}
,
												"24" : 												{
													"min_beat" : 96,
													"length_in_beats" : 4
												}
,
												"25" : 												{
													"min_beat" : 100,
													"length_in_beats" : 4
												}
,
												"26" : 												{
													"min_beat" : 104,
													"length_in_beats" : 4
												}
,
												"27" : 												{
													"min_beat" : 108,
													"length_in_beats" : 4
												}
,
												"28" : 												{
													"min_beat" : 112,
													"length_in_beats" : 4
												}
,
												"29" : 												{
													"min_beat" : 116,
													"length_in_beats" : 4
												}
,
												"30" : 												{
													"min_beat" : 120,
													"length_in_beats" : 4
												}
,
												"31" : 												{
													"min_beat" : 124,
													"length_in_beats" : 4
												}
,
												"32" : 												{
													"min_beat" : 128,
													"length_in_beats" : 4
												}
,
												"33" : 												{
													"min_beat" : 132,
													"length_in_beats" : 4
												}
,
												"34" : 												{
													"min_beat" : 136,
													"length_in_beats" : 4
												}
,
												"35" : 												{
													"min_beat" : 140,
													"length_in_beats" : 4
												}
,
												"36" : 												{
													"min_beat" : 144,
													"length_in_beats" : 4
												}
,
												"37" : 												{
													"min_beat" : 148,
													"length_in_beats" : 4
												}
,
												"38" : 												{
													"min_beat" : 152,
													"length_in_beats" : 4
												}
,
												"39" : 												{
													"min_beat" : 156,
													"length_in_beats" : 4
												}
,
												"40" : 												{
													"min_beat" : 160,
													"length_in_beats" : 4
												}
,
												"41" : 												{
													"min_beat" : 164,
													"length_in_beats" : 4
												}
,
												"42" : 												{
													"min_beat" : 168,
													"length_in_beats" : 4
												}
,
												"43" : 												{
													"min_beat" : 172,
													"length_in_beats" : 4
												}
,
												"44" : 												{
													"min_beat" : 176,
													"length_in_beats" : 4
												}
,
												"45" : 												{
													"min_beat" : 180,
													"length_in_beats" : 4
												}
,
												"46" : 												{
													"min_beat" : 184,
													"length_in_beats" : 4
												}
,
												"47" : 												{
													"min_beat" : 188,
													"length_in_beats" : 4
												}

											}
,
											"beats" : 											{
												"0" : 												{
													"chapter" : 0,
													"measure" : 0,
													"position" : 0
												}
,
												"1" : 												{
													"chapter" : 0,
													"measure" : 0,
													"position" : 1
												}
,
												"2" : 												{
													"chapter" : 0,
													"measure" : 0,
													"position" : 2
												}
,
												"3" : 												{
													"chapter" : 0,
													"measure" : 0,
													"position" : 3
												}
,
												"4" : 												{
													"chapter" : 0,
													"measure" : 1,
													"position" : 0
												}
,
												"5" : 												{
													"chapter" : 0,
													"measure" : 1,
													"position" : 1
												}
,
												"6" : 												{
													"chapter" : 0,
													"measure" : 1,
													"position" : 2
												}
,
												"7" : 												{
													"chapter" : 0,
													"measure" : 1,
													"position" : 3
												}
,
												"8" : 												{
													"chapter" : 0,
													"measure" : 2,
													"position" : 0
												}
,
												"9" : 												{
													"chapter" : 0,
													"measure" : 2,
													"position" : 1
												}
,
												"10" : 												{
													"chapter" : 0,
													"measure" : 2,
													"position" : 2
												}
,
												"11" : 												{
													"chapter" : 0,
													"measure" : 2,
													"position" : 3
												}
,
												"12" : 												{
													"chapter" : 0,
													"measure" : 3,
													"position" : 0
												}
,
												"13" : 												{
													"chapter" : 0,
													"measure" : 3,
													"position" : 1
												}
,
												"14" : 												{
													"chapter" : 0,
													"measure" : 3,
													"position" : 2
												}
,
												"15" : 												{
													"chapter" : 0,
													"measure" : 3,
													"position" : 3
												}
,
												"16" : 												{
													"chapter" : 0,
													"measure" : 4,
													"position" : 0
												}
,
												"17" : 												{
													"chapter" : 0,
													"measure" : 4,
													"position" : 1
												}
,
												"18" : 												{
													"chapter" : 0,
													"measure" : 4,
													"position" : 2
												}
,
												"19" : 												{
													"chapter" : 0,
													"measure" : 4,
													"position" : 3
												}
,
												"20" : 												{
													"chapter" : 0,
													"measure" : 5,
													"position" : 0
												}
,
												"21" : 												{
													"chapter" : 0,
													"measure" : 5,
													"position" : 1
												}
,
												"22" : 												{
													"chapter" : 0,
													"measure" : 5,
													"position" : 2
												}
,
												"23" : 												{
													"chapter" : 0,
													"measure" : 5,
													"position" : 3
												}
,
												"24" : 												{
													"chapter" : 0,
													"measure" : 6,
													"position" : 0
												}
,
												"25" : 												{
													"chapter" : 0,
													"measure" : 6,
													"position" : 1
												}
,
												"26" : 												{
													"chapter" : 0,
													"measure" : 6,
													"position" : 2
												}
,
												"27" : 												{
													"chapter" : 0,
													"measure" : 6,
													"position" : 3
												}
,
												"28" : 												{
													"chapter" : 0,
													"measure" : 7,
													"position" : 0
												}
,
												"29" : 												{
													"chapter" : 0,
													"measure" : 7,
													"position" : 1
												}
,
												"30" : 												{
													"chapter" : 0,
													"measure" : 7,
													"position" : 2
												}
,
												"31" : 												{
													"chapter" : 0,
													"measure" : 7,
													"position" : 3
												}
,
												"32" : 												{
													"chapter" : 0,
													"measure" : 8,
													"position" : 0
												}
,
												"33" : 												{
													"chapter" : 0,
													"measure" : 8,
													"position" : 1
												}
,
												"34" : 												{
													"chapter" : 0,
													"measure" : 8,
													"position" : 2
												}
,
												"35" : 												{
													"chapter" : 0,
													"measure" : 8,
													"position" : 3
												}
,
												"36" : 												{
													"chapter" : 0,
													"measure" : 9,
													"position" : 0
												}
,
												"37" : 												{
													"chapter" : 0,
													"measure" : 9,
													"position" : 1
												}
,
												"38" : 												{
													"chapter" : 0,
													"measure" : 9,
													"position" : 2
												}
,
												"39" : 												{
													"chapter" : 0,
													"measure" : 9,
													"position" : 3
												}
,
												"40" : 												{
													"chapter" : 0,
													"measure" : 10,
													"position" : 0
												}
,
												"41" : 												{
													"chapter" : 0,
													"measure" : 10,
													"position" : 1
												}
,
												"42" : 												{
													"chapter" : 0,
													"measure" : 10,
													"position" : 2
												}
,
												"43" : 												{
													"chapter" : 0,
													"measure" : 10,
													"position" : 3
												}
,
												"44" : 												{
													"chapter" : 0,
													"measure" : 11,
													"position" : 0
												}
,
												"45" : 												{
													"chapter" : 0,
													"measure" : 11,
													"position" : 1
												}
,
												"46" : 												{
													"chapter" : 0,
													"measure" : 11,
													"position" : 2
												}
,
												"47" : 												{
													"chapter" : 0,
													"measure" : 11,
													"position" : 3
												}
,
												"48" : 												{
													"chapter" : 0,
													"measure" : 12,
													"position" : 0
												}
,
												"49" : 												{
													"chapter" : 0,
													"measure" : 12,
													"position" : 1
												}
,
												"50" : 												{
													"chapter" : 0,
													"measure" : 12,
													"position" : 2
												}
,
												"51" : 												{
													"chapter" : 0,
													"measure" : 12,
													"position" : 3
												}
,
												"52" : 												{
													"chapter" : 0,
													"measure" : 13,
													"position" : 0
												}
,
												"53" : 												{
													"chapter" : 0,
													"measure" : 13,
													"position" : 1
												}
,
												"54" : 												{
													"chapter" : 0,
													"measure" : 13,
													"position" : 2
												}
,
												"55" : 												{
													"chapter" : 0,
													"measure" : 13,
													"position" : 3
												}
,
												"56" : 												{
													"chapter" : 0,
													"measure" : 14,
													"position" : 0
												}
,
												"57" : 												{
													"chapter" : 0,
													"measure" : 14,
													"position" : 1
												}
,
												"58" : 												{
													"chapter" : 0,
													"measure" : 14,
													"position" : 2
												}
,
												"59" : 												{
													"chapter" : 0,
													"measure" : 14,
													"position" : 3
												}
,
												"60" : 												{
													"chapter" : 0,
													"measure" : 15,
													"position" : 0
												}
,
												"61" : 												{
													"chapter" : 0,
													"measure" : 15,
													"position" : 1
												}
,
												"62" : 												{
													"chapter" : 0,
													"measure" : 15,
													"position" : 2
												}
,
												"63" : 												{
													"chapter" : 0,
													"measure" : 15,
													"position" : 3
												}
,
												"64" : 												{
													"chapter" : 0,
													"measure" : 16,
													"position" : 0
												}
,
												"65" : 												{
													"chapter" : 0,
													"measure" : 16,
													"position" : 1
												}
,
												"66" : 												{
													"chapter" : 0,
													"measure" : 16,
													"position" : 2
												}
,
												"67" : 												{
													"chapter" : 0,
													"measure" : 16,
													"position" : 3
												}
,
												"68" : 												{
													"chapter" : 0,
													"measure" : 17,
													"position" : 0
												}
,
												"69" : 												{
													"chapter" : 0,
													"measure" : 17,
													"position" : 1
												}
,
												"70" : 												{
													"chapter" : 0,
													"measure" : 17,
													"position" : 2
												}
,
												"71" : 												{
													"chapter" : 0,
													"measure" : 17,
													"position" : 3
												}
,
												"72" : 												{
													"chapter" : 0,
													"measure" : 18,
													"position" : 0
												}
,
												"73" : 												{
													"chapter" : 0,
													"measure" : 18,
													"position" : 1
												}
,
												"74" : 												{
													"chapter" : 0,
													"measure" : 18,
													"position" : 2
												}
,
												"75" : 												{
													"chapter" : 0,
													"measure" : 18,
													"position" : 3
												}
,
												"76" : 												{
													"chapter" : 0,
													"measure" : 19,
													"position" : 0
												}
,
												"77" : 												{
													"chapter" : 0,
													"measure" : 19,
													"position" : 1
												}
,
												"78" : 												{
													"chapter" : 0,
													"measure" : 19,
													"position" : 2
												}
,
												"79" : 												{
													"chapter" : 0,
													"measure" : 19,
													"position" : 3
												}
,
												"80" : 												{
													"chapter" : 0,
													"measure" : 20,
													"position" : 0
												}
,
												"81" : 												{
													"chapter" : 0,
													"measure" : 20,
													"position" : 1
												}
,
												"82" : 												{
													"chapter" : 0,
													"measure" : 20,
													"position" : 2
												}
,
												"83" : 												{
													"chapter" : 0,
													"measure" : 20,
													"position" : 3
												}
,
												"84" : 												{
													"chapter" : 0,
													"measure" : 21,
													"position" : 0
												}
,
												"85" : 												{
													"chapter" : 0,
													"measure" : 21,
													"position" : 1
												}
,
												"86" : 												{
													"chapter" : 0,
													"measure" : 21,
													"position" : 2
												}
,
												"87" : 												{
													"chapter" : 0,
													"measure" : 21,
													"position" : 3
												}
,
												"88" : 												{
													"chapter" : 0,
													"measure" : 22,
													"position" : 0
												}
,
												"89" : 												{
													"chapter" : 0,
													"measure" : 22,
													"position" : 1
												}
,
												"90" : 												{
													"chapter" : 0,
													"measure" : 22,
													"position" : 2
												}
,
												"91" : 												{
													"chapter" : 0,
													"measure" : 22,
													"position" : 3
												}
,
												"92" : 												{
													"chapter" : 0,
													"measure" : 23,
													"position" : 0
												}
,
												"93" : 												{
													"chapter" : 0,
													"measure" : 23,
													"position" : 1
												}
,
												"94" : 												{
													"chapter" : 0,
													"measure" : 23,
													"position" : 2
												}
,
												"95" : 												{
													"chapter" : 0,
													"measure" : 23,
													"position" : 3
												}
,
												"96" : 												{
													"chapter" : 0,
													"measure" : 24,
													"position" : 0
												}
,
												"97" : 												{
													"chapter" : 0,
													"measure" : 24,
													"position" : 1
												}
,
												"98" : 												{
													"chapter" : 0,
													"measure" : 24,
													"position" : 2
												}
,
												"99" : 												{
													"chapter" : 0,
													"measure" : 24,
													"position" : 3
												}
,
												"100" : 												{
													"chapter" : 0,
													"measure" : 25,
													"position" : 0
												}
,
												"101" : 												{
													"chapter" : 0,
													"measure" : 25,
													"position" : 1
												}
,
												"102" : 												{
													"chapter" : 0,
													"measure" : 25,
													"position" : 2
												}
,
												"103" : 												{
													"chapter" : 0,
													"measure" : 25,
													"position" : 3
												}
,
												"104" : 												{
													"chapter" : 0,
													"measure" : 26,
													"position" : 0
												}
,
												"105" : 												{
													"chapter" : 0,
													"measure" : 26,
													"position" : 1
												}
,
												"106" : 												{
													"chapter" : 0,
													"measure" : 26,
													"position" : 2
												}
,
												"107" : 												{
													"chapter" : 0,
													"measure" : 26,
													"position" : 3
												}
,
												"108" : 												{
													"chapter" : 0,
													"measure" : 27,
													"position" : 0
												}
,
												"109" : 												{
													"chapter" : 0,
													"measure" : 27,
													"position" : 1
												}
,
												"110" : 												{
													"chapter" : 0,
													"measure" : 27,
													"position" : 2
												}
,
												"111" : 												{
													"chapter" : 0,
													"measure" : 27,
													"position" : 3
												}
,
												"112" : 												{
													"chapter" : 0,
													"measure" : 28,
													"position" : 0
												}
,
												"113" : 												{
													"chapter" : 0,
													"measure" : 28,
													"position" : 1
												}
,
												"114" : 												{
													"chapter" : 0,
													"measure" : 28,
													"position" : 2
												}
,
												"115" : 												{
													"chapter" : 0,
													"measure" : 28,
													"position" : 3
												}
,
												"116" : 												{
													"chapter" : 0,
													"measure" : 29,
													"position" : 0
												}
,
												"117" : 												{
													"chapter" : 0,
													"measure" : 29,
													"position" : 1
												}
,
												"118" : 												{
													"chapter" : 0,
													"measure" : 29,
													"position" : 2
												}
,
												"119" : 												{
													"chapter" : 0,
													"measure" : 29,
													"position" : 3
												}
,
												"120" : 												{
													"chapter" : 0,
													"measure" : 30,
													"position" : 0
												}
,
												"121" : 												{
													"chapter" : 0,
													"measure" : 30,
													"position" : 1
												}
,
												"122" : 												{
													"chapter" : 0,
													"measure" : 30,
													"position" : 2
												}
,
												"123" : 												{
													"chapter" : 0,
													"measure" : 30,
													"position" : 3
												}
,
												"124" : 												{
													"chapter" : 0,
													"measure" : 31,
													"position" : 0
												}
,
												"125" : 												{
													"chapter" : 0,
													"measure" : 31,
													"position" : 1
												}
,
												"126" : 												{
													"chapter" : 0,
													"measure" : 31,
													"position" : 2
												}
,
												"127" : 												{
													"chapter" : 0,
													"measure" : 31,
													"position" : 3
												}
,
												"128" : 												{
													"chapter" : 1,
													"measure" : 0,
													"position" : 0
												}
,
												"129" : 												{
													"chapter" : 1,
													"measure" : 0,
													"position" : 1
												}
,
												"130" : 												{
													"chapter" : 1,
													"measure" : 0,
													"position" : 2
												}
,
												"131" : 												{
													"chapter" : 1,
													"measure" : 0,
													"position" : 3
												}
,
												"132" : 												{
													"chapter" : 1,
													"measure" : 1,
													"position" : 0
												}
,
												"133" : 												{
													"chapter" : 1,
													"measure" : 1,
													"position" : 1
												}
,
												"134" : 												{
													"chapter" : 1,
													"measure" : 1,
													"position" : 2
												}
,
												"135" : 												{
													"chapter" : 1,
													"measure" : 1,
													"position" : 3
												}
,
												"136" : 												{
													"chapter" : 1,
													"measure" : 2,
													"position" : 0
												}
,
												"137" : 												{
													"chapter" : 1,
													"measure" : 2,
													"position" : 1
												}
,
												"138" : 												{
													"chapter" : 1,
													"measure" : 2,
													"position" : 2
												}
,
												"139" : 												{
													"chapter" : 1,
													"measure" : 2,
													"position" : 3
												}
,
												"140" : 												{
													"chapter" : 1,
													"measure" : 3,
													"position" : 0
												}
,
												"141" : 												{
													"chapter" : 1,
													"measure" : 3,
													"position" : 1
												}
,
												"142" : 												{
													"chapter" : 1,
													"measure" : 3,
													"position" : 2
												}
,
												"143" : 												{
													"chapter" : 1,
													"measure" : 3,
													"position" : 3
												}
,
												"144" : 												{
													"chapter" : 1,
													"measure" : 4,
													"position" : 0
												}
,
												"145" : 												{
													"chapter" : 1,
													"measure" : 4,
													"position" : 1
												}
,
												"146" : 												{
													"chapter" : 1,
													"measure" : 4,
													"position" : 2
												}
,
												"147" : 												{
													"chapter" : 1,
													"measure" : 4,
													"position" : 3
												}
,
												"148" : 												{
													"chapter" : 1,
													"measure" : 5,
													"position" : 0
												}
,
												"149" : 												{
													"chapter" : 1,
													"measure" : 5,
													"position" : 1
												}
,
												"150" : 												{
													"chapter" : 1,
													"measure" : 5,
													"position" : 2
												}
,
												"151" : 												{
													"chapter" : 1,
													"measure" : 5,
													"position" : 3
												}
,
												"152" : 												{
													"chapter" : 1,
													"measure" : 6,
													"position" : 0
												}
,
												"153" : 												{
													"chapter" : 1,
													"measure" : 6,
													"position" : 1
												}
,
												"154" : 												{
													"chapter" : 1,
													"measure" : 6,
													"position" : 2
												}
,
												"155" : 												{
													"chapter" : 1,
													"measure" : 6,
													"position" : 3
												}
,
												"156" : 												{
													"chapter" : 1,
													"measure" : 7,
													"position" : 0
												}
,
												"157" : 												{
													"chapter" : 1,
													"measure" : 7,
													"position" : 1
												}
,
												"158" : 												{
													"chapter" : 1,
													"measure" : 7,
													"position" : 2
												}
,
												"159" : 												{
													"chapter" : 1,
													"measure" : 7,
													"position" : 3
												}
,
												"160" : 												{
													"chapter" : 1,
													"measure" : 8,
													"position" : 0
												}
,
												"161" : 												{
													"chapter" : 1,
													"measure" : 8,
													"position" : 1
												}
,
												"162" : 												{
													"chapter" : 1,
													"measure" : 8,
													"position" : 2
												}
,
												"163" : 												{
													"chapter" : 1,
													"measure" : 8,
													"position" : 3
												}
,
												"164" : 												{
													"chapter" : 1,
													"measure" : 9,
													"position" : 0
												}
,
												"165" : 												{
													"chapter" : 1,
													"measure" : 9,
													"position" : 1
												}
,
												"166" : 												{
													"chapter" : 1,
													"measure" : 9,
													"position" : 2
												}
,
												"167" : 												{
													"chapter" : 1,
													"measure" : 9,
													"position" : 3
												}
,
												"168" : 												{
													"chapter" : 1,
													"measure" : 10,
													"position" : 0
												}
,
												"169" : 												{
													"chapter" : 1,
													"measure" : 10,
													"position" : 1
												}
,
												"170" : 												{
													"chapter" : 1,
													"measure" : 10,
													"position" : 2
												}
,
												"171" : 												{
													"chapter" : 1,
													"measure" : 10,
													"position" : 3
												}
,
												"172" : 												{
													"chapter" : 1,
													"measure" : 11,
													"position" : 0
												}
,
												"173" : 												{
													"chapter" : 1,
													"measure" : 11,
													"position" : 1
												}
,
												"174" : 												{
													"chapter" : 1,
													"measure" : 11,
													"position" : 2
												}
,
												"175" : 												{
													"chapter" : 1,
													"measure" : 11,
													"position" : 3
												}
,
												"176" : 												{
													"chapter" : 1,
													"measure" : 12,
													"position" : 0
												}
,
												"177" : 												{
													"chapter" : 1,
													"measure" : 12,
													"position" : 1
												}
,
												"178" : 												{
													"chapter" : 1,
													"measure" : 12,
													"position" : 2
												}
,
												"179" : 												{
													"chapter" : 1,
													"measure" : 12,
													"position" : 3
												}
,
												"180" : 												{
													"chapter" : 1,
													"measure" : 13,
													"position" : 0
												}
,
												"181" : 												{
													"chapter" : 1,
													"measure" : 13,
													"position" : 1
												}
,
												"182" : 												{
													"chapter" : 1,
													"measure" : 13,
													"position" : 2
												}
,
												"183" : 												{
													"chapter" : 1,
													"measure" : 13,
													"position" : 3
												}
,
												"184" : 												{
													"chapter" : 1,
													"measure" : 14,
													"position" : 0
												}
,
												"185" : 												{
													"chapter" : 1,
													"measure" : 14,
													"position" : 1
												}
,
												"186" : 												{
													"chapter" : 1,
													"measure" : 14,
													"position" : 2
												}
,
												"187" : 												{
													"chapter" : 1,
													"measure" : 14,
													"position" : 3
												}
,
												"188" : 												{
													"chapter" : 1,
													"measure" : 15,
													"position" : 0
												}
,
												"189" : 												{
													"chapter" : 1,
													"measure" : 15,
													"position" : 1
												}
,
												"190" : 												{
													"chapter" : 1,
													"measure" : 15,
													"position" : 2
												}
,
												"191" : 												{
													"chapter" : 1,
													"measure" : 15,
													"position" : 3
												}

											}
,
											"grid" : 											{
												"0" : 												{
													"0" : 													{
														"0" : 0,
														"1" : 1,
														"2" : 2,
														"3" : 3
													}
,
													"1" : 													{
														"0" : 4,
														"1" : 5,
														"2" : 6,
														"3" : 7
													}
,
													"2" : 													{
														"0" : 8,
														"1" : 9,
														"2" : 10,
														"3" : 11
													}
,
													"3" : 													{
														"0" : 12,
														"1" : 13,
														"2" : 14,
														"3" : 15
													}
,
													"4" : 													{
														"0" : 16,
														"1" : 17,
														"2" : 18,
														"3" : 19
													}
,
													"5" : 													{
														"0" : 20,
														"1" : 21,
														"2" : 22,
														"3" : 23
													}
,
													"6" : 													{
														"0" : 24,
														"1" : 25,
														"2" : 26,
														"3" : 27
													}
,
													"7" : 													{
														"0" : 28,
														"1" : 29,
														"2" : 30,
														"3" : 31
													}
,
													"8" : 													{
														"0" : 32,
														"1" : 33,
														"2" : 34,
														"3" : 35
													}
,
													"9" : 													{
														"0" : 36,
														"1" : 37,
														"2" : 38,
														"3" : 39
													}
,
													"10" : 													{
														"0" : 40,
														"1" : 41,
														"2" : 42,
														"3" : 43
													}
,
													"11" : 													{
														"0" : 44,
														"1" : 45,
														"2" : 46,
														"3" : 47
													}
,
													"12" : 													{
														"0" : 48,
														"1" : 49,
														"2" : 50,
														"3" : 51
													}
,
													"13" : 													{
														"0" : 52,
														"1" : 53,
														"2" : 54,
														"3" : 55
													}
,
													"14" : 													{
														"0" : 56,
														"1" : 57,
														"2" : 58,
														"3" : 59
													}
,
													"15" : 													{
														"0" : 60,
														"1" : 61,
														"2" : 62,
														"3" : 63
													}
,
													"16" : 													{
														"0" : 64,
														"1" : 65,
														"2" : 66,
														"3" : 67
													}
,
													"17" : 													{
														"0" : 68,
														"1" : 69,
														"2" : 70,
														"3" : 71
													}
,
													"18" : 													{
														"0" : 72,
														"1" : 73,
														"2" : 74,
														"3" : 75
													}
,
													"19" : 													{
														"0" : 76,
														"1" : 77,
														"2" : 78,
														"3" : 79
													}
,
													"20" : 													{
														"0" : 80,
														"1" : 81,
														"2" : 82,
														"3" : 83
													}
,
													"21" : 													{
														"0" : 84,
														"1" : 85,
														"2" : 86,
														"3" : 87
													}
,
													"22" : 													{
														"0" : 88,
														"1" : 89,
														"2" : 90,
														"3" : 91
													}
,
													"23" : 													{
														"0" : 92,
														"1" : 93,
														"2" : 94,
														"3" : 95
													}
,
													"24" : 													{
														"0" : 96,
														"1" : 97,
														"2" : 98,
														"3" : 99
													}
,
													"25" : 													{
														"0" : 100,
														"1" : 101,
														"2" : 102,
														"3" : 103
													}
,
													"26" : 													{
														"0" : 104,
														"1" : 105,
														"2" : 106,
														"3" : 107
													}
,
													"27" : 													{
														"0" : 108,
														"1" : 109,
														"2" : 110,
														"3" : 111
													}
,
													"28" : 													{
														"0" : 112,
														"1" : 113,
														"2" : 114,
														"3" : 115
													}
,
													"29" : 													{
														"0" : 116,
														"1" : 117,
														"2" : 118,
														"3" : 119
													}
,
													"30" : 													{
														"0" : 120,
														"1" : 121,
														"2" : 122,
														"3" : 123
													}
,
													"31" : 													{
														"0" : 124,
														"1" : 125,
														"2" : 126,
														"3" : 127
													}

												}
,
												"1" : 												{
													"0" : 													{
														"0" : 128,
														"1" : 129,
														"2" : 130,
														"3" : 131
													}
,
													"1" : 													{
														"0" : 132,
														"1" : 133,
														"2" : 134,
														"3" : 135
													}
,
													"2" : 													{
														"0" : 136,
														"1" : 137,
														"2" : 138,
														"3" : 139
													}
,
													"3" : 													{
														"0" : 140,
														"1" : 141,
														"2" : 142,
														"3" : 143
													}
,
													"4" : 													{
														"0" : 144,
														"1" : 145,
														"2" : 146,
														"3" : 147
													}
,
													"5" : 													{
														"0" : 148,
														"1" : 149,
														"2" : 150,
														"3" : 151
													}
,
													"6" : 													{
														"0" : 152,
														"1" : 153,
														"2" : 154,
														"3" : 155
													}
,
													"7" : 													{
														"0" : 156,
														"1" : 157,
														"2" : 158,
														"3" : 159
													}
,
													"8" : 													{
														"0" : 160,
														"1" : 161,
														"2" : 162,
														"3" : 163
													}
,
													"9" : 													{
														"0" : 164,
														"1" : 165,
														"2" : 166,
														"3" : 167
													}
,
													"10" : 													{
														"0" : 168,
														"1" : 169,
														"2" : 170,
														"3" : 171
													}
,
													"11" : 													{
														"0" : 172,
														"1" : 173,
														"2" : 174,
														"3" : 175
													}
,
													"12" : 													{
														"0" : 176,
														"1" : 177,
														"2" : 178,
														"3" : 179
													}
,
													"13" : 													{
														"0" : 180,
														"1" : 181,
														"2" : 182,
														"3" : 183
													}
,
													"14" : 													{
														"0" : 184,
														"1" : 185,
														"2" : 186,
														"3" : 187
													}
,
													"15" : 													{
														"0" : 188,
														"1" : 189,
														"2" : 190,
														"3" : 191
													}

												}

											}

										}
 ],
									"saved_object_attributes" : 									{
										"parameter_enable" : 0,
										"parameter_mappable" : 0
									}
,
									"text" : "pattr song_dict",
									"varname" : "song_dict"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-19",
									"linecount" : 2,
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 4,
									"outlettype" : [ "dictionary", "", "", "" ],
									"patching_rect" : [ 375.000010649363276, 381.833330330337503, 120.666666150093079, 35.0 ],
									"saved_object_attributes" : 									{
										"embed" : 0,
										"parameter_enable" : 0,
										"parameter_mappable" : 0
									}
,
									"text" : "dict VIEW_SONG_DICT",
									"varname" : "dict"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-43",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 49.99995652834582, 39.999998092651367, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-44",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 66.99995652834582, 650.333372092651416, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-42", 0 ],
									"source" : [ "obj-19", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"source" : [ "obj-31", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-37", 0 ],
									"source" : [ "obj-36", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 0 ],
									"source" : [ "obj-36", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-44", 0 ],
									"source" : [ "obj-37", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"order" : 0,
									"source" : [ "obj-38", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-39", 0 ],
									"source" : [ "obj-38", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-44", 0 ],
									"order" : 1,
									"source" : [ "obj-38", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-36", 0 ],
									"source" : [ "obj-39", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-38", 0 ],
									"source" : [ "obj-43", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-19", 0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 43.666567087173462, 257.916661018302875, 99.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p load_song_dict",
					"varname" : "song_dict"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-41",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_view_load_score_files.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 95.333239197731018, 145.249995583465534, 383.66667628288269, 57.666665196418762 ],
					"presentation" : 1,
					"presentation_rect" : [ 296.999897718429565, 47.333334684371948, 386.333344340324402, 54.333331823348999 ],
					"varname" : "djazz_view_load_score_files",
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
					"id" : "obj-40",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_view_load_song_folder.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 43.666567087173462, 35.333333253860474, 271.66667628288269, 62.666666030883789 ],
					"presentation" : 1,
					"presentation_rect" : [ 13.999897718429565, 41.666668176651001, 269.666677474975586, 59.999998331069946 ],
					"varname" : "djazz_view_load_song_folder",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 913.166605234146118, 20.833346179382261, 130.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_session_file.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_session_file.js"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1238.083303570747375, 669.666665670360544, 59.333330631256104, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 444.029533248931784, 295.166666030883789, 63.0, 20.0 ],
					"text" : "OCTAVE",
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
					"id" : "obj-13",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_transpose_octave_controller.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 1307.499967694282532, 648.999999997104624, 389.333341121673584, 61.333331346511841 ],
					"presentation" : 1,
					"presentation_rect" : [ 509.029533248931784, 276.666666030883789, 377.0, 57.0 ],
					"varname" : "transpose_octave",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"args" : [ "midi_player_2" ],
					"bgmode" : 1,
					"border" : 1,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"hidden" : 1,
					"id" : "obj-12",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_midi_player_view.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 1234.083303570747375, 731.333349403823831, 477.5, 233.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 1435.029533248931784, 56.666676044464111, 487.0, 226.0 ],
					"varname" : "midi_player_2",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"args" : [ "midi_player_1" ],
					"bgmode" : 1,
					"border" : 1,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-10",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_midi_player_view.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 1234.083303570747375, 412.250002412540425, 477.5, 307.500002679313639 ],
					"presentation" : 1,
					"presentation_rect" : [ 440.029533248931784, 113.333333492279053, 453.0, 228.0 ],
					"varname" : "midi_player_1",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-9",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 677.833304643630981, -48.333333253860474, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 23.66661274433136, -19.666667938232422, 53.0, 22.0 ],
					"text" : "pattrhub"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 1,
					"clickthrough" : 0,
					"enablehscroll" : 1,
					"enablevscroll" : 0,
					"id" : "obj-6",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_midi_out_bank_view.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 1120.499965071678162, 98.583334355098714, 645.083338499069214, 292.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 13.999897718429565, 343.333333492279053, 1099.029635113269705, 362.999999046325684 ],
					"varname" : "midi_out_bank",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1120.499965071678162, 468.250002412540425, 89.0, 35.0 ],
					"text" : "prepend midi_out_bank"
				}

			}
, 			{
				"box" : 				{
					"comment" : "components messages",
					"id" : "obj-3",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1120.499965071678162, 1001.33334964224241, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "BANG",
					"id" : "obj-5",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 52.833278059959412, 971.33334964224241, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "ctrl params",
					"id" : "obj-2",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 677.833304643630981, 1001.33334964224241, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"autorestore" : "view_presets.json",
					"id" : "obj-1",
					"linecount" : 4,
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 677.833304643630981, 143.083328181674915, 109.999993681907654, 62.0 ],
					"saved_object_attributes" : 					{
						"client_rect" : [ -2281, 93, -1803, 624 ],
						"parameter_enable" : 0,
						"parameter_mappable" : 0,
						"storage_rect" : [ 583, 69, 1034, 197 ]
					}
,
					"text" : "pattrstorage view_pattrstorage @greedy 1 @outputmode 3",
					"varname" : "view_pattrstorage"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 1,
					"border" : 1,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-47",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "djazz_master_view.maxpat",
					"numinlets" : 3,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 52.833278059959412, 447.583335904819478, 532.0, 291.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 13.999897718429565, 113.333333492279053, 420.362882000000013, 228.0 ],
					"varname" : "master",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"comment" : "from model out -- view params",
					"id" : "obj-60",
					"index" : 0,
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 23.66661274433136, -99.333333253860474, 30.0, 30.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 922.666605234146118, 106.458340490034061, 687.333304643630981, 106.458340490034061 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"midpoints" : [ 1033.666605234146118, 426.083340491481749, 1129.999965071678162, 426.083340491481749 ],
					"order" : 0,
					"source" : [ "obj-18", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 1 ],
					"midpoints" : [ 1033.666605234146118, 72.250006462760894, 1756.083303570747375, 72.250006462760894 ],
					"order" : 1,
					"source" : [ "obj-18", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"midpoints" : [ 111.833195209503174, 377.791666773046472, 687.333304643630981, 377.791666773046472 ],
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-41", 0 ],
					"midpoints" : [ 53.166567087173462, 120.791663941825846, 104.833239197731018, 120.791663941825846 ],
					"order" : 1,
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"order" : 0,
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"midpoints" : [ 104.833239197731018, 236.625000146116236, 687.333304643630981, 236.625000146116236 ],
					"source" : [ "obj-41", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-33", 0 ],
					"midpoints" : [ 53.166567087173462, 313.416664208599059, 111.833195209503174, 313.416664208599059 ],
					"order" : 1,
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 1 ],
					"midpoints" : [ 53.166567087173462, 409.08333308632848, 318.833278059959412, 409.08333308632848 ],
					"order" : 0,
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-41", 1 ],
					"midpoints" : [ 575.333278059959412, 117.624997493709543, 469.499915480613708, 117.624997493709543 ],
					"order" : 1,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 2 ],
					"order" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-10::obj-15::obj-12::obj-7" : [ "midi_player_1_loop_5", "midi_player_1_loop_5", 0 ],
			"obj-10::obj-15::obj-13::obj-7" : [ "midi_player_1_loop_6", "midi_player_1_loop_6", 0 ],
			"obj-10::obj-15::obj-14::obj-7" : [ "midi_player_1_loop_7", "midi_player_1_loop_7", 0 ],
			"obj-10::obj-15::obj-40::obj-7" : [ "midi_player_1_loop_1", "midi_player_1_loop_1", 0 ],
			"obj-10::obj-15::obj-41::obj-7" : [ "midi_player_1_loop_2", "midi_player_1_loop_2", 0 ],
			"obj-10::obj-15::obj-44::obj-7" : [ "midi_player_1_loop_3", "midi_player_1_loop_3", 0 ],
			"obj-10::obj-15::obj-45::obj-7" : [ "midi_player_1_loop_4", "midi_player_1_loop_4", 0 ],
			"obj-10::obj-15::obj-46::obj-7" : [ "midi_player_1_loop_8", "midi_player_1_loop_8", 0 ],
			"obj-10::obj-17::obj-34::obj-7" : [ "midi_player_1_speed_button_1/2", "midi_player_1_speed_button_1/2", 0 ],
			"obj-10::obj-17::obj-37::obj-7" : [ "midi_player_1_speed_button_3/2", "midi_player_1_speed_button_3/2", 0 ],
			"obj-10::obj-17::obj-38::obj-7" : [ "midi_player_1_speed_button_2", "midi_player_1_speed_button_2", 0 ],
			"obj-10::obj-17::obj-39::obj-7" : [ "midi_player_1_speed_button_4", "midi_player_1_speed_button_4", 0 ],
			"obj-12::obj-15::obj-12::obj-7" : [ "midi_player_2_loop_5", "midi_player_2_loop_5", 0 ],
			"obj-12::obj-15::obj-13::obj-7" : [ "midi_player_2_loop_6", "midi_player_2_loop_6", 0 ],
			"obj-12::obj-15::obj-14::obj-7" : [ "midi_player_2_loop_7", "midi_player_2_loop_7", 0 ],
			"obj-12::obj-15::obj-40::obj-7" : [ "midi_player_2_loop_1", "midi_player_2_loop_1", 0 ],
			"obj-12::obj-15::obj-41::obj-7" : [ "midi_player_2_loop_2", "midi_player_2_loop_2", 0 ],
			"obj-12::obj-15::obj-44::obj-7" : [ "midi_player_2_loop_3", "midi_player_2_loop_3", 0 ],
			"obj-12::obj-15::obj-45::obj-7" : [ "midi_player_2_loop_4", "midi_player_2_loop_4", 0 ],
			"obj-12::obj-15::obj-46::obj-7" : [ "midi_player_2_loop_8", "midi_player_2_loop_8", 0 ],
			"obj-12::obj-17::obj-34::obj-7" : [ "midi_player_2_speed_button_1/2", "midi_player_2_speed_button_1/2", 0 ],
			"obj-12::obj-17::obj-37::obj-7" : [ "midi_player_2_speed_button_3/2", "midi_player_2_speed_button_3/2", 0 ],
			"obj-12::obj-17::obj-38::obj-7" : [ "midi_player_2_speed_button_2", "midi_player_2_speed_button_2", 0 ],
			"obj-12::obj-17::obj-39::obj-7" : [ "midi_player_2_speed_button_4", "midi_player_2_speed_button_4", 0 ],
			"obj-13::obj-11::obj-7" : [ "octave_up_2", "octave_up_2", 0 ],
			"obj-13::obj-12::obj-7" : [ "octave_up_3", "octave_up_3", 0 ],
			"obj-13::obj-13::obj-7" : [ "octave_up_4", "octave_up_4", 0 ],
			"obj-13::obj-14::obj-7" : [ "octave_down_1", "octave_down_1", 0 ],
			"obj-13::obj-15::obj-7" : [ "octave_down_2", "octave_down_2", 0 ],
			"obj-13::obj-16::obj-7" : [ "octave_down_3", "octave_down_3", 0 ],
			"obj-13::obj-17::obj-7" : [ "octave_down_4", "octave_down_4", 0 ],
			"obj-13::obj-24::obj-7" : [ "no_octave", "no_octave", 0 ],
			"obj-13::obj-6::obj-7" : [ "octave_up_1", "octave_up_1", 0 ],
			"obj-13::obj-8" : [ "octave_transposition", "octave_transposition", 0 ],
			"obj-47::obj-16::obj-1" : [ "loop_chapter", "loop_chapter", 0 ],
			"obj-47::obj-85::obj-5::obj-21" : [ "grid", "grid", 0 ],
			"obj-47::obj-85::obj-5::obj-28" : [ "chapter_count", "chapter_count", 0 ],
			"obj-47::obj-94::obj-22::obj-24" : [ "chapter_button", "chapter_button", 0 ],
			"obj-47::obj-94::obj-22::obj-25" : [ "bar_button", "bar_button", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
				}

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "db_dictionary_array_utils.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code/tools",
				"patcherrelativepath" : "../../code/tools",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_PARAMS_CTRL_master_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/params",
				"patcherrelativepath" : "../params",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_PARAMS_CTRL_midi_gen_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/params",
				"patcherrelativepath" : "../params",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_PARAMS_VIEW_master_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/params",
				"patcherrelativepath" : "../params",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_PARAMS_VIEW_midi_gen_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/params",
				"patcherrelativepath" : "../params",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_PARAMS_grid_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/params",
				"patcherrelativepath" : "../params",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_PARAMS_grid_view_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/params",
				"patcherrelativepath" : "../params",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_add_multiple_tracks_view_window.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiout",
				"patcherrelativepath" : "../midiout",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_beat_bar_chapter_to_beat.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_beat_to_beat_bar_chapter.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_components_midi_out_bank_view.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code/midiout",
				"patcherrelativepath" : "../../code/midiout",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_bar_count.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_chapter_count.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_chapter_start_and_end_beats.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_get_navigation_file_path.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code/file_io",
				"patcherrelativepath" : "../../code/file_io",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_grid_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_grid_view_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_loop_control_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiplayer",
				"patcherrelativepath" : "../midiplayer",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_make_full_path.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools",
				"patcherrelativepath" : "../tools",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_master_clock_view_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/master",
				"patcherrelativepath" : "../master",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_master_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/master",
				"patcherrelativepath" : "../master",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_master_view_beat_out.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/master",
				"patcherrelativepath" : "../master",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_metro_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools",
				"patcherrelativepath" : "../tools",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_gen_view_tempo_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiplayer",
				"patcherrelativepath" : "../midiplayer",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_bank_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiout",
				"patcherrelativepath" : "../midiout",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_bank_view_global_port.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiout",
				"patcherrelativepath" : "../midiout",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_bank_view_save_load.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiout",
				"patcherrelativepath" : "../midiout",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_bank_view_track_number_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiout",
				"patcherrelativepath" : "../midiout",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_out_solo_bank_view.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code/midiout",
				"patcherrelativepath" : "../../code/midiout",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_midi_player_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiplayer",
				"patcherrelativepath" : "../midiplayer",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_navigate_bar_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_navigate_chapter_ctrl.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_navigate_view_chapter_bar_beat.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/grid",
				"patcherrelativepath" : "../grid",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_number_button.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools",
				"patcherrelativepath" : "../tools",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_range.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools",
				"patcherrelativepath" : "../tools",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_score_file_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/song file io",
				"patcherrelativepath" : "../song file io",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_select_score_file_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/song file io",
				"patcherrelativepath" : "../song file io",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_session_file.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code/file_io",
				"patcherrelativepath" : "../../code/file_io",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_speed_button.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/tools",
				"patcherrelativepath" : "../tools",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_speed_control_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midiplayer",
				"patcherrelativepath" : "../midiplayer",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_transpose_octave_controller.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/midi effects/transpose octave",
				"patcherrelativepath" : "../midi effects/transpose octave",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_udp_send_view.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/udp/send",
				"patcherrelativepath" : "../udp/send",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_view_load_score_files.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/song file io",
				"patcherrelativepath" : "../song file io",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_view_load_song_folder.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/song file io",
				"patcherrelativepath" : "../song file io",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_view_session_file.maxpat",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers/song file io",
				"patcherrelativepath" : "../song file io",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "pattrinit.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/code/pattr",
				"patcherrelativepath" : "../../code/pattr",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "view_presets.json",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/user/sessions/something",
				"patcherrelativepath" : "../../user/sessions/something",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"bgcolor" : [ 0.356862745098039, 0.356862745098039, 0.356862745098039, 1.0 ],
		"editing_bgcolor" : [ 0.768627450980392, 0.788235294117647, 0.792156862745098, 1.0 ]
	}

}
