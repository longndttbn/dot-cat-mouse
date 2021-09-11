function Mouse(name) {
	// body...
	this.name = name;
	this.die = false;
}

Mouse.prototype.die = function(die) {
	// body...
	this.die = true;
};

module.exports = Mouse;