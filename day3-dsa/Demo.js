const Array = require('./Array');

let numbers = new Array();
numbers.push(5);
numbers.push(6);
numbers.push(7);
numbers.push(11);
// numbers.print();
numbers.forEach((item, index) => console.log(index, item));