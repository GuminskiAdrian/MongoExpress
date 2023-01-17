const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = 'json';

    xhr.onload = function() {
      resolve(xhr.response);
      // const listOfPosts = JSON.parse(xhr.response);
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    'GET',
    'http://localhost:3000/posts'
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.description;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const post = {
    title: title,
    description: content,
  };

  sendHttpRequest('POST', 'http://localhost:3000/posts', post);
}

fetchPosts();
// createPost('Hej', 'To dziala');