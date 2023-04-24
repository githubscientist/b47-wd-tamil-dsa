// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumReducer(previousValue, currentValue) {
//     // console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// }

// console.log(numbers.reduce(sumReducer));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // console.log(numbers.reduce((previousValue, currentValue) => currentValue - previousValue));

// console.log(numbers.slice(0, 4).reduce((pre, cur) => pre + cur));




/*
    numbers = [1, 2, 3, 4, 5]

    previousValue = 1
    currentValue = 2

    previousValue = previousValue + currentValue
                  = 1 + 2
                  = 3

    previousValue = 3
    currentValue = 3

    previousValue = previousValue + currentValue
                  = 3 + 3
                  = 6
    
    previousValue = 6
    currentValue = 4

    previousValue = previousValue + currentValue
                  = 6 + 4
                  = 10

    previousValue = 10
    currentValue = 5

    previousValue = previousValue + currentValue
                  = 10 + 5
                  = 15

    previousValue = 15


*/

// let numbers = [7, 4, 8, 10, 11, 12];

// function sumReducer(previousValue, currentValue, currentIndex, array) {
//     console.log(previousValue, currentValue, currentIndex, array);
// }

// numbers.reduce(sumReducer);

// let numbers = [7, 4, 8, 10, 11, 12];

// function sumReducer(previousValue, currentValue, currentIndex, array) {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// }

// let sumReducer = function(previousValue, currentValue, currentIndex, array) {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// }

// let sumReducer = (previousValue, currentValue, currentIndex, array) => {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// }

// console.log(numbers.reduce(sumReducer, 0));

// console.log(numbers.reduce((previousValue, currentValue, currentIndex, array) => {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// }, 0));

// // let geekCoins = [-1, -1, -1, 30, 40, -1, -1, -1, -1, -1];

// let numbers = [7, 4, 8, 10, 11, 12];

// console.log(numbers.reduce((previousValue, currentValue, currentIndex, array) => {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// }, 0));

// let numbers = [1, 2, 5, 5, 3, 2, 4, 5, 6, 3, 2, 2, 5, 7, 7];

// // remove the duplicates from the array

// function removeDuplicates(previousValue, currentValue) {
//     if (previousValue.includes(currentValue)) {
//         return previousValue;
//     } else {
//         return [...previousValue, currentValue];
//     }
// }

// console.log(numbers.reduce(removeDuplicates, []));

/*
    previousValue = [1, 2, 5, 3, 4, 6, 7, ]
    currentValue = 7
*/

// let numbers = [1, 2, 5, 5, 3, 2, 4, 5, 6, 3, 2, 2, 5, 7, 7];

// let frequencyTable = {};

// for (let number of numbers) {
//     frequencyTable[number] = 0;
// }

// for (let number of numbers) {
//     frequencyTable[number]++;
// }

// console.log(frequencyTable);