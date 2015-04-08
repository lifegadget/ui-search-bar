import Ember from 'ember';
import layout from '../templates/components/ui-search-bar-filter-item';

export default Ember.Component.extend({
  layout: layout,
	tagName: 'span',
	classNameBindings: ['isSelected:active'],
	classNames: ['filter-item'],
	choice: {},
	value: Ember.computed.alias('choice.id'),
	name: Ember.computed.alias('choice.name'),
	groupId: null,
	selected: null, // the 'id' of the selected item
	isSelected: Ember.computed('selected','choice', function() {
		let p = this.getProperties('choice','selected');
		return p.selected === p.choice.id;
	}),
	
	click: function() {
		this.sendAction('action',this.get('value'));
	}
});
