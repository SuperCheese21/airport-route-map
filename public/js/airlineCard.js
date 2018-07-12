(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['airlineCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <h5 class=\"card-title\">Operated by "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.operatorIata : stack1), depth0))
    + "</h5>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <p class=\"card-text\"><i class=\"fas fa-box-open\"></i> Cargo</p>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <i class=\"fas fa-users\"></i> Passenger</p>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                        <p class=\"card-text\"><i class=\"far fa-clock\"></i> Seasonal</p>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                        <p class=\"card-text\"><i class=\"far fa-clock\"></i> Year-Round</p>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <p class=\"card-text\"><i>Starts on "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.start : stack1), depth0))
    + "</i></p>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <p class=\"card-text\"><i>Ends on "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.end : stack1), depth0))
    + "</i></p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"card\">\r\n\r\n    <div class=\"card-body\">\r\n\r\n        <h4 class=\"card-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.iata : stack1), depth0))
    + "</h4>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.operatorIata : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.cargo : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\r\n                <div class=\"col-sm\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.seasonal : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.start : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.airline : depth0)) != null ? stack1.end : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n</div>\r\n";
},"useData":true});
})();