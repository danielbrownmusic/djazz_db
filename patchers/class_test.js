autowatch = 1;

// DOES NOT WORK:
/* function make_test_class()
{
	return {foo: arguments[0]}};


post("no");
var bar = make_test_class(33);
declareattribute("bar"); */


// WORKS!!!!
/* with
function bang()
{
    var heyman = this.patcher.getnamed("heyman");
    var bar = heyman.getattr("bar");
    post(bar);
    outlet(0, bar[1]["foo"]);
}
 */
function make_test_class()
{
	return {foo: arguments[0]}};


post("no");
var bar = [make_test_class(31), make_test_class(37)];
declareattribute("bar");
var ploo = 5;
declareattribute("ploo");
