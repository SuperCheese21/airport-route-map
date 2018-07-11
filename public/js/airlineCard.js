(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['airlineCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <h5 class=\"card-title\">Operated by "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.operatorIata : stack1), depth0))
    + "</h5>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <p class=\"card-text\"><i class=\"fas fa-box-open\"></i> Cargo</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"fas fa-users\"></i> Passenger</p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                        <p class=\"card-text\"><i class=\"far fa-clock\"></i> Seasonal</p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                        <p class=\"card-text\"><i class=\"far fa-clock\"></i> Year-Round</p>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <p class=\"card-text\"><i>Starts on "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.start : stack1), depth0))
    + "</i></p>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <p class=\"card-text\"><i>Ends on "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.end : stack1), depth0))
    + "</i></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"card\">\n\n    <div class=\"card-body\">\n\n        <h4 class=\"card-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.iata : stack1), depth0))
    + "</h4>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.operatorIata : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.cargo : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"col-sm\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.seasonal : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n\n        <br>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.start : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.end : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n\n</div>\n";
},"useData":true});
})();