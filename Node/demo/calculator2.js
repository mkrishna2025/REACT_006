
function print(result) {
	console.log('Result is ' + result);
}

module.exports.add = function(x, y) {
	var z = x + y;
	print(z);
	return z;
}

module.exports.sub = function(x, y) {
	var z = x - y;
	print(z);
	return z;
}

module.exports.mul = function(x, y) {
	var z = x * y;
	print(z);
	return z;
}