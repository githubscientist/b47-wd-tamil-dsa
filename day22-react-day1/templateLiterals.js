// template literals

// let name = 'sathish';
// let age = 25;

// embedded expressions
// let message = `hello, my name is ${name} and I'm ${age} years old`;

// console.log(message);

// multi-line strings
// let sentence = `this 
// is a 
// sentence
// `;

// console.log(sentence);

let header = 'Template Literals';
let items = ['template literals', 'javascript', 'es6', 'es5'];

let html = `
    <h2>${header}</h2>
    <ul>
`;

for (let item of items) {
    html += `<li>${item}</li>`;
}

html = html + '</ul>';

console.log(html);