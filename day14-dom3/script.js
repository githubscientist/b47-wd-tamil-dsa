// console.log(window);
// console.log(window.location);
// console.log(window.location.href); // current page url

// console.log(window.location.hostname);
// console.log(window.location.protocol);

// console.log(window.location.search); // query parameters

// console.log(window.location);

// window.localStorage.clear();

// window.localStorage.setItem('username', 'sathish');

// console.log(window.localStorage.getItem('username'));

// // window.localStorage.removeItem('username');

// window.localStorage.setItem('isLoggedIn', true);

// console.log(window.localStorage);

// setTimeout

// let sayHello = () => {
//     console.log('after five seconds');
// };

// window.setTimeout(sayHello, 5000);

// let sayHello = () => {
//     console.log('hello');
// };

// const sayHelloID = window.setInterval(sayHello, 1000);

// window.clearInterval(sayHelloID);

// 10 9 8 7 6 5 4 3 2 1 Happy New Year
// function countDownTimer(seconds) {
//     // if (seconds > 0) {
//     //     console.log(seconds);
//     //     setTimeout(() => {
//     //         countDownTimer(seconds - 1);
//     //     }, 1000);
//     // } else {
//     //     console.log('Happy New Year');
//     // }
//     if (seconds > 0) {
//         setTimeout(() => {
//             console.log(seconds);
//             countDownTimer(seconds - 1);
//         }, 1000);
//     } else {
//         console.log('Happy New Year');
//     }
// }

// countDownTimer(10);

// let seconds = 10;

// let countDownTimer = setInterval(() => {
//     if (seconds > 0) {
//         console.log(seconds);
//         seconds--;
//     } else {
//         clearInterval(countDownTimer);
//         console.log('Happy New Year');
//     }
// }, 1000);

// let seconds = 10;

// let timer = setInterval(() => {
//     console.log(seconds);
//     seconds--;
// }, 1000);

// setTimeout(() => {
//     clearInterval(timer);
//     setTimeout(() => {
//         console.log('Happy New Year');
//     }, 1000);
// }, 10000);

// prompt, alert, confirm

// let name = prompt('your name?');

// console.log(name);

// alert('hi');

// let confirmAnswer = confirm('Are you sure?');

// if (confirmAnswer) {
//     // user clicked Ok
//     console.log('clicked Ok');
// } else {
//     // user clicked cancel
//     console.log('clicked Cancel');
// }

// console.log(confirm);

// console.log(window.innerWidth, window.innerHeight);

// console.log(window.document);

// console.log(window.open('https://www.google.com', '_blank'));

// console.log(window);

document.body.innerHTML = `<h1>Hello</h1>`;

