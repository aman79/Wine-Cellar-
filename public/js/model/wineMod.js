/**
 * js/model/model.js
 * 
 */

define(function(require) {

	var Backbone = require('backbone');
	return Backbone.Model.extend({

		
		defaults : {
			'id ': '',
			'names' : '',
			'grapes' : '',
			'country' : '',
			'region' : '',
			'year' : '',
			'description' : '',
			'picture' : ''
		}
		
	});
});
