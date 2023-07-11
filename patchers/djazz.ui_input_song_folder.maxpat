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
		"rect" : [ 817.0, 122.0, 253.0, 396.0 ],
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
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 8.0, 62.0, 22.0 ],
					"text" : "r #0_clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 308.5, 8.0, 35.0, 22.0 ],
					"text" : "clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 534.0, 157.0, 62.0, 22.0 ],
					"text" : "r #0_clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 324.0, 157.0, 62.0, 22.0 ],
					"text" : "r #0_clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 308.5, 40.0, 64.0, 22.0 ],
					"text" : "s #0_clear"
				}

			}
, 			{
				"box" : 				{
					"comment" : "messages to load song in input_song_folder",
					"id" : "obj-6",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 305.0, 268.0, 30.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 94.0, 95.0, 22.0 ],
					"text" : "get_form_file $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-25",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 127.0, 231.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_ui_input_song_folder_form_file.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_ui_input_song_folder_form_file.js"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 30.0, 223.0, 49.0, 22.0 ],
					"text" : "form $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 305.0, 223.0, 47.0, 22.0 ],
					"text" : "solo $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 515.0, 223.0, 55.0, 22.0 ],
					"text" : "comp $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"items" : "AutumnleavesDoMin-grid.txt",
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 515.0, 189.0, 100.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Packages/Djazz MIDI 2023/AutumnleavesDoMin/grid/"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 305.0, 94.0, 91.0, 22.0 ],
					"text" : "set_umenus $1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"items" : [ "AutumnleavesDoMin-new-02.24.2013-17-18.txt", ",", "AutumnleavesDoMin-new-02.24.2013-17-20.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h14.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h24.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h25.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h34.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h40.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h56.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h08.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h10.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h20.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h22.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h23.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h12.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h14.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h22.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h24.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h27.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h29.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h40.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h46.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h48.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h50.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h52.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h55.txt", ",", "AutumnleavesDoMin-new-2014.03.01-10h06.txt", ",", "AutumnleavesDoMin-new-2014.03.01-10h14.txt", ",", "AutumnleavesDoMin-new-2014.03.01-11h45.txt", ",", "AutumnleavesDoMin-new-2014.03.01-12h34.txt", ",", "AutumnleavesDoMin-new-2014.03.01-12h35.txt", ",", "AutumnleavesDoMin-new-2014.03.01-13h38.txt", ",", "AutumnleavesDoMin-new-2014.03.01-13h39.txt", ",", "AutumnleavesDoMin-new-2014.03.01-13h54.txt", ",", "AutumnleavesDoMin-new-2014.03.01-18h32.txt", ",", "AutumnleavesDoMin-new-2014.03.01-18h34.txt", ",", "AutumnleavesDoMin-new-2014.03.01-18h35.txt", ",", "AutumnleavesDoMin-new-2014.03.04-12h05.txt", ",", "AutumnleavesDoMin-new-2014.03.04-17h45.txt", ",", "AutumnleavesDoMin-new-2014.03.04-17h56.txt", ",", "AutumnleavesDoMin-new-2014.03.04-17h59.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h00.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h11.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h13.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h15.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h32.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h41.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h47.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h50.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h53.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h57.txt", ",", "AutumnleavesDoMin-new-2014.03.04-19h51.txt", ",", "AutumnleavesDoMin-new-2014.03.04-19h57.txt", ",", "AutumnleavesDoMin-new-2014.03.04-19h59.txt", ",", "AutumnleavesDoMin-new-2014.03.05-16h51.txt", ",", "AutumnleavesDoMin-new-2014.03.05-16h53.txt", ",", "AutumnleavesDoMin-new-2014.03.05-17h18.txt", ",", "AutumnleavesDoMin-new-2014.03.05-17h19.txt", ",", "AutumnleavesDoMin-new-2014.03.06-11h15.txt", ",", "AutumnleavesDoMin-new-2014.03.06-11h46.txt", ",", "AutumnleavesDoMin-new-2014.03.06-11h53.txt", ",", "AutumnleavesDoMin-new-2014.03.06-12h08.txt", ",", "AutumnleavesDoMin-new-2014.03.06-12h13.txt", ",", "AutumnleavesDoMin-new-2014.03.06-12h20.txt", ",", "AutumnleavesDoMin-new-2014.03.06-12h52.txt", ",", "AutumnleavesDoMin-new-2014.03.06-16h29.txt", ",", "AutumnleavesDoMin-new-2014.03.06-16h35.txt", ",", "AutumnleavesDoMin-new-2014.03.06-16h36.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h06.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h13.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h34.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h36.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h41.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h44.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h46veloce.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h36riffMarc.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h37riffMarc.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h40veloce+1+2+3+David.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h43riffMarc+1+2+David.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h44riffMarc+themeDavid+1+David.txt", ",", "AutumnleavesDoMin-new-2014.03.28-11h55.txt", ",", "AutumnleavesDoMin-new-2014.03.28-11h58.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h25.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h29.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h30.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h40.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h48.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h51.txt", ",", "AutumnleavesDoMin-new-2014.11.23-11h37.txt", ",", "AutumnleavesDoMin-new-2014.11.23-11h43.txt", ",", "AutumnleavesDoMin-new-2014.11.23-12h30.txt", ",", "AutumnleavesDoMin-new-2014.11.28-13h03.txt", ",", "AutumnleavesDoMin-new-2014.12.09-12h33.txt", ",", "AutumnleavesDoMin-new-2014.12.09-12h36.txt", ",", "AutumnleavesDoMin-new-2014.12.12-18h01.txt", ",", "AutumnleavesDoMin-new-2014.12.15-07h26.txt", ",", "AutumnleavesDoMin-new-2014.12.16-09h33.txt", ",", "AutumnleavesDoMin-new-2014.12.16-09h35.txt", ",", "AutumnleavesDoMin-new-2014.12.16-09h37.txt", ",", "AutumnleavesDoMin-new-2014.12.16-09h38.txt", ",", "AutumnleavesDoMin-new-2014.12.16-12h10.txt", ",", "AutumnleavesDoMin-new-2014.12.16-14h39.txt", ",", "AutumnleavesDoMin-new-2014.12.16-14h47.txt", ",", "AutumnleavesDoMin-new-2014.12.16-14h49.txt", ",", "AutumnleavesDoMin-new-2014.12.16-15h01.txt", ",", "AutumnleavesDoMin-new-2014.12.16-15h04.txt", ",", "AutumnleavesDoMin-new-2014.12.16-15h07.txt", ",", "AutumnleavesDoMin-new-2014.12.17-08h31.txt", ",", "AutumnleavesDoMin-new-2014.12.17-08h36.txt", ",", "AutumnleavesDoMin-new-2014.12.29-07h30.txt", ",", "AutumnleavesDoMin-new-2014.12.29-11h53.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h17.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h20.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h21.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h22.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h23.txt", ",", "AutumnleavesDoMin-new-2014.12.29-19h02.txt", ",", "AutumnleavesDoMin-new-2014.12.29-19h24.txt", ",", "AutumnleavesDoMin-new-2014.12.29-19h27.txt", ",", "AutumnleavesDoMin-new-2014.12.30-09h03.txt", ",", "AutumnleavesDoMin-new-2014.12.30-12h19.txt", ",", "AutumnleavesDoMin-new-2014.12.30-12h25.txt", ",", "AutumnleavesDoMin-new-2014.12.30-12h54.txt", ",", "AutumnleavesDoMin-new-2014.12.31-08h37.txt", ",", "AutumnleavesDoMin-new-2014.12.31-08h38.txt", ",", "AutumnleavesDoMin-new-2014.12.31-08h41.txt", ",", "AutumnleavesDoMin-new-2014.12.31-09h47.txt", ",", "AutumnleavesDoMin-new-2014.12.31-09h55.txt", ",", "AutumnleavesDoMin-new-2014.12.31-10h06.txt", ",", "AutumnleavesDoMin-new-2015.01.10-09h58.txt", ",", "AutumnleavesDoMin-new-2015.01.10-10h00.txt", ",", "AutumnleavesDoMin-new-2015.01.10-10h08.txt", ",", "AutumnleavesDoMin-new-2015.01.11-06h48.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h01.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h11.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h13.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h14.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h15.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h16.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h25.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h26.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h27.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h28.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h39.txt", ",", "AutumnleavesDoMin-new-2015.01.11-15h51.txt", ",", "AutumnleavesDoMin-new-2015.01.11-15h58.txt", ",", "AutumnleavesDoMin-new-2015.01.11-16h01.txt", ",", "AutumnleavesDoMin-new-2015.01.11-16h10.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h34.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h40.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h44.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h46.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h52.txt", ",", "AutumnleavesDoMin-new-2015.01.11-19h00.txt", ",", "AutumnleavesDoMin-new-2015.01.15-16h28.txt", ",", "AutumnleavesDoMin-new-2015.01.15-16h31.txt", ",", "AutumnleavesDoMin-new-2015.01.15-16h33.txt", ",", "AutumnleavesDoMin-new-2015.01.15-16h48.txt", ",", "AutumnleavesDoMin-new-2015.01.16-06h57.txt", ",", "AutumnleavesDoMin-new-2015.01.16-07h27.txt", ",", "AutumnleavesDoMin-new-2015.01.16-07h29.txt", ",", "AutumnleavesDoMin-new-2015.01.16-07h31.txt", ",", "AutumnleavesDoMin-new-2015.01.16-07h33.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h42.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h44.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h46.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h47.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h48.txt", ",", "AutumnleavesDoMin-new-2015.01.17-07h25.txt", ",", "AutumnleavesDoMin-new-2015.01.17-07h27.txt", ",", "AutumnleavesDoMin-new-2015.01.17-07h29.txt", ",", "AutumnleavesDoMin-new-2015.01.17-08h27.txt", ",", "AutumnleavesDoMin-new-2015.01.17-08h30.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h35.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h37.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h39.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h41.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h42.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h48.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h59.txt", ",", "AutumnleavesDoMin-new-2015.01.17-11h56.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h06.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h10.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h16.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h22.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h32.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h33.txt", ",", "AutumnleavesDoMin-new-2015.01.25-20h05.txt", ",", "AutumnleavesDoMin-new-2015.01.25-20h09.txt", ",", "AutumnleavesDoMin-new-2015.01.25-20h17.txt", ",", "AutumnleavesDoMin-new-2015.01.26-11h29.txt", ",", "AutumnleavesDoMin-new-2015.01.26-11h31.txt", ",", "AutumnleavesDoMin-new-2015.01.27-08h42.txt", ",", "AutumnleavesDoMin-new-2015.01.30-12h52.txt", ",", "AutumnleavesDoMin-new-2015.02.04-18h04.txt", ",", "AutumnleavesDoMin-new-2015.02.05-12h23.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h12.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h20.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h27.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h29.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h34.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h35.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h36.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h40.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h41.txt", ",", "AutumnleavesDoMin-new-2015.02.05-19h18.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h22.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h26.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h30.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h35.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h37.txt", ",", "AutumnleavesDoMin-new-2015.02.06-15h13.txt", ",", "AutumnleavesDoMin-new-2015.02.06-15h15.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h25.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h30.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h33.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h38.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h43.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h17.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h29.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h36.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h37.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h38.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h46.txt", ",", "AutumnleavesDoMin-new-2016.04.20-17h27.txt", ",", "AutumnleavesDoMin-new-2016.04.20-17h51.txt", ",", "AutumnleavesDoMin-new-2016.04.20-17h55.txt", ",", "AutumnleavesDoMin-new-2016.05.27-12h45.txt", ",", "AutumnleavesDoMin-new-2016.05.27-12h46.txt", ",", "AutumnleavesDoMin-new-2016.05.27-12h57.txt", ",", "AutumnleavesDoMin-new-2016.05.27-12h59.txt", ",", "AutumnleavesDoMin-new-2016.05.27-13h02.txt", ",", "AutumnleavesDoMin-new-2016.08.08-22h05.txt", ",", "AutumnleavesDoMin-new-2016.08.08-23h32.txt", ",", "AutumnleavesDoMin-new-2016.08.08-23h42.txt", ",", "AutumnleavesDoMin-new-2016.08.14-20h58.txt", ",", "AutumnleavesDoMin-new-2016.08.14-20h59.txt", ",", "AutumnleavesDoMin-new-2016.08.14-21h00.txt", ",", "AutumnleavesDoMin-new-2016.08.14-21h09.txt", ",", "AutumnleavesDoMin-new-2016.08.14-21h11.txt", ",", "AutumnleavesDoMin-new-2016.08.17-08h58.txt", ",", "AutumnleavesDoMin-new-2016.12.02-18h14.txt", ",", "AutumnleavesDoMin-new-2016.12.02-18h15.txt", ",", "AutumnleavesDoMin-new-2016.12.02-18h16.txt", ",", "AutumnleavesDoMin-new-2023.03.09-09h45.txt" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 305.0, 189.0, 100.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Packages/Djazz MIDI 2023/AutumnleavesDoMin/new/"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 305.0, 127.0, 229.0, 22.0 ],
					"saved_object_attributes" : 					{
						"filename" : "djazz_ui_input_song_folder_umenus.js",
						"parameter_enable" : 0
					}
