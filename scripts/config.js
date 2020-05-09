// JavaScript entry point.

require.config({
  baseUrl: "scripts",
  deps: ["app/main"],
  paths: {
    underscore: "vendor/underscore",
    jquery: "vendor/jquery",
    backbone: "vendor/backbone",
    marionette: "vendor/backbone.marionette",
    handlebars: "vendor/handlebars",
    text: "vendor/text"
  },
  shim: {
    jquery: {
      exports: "$"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    underscore: {
      exports: "_"
    }
  }
});
