// shallow copy
// let obj1 = {
//     x: 2,
//     y: 3
// }

// let obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj2.x = 5;

// console.log(obj1);
// console.log(obj2);

/*
    obj1, obj2 = {
        x: 5,
        y: 3
    }
*/

// deep copy

let obj1 = {
    x: 2,
    y: 3
}

let obj2 = {...obj1};

console.log(obj1);
console.log(obj2);

obj2.x = 5;

console.log(obj1);
console.log(obj2);

/*
    obj1 = {
        x: 2,
        y: 3
    }

    obj2 = {
        x: 5,
        y: 3
    }
*/