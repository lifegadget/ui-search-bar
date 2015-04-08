/* jshint node: true */
'use strict';

module.exports = {
  name: 'ui-search-bar',
	description: 'Search bar and optional filter criteria',
	included: function(app) {
		this._super.included(app);
    // specific to this addon
    app.import('vendor/ui-search-bar/ui-search-bar.css');
	}
};