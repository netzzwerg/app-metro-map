require.config({

  // alias names
  paths: {
    // Core Libraries
    //modernizr: 'libs/modernizr',
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    // Require.js Plugins
    text: 'libs/text'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone' // attach Backbone to the global object
    }
  }
});

require([

// load app module and pass it to our definition function
'app/app'

], function(App) {
  App.initialize(this);
});