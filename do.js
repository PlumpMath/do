var items = d3.select("#todos").append("ul").selectAll("li");

var mkTodo = function(sel) {
	sel.append("input")
		.attr("type", "checkbox")
		.attr("disabled", true)
		.property("checked", function(d) { return d.done || false });
	sel.append("span")
		.text(function(d) { return d.description })
		.classed("done", function(d) { return d.done || false });
}

d3.json("http://papill0n.org/todo.json", function(todos) {
	items.data(todos)
		.enter().append("li")
		.call(mkTodo);
});
