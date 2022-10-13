"use strict";
const posts = "https://jsonplaceholder.typicode.com/posts/";

const wrapper = document.createElement("div");
const postsLists = document.createElement("div");

document.body.prepend(wrapper);
wrapper.append(postsLists);


let i = 1;
const getPosts = setInterval(() => {
    fetch(`${posts}`)
    .then(data => data.json())
    .then(data => {
        postsLists.innerHTML += `
            <div style = "margin-bottom: 40px>
            <p>${data.title}</p>
            <p>${data.body}</p>
        `;
if(i === 15){
    clearInterval(getPosts); 
}
i++;
    });
}, 1000);


const photos = "https://jsonplaceholder.typicode.com/photos/";

const photosList = document.createElement("div");
postsLists.append(photosList);

let j = 1;
const getPhotos = setInterval(() => {
    fetch(`${photos}`)
    .then(data => data.json())
    .then(data => {
        photosList.innerHTML += `
            <img src = ${data.url} alt =${data.title} style = "display: block; max-width: 500px; width: 100%; margin-bottom: 20px;">
        `;
if(j === 3){
    clearInterval(getPhotos); 
}
j++;
    });
}, 1000);



const comments = "https://jsonplaceholder.typicode.com/comments/";

const commentsList = document.createElement("div");
photosList.append(commentsList);

let k = 1;
const getComments = setInterval(() => {
    fetch(`${comments}`)
    .then(data => data.json())
    .then(data => {
        commentsList.innerHTML += `
            <div style = "margin-bottom: 40px>
            <p>${data.title}</p>
            <p>${data.body}</p>
        `;
if(k === 3){
    clearInterval(getComments); 
}
k++;
    });
}, 1000);
