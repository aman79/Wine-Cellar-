/**
 * js/collection/collection.js
 */


define(function(require) {
	var Backbone = require('backbone');
    var wineMod = require('model/wineMod');
    var LocalStorage = require('localStorage');
    
    var collect = Backbone.Collection.extend({
    	model : wineMod,
    	localStorage : new LocalStorage('WINE Collection'),
    });
    return new collect(); // return global collection
		});
 