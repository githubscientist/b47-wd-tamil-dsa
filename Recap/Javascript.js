// Variables - label of the memory where we can store a value
/*
    Client Side Programming
    Server Side Programming

    RAM - Memory (Stack + Heap)

    age

    4 bytes

    age = 37
    address = 200
                                       
    00000000    00000000    00000000    00100101
    203         202         201         200
    1 byte      1 byte      1 byte      1 byte
    8 bits

    2^7 2^6 2^5 2^4 2^3 2^2 2^1 2^0
    128 64  32  16  8   4   2   1
    0   0   1   0   0   1   0   1
*/

// let age = 37;

// console.log(age);

// age = 37;

// console.log(age);

/*
    Data Types - type of data

    number:
        - int
        - float
    
    boolean
        - true
        - false
    
    string
        - sequence of characters
    
    object
        - Array
        - Javascript objects
*/

// let percentage = 45.67;

// console.log(typeof(45.34));

// let isEligible = false;

// console.log(typeof (isEligible));

// let word = 'phone';
// let word = "apple";
// let word = `javascript`;

// console.log(word, typeof(word));

// console.log(word.length);
// console.log(word.toUpperCase());

// console.log(word.includes('java', 0));


// let sentence = 'this is a sentence#$%34235245234SDFSTEWRWERsfsdfsd';

// console.log(sentence, typeof (sentence));


// let word = 'apple';

// console.log(word.endsWith('ls'));

// let length = 12;

// console.log(length);

// let sentence = 'javascript is a language';

// console.log(sentence.includes('s', 5));

// let char = 's';
// console.log('s'.length);

// console.log(sentence.indexOf('s', 3));

// let age = 25;

// let ages = [10, 35, 26, 72, 11];

// console.log(typeof(ages));

// console.log(ages[0]);

// let person1 = [25, 'krish', 6.57, true, 150000, 18000, [750, 120, 123, 367, 328]];

// console.log(person1.length);

// console.log('sathish'.indexOf('s', 1));


/*
    AND
        A       B       A && B
        true    true    true
        true    false   false
        false   true    false
        false   false   false

    OR
        A       B       A||B
        true    true    true
        true    false   true
        false   true    true
        false   false   false
    
    NOT
        A       !A
        true    false
        false   true

*/

// let age = 16;

// let hasAadhar = true;
// let hasVoterID = false;

// check whether the person is eligible to vote
/*
    eligibility conditions:

    1. age should be greater than or equal to 18 and
    2. should have atleast one of the following documents.
        - aadhar card or
        - voter id
*/

// console.log(age>=18 && (hasAadhar || hasVoterID));

// console.log(typeof([1, 2, 3, 4, 5].join(' ')));

/*
    Java Script Object

    {
        name: 'sathish',
        age: 25
    }

    JSON: Javascript Object Notation
    
    {
        'name': 'sathish',
        'age': 25
    }

*/

// let person = {
//     "name": 'sathish',
//     "age": 25
// }

// let person1 = {
//     name: 'sathish',
//     age: 25
// }

// console.log(person)

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');

// console.log(words.join(' '));

// let string = 'hello' + ' ' + 'world';
// console.log(string);

// let firstName = 'krish';
// let lastName = 'sathish';

// // let message = `hello ${firstName.concat(' ',lastName), '!'}`;

// // console.log(message);
// // console.log(`5 + 6 = ${5 + 6}`);

// console.log(`hello ${firstName.concat(' ',lastName, '!')}`);

// 'hello krish sathish!'

// let name = 'krish';

// console.log(`hello ${name}`);

// camelCase
// let jsonString = `{
//     "color": "blue",
//     "priceInUSD": 32.56
// }`;

// let object = {
//     color: "blue",
//     "price In USD": 32.56
// };

// console.log(object['price In USD']);


// // console.log(object['color']);

// // console.log(object.priceInUSD);

// let jsObject = JSON.parse(jsonString);

// console.log(jsObject);

// IIFE - Immediately Invoked Function Expression

// function increment() {
//     x = x + 10;
//     console.log(x);
// }

// let x = 5;

// // x should not be incremented by 10 always
// // only whenever i need
// let doINeedIncrement = false;

// if (doINeedIncrement) {
//     increment();
//     increment();
// } else {
//     console.log(x);    
// }

// function sayHello() {
//     console.log('hello');
// }

// sayHello();


// pass a value

// function sayHello(firstName, lastName) {
//     console.log('hello', firstName, lastName);
// }


// sayHello('sathish', 'prakash');

// function add(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }


// add(5, 6);

// function add(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// let result = add(5, 6);
// console.log(result);

// console.log(add(5, 6));

// function isEligible(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let age = 25;

// if (isEligible(age)) {
//     console.log('eligible');
// } else {
//     console.log('not eligible');
// }

// function add(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }

// console.log(add(5, 6));

// function si(p, n, r) {
//     return (p * n * r) / 100;
// }

// console.log(si(1000, 5, 10));

// function add(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }

// let add = function(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }

// arrow function
// let add = (firstNumber, secondNumber) => {
//     return firstNumber + secondNumber;
// }

// // IIFE
// ((firstNumber, secondNumber) => {
//     console.log(firstNumber + secondNumber);
// })(5, 6);

// ((firstNumber, secondNumber) => {
//     console.log(firstNumber + secondNumber);
// })(7, 8);

// // anonymous function
// () => {
//     console.log('hello');
// }

// console.log(add(5, 6));

// ((array) => {
//     console.log(array.filter(number => number>3));
//     // array.forEach(number => console.log(number));
// })([1, 2, 3, 4, 5, 6, 7]);

// snake case: first_name
// camel case: firstName
// pascal case: FirstName
// kebab case: first-name

// let array = ['si', 'si', 'si', 'aw', 'bc'];

// let counts = {};

// for (let word of array) {
//     counts[word] = 0;
// }

// for (let word of array) {
//     counts[word]++;
// }

// for (let key in counts) {
//     if (counts[key] >= 2) {
//         console.log(key);
//     }
// }

