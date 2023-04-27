// Datastructures

// Manipulation of data in the memory [create, edit, update, delete, search] -> structure

// Array: example
// Arrays & Strings, Object : Primitive Types
// LinkedList, Stack, Queue, Tree, Graph: Abstract Data Types

// Arrays

// how to create an array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let countries = ['India', 'China', 'United Kingdom', 'Canada', 'Russia'];

// let listOfItems = [101, 'Krish', 'India', 25000, true, 8.567, [100, 250]];


// how to access each element from the array
// console.log(listOfItems); // print the entire array - all the elements of the array

// console.log(numbers[3]);

// console.log(countries[3]);

// console.log(listOfItems[6][1]);

// for (let index = 0; index < listOfItems.length; index++){
//     if (index == listOfItems.length-1) {
//         console.log(listOfItems[index].join(' '));
//     } else {
//         console.log(listOfItems[index]);
//     }
// }

// Given an array of numbers, find the total sum

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// // initialize a sum variable with the value 0
// let sum = 0;

// // iterate through the array
// for (let index = 0; index < numbers.length; index++) {
//     // for every element
//     // add the element to the current value of the sum and then store the result to the sum
//     sum = sum + numbers[index];
// }

// // after exiting the loop
// // the variable sum now has the total sum of all the elements of the array
// // print the sum variable
// console.log(sum);

// let firstArray = [1, 2, 3, 4, 5, 6];
//                //[0][1][2][3][4][5]
// let secondArray = [10, 20, 30];

// for (let i = 0, j=0; i < firstArray.length; i++){
//     if (i % 2 != 0) {
//         firstArray[i] = secondArray[j];
//         j++;
//     }
// }
                   
// console.log(firstArray);

// let numbers = [1, 2, 3, 4, 5];

// for loop
// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }

// while loop
// let index = 0;
// while ( index < numbers.length){
//     console.log(numbers[index]);
//     index++;
// }

// let index = 0;
// for (; index < numbers.length;){
//     console.log(numbers[index]);
//     index++;
// }

// for...each loop
// numbers.forEach((item) => console.log(item));

// for...of loop
// for (let item of numbers) {
//     console.log(item);
// }

// for...in loop
// for (let index in numbers) {
//     console.log(numbers[index]);
// }

// do...while loop
// let index = 0;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);
