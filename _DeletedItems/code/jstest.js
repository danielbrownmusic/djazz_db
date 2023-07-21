inlets = jsarguments[1];

for (i = 0; i < jsarguments[1]; i++)
{
    var innie = this.patcher.newdefault(20 + i * 40, 20, "inlet");
    this.patcher.connect(innie, 0, this.box, i);
}