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
	
	var showWineT=require('text!template/showWineTemplate.html');
	
	var compile2=_.template(showWineT);
	
	
	
	
	return Backbone.View.extend({
	
		tagName : "div",

	
		render : function() {
			this.$el.html(compile2({
			wine : this.model.toJSON()}));
			return this;
		},

	});

});
