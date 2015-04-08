/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('vendor/ui-search-bar/ui-search-bar.css');
// font-awesome
app.import('bower_components/fontawesome/css/font-awesome.css');
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.eot',{destDir: 'fonts'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg',{destDir: 'fonts'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf',{destDir: 'fonts'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff',{destDir: 'fonts'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff2',{destDir: 'fonts'});
app.import('bower_components/fontawesome/fonts/FontAwesome.otf',{destDir: 'fonts'});

module.exports = app.toTree();
