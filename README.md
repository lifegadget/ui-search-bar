# ui-search-bar ![ ](https://travis-ci.org/lifegadget/ui-search-bar.svg)
> A Search Bar for Filtering Lists

## Install ##

````bash
ember install:addon ui-search-bar
````

## Usage ##


````hbs
{{
	ui-search-bar 
	value=searchText 
	criteria=criteria 
	criteriaChoice=criteriaChoice
}}
````

Where criteria is an optional set of filter conditions that can be switched between by the user, the criteria structure would look like:

````javascript
criteria: Ember.A([
	{id: 'all', name: 'All'},
	{id: 'active', name: 'Active Only'},
	{id: 'inactive', name: 'Inactive Only'}
]),
````

For more details on the syntax check out the interactive demo:

> [ui-search-bar demo](http://current.development.ui-search-bar.divshot.io)

## Dependencies ##

- FontAwesome - this is the fountain of icon-awesomeness
- Annimate.css - a great set of libraries 

FontAwesome is the sole dependency for this repo to work but it was designed to play nicely with Twitter's Bootstrap as well.

## Version Compatibility

This may very well work with older version of Ember and Ember-CLI but it was intended for:

- Ember 1.11.0+
- Ember-CLI 0.2.2+

## Repo Contribution

We're open to your creative suggestions but please move past the "idea" stage 
and send us a PR so we can incorporate your ideas without killing ourselves. :)

## Licensing

This component is free to use under the MIT license:

Copyright (c) 2015 LifeGadget Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.