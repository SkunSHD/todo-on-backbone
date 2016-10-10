window._ = require('underscore');
window.$ = require('jquery');
window.Backbone = require('Backbone');

var model = require('./model.js');
var view = require('./view.js');
var controller = require('./controller.js');
var router = require('./router.js');
var collection = require('./collection.js');

console.log($);
console.log(Backbone);

console.log( model(2,3) );

view();