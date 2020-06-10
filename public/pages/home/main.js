// Aqui serão criados os eventos de Manipulação de DOM e templates
import { greeting } from './data.js';

export const home = () => {
  const container = document.createElement('div');


  container.innerHTML = `
    <div class="btn-back">
    </div>
    <div>
    <img class="wave" src="imagens/perfil-avatar.png">
    </div>
    <div class = 'container'>
    <input id='post' class='re-post' type='text'>
      <button id='photo' class='btn-social'>Photo</button>
      <button id='send-post' class='btn-social'>Compartilhar</button>
    </div>
    <div class='all-posts'>
      <input id='post' class='post' type='text'>
      <button id='photo' class='btn-create'>Curtida</button>
      <button id='send-post' class='btn-create'>Compartilhar</button>
    </div>
    <div id='all-posts'></div>
  `;

  const name = container.querySelector('#post');
  const repost = container.querySelector('#re-post');
  const greetingBtn = container.querySelector('#send-post');
  const greetingMessage = container.querySelector('#all-posts');

  greetingBtn.addEventListener('click', (event) => {
    event.preventDefault();
    greetingMessage.innerHTML = greeting(name.value);
  });

  return container;
};