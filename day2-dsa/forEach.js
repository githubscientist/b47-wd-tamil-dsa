// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// function iterator(value, index, array) {
//     console.log(value);
// }

// let iterator = function(value, index, array) {
//     console.log(value);
// }

// let iterator = (value, index, array) => {
//     console.log(value);
// }

// numbers.forEach((value, index, array) => {
//     console.log(value);
// });

// let numbers = [1, 2, 3, 4, 5];

// function
// set of statements or block of statements
// that gets executed whenever we call it

// create a function to add two numbers
// function definition
// function add(first, second) {
//     console.log(first + second);
// }

// function call
// add(5, 6);
// add(16, 234);
// let first = 16;
// let second = 234;
// console.log(first + second);

// // add(78, 23);
// first = 78;
// second = 23;
// console.log(first + second);

// // add(89, 432);
// first = 89;
// second = 432;
// console.log(first + second);
// function findSum(numbers) {
//     // find the sum of all the numbers from the array
//     let sum = 0;

//     // traverse through the array
//     for (let index = 0; index < 3; index++){
//         // for every element
//         // add the element to the sum
//         sum = sum + numbers[index];
//     }

//     for (let index = numbers.length-1; index>numbers.length-4; index--){
//         // for every element
//         // add the element to the sum
//         sum = sum + numbers[index];
//     }

//     // console.log(sum);
//     return sum;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function call
// console.log(findSum(numbers)); // 55

// console.log((numbers.slice(0, 3).concat(numbers.slice(numbers.length-3, ))).reduce((p, c) => p + c));

/*
    sum = 3

    index = 0
        index < numbers.length
        0 < 10 true
        sum = sum + numbers[index]
            = 0 + numbers[0]
            = 0 + 1
            = 1
    
    index++ or index = index + 1

    index = 1
        1 < 10 true
        sum = sum + numbers[1]
            = 1 + 2
            = 3
    
    

*/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 5; index <= 10; index++){
//     console.log(numbers[index]);
// }
