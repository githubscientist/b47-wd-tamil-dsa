// create a div
let containerDIV = document.createElement('div');


containerDIV.setAttribute('class', 'container');
containerDIV.classList.add('text-center');

// for (let i = 1; i <= 6; i++){
//     let rowDIV = document.createElement('div');
//     rowDIV.setAttribute('class', 'row');
//     containerDIV.appendChild(rowDIV);
// }

let rowDIV1 = document.createElement('div');
rowDIV1.setAttribute('class', 'row');

let colDIV = document.createElement('div');
colDIV.setAttribute('class', 'col-12');

let inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('class', 'form-control');

colDIV.appendChild(inputElement);

rowDIV1.appendChild(colDIV);

containerDIV.appendChild(rowDIV1);

let rowDIV2 = document.createElement('div');
rowDIV2.setAttribute('class', 'row');
containerDIV.appendChild(rowDIV2);

let rowDIV3 = document.createElement('div');
rowDIV3.setAttribute('class', 'row');
containerDIV.appendChild(rowDIV3);

let rowDIV4 = document.createElement('div');
rowDIV4.setAttribute('class', 'row');
containerDIV.appendChild(rowDIV4);

let rowDIV5 = document.createElement('div');
rowDIV5.setAttribute('class', 'row');
containerDIV.appendChild(rowDIV5);

let rowDIV6 = document.createElement('div');
rowDIV6.setAttribute('class', 'row');
containerDIV.appendChild(rowDIV6);

// add it to the body element
document.body.appendChild(containerDIV);

// let buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.classList.add('red');
// });

// console.log(buttons);

