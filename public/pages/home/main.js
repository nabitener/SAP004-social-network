// Aqui serão criados os eventos de Manipulação de DOM e templates
import { createPost, readPosts } from './data.js';

export const home = () => {
  const container = document.createElement('div');


  container.innerHTML = `
    <div class="btn-back"></div>
    <div>
      <img class="wave" src="imagens/perfil-avatar.png">
    </div>
    <form>
      <input id='post' class='post' type='text'>
      <button id='send-post'>Compartilhar</button>
      <button id='photo' class='photo'>Photo</button>
    </form>
    <div class='all-posts'></div>
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
  });
  const postTemplate = (array) =>{
    array.map(post => allPosts.innerHTML = `<p>${post.text}</p>`)
  }
  return container;
};
