var _ = require('../vendor/underscore.js');
var $ = require('../vendor/jquery.js');
var model = require('./model.js');
var view = require('./view.js');
var controller = require('./controller.js');
var router = require('./router.js');
var collection = require('./collection.js');


console.log(_.each);
console.log('body');
var sum = model(2,3);
console.log(sum); 
view();
controller();
router();
collection();