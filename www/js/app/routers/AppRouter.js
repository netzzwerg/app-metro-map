define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

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
      // start history
      Backbone.history.start();
  };

  return {
    initialize: initialize
  };

});