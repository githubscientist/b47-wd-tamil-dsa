// get the reference of the span/div
// let spanColor = document.getElementById('spanColor');

// spanColor.addEventListener('mouseover', function (event) {
//     console.log(event);
//     spanColor.style.color = 'blue';
// });

// spanColor.addEventListener('mouseout', function () {
//     spanColor.style.color = 'black';
// });

// let formElement = document.getElementById('formElement');

// formElement.addEventListener('submit', function (event) {
//     event.preventDefault();
//     // console.log(formElement.elements['username'].value);
//     event.target.elements['username'].value = 'sathish';
//     // console.log(event.target.elements['username'].value);
// });

// task 2
// let getInput = document.getElementById('getInput');
// let spanElement = document.getElementById('spanElement');

// getInput.addEventListener('click', function (event) {
//     spanElement.textContent = window.prompt('say something');
// });

// task 3: Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph.

// function showCoordinates(event){
//     let header = document.getElementById('header');

//     let x = event.clientX;
//     let y = event.clientY;

//     // get the reference of span
//     let spanCoordinates = document.getElementById('coordinates');

//     spanCoordinates.textContent = `coordinates x: ${x} and y: ${y}`;
// }

function characterCount() {
    let textarea = document.getElementById('textarea');
    let chars = document.getElementById('chars');
    
    chars.textContent = `You inserted characters: ${textarea.value.length}`;
}