// Promise Chaining
// anonymous promise
// new Promise((resolve, reject) => {
//     console.log('initial');
//     resolve();
// })
//     .then(() => {
//         throw new Error('something failed')
//     })
//     .catch(() => {
//         console.log('do that');
//     })
//     .then(() => {
//         console.log('do this, no matter what happened before');
//     })
//     .then(() => {
//         console.log('execute this too');
//     })

// new Promise((resolve, reject) => {
//     console.log('initial');
//     // resolve();
//     reject();
// })
//     .then(() => {
//         setTimeout(() => {
//             console.log('do this');
//         }, 3000);
//     })
//     .catch(() => {
//         setTimeout(() => {
//             console.log('do that');
//         }, 2000);
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log('do this, no matter what happened before');
//         }, 1000);
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log('execute this too');
//         }, 2000);
//     })

// let multiplyByTwo = (value) => {
//     return new Promise((resolve) => {
//         resolve(value * 2);
//     })
// }

// multiplyByTwo(5)
//     .then((result) => {
//         console.log(result); // 10
//         return multiplyByTwo(result);
//     })
//     .then((finalResult) => {
//         console.log(finalResult); // 20
//     });

/*


    let multiplyByTwo = (value) => {
        return new Promise((resolve) => {
            resolve(value * 2);
        })
    }

    multiplyByTwo(5)
        .then((result) => {
            console.log(result); // 10
            return multiplyByTwo(result);
        })
        .then((finalResult) => {
            console.log(finalResult); // 20
        });

*/

// let promise1 = new Promise((resolve, reject) => {
//     resolve(10);
// }); 

// let promise2 = promise1.then(value => value * 2);

// let promise3 = promise2.then(value => value + 5);

// promise3
//     .then(
//         value => console.log('Result: ', value),
//         error => console.log('Error: ', error)
//     );


