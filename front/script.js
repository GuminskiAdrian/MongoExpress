const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const addPost = document.getElementById("addPost");
const fetchPostsBttn = document.getElementById("fetchPostsBttn");

function sendHttpRequest(method, url, data = null) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = "json";

        xhr.onload = function () {
            resolve(xhr.response);
        };

        xhr.send(JSON.stringify(data));
    });

    return promise;
}

async function fetchPosts() {
    const responseData = await sendHttpRequest(
        "GET",
        "http://localhost:3000/posts"
    );
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title;
        postEl.querySelector("p").textContent = post.description;
        postEl.querySelector("h3").textContent = post.date;
        listElement.append(postEl);
    }
}

async function createPost(title, content) {
  const post = {
    title: title,
    description: content
  };
  sendHttpRequest('POST', 'http://localhost:3000/posts', post);
  console.log(JSON.stringify(post));
}

// function createPost(titles, content) {
//     const post = {
//         title: titles,
//         description: content,
//     };
//     console.log(JSON.stringify(post));
//     sendHttpRequest("POST", "http://localhost:3000/posts", JSON.stringify(post));
// }

fetchPosts();

fetchPostsBttn.addEventListener('click', (e) => {
  e.preventDefault();
  fetchPosts();
});
// createPost('Hej', 'To dziala');
addPost.addEventListener("click", (e) => {
  e.preventDefault();
  createPost("Nowy post", "To dzialaaa");
});

createPost("Nowy post", "To dzialaaa");