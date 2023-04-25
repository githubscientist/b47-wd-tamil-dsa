// Write a function to check whether a number is a even number or odd number

/*
    Algorithm 1: divisibility by 2

    if a number is divisible by 2 => even number
    else => odd number

    Algorithm 2: 

    4
    76
    1235
    2423546
    2353476874534

    1. get the number from the user - string
    2. get the last character from the string -> lastDigit
    3. if lastDigit is in [1, 3, 5, 7, 9] => odd number
    4. else => even number
*/

// function isEvenOrOdd(number) {
//     // 2. get the last character from the string -> lastDigit
//     // let lastDigit = number[number.length - 1];

//     // 3. if lastDigit is in [1, 3, 5, 7, 9] => odd number
//     // switch (lastDigit) {
//     //     case '1':
//     //     case '3':
//     //     case '5':
//     //     case '7':
//     //     case '9':
//     //         return false;
//     //     default:
//     //         return true;
//     // }
//     if (lastDigit == '1' || lastDigit == '3' || lastDigit == '5' || lastDigit == '7' || lastDigit == '9') {
//         return false;
//     } else {
//         return true;
//     }
// }

// let number = '12';

// if (isEvenOrOdd(number)) {
//     console.log('even number');
// } else {
//     console.log('odd number');
// }

// let string = '1235423423542131343465787';

// console.log(string[string.length-1]);


// function isEvenOrOdd(number) {
//     // 1. set a number to 1 <- oddNumber
//     let oddNumber = 1;
//     // 2. do the following until oddNumber < number:
//     do {
//         // 3. increment the oddNumber by 2
//         oddNumber += 2;
//     } while (oddNumber < number);
    
//     // 3. if we come out of the loop
//     //    possibilities:
//     //    either the number is equal or greater
//     //    check if the number is equal to the oddNumber => odd number
//     if (oddNumber == number) {
//         return false;
//     } else {
//         //    else => even number
//         return true;
//     }
    

// }

// let number = 15;

// if (isEvenOrOdd(number)) {
//     console.log('even number');
// } else {
//     console.log('odd number');
// }

/*
    Algorithm 3:

    1. let oddNumber = 1, 3, 5, 7, 9, 11, ....;
    2. 

    how many numbers should i generate ?
    i need to use comparison !

    number = 12
    1, 3, 5, 7, 9, 11, 13

    number = 7
    1, 3, 5, 7

    number = 10
    1, 3, 5, 7, 9, 11

    1. set a number to 1 <- oddNumber
    2. do the following until oddNumber < number:
        3. increment the oddNumber by 2
    3. if we come out of the loop
       possibilities:
       either the number is equal or greater
       check if the number is equal to the oddNumber => odd number
       else => even number


*/

// let number = '5 2';
// number = number.split(' ').map(item => parseInt(item)).reduce((prev, curr) => prev + curr);

// number % 2 == 0 ? console.log('even number') : console.log('odd number');