// spread operator
// ...

// let numbers = [1, 2, 3];

// // let moreNumbers = [...numbers, 4, 5, 6]
// let moreNumbers = [4, 5, 6, ...numbers];

// console.log(moreNumbers);

// console.log(...numbers);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// // merge the two arrays
// let combinedArray = [...array1, ...array2];

// console.log(combinedArray);

// shallow copy and deep copy
// let array1 = [1, 2, 3];

// // shallow copy
// // let array2 = array1;

// // deep copy
// // let array2 = [...array1];
// let array2 = array1.slice();

// array1[0] = 10;
// array2[1] = 20;

// console.log(array1);
// console.log(array2);

// let object1 = {
//     x: 10,
//     y: 12
// };

// let object2 = {
//     ...object1,
//     z: 15
// };

// console.log(object1);
// console.log(object2);

// let add = (number1, number2) => {
//     return number1 + number2;
// }

// console.log(add(5, 6));

// let add = (...numbers) => {
//     return numbers.reduce((prev, curr) => prev + curr);
// }

// console.log(add(5, 6, 7, 8, 9, 10));

// let add = (number1, number2, ...numbers) => {
//     return numbers;
// }

// console.log(add(5, 6));


function display(a, ...rest) {
    // console.log(a);
    // console.log(rest);
    console.log(rest.join(' '));
}

display(5, 6, 7, 8);