var Addition = require('./addition.js');
var Calc1 = require('./calculator1.js');
var { add, sub } = require('./calculator1.js'); 
var Calc2 = require('./calculator2.js');
var { mul } = require('./calculator1.js');
var Person = require('./person.js');
var Son = require('./son.js');

var http = require('http');
var fs =  require('fs');

console.log('Welcome to Demo');
console.log('Add of 2 and 4 is ' + Addition(2, 4));
console.log('Add of 2 and 4 is ' + Calc1.add(2, 4));
console.log('Add of 2 and 4 is ' + add(2, 4));
console.log('Sub of 2 and 4 is ' + sub(2, 4));
console.log('Add of 2 and 4 is ' + Calc2.add(2, 4));
console.log('Mul of 2 and 4 is ' + mul(2, 4));

var karthik = new Person();
karthik.setName('Karthik Reddy');

console.log('Welcome to ' + karthik.getName());

var s1 = new Son();
console.log('Welcome to ' + s1.getName() + ', ' + s1.getGender() + ', ' + s1.getCity());

/*
http.createServer(function(req, res){
	console.log('HTTP Requested');
	res.end('Welcome to Demo');
}).listen(3000);*/

http.createServer(function(req, res){
	fs.readFile('pages/Test15.html', function(error, response){
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		}
		else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
}).listen(3000);