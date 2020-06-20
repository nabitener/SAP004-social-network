import {
  createPost,
  readPosts,
  deletePost,
  editAndSavePost,
  likePosts,
  signOut,
} from './data.js';

export const home = () => {
  const container = document.createElement('div');
  container.classList.add('div-home');

  container.innerHTML = ` 
  <div class='menu'> 
  <input type='checkbox' id='check' class='check'>
  <label for='check' class='label-icone'>
    <img src='imagens/icone.png' alt='icone-menu'>
  </label >
  <nav class='nav'>
  <ul class='ul'>
    <li class='li-link' id='edit-profile'><a class='link'>Perfil</a></li>
    <li class='li-link-name'>Travel Time</a></li>
    <li class='li-link'>
    <a class='link'>
    <input type='image' src='imagens/sign-out.png' class='signout' data-id='sign-out'>
    </a>
    </li>
  </ul>
  </nav>
  <p class='app-name-home'>Travel Time</p>
  <form method='post' class='form-home'>
  <div id='input-post' class='input-post'>
  <div id='div-perfil' class='div-perfil'>
  <div class='cover-photo'> 
  <img src='imagens/coqueiro-logo.png' class='logo-home'>
  </div>
  <div class='div-wave-desk' id='desk'>
    <p class='infos' id='user-name'>fulana</p>
    <img class='wave-desk' src='imagens/perfil-avatar.png'>
    <label for='profile-photo'> 
      <img src='imagens/camera.png' class='camera' id='camera'/>
    </label>
      <input type='file' name='user-photo' id='profile-photo' accept='.jpg, .jpeg, .png' style='display:none;'>
    <p class='infos' id='bio'>Breve descrição sobre você</p>
  </div>
  </div>
</div>
<div id='div-form' class='div-form'>
<img class='wave' src='imagens/perfil-avatar.png'>
<div class='input-post-photo'>
<div class='div-photo'>
  <img src='' height='100'class='imgPreview'>
  <input type='file' class='photo' accept='image/png, image/jpeg, image/jpg'/> 
</div>
  <input id='post' class='post' type='text' placeholder='Para onde vamos?'>
</div>
<div id='container-private' class='container-private'>
  <button id='send-post' class='send-post icon-post'>✈️</button>
  <select id='input-private' class='input-private' name='input-private'>
    <option id='public' class='public'>Público</option>
    <option id='private' class='private' selected>Privado</option>
  </select>
</div>
<div id='all-posts' class='all-posts'></div>
  </div>
</form>
  `;

  const post = container.querySelector('#post');
  const sendBtn = container.querySelector('#send-post');
  const allPosts = container.querySelector('#all-posts');
  const privacyPost = container.querySelector('#input-private');
  const exit = container.querySelector('.signout');
  const photo = container.querySelector('.photo');
  const editProfile = container.querySelector('#edit-profile');
  const bio = container.querySelector('#bio')



  bio.addEventListener('click', (event) => {
    event.preventDefault();
    profile();
  })

  photo.addEventListener('change', (event) => {
    let preview = container.querySelector('.imgPreview');
    let file = event.target.files[0]
    preview.src = URL.createObjectURL(file);
    if(preview.src){

    }
  });

 /* function postImage () {
    const fileInput = container.querySelector('.photo');
    fileInput.addEventListener('change', (e) => {
      e.preventDefault();
      var file = e.target.files[0]
      var ref = firebase.storage().ref('imagens/' + file.name)
    ref.put(file).then (()=> {
      ref.getDownloadURL().then(url => {
        console.log(url)
        return url
      })
    })
  })};*/

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value, privacyPost.value);
    postImage();
    post.value = '';
    allPosts.innerHTML = '';
    readPosts(postTemplate);
  });

  exit.addEventListener('click', (event) => {
    console.log('clicou');
    event.preventDefault();
    signOut();
  });

  editProfile.addEventListener('click', (event) => {
  event.preventDefault();
  profile();
});

  const profile = () => {
  window.location.hash = '#profile';
};

