// document.getElementById('header').innerHTML = `<h2>Inner HTML</h2>
//             <p>
//                 Inner HTML sets the HTML content of an element
//             </p>
//             <ul>
//                 <li>html</li>
//                 <li>css</li>
//                 <li>javascript</li>
//             </ul>
//             `;

let button = document.createElement('button');

button.textContent = 'Click Here';

button.addEventListener('click', () => {
    alert('button clicked');
});

document.getElementById('header').appendChild(button);