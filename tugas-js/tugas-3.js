const bob = function (a) {
	return a;
}

const bobo = function (b) {
	let a = bob("bob");
	let result = a +" "+b;
	return result;
}


var b = bob("bob");
console.log(b);

var x = bobo("ayam");
console.log(x)




