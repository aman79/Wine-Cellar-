/**
 * js/view/mobileView.js
 */

define(function(require) {

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	var wineMod = require('model/wineMod');
	var wineColl = require('collection/wineCollection');

	var wJson = require('json/wineJson');
	var wine = wJson.wine;

	var showWineV = require('view/showWineView');

	var addWineV = require('view/addWineView');

	var ttemplate = require('text!template/wineListViewTemplate.html');
	var compile = _.template(ttemplate);

	return Backbone.View.extend({

		tagName : "tr",

		events : {
			"click #winename" : "callWineDetails",
		},

		callWineDetails : function(e) {

			var a = $(e.target).text();
			var coll = wineColl.findWhere({
				"name" : a
			});
			console.log(coll);
			$('#paste3').html('');

			// should be used with where
			/* coll.forEach(function(m) { *//* }); */

			var viewShow = new showWineV({
				model : coll
			});
			$('#paste3').append(viewShow.render().el);

			var viewAdd = new addWineV({
				model : coll
			});
			$('#paste2').append(viewAdd.render().el);

		},

		render : function() {
			this.$el.html(compile({
				wine : this.model.toJSON()

			}));
			return this;
		}

	});

});
