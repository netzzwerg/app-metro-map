/*global console:true */
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

  "use strict";

  var AppRouter = Backbone.Router.extend({

    routes: {
      '/map': 'showMap',
      '/stations': 'showStations',
      // default route
      '*actions': 'defaultAction'
    },

    showMap: function() {

    },

    showStations: function() {

    },

    defaultAction: function(actions) {

    }
  });

  var initialize = function(app) {
      app.router = new AppRouter(); // global application router
      Backbone.history.start(); // start history
  };

  return {
    initialize: initialize
  };

});