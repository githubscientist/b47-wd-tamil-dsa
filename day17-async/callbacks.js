// setTimeOut - callback

// let sayHello = function() {
//     console.log('hello');
// }

// // sayHello -> is a callback function
// // because the function sayHello is passed as an argument to another function setTimeout
// setTimeout(sayHello, 3000);


// N - increment by 5 then multiply by 3

// function incrementBy5(N) {
//     return N + 5;
// }

// function multiplyBy3(N) {
//     return N * 3;
// }

// function arithmetic(N, increment) {
//     N = increment(N); // callback function
//     N = multiplyBy3(N); // not a callback function
//     console.log(N);
// }

// let N = 5;
// arithmetic(N, incrementBy5);

// function incrementBy5(value) {
//     console.log(value + 5);
// }

// let array = [1, 2, 3, 4, 5];

// array.forEach(incrementBy5);

// Nested callback functions
// function function1(callback) {
//     setTimeout(function () {
//         console.log('function 1 completed');
//         callback();
//     }, 1000);
// }

// function function2(callback) {
//     setTimeout(function () {
//         console.log('function 2 completed');
//         callback();
//     }, 2000);
// }

// function function3(callback) {
//     setTimeout(function () {
//         console.log('function 3 completed');
//         callback();
//     }, 1500);
// }


// function1(function () {
//     // console.log('function inside function 1');
//     function2(function () {
//         // console.log('function inside function 2');
//         function3(function () {
//             console.log('all functions completed');
//         })
//     })
// });


// function1(function2(function3(function () {
//     console.log('all functions completed');
// })));


/*
    function1()
        - setTimeout executes an anonymous function after 1 second
            - inside anonymous function
                - console.log('function 1 completed');
                - callback()
                    function () {
                        console.log('function inside function 1');
                        function2(function () {
                            console.log('function inside function 2');
                        })
                    }
                        - console.log('function inside function 1');
                        - function2()
                            - setTimeout executes after 2 seconds
                                - inside anonymous function
                                    - console.log('function 2 completed');
                                    - callback()
                                        function () {
                                            console.log('function inside function 2');
                                        }
                                            - console.log('function inside function 2');
*/

// function add(x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         }
//     }
// }

// let result = add(2)(3)(4);
// console.log(result);

// console.log((function () {
//     return 'hello world';
// })());

