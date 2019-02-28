var math_library = require('./mathlib');
var problem = new math_library();

var a = 3;
var b = 17;

console.log(problem.add(a,b));
console.log(problem.multiply(a,b));
console.log(problem.square(b));
console.log(problem.random(a,b));