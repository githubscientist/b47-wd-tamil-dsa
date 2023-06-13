// // variable export and import
// const PI = 3.14;

// module.exports = PI;

// const PI = 3.14;

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// module.exports = {
//     PI,
//     add,
//     sub
// };

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}

module.exports = Person;