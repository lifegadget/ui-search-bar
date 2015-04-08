import Ember from 'ember';
import layout from '../templates/components/ui-search-bar-input';

export default Ember.Component.extend({
  layout: layout,
	classNames: ['ui-search-bar'],
	classNameBindings: ['_styleClass','searchIcon:search-icon','_sizeClass'],
	attributeBindings: ['placeholder','type'],
	tagName: 'input',
	type: 'text',
	value: null,
	_valueListener: Ember.on('didInsertElement', function() {
		this.$().on('keyup', () => {
			this.set('value',this.$().val());
		});
	}),
	_valueCleanup: Ember.on('willDestroyElement', function() {
		this.$().off();
	}),
	showIcon: false,
	size: 'default',
	_sizeClass: Ember.computed('size', function() {
		let size = this.get('size');
		let sizeMapping = {
			'huge': 'input-huge',
			'large': 'input-lg',
		'default': 'input-default-size',
			'small': 'input-sm'
		};
		return sizeMapping[size];
	}),
	
	style: 'bootstrap', // alts incl 'flat','none'
	_styleClass: Ember.computed('style', function() {
		let style = this.get('style') || 'bootstrap';
		if( style === 'bootstrap' ) {
			return 'form-control input';
		} else {
			return style;
		}
	})
});
