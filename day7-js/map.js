// console.log('hello students');

// Arrays - map method
// let numbers = [1, 2, 3, 4, 5];

// output: array [1+5, 2+5, 3+5, 4+5, 5+5]
// [6, 7, 8, 9, 10]

// WITHOUT MAP METHOD

/*
numbers    [1, 2, 3, 4, 5]
            0  1  2  3  4
*/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // index = 0, 1, 2, 3, 4
// // 0<5 (T), 1<5 (T), 2<5 (T), 3<5 (T), 4<5 (T), 5<5 (F)
// // 1. traverse the array
// for (let index = 0; index < numbers.length; index++){
//     numbers[index] = numbers[index] + 5;
//     // console.log(numbers[index]);
// }

// console.log(typeof(numbers.join(' ')));

/*
    numbers = [1, 2, 3, 4, 5]
              [0][1][2][3][4]

    index = 0, 0 < 5, true
        numbers[0] = numbers[0] + 5
                   = 1 + 5
                   = 6
    
    index = 1, 1 < 5, true
        numbers[1] = numbers[1] + 5
                   = 2 + 5
                   = 7
    index = 2, 2 < 5, true
        numbers[2] = numbers[2] + 5
                   = 3 + 5
                   = 8

    index = 3, 3 < 5, true
        numbers[3] = numbers[3] + 5
                   = 4 + 5
                   = 9
    
    index = 4, 4 < 5, true
        numbers[4] = numbers[4] + 5
                   = 5 + 5
                   = 10
    
    index = 5, 5 < 5, false => loop terminated

    numbers = [6, 7, 8, 9, 10]
              [0][1][2][3][4]
*/

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// numbers.forEach((number) => console.log(number));

// console.log(numbers.join('\n'));

// let numbers = [1, 2, 3, 4, 5];
// let index = 0;
// for (; index < numbers.length; ){
//     console.log(numbers[index]);
//     index++;
// }

// while (index < numbers.length){
//     console.log(numbers[index]);
//     index++;
// }


// print hello 3 times
// let count = 0;
// while (count != 3){
//     console.log('hello');
//     count = count + 1;
// }

/*
    Running Condition = count != 3
    when the loop should run ?

    Stopping Condition = if count == 3
    when the loop should stop ?

    count = 0

    print hello
    count = 1

    print hello
    count = 2

    print hello
    count = 3
*/

// for (let count = 0; count != 3; count++){
//     console.log('hello');
// }

// let input = `1 2 3 4 5`;

// console.log(input.split(' '));

// USING MAP METHOD
// TASK: Given an array numbers = [1, 2, 3, 4, 5]
// convert the array by adding 5 to all the elements of the array
// such that the array becomes numbers = [6, 7, 8, 9, 10]

// let numbers = [1, 2, 3, 4, 5];

// function incrementBy5(value, index, array) {
//     return value + 5;
// }


// console.log(numbers.map(incrementBy5));

// function print(numbers) {
//     console.log(numbers);
// }


// let numbers = [1, 2, 3, 4, 5];
// print(numbers);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function incrementBy5(value, index, array) {
//     return [index, value];
// }

// // 1 + 0 + 1 = 2
// // 2 + 1 + 2 = 5
// // 3 + 2 + 3 = 8

// console.log(numbers.map(incrementBy5));

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// // function incrementBy5MultiplyBy2(value) {
// //     return (value + 5) * 2;
// // }

// // console.log(numbers.map(incrementBy5MultiplyBy2));

// let oddNumbers = [];
// let evenNumbers = [];

// function splitter(value) {
//     value & 1 ? oddNumbers.push(value) : evenNumbers.push(value);
// }

// numbers.map(splitter);

// console.log(oddNumbers);
// console.log(evenNumbers);


// let numbers = [1, 2, 3, 4, 5];

// // print the array with squares of the values from the array numbers

// // console.log(numbers.map((value, index, array) => {
// //     return value ** 2;
// // }));

// console.log(numbers.map(value => value ** 2));