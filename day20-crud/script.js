async function createPost(event) {
    event.preventDefault;

    // get the form elements
    let titleInput = document.querySelector('#title');
    let bodyInput = document.querySelector('#body');

    // create the new Post
    let newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    }

    // make the api request to post the data to the server to get it created
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json'
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// create a reference to the dom element form with id create-post-form
let createPostForm = document.querySelector('#create-post-form');

// attach an event listener
createPostForm.addEventListener('submit', createPost);