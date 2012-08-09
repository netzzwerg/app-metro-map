/*global console:true */
define(['jquery', 'underscore', 'backbone', 'app/routers/AppRouter'], function($, _, Backbone, Router) {
  
  "use strict";

  var initialize = function(global) {
      
      global.app = {}; // namespacing
      global.app.dispatcher = _.extend({}, Backbone.Events); // global event disptacher
      
      Router.initialize(global.app);

  };

  return {
    initialize: initialize
  };

});