// What is a promise ?

// it's an object that represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
// promises are used to handle asynchronous operations

// Example:

// let promise = new Promise((resolve, reject) => {
//     let result = 8;

//     if (result > 10) {
//         resolve(result); // the promise gets resolved
//     } else {
//         reject('result is not greater than 10'); // reject the promise with a message
//     }
// });

// // consume/execute the promise
// promise.then(
//     (result) => console.log('Result: ', result),
//     (message) => console.log('Error: ', message)
// );

// let promise = new Promise((resolve, reject) => {
//     let result = 12;

//     if (result > 10) {
//         resolve(result); // the promise gets resolved
//     } else {
//         reject('result is not greater than 10'); // reject the promise with a message
//     }
// });

// // consume/execute the promise
// promise
//     .then(result => console.log('Result: ', result))
//     .catch(error => console.log('Error: ', error));

// let delay = (milliseconds) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, milliseconds);
//     });
// };

// let milliseconds = 3000;
// delay(milliseconds)
//     .then(
//         () => console.log(`Promise resolved after ${milliseconds/1000} seconds`)
//     );


// Task
let checkValue = (value) => {
    // checkValue function returns a promise object 
    return new Promise((resolve, reject) => {
        // that checks whether the value is positive or negative
        // if the value is positive, resolve the promise
        if (value > 0) {
            resolve('is positive');
        } else {
            reject('is negative');
        }
        // else, reject the promise
    });
};

// make the function call here
let value = -5;
checkValue(value)
    .then((message) => console.log(`${value}`, message))
    .catch((error) => console.log(`${value}`, error));