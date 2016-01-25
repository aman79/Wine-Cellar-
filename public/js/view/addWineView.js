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
	
	var ttemplate = require('text!template/addWineTemplate.html');
	var compile=_.template(ttemplate);
	
	return Backbone.View.extend({
	
		el:"#paste2",
		
		initialize : function() {
			this.model.bind("change", this.render, this);
		},
		
		events : {
			"change input" : "change",
			"click .save" : "saveWine",
			"click .delete" : "deleteWine"
		},
	
		render : function() {
			this.$el.html(compile({
			wine : this.model.toJSON()
			
			}));
			return this;
		},
		
		change : function(event) {
			var target = event.target;
			console.log('changing ' + target.id + ' from: '
					+ target.defaultValue + ' to: ' + target.value);
		},
saveWine : function(){
	this.model.set({
		name : $('#name').val(),
		grapes : $('#grapes').val(),
		country : $('#country').val(),
		region : $('#region').val(),
		year : $('#year').val(),
		description : $('#description').val()
	});
	if (this.model.isNew()) {
		var self = this;
		app.wineList.create(this.model, {
			success : function() {
				app.navigate('wines/' + self.model.id, false);
			}
		});
	} else {
		this.model.save();
	}
	alert('saved successfully');

	return false;
},
		
deleteWine : function() {
	this.model.destroy({
		success : function() {
			alert('Wine deleted successfully');
			window.history.back();
		}
	});
	return false;
}
	});

});
