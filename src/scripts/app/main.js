var _ = require('../vendor/underscore.js');
var model = require('./model.js');
var view = require('./view.js');
var controller = require('./controller.js');
var router = require('./router.js');
var collection = require('./collection.js');


console.log(_.each);
console.log(model(2+2));
view();
controller();
router();
collection();