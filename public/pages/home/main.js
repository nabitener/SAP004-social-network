import { createPost, readPosts, deletePost, signOut } from './data.js';

export const home = () => {
  const container = document.createElement('div');
  container.classList.add('div-home');

  container.innerHTML = `  
  <div class='out'><img src='imagens/sign-out.png' class='signout' id='sign-out></div>
  <div class="btn-back"></div>
    <div>
      <img class="wave" src="imagens/perfil-avatar.png">
    </div>
    
    <form>
      <div id='write-post' class='write-post'></div>
      <div id='input-post' class='input-post'></div>
    <div>
      <input id='post' class='post' type='text' placeholder='Para onde vamos?'>
    </div>
    <div id='container-private' class='container-private'></div>
      <div id='btn-post' class='btn-post'>
        <button id='send-post' class='send-post icon-post'>✈️</button>
        <button id='photo' class='photo icon-post'>📸</button>
      </div> 

    <div id='input-private' class='input-private'> 
      <input type='radio' id='private' class='private' name='private-post' value='private'>
      <label for='private' class='label-private'>Privado</label>
      <input type='radio' id='public' class='public' name='private-post' value='public'>
      <label for='public' class='label-private'>Público</label>
    </div>
    
    
    
    <div id='all-posts' class='all-posts'></div>
    </form>
  `;

  const post = container.querySelector('#post');
  const sendBtn = container.querySelector('#send-post');
  const allPosts = container.querySelector('#all-posts');
  //const exit = container.querySelector('#sign-out')

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    post.value = '';
    allPosts.innerHTML = '';
    readPosts(postTemplate);
  });
  const exit = container.querySelector('#sign-out')
  exit.addEventListener('click', (event) => {
    event.preventDefault()
    signOut()
  })

  

  const postTemplate = (post) => {
    const now = new Date;
    const spaceTemplate = `
    <div id='div-post' class='div-post'>
    <div id='container-name' class='container-name'>
    <div id="userName">${firebase.auth().currentUser.displayName}</div>
    <div id='${post.id}' class='div-delete'>
    <button id='delete' class='delete'>❌</button>
    </div>
    </div>
    <p id='text-post' class='text-post'>${post.data().text}
    </p>
    <div id='div-container-btn' class='div-container-btn'>
    <div id='div-btn' class='div-btn'>
    <button id='curtida' class='curtida icon-post'>❤️${post.data().likes}</button>
    <button id='comentar' class='comentar icon-post'>💬${post.data().coments}</button>
    </div>
    <div id='div-date' class=div-date>
    <p id='date' class='date'>${now.getDate()}/${now.getMonth()}/${now.getFullYear()}</p>
    </div>
    </div>
    </div>
    `;

    allPosts.innerHTML += spaceTemplate;

    const btnDelete = allPosts.querySelector('#delete');
    btnDelete.addEventListener('click', (e) => {
      const id = e.target.parentElement.id;
      deletePost(id);
      allPosts.innerHTML = '';
      console.log('clicou')
      readPosts(postTemplate);
    })
  };
  readPosts(postTemplate);

  return container;
};
