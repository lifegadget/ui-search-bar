import Ember from 'ember';
import layout from '../templates/components/ui-search-bar-filter';

export default Ember.Component.extend({
  layout: layout,
	criteria: Ember.A([]),
	criteriaSelected: null,
	selected: null,
	
	actions: {
		itemSelected: function(choice) {
			this.set('criteriaSelected', choice);
		}
	}
});