const postTemplate = (post) => {
  const now = new Date();
  const spaceTemplate = document.createElement('div');
  spaceTemplate.innerHTML = `
  
  <div id='div-post' class='div-post'>
  <div id='container-name' class='container-name'>
  <div id='div-name' class='div-name'>${post.data().name}</div>
  </div>
  <textarea data-id='${post.id}' class='text-post' disabled>${
    post.data().text
  }</textarea>
  <div id='div-container-btn' class='div-container-btn'>
  <div id='div-btn' class='div-btn'>
  <button data-id='${post.id}' class='curtida icon-post'>❤️${post.data().likes}</button>
  <button data-id='${post.id}' class='comentar icon-post'>💬${post.data().coments}</button>
  </div>
  <div id='div-date' class=div-date>
  <p id='privaty' class='privaty'>${post.data().privacy}</p>
  <p id='date' class='date'>${now.getDate()}/${now.getMonth()}/${now.getFullYear()}</p>
  </div>
  </div>
  </div>
  `;

  allPosts.appendChild(spaceTemplate);

  const btnLikes = spaceTemplate.querySelector(
    `.curtida[data-id='${post.id}']`
  );

  btnLikes.addEventListener('click', () => {
    const id = btnLikes.dataset.id;
    likePosts(id, post.data().likes);
    allPosts.innerHTML = '';
    readPosts(postTemplate, postTemplateUser);
  });
};

const postTemplateUser = (post) => {
  const now = new Date();
  const spaceTemplate = document.createElement('div');
  spaceTemplate.innerHTML = `
  
  <div id='div-post' class='div-post'>
  <div id='container-name' class='container-name'>
  <div id='div-name' class='div-name'>${post.data().name}</div>
  <div id='div-delete' class='div-delete'>
  <button data-id='${post.id}' class='save'>✔️</button>
  <button data-id='${post.id}' class='edit'>✏️</button> 
  <button data-id='${post.id}' class='delete'>❌</button>
  </div>
  </div>
  <textarea data-id='${post.id}' class='text-post' disabled>${post.data().text}</textarea>
  <div id='div-container-btn' class='div-container-btn'>
  <div id='div-btn' class='div-btn'>
  <button data-id='${post.id}' class='curtida icon-post'>❤️${post.data().likes}</button>
  <button data-id='${post.id}' class='comentar icon-post'>💬${post.data().coments}</button>
  </div>
  <select class='select-private' name='input-private'>
    <option id='option-public' class='public'>Público</option> 
    <option id='option-private' class='private' selected>Privado</option>
  </select>
  <div id='div-date' class='div-date'>
  <p class='privaty'>${post.data().privacy}</p>
  <p id='date' class='date'>${now.getDate()}/${now.getMonth()}/${now.getFullYear()}</p>
  </div>
  </div>
  </div>
  `;

  allPosts.appendChild(spaceTemplate);

  const btnSave = spaceTemplate.querySelector('.save');
  const btnEdit = spaceTemplate.querySelector('.edit');
  const editText = spaceTemplate.querySelector(
    `.text-post[data-id='${post.id}']`
  );
  const selectPrivate = spaceTemplate.querySelector('.select-private');
  const btnDelete = spaceTemplate.querySelector(
    `.delete[data-id='${post.id}']`
  );
  const btnLikes = spaceTemplate.querySelector(
    `.curtida[data-id='${post.id}']`
  );
  const btnComentar = spaceTemplate.querySelector('#comentar-user');

  btnDelete.addEventListener('click', (event) => {
    event.preventDefault();
    const id = btnDelete.dataset.id;
    deletePost(id);
    allPosts.innerHTML = '';
    readPosts(postTemplate, postTemplateUser);
  });
  btnEdit.addEventListener('click', (event) => {
    event.preventDefault();
    editPost();
  });

  btnSave.addEventListener('click', (event) => {
    event.preventDefault();
    savePost();
  });

  const editPost = () => {
    editText.disabled = false;
    editText.style.color = 'rgba(14, 60, 89, 1)';
    editText.style.background = 'white';
    btnSave.style.display = 'inline-block';
    btnLikes.style.display = 'none';
    btnComentar.style.display = 'none';
    selectPrivate.style.display = 'inline-block';
  };

  const savePost = () => {
    editText.disabled = true;
    editText.style.color = 'wheat';
    editText.style.background = 'rgba(191, 87, 26, 1)';
    btnSave.style.display = 'none';
    btnLikes.style.display = '';
    btnComentar.style.display = '';
    selectPrivate.style.display = 'none';
    const id = editText.dataset.id;


    editAndSavePost(id, editText.value, selectPrivate.value);
    allPosts.innerHTML = '';
    readPosts(postTemplate, postTemplateUser);
  };
};

readPosts(postTemplate, postTemplateUser);

return container;

};