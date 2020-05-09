define([
  "marionette",
  "backbone",
  "handlebars",
  "text!app/templates/gameView.html"
], function(Marionette, Backbone, Handlebars, template_gameView) {
  var MyView = Marionette.LayoutView.extend({
    el: "#app-region",
    template: Handlebars.compile($(template_gameView).html()),
    model: new Backbone.Model({})
  });
  var m = new MyView();
  m.render();

  var template = Handlebars.compile($(template_gameView).html());
  console.log(template);
});
