

/**
 * js/main.js 
 * Main JS file
 */



require.config({
	baseUrl : "js", // optional
	paths : {
		'jquery' : 'lib/jquery',
		'underscore' : 'lib/underscore',
		'text' : 'lib/text',
		'bootstrap' : 'lib/bootstrap',
		'backbone' : 'lib/backbone',
		'localStorage' : 'lib/backbone.localStorage',
		'mordernizer': 'modernizr-2.6.1-respond-1.1.0.min',
		'handlebar':'handlebars'
		
		
		
	},
	shim : {

		'underscore' : {
			deps : [ 'jquery' ],
			exports : '_' // for using jquery directly or globally
		},
		'backbone' : {
			deps : [ 'jquery', 'underscore' ],
			exports : 'Backbone' // for using backbone directly or globally
		},
		'localStorage' : {
			deps : [ 'backbone' ]
		}
	}
});

require([ 'view/mainView'], function(
		MainView) {
	var mainView = new MainView();
	mainView.render();
});
