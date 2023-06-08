// array & object destructuring

// let numbers = [1000, 2, 5];

// let principalAmount = numbers[0];
// let numberOfYears = numbers[1];
// let rateOfInterest = numbers[2];

// destructuring
// let [principalAmount, numberOfYears, rateOfInterest] = numbers;

// console.log(principalAmount, numberOfYears, rateOfInterest);

// let numbers = [1, 2, 3, 4, 5];

// let [a, b, c, d, e] = numbers;

// console.log(a, b, c, d, e);

// let [, , , d, e] = numbers;

// let [d, e] = numbers.slice(3,);

// console.log(d, e);

// let numbers = [1, 2, 4];

// // let [a, b, c] = numbers;

// let [a, b, c = 3] = numbers;

// console.log(a, b, c);

// let a = 5;
// let b = 6;

// console.log(`before swapping: a = ${a}, b = ${b}`);

// // swapping using third variable
// // let temp = a;
// // a = b;
// // b = temp;

// // destructuring
// // [a, b] = [b, a];

// // a = a + b; // 5 + 6 = a = 11
// // b = a - b; // b = 11 - 6 = 5
// // a = a - b; // a = 11 - 5 = 6

// // a = a ^ b;
// // b = a ^ b;
// // a = a ^ b;

// a = a * b;
// b = a / b;
// a = a / b;

// console.log(`after swapping: a = ${a}, b = ${b}`);

// object destructuring
// let person = {
//     name: 'krish',
//     age: 20
// };

// let { name, age } = person;

// console.log(name, age);
// console.log(person.name, person.age);

// let { name: nameOfPerson, age: ageOfPerson } = person;

// console.log(nameOfPerson, ageOfPerson);

// let person = {
//     name: 'krish',
//     age: 20
// };

// let { name, age } = person;

// console.log(name, age);
// console.log(person.name, person.age);

// let { name: nameOfPerson, age: ageOfPerson } = person;

// console.log(nameOfPerson, ageOfPerson);

// let person = {
//     name: 'krish',
//     age: 20,
//     salary: 20000
// };

// delete person.name;

// person['nameOfPerson'] = 'krish';

// // // console.log(person);

// // let { name: nameOfPerson, ...rest } = person;
// // let { name , ...rest } = person;

// // console.log(rest);

