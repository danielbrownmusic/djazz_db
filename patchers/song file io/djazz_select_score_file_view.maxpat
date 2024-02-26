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
		"rect" : [ -1724.0, 101.0, 1026.0, 934.0 ],
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
					"id" : "obj-11",
					"maxclass" : "gswitch2",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 96.0, 820.0, 113.0, 26.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 285.0, 849.0, 29.5, 22.0 ],
					"text" : "- 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 426.0, 133.0, 58.0, 22.0 ],
					"text" : "route last"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 285.0, 806.0, 69.0, 22.0 ],
					"text" : "route count"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 426.0, 677.0, 38.0, 22.0 ],
					"text" : "count"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 426.0, 629.0, 100.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 335.0, 1.0, 47.0, 20.0 ],
					"text" : "Last",
					"texton" : "Last"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 84.5, 229.0, 29.5, 22.0 ],
					"text" : "init"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 73.0, 565.0, 29.5, 22.0 ],
					"text" : "init"
				}

			}
, 			{
				"box" : 				{
					"comment" : "(symbol) full path of chosen score file; \"clear\" if cleared",
					"id" : "obj-5",
					"index" : 0,
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 31.0, 892.0, 30.0, 30.0 ]
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
					"patching_rect" : [ 73.0, 606.0, 65.0, 35.0 ],
					"saved_object_attributes" : 					{
						"initial" : [ "" ],
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
					"patching_rect" : [ 84.5, 280.0, 62.0, 35.0 ],
					"restore" : [ 1 ],
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
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 31.0, 133.0, 179.0, 22.0 ],
					"text" : "routepass clear last"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"linecount" : 4,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 200.5, 565.0, 76.0, 62.0 ],
					"text" : "types TEXT, prefix $1, populate, insert 0 \" \""
				}

			}
, 			{
				"box" : 				{
					"comment" : "(symbol) full path of song folder",
					"id" : "obj-21",
					"index" : 0,
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
					"patching_rect" : [ 191.0, 266.5, 75.0, 62.0 ],
					"text" : "types fold, prefix $1, populate, symbol #1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"items" : [ "grid", ",", "new", ",", "new2", ",", "new2012", ",", "realtime" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 106.0, 411.0, 208.0, 22.0 ],
					"prefix" : "~/Documents/Max 8/Projects/djazz_db/user/scores/AutumnleavesDoMin/",
					"presentation" : 1,
					"presentation_rect" : [ 0.0, 0.0, 70.0, 22.0 ],
					"types" : "fold",
					"varname" : "umenu"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"items" : [ " ", ",", "AutumnleavesDoMin-new-02.24.2013-17-18.txt", ",", "AutumnleavesDoMin-new-02.24.2013-17-20.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h14.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h24.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h25.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h34.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h40.txt", ",", "AutumnleavesDoMin-new-2013.10.27-19h56.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h08.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h10.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h20.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h22.txt", ",", "AutumnleavesDoMin-new-2013.10.27-20h23.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h12.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h14.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h22.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h24.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h27.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h29.txt", ",", "AutumnleavesDoMin-new-2013.10.28-08h40.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h46.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h48.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h50.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h52.txt", ",", "AutumnleavesDoMin-new-2014.02.27-22h55.txt", ",", "AutumnleavesDoMin-new-2014.03.01-10h06.txt", ",", "AutumnleavesDoMin-new-2014.03.01-10h14.txt", ",", "AutumnleavesDoMin-new-2014.03.01-11h45.txt", ",", "AutumnleavesDoMin-new-2014.03.01-12h34.txt", ",", "AutumnleavesDoMin-new-2014.03.01-12h35.txt", ",", "AutumnleavesDoMin-new-2014.03.01-13h38.txt", ",", "AutumnleavesDoMin-new-2014.03.01-13h39.txt", ",", "AutumnleavesDoMin-new-2014.03.01-13h54.txt", ",", "AutumnleavesDoMin-new-2014.03.01-18h32.txt", ",", "AutumnleavesDoMin-new-2014.03.01-18h34.txt", ",", "AutumnleavesDoMin-new-2014.03.01-18h35.txt", ",", "AutumnleavesDoMin-new-2014.03.04-12h05.txt", ",", "AutumnleavesDoMin-new-2014.03.04-17h45.txt", ",", "AutumnleavesDoMin-new-2014.03.04-17h56.txt", ",", "AutumnleavesDoMin-new-2014.03.04-17h59.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h00.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h11.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h13.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h15.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h32.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h41.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h47.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h50.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h53.txt", ",", "AutumnleavesDoMin-new-2014.03.04-18h57.txt", ",", "AutumnleavesDoMin-new-2014.03.04-19h51.txt", ",", "AutumnleavesDoMin-new-2014.03.04-19h57.txt", ",", "AutumnleavesDoMin-new-2014.03.04-19h59.txt", ",", "AutumnleavesDoMin-new-2014.03.05-16h51.txt", ",", "AutumnleavesDoMin-new-2014.03.05-16h53.txt", ",", "AutumnleavesDoMin-new-2014.03.05-17h18.txt", ",", "AutumnleavesDoMin-new-2014.03.05-17h19.txt", ",", "AutumnleavesDoMin-new-2014.03.06-11h15.txt", ",", "AutumnleavesDoMin-new-2014.03.06-11h46.txt", ",", "AutumnleavesDoMin-new-2014.03.06-11h53.txt", ",", "AutumnleavesDoMin-new-2014.03.06-12h08.txt", ",", "AutumnleavesDoMin-new-2014.03.06-12h13.txt", ",", "AutumnleavesDoMin-new-2014.03.06-12h20.txt", ",", "AutumnleavesDoMin-new-2014.03.06-12h52.txt", ",", "AutumnleavesDoMin-new-2014.03.06-16h29.txt", ",", "AutumnleavesDoMin-new-2014.03.06-16h35.txt", ",", "AutumnleavesDoMin-new-2014.03.06-16h36.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h06.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h13.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h34.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h36.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h41.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h44.txt", ",", "AutumnleavesDoMin-new-2014.03.06-17h46veloce.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h36riffMarc.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h37riffMarc.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h40veloce+1+2+3+David.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h43riffMarc+1+2+David.txt", ",", "AutumnleavesDoMin-new-2014.03.06-20h44riffMarc+themeDavid+1+David.txt", ",", "AutumnleavesDoMin-new-2014.03.28-11h55.txt", ",", "AutumnleavesDoMin-new-2014.03.28-11h58.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h25.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h29.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h30.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h40.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h48.txt", ",", "AutumnleavesDoMin-new-2014.11.22-12h51.txt", ",", "AutumnleavesDoMin-new-2014.11.23-11h37.txt", ",", "AutumnleavesDoMin-new-2014.11.23-11h43.txt", ",", "AutumnleavesDoMin-new-2014.11.23-12h30.txt", ",", "AutumnleavesDoMin-new-2014.11.28-13h03.txt", ",", "AutumnleavesDoMin-new-2014.12.09-12h33.txt", ",", "AutumnleavesDoMin-new-2014.12.09-12h36.txt", ",", "AutumnleavesDoMin-new-2014.12.12-18h01.txt", ",", "AutumnleavesDoMin-new-2014.12.15-07h26.txt", ",", "AutumnleavesDoMin-new-2014.12.16-09h33.txt", ",", "AutumnleavesDoMin-new-2014.12.16-09h35.txt", ",", "AutumnleavesDoMin-new-2014.12.16-09h37.txt", ",", "AutumnleavesDoMin-new-2014.12.16-09h38.txt", ",", "AutumnleavesDoMin-new-2014.12.16-12h10.txt", ",", "AutumnleavesDoMin-new-2014.12.16-14h39.txt", ",", "AutumnleavesDoMin-new-2014.12.16-14h47.txt", ",", "AutumnleavesDoMin-new-2014.12.16-14h49.txt", ",", "AutumnleavesDoMin-new-2014.12.16-15h01.txt", ",", "AutumnleavesDoMin-new-2014.12.16-15h04.txt", ",", "AutumnleavesDoMin-new-2014.12.16-15h07.txt", ",", "AutumnleavesDoMin-new-2014.12.17-08h31.txt", ",", "AutumnleavesDoMin-new-2014.12.17-08h36.txt", ",", "AutumnleavesDoMin-new-2014.12.29-07h30.txt", ",", "AutumnleavesDoMin-new-2014.12.29-11h53.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h17.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h20.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h21.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h22.txt", ",", "AutumnleavesDoMin-new-2014.12.29-12h23.txt", ",", "AutumnleavesDoMin-new-2014.12.29-19h02.txt", ",", "AutumnleavesDoMin-new-2014.12.29-19h24.txt", ",", "AutumnleavesDoMin-new-2014.12.29-19h27.txt", ",", "AutumnleavesDoMin-new-2014.12.30-09h03.txt", ",", "AutumnleavesDoMin-new-2014.12.30-12h19.txt", ",", "AutumnleavesDoMin-new-2014.12.30-12h25.txt", ",", "AutumnleavesDoMin-new-2014.12.30-12h54.txt", ",", "AutumnleavesDoMin-new-2014.12.31-08h37.txt", ",", "AutumnleavesDoMin-new-2014.12.31-08h38.txt", ",", "AutumnleavesDoMin-new-2014.12.31-08h41.txt", ",", "AutumnleavesDoMin-new-2014.12.31-09h47.txt", ",", "AutumnleavesDoMin-new-2014.12.31-09h55.txt", ",", "AutumnleavesDoMin-new-2014.12.31-10h06.txt", ",", "AutumnleavesDoMin-new-2015.01.10-09h58.txt", ",", "AutumnleavesDoMin-new-2015.01.10-10h00.txt", ",", "AutumnleavesDoMin-new-2015.01.10-10h08.txt", ",", "AutumnleavesDoMin-new-2015.01.11-06h48.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h01.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h11.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h13.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h14.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h15.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h16.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h25.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h26.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h27.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h28.txt", ",", "AutumnleavesDoMin-new-2015.01.11-07h39.txt", ",", "AutumnleavesDoMin-new-2015.01.11-15h51.txt", ",", "AutumnleavesDoMin-new-2015.01.11-15h58.txt", ",", "AutumnleavesDoMin-new-2015.01.11-16h01.txt", ",", "AutumnleavesDoMin-new-2015.01.11-16h10.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h34.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h40.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h44.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h46.txt", ",", "AutumnleavesDoMin-new-2015.01.11-18h52.txt", ",", "AutumnleavesDoMin-new-2015.01.11-19h00.txt", ",", "AutumnleavesDoMin-new-2015.01.15-16h28.txt", ",", "AutumnleavesDoMin-new-2015.01.15-16h31.txt", ",", "AutumnleavesDoMin-new-2015.01.15-16h33.txt", ",", "AutumnleavesDoMin-new-2015.01.15-16h48.txt", ",", "AutumnleavesDoMin-new-2015.01.16-06h57.txt", ",", "AutumnleavesDoMin-new-2015.01.16-07h27.txt", ",", "AutumnleavesDoMin-new-2015.01.16-07h29.txt", ",", "AutumnleavesDoMin-new-2015.01.16-07h31.txt", ",", "AutumnleavesDoMin-new-2015.01.16-07h33.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h42.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h44.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h46.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h47.txt", ",", "AutumnleavesDoMin-new-2015.01.16-15h48.txt", ",", "AutumnleavesDoMin-new-2015.01.17-07h25.txt", ",", "AutumnleavesDoMin-new-2015.01.17-07h27.txt", ",", "AutumnleavesDoMin-new-2015.01.17-07h29.txt", ",", "AutumnleavesDoMin-new-2015.01.17-08h27.txt", ",", "AutumnleavesDoMin-new-2015.01.17-08h30.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h35.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h37.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h39.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h41.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h42.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h48.txt", ",", "AutumnleavesDoMin-new-2015.01.17-09h59.txt", ",", "AutumnleavesDoMin-new-2015.01.17-11h56.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h06.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h10.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h16.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h22.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h32.txt", ",", "AutumnleavesDoMin-new-2015.01.23-16h33.txt", ",", "AutumnleavesDoMin-new-2015.01.25-20h05.txt", ",", "AutumnleavesDoMin-new-2015.01.25-20h09.txt", ",", "AutumnleavesDoMin-new-2015.01.25-20h17.txt", ",", "AutumnleavesDoMin-new-2015.01.26-11h29.txt", ",", "AutumnleavesDoMin-new-2015.01.26-11h31.txt", ",", "AutumnleavesDoMin-new-2015.01.27-08h42.txt", ",", "AutumnleavesDoMin-new-2015.01.30-12h52.txt", ",", "AutumnleavesDoMin-new-2015.02.04-18h04.txt", ",", "AutumnleavesDoMin-new-2015.02.05-12h23.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h12.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h20.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h27.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h29.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h34.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h35.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h36.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h40.txt", ",", "AutumnleavesDoMin-new-2015.02.05-18h41.txt", ",", "AutumnleavesDoMin-new-2015.02.05-19h18.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h22.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h26.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h30.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h35.txt", ",", "AutumnleavesDoMin-new-2015.02.06-12h37.txt", ",", "AutumnleavesDoMin-new-2015.02.06-15h13.txt", ",", "AutumnleavesDoMin-new-2015.02.06-15h15.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h25.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h30.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h33.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h38.txt", ",", "AutumnleavesDoMin-new-2015.02.07-20h43.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h17.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h29.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h36.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h37.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h38.txt", ",", "AutumnleavesDoMin-new-2015.02.07-21h46.txt", ",", "AutumnleavesDoMin-new-2016.04.20-17h27.txt", ",", "AutumnleavesDoMin-new-2016.04.20-17h51.txt", ",", "AutumnleavesDoMin-new-2016.04.20-17h55.txt", ",", "AutumnleavesDoMin-new-2016.05.27-12h45.txt", ",", "AutumnleavesDoMin-new-2016.05.27-12h46.txt", ",", "AutumnleavesDoMin-new-2016.05.27-12h57.txt", ",", "AutumnleavesDoMin-new-2016.05.27-12h59.txt", ",", "AutumnleavesDoMin-new-2016.05.27-13h02.txt", ",", "AutumnleavesDoMin-new-2016.08.08-22h05.txt", ",", "AutumnleavesDoMin-new-2016.08.08-23h32.txt", ",", "AutumnleavesDoMin-new-2016.08.08-23h42.txt", ",", "AutumnleavesDoMin-new-2016.08.14-20h58.txt", ",", "AutumnleavesDoMin-new-2016.08.14-20h59.txt", ",", "AutumnleavesDoMin-new-2016.08.14-21h00.txt", ",", "AutumnleavesDoMin-new-2016.08.14-21h09.txt", ",", "AutumnleavesDoMin-new-2016.08.14-21h11.txt", ",", "AutumnleavesDoMin-new-2016.08.17-08h58.txt", ",", "AutumnleavesDoMin-new-2016.12.02-18h14.txt", ",", "AutumnleavesDoMin-new-2016.12.02-18h15.txt", ",", "AutumnleavesDoMin-new-2016.12.02-18h16.txt" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 96.0, 741.0, 208.0, 22.0 ],
					"pattrmode" : 1,
					"prefix" : "~/Documents/Max 8/Projects/djazz_db/user/scores/AutumnleavesDoMin/new/",
					"presentation" : 1,
					"presentation_rect" : [ 74.0, 0.0, 254.0, 22.0 ],
					"types" : "TEXT",
					"varname" : "umenu[1]"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"midpoints" : [ 199.5, 868.5, 40.5, 868.5 ],
					"source" : [ "obj-11", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"midpoints" : [ 294.5, 892.0, 375.0, 892.0, 375.0, 719.0, 105.5, 719.0 ],
					"source" : [ "obj-12", 0 ]
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
					"destination" : [ "obj-11", 1 ],
					"source" : [ "obj-14", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-14", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"midpoints" : [ 200.5, 377.0, 115.5, 377.0 ],
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
					"destination" : [ "obj-3", 0 ],
					"order" : 1,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"midpoints" : [ 40.5, 90.0, 435.5, 90.0 ],
					"order" : 0,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"midpoints" : [ 210.0, 690.5, 105.5, 690.5 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"midpoints" : [ 40.5, 375.5, 115.5, 375.5 ],
					"order" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"midpoints" : [ 40.5, 687.0, 105.5, 687.0 ],
					"order" : 1,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"source" : [ "obj-3", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 4,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"midpoints" : [ 40.5, 527.0, 82.5, 527.0 ],
					"order" : 3,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"midpoints" : [ 40.5, 196.5, 94.0, 196.5 ],
					"order" : 2,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-4", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"midpoints" : [ 435.5, 719.5, 105.5, 719.5 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [  ],
		"autosave" : 0
	}

}
