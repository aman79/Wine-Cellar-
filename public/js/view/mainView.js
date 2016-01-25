/**
 * New node file
 */

define(function(require) {

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	var wineMod = require('model/wineMod');
	var wineColl = require('collection/wineCollection');

	var wJson = require('json/wineJson');
	var wine = wJson.wines;

	var wineListView = require('view/wineListView');

	return Backbone.View.extend({

		el : ".container",
		
		events : {
			'keyup input#searchtext' : 'searchWine'
		},
		
		
		render : function() {
			this.addColl();

			wineColl.forEach(function(m) {

				var viewT = new wineListView({
					model : m
				});
				$('#paste').append(viewT.render().el);
			});

		},
		
		


		addColl : function() {
			wineColl.fetch({
				reset : true
			});

			if (wineColl.length === 0) {
				_.each(wine, function(e) {
					var w = new wineMod(e);
					wineColl.create(w);
				});
			}

		},

searchWine : function(){
	var value = $('#searchtext').val();
	console.log(value);
	$('#paste').html('');

	var result = wineColl.filter(function(wine) {
		if (wine.get('name').toString().toUpperCase().indexOf(
				value.toUpperCase()) >= 0) {
			return true;
		}

	});
	console.log(result);

	result.forEach(function(m) {

		var searchwineView = new wineListView({
			model : m
		});
		$('#paste').append(searchwineView.render().el);
	});
	console.log(result);


	
}

	});

});