,
					"text" : "js djazz_ui_input_song_folder_umenus.js"
				}

			}
, 			{
				"box" : 				{
					"autopopulate" : 1,
					"id" : "obj-4",
					"items" : [ "__DJAZZ MIDI_2022_10_25_043marc.maxpat", ",", "_Corpus", ",", "_Externals", ",", "_MidiArchives", ",", "_ObjectsCommon", ",", "_ObjectsMidi", ",", "_Oracles", ",", "AutumnleavesDoMin", ",", "BluesFamaj", ",", "bordeaux-threads", ",", "Capture d’écran 2022-12-20", ",", "E.txt", ",", "elements", ",", "Free4", ",", "globals", ",", "improtek", ",", "in-files", ",", "MIDI_tunes_and_info.txt", ",", "midibuff.mid", ",", "midibuffAutumnLeavesMarcaccomp.mid", ",", "out-files", ",", "preferences.lisp", ",", "resources", ",", "user" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 30.0, 42.0, 241.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Packages/Djazz MIDI 2023/",
					"presentation" : 1,
					"presentation_rect" : [ 22.0, 62.0, 241.0, 22.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"order" : 0,
					"source" : [ "obj-4", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 1,
					"source" : [ "obj-4", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-25", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "djazz_ui_input_song_folder_form_file.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "djazz_ui_input_song_folder_umenus.js",
				"bootpath" : "~/Documents/Max 8/Projects/djazz_db/patchers",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
