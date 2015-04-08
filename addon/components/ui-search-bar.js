import Ember from 'ember';
import layout from '../templates/components/ui-search-bar';

export default Ember.Component.extend({
  layout: layout,
	tagName: 'span',
	placeholder: 'Search ...',
	searchIcon: false,
	classNames: ['ui-search-bar'],
	size: 'default'
});
