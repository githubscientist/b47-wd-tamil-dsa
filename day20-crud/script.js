function deletePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    })
        .then(() => {
            console.log('post deleted');
            // getPosts();
        });
}

function cancelEdit() {
    let editPostForm = document.querySelector('#edit-post-form');
    editPostForm.style.display = 'none';
}

function updatePost(event) {
    event.preventDefault();

    // get the details
    let postId = document.querySelector('#edit-post-id').value;
    let editTitleInput = document.querySelector('#edit-title').value;
    let editBodyInput = document.querySelector('#edit-body').value;

    // create an object
    let updatedPost = {
        title: editTitleInput,
        body: editBodyInput
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
            cancelEdit();
        });
}

function editPost(postId) {
    // make a request to get the post details based on the id clicked
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            // select the edit form
            let editForm = document.querySelector('#edit-post-form');
            let editTitleInput = document.querySelector('#edit-title');
            let editBodyInput = document.querySelector('#edit-body');
            let editPostID = document.querySelector('#edit-post-id');

            // display the form
            editForm.style.display = 'block';

            // set the values of the form elements from the api call data
            editTitleInput.value = post.title;
            editBodyInput.value = post.body;
            editPostID.value = post.id;
        });
}

// get the references of the form update
let editPostForm = document.querySelector('#edit-post-form');
editPostForm.addEventListener('submit', updatePost);

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(posts => {
            // get the reference of the table
            let tableBody = document.querySelector('#posts-table tbody');

            // clear the table body
            tableBody.innerHTML = '';

            // create and add the rows from the api result
            posts.forEach(post => {
                let row = document.createElement('tr');

                row.innerHTML = `
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                    <td>
                        <button onclick="editPost(${post.id})">Edit</button>
                        <button onclick="deletePost(${post.id})">Delete</button>
                    </td>
                `;

                tableBody.appendChild(row);

            });
        });
}

async function createPost(event) {

    event.preventDefault();

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
    try {
        let postedJson = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newPost),
        });

        let postedObject = await postedJson.json();

        // clear the form elements
        titleInput.value = '';
        bodyInput.value = '';

        console.log(postedObject);

        // getPosts();
    } catch (error) {
        console.error(error);
    }
}

// create a reference to the dom element form with id create-post-form
let createPostForm = document.querySelector('#create-post-form');

// attach an event listener
createPostForm.addEventListener('submit', createPost);

// get all the posts and display as a table below the form
getPosts();