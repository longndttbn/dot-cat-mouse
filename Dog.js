var chalkObject = require('chalk');
function Dog(name) {
	// body...
	this.stomach = [];
	this.name = name;
}

Dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};

Dog.prototype.sayHello = function() {
	//console.log('iok')
	console.log('Hello Long '+ chalkObject.red(this.name));
};

module.exports = Dog;