import { createPost, readPosts, deletePost,likePosts} from './data.js';


export const home = () => {
  const container = document.createElement('div');
  container.classList.add('div-home');

  container.innerHTML = `
    <div class="btn-back"></div>
    <div>
      <img class="wave" src="imagens/perfil-avatar.png">
    </div>
    <form>
    <div id='write-post' class='write-post'>
    <div id='input-post' class='input-post'>
    <input id='post' class='post' type='text' placeholder='Para onde vamos?'>
    </div>
    <div id='container-private' class='container-private'>
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
    </div>  
    </div>
    <div id='all-posts' class='all-posts'></div>
    </form>
  `;

  const post = container.querySelector('#post');
  const sendBtn = container.querySelector('#send-post');
  const allPosts = container.querySelector('#all-posts');

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    post.value = '';
    allPosts.innerHTML = '';
    readPosts(postTemplate);
  });

  const postTemplate = (post) => {
    const now = new Date;
    const spaceTemplate = document.createElement('div');
    spaceTemplate.innerHTML = `
    <div id='div-post' class='div-post'>
    <div id='container-name' class='container-name'>
    <div id='div-name' class='div-name'>${post.data().name}</div>
    <div id='${post.id}' class='div-delete'>
    <button id='delete' class='delete'>❌</button>
    </div>
    </div>
    <p id='text-post' class='text-post'>${post.data().text}
    </p>
    <div id='div-container-btn' class='div-container-btn'>
    <div id='div-btn' class='div-btn'>
    <button id='curtida' data-id='${post.id}' class='curtida icon-post'>❤️${post.data().likes}</button>
    <button id='comentar' class='comentar icon-post'>💬${post.data().coments}</button>
    </div>
    <div id='div-date' class=div-date>
    <p id='date' class='date'>${now.getDate()}/${now.getMonth()}/${now.getFullYear()}</p>
    </div>
    </div>
    </div>
    `;

    allPosts.appendChild(spaceTemplate);

    const btnDelete = allPosts.querySelector('#delete');
    btnDelete.addEventListener('click', (e) => {
      const id = e.target.parentElement.id;
      deletePost(id);
      allPosts.innerHTML = '';
      console.log('clicou')
      readPosts(postTemplate);
    })

    // console.log(post.id)
    const btnLikes =  spaceTemplate.querySelector(`button[data-id='${post.id}']`);
    // console.log(btnLikes);
    btnLikes.addEventListener( 'click' , () => {
      // console.log("like")
      const id = btnLikes.dataset.id
      console.log(id);
      // const id = post.id
      likePosts(id,post.data().likes);
      allPosts.innerHTML = '';
      readPosts(postTemplate);
    });
  };

  readPosts(postTemplate);

  return container;
};