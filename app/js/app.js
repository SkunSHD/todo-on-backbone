var _ = require('underscore');
var $ = require('jquery');
var model = require('./model.js');
var view = require('./view.js');
var controller = require('./controller.js');
var router = require('./router.js');
var collection = require('./collection.js');

var names = ['Bruce Wayne', 'Wally West', 'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent'];

console.log(_);
_.find(names, function(name) {
	if (name == 'Clark Kent') console.log('Superman!');
});

$('body'); // working in chrome dev tools
$('body').append('<p>Hello</p>'); // doesn't working in chrome dev tools

console.log(model(2,3 )); // working, but why it returned all data from module(not just return statement)

view();