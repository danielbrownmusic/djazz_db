var w_obj_ 	= 150;
var h_obj_ 	= 20;
var w_space_ = 20;
var h_space_ = 20;
var h_cell_ = h_obj_ + h_space_;
var w_cell_ = w_obj_ + x_space_;

var x_start_ = 20;
var y_start_ = 20;

var x_end_ = x_start_ + w_cell_;
var y_end_ = y_start_;

var obj_list_ = []


function length()
{
    return obj_list_.length();
}

function get_at(index)
{
    return obj_list_[i];
}


function first()
{
    return obj_list_[0];
}


function last()
{
    return obj_list_.splice(-1);
}


function get_rect()
{
    return [x_start_, y_start_, x_end_, y_end_];
}

function clear()
{
	for (var i = 0; i < obj_list_.length; i++)
	{
		this.patcher.remove(obj_list_[i]);
	}
	obj_list_ = [];
}


function add(obj_name)
{
    obj_list_.push(undefined);
    insert(obj_list_.length, obj_name);
}


function insert(index, obj_name)
{
	disconnect_cables();
    var obj = make_positioned_obj_(index, obj_name);
	obj_list_.splice(index, 0, obj);
    y_end_ += h_cell_;
    connect_cables_();
}


function remove(index)
{
	disconnect_cables();
	mod_list.splice(index, 1);
    connect_cables_();
}


function replace(index, mod_name)
{
	disconnect_cables();
	var mod = make_mod(mod_name);
	mod_list.splice(index, 1, mod_name);
    connect_cables_();
}


// PRIVATE METHODS

function disconnect_cables_()
{
	for (var i = 0; i < mod_list.length - 1; i++)
	{
		this.patcher.disconnect(mod_list[i], 0, mod_list[i + 1], 0);
	}
}
disconnect_cables_.local = 1;


function connect_cables_()
{							
	for (var i = 0; i < obj_list_.length - 1; i++)
	{
		this.patcher.connect(obj_list_[i], 0, obj_list_[i + 1], 0);
	}
}
connect_cables_.local = 1;


function get_rect_(i)
{
    var x_obj = x_start_;
    var y_obj = y_start_ + i * h_cell_;

    return [x_obj,
			y_obj, 
			x_obj + w_obj_, 
			y_obj + h_obj_];
}
get_rect_.local = 1;


function make_positioned_obj_(index, obj_name)
{
	var obj = this.patcher.newdefault(0, 0, obj_name);
    obj.rect = get_rect_(obj_name);
    return obj;
}
make_positioned_obj_.local = 1;






