import { createPost, readPosts } from './data.js';
export const home = () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="btn-back"></div>
    <div>
      <img class="wave" src="imagens/perfil-avatar.png">
    </div>
    <form>
      <input id='post' class='post' type='text' placeholder='Para onde vamos?'>
      <button id='send-post'>Compartilhar</button>
      <button id='photo' class='photo'>Photo</button>
    </form>
    <div id='all-posts' class='all-posts'></div>
    <!--<form>
      <input id='posts' class='posts' type='text'>
      <button id='photo' class='photo'>Curtida</button>
      </form>-->
  `;

  const post = container.querySelector('#post');
  const sendBtn = container.querySelector('#send-post');
  const allPosts= container.querySelector('#all-posts');

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    allPosts.innerHTML = '';
    readPosts()
    .then (postTemplate);
  });
  const postTemplate = (array) => {
    allPosts.innerHTML = array.map(post => `<p>${post.text}</p>`).join('')
  }
  return container;
};

