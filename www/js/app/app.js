// Filename: app.js
define(['jquery', 'underscore', 'backbone', 'app/routers/AppRouter'], function($, _, Backbone, Router) {

  var initialize = function(global) {
      
      global.app = {}; // namespacing
      global.app.dispatcher = _.extend({}, Backbone.Events); // global event disptacher
      
      Router.initialize(global.app);


  };

  return {
    initialize: initialize
  };

});