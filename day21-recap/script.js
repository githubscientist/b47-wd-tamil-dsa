// get all the references
// search form reference
let form = document.querySelector('.dictform');

// input box -> search box
let wordInput = document.querySelector('.wordinput');

// word info div
let wordInfo = document.querySelector('.meaningforward');

// get the reference of the button
let searchButton = document.querySelector('.searchButton');

// form.addEventListener('submit', (e) => {
//     // to prevent the default behaviour of the form
//     e.preventDefault();

//     // get the word entered by the user in the input text box
//     let word = wordInput.value;

//     console.log(word);
// });

// getmeaning function
async function getmeaning(word) {
    // make a api request with the word
    try {

        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        // get the meaning
        // parse the json to js object
        let data = await response.json();

        // show the details below the input box
        // create a paragraph
        let paragraph = document.createElement('p');

        // reset the wordInfo
        wordInfo.innerHTML = '';

        // set the content of the paragraph element
        paragraph.innerHTML = `Word: <b>${data[0].word}</b>`;

        // append the created paragraph to the wordInfo
        wordInfo.appendChild(paragraph);
    } catch (error) {
        console.error('error fetching the meaning of the word');
    }
}

function handleSubmit(event) {
    event.preventDefault();

    let word = wordInput.value;

    // make a api request to get the meaning
    // of the word
    // and show it below the input box
    getmeaning(word);
}

form.addEventListener('submit', handleSubmit);
searchButton.addEventListener('click', handleSubmit);


