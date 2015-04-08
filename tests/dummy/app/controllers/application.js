import Ember from 'ember';

export default Ember.Controller.extend({

  isRepressed: false,
  toggledEnablement: false, 
	criteria: Ember.A([
		{id: 'all', name: 'All'},
		{id: 'active', name: 'Active Only'},
		{id: 'inactive', name: 'Inactive Only'}
	]),
	criteriaSelected: 'all',
  
  actions: {
  }

});