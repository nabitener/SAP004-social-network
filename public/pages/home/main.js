import {
  createPost,
  readPosts,
  deletePost,
  editAndSavePost,
  likePosts,
  signOut,
  postImage,
} from "./data.js";

export const home = () => {
  const container = document.createElement("div");
  container.classList.add("div-home");

  container.innerHTML = ` 
  <div class='menu'> 
  <input type='checkbox' id='check' class='check'>
  <label for='check' class='label-icone'>
    <img src='imagens/icone.png' alt='icone-menu'>
  </label >
  <nav class='nav'>
  <ul class='ul'>
    <li class='li-link' id='edit-profile'><a class='link'href='/#profile'>Perfil</a></li>
    <li class='li-link-name'>Travel Time</a></li>
    <li class='li-link'>
    <a class='link'>
    <input type='image' src='imagens/sign-out.png' class='signout' data-id='sign-out'>
    </a>
    </li>
  </ul>
  </nav>
  <p class='app-name-home'>Travel Time</p>
 </div>
 <form method='post' class='form-home'>
 <div id='input-post' class='input-post'>
   <div id='div-perfil' class='div-perfil'>
   <a class='link-img' href='/#profile'>
   <img src='imagens/user.png' class='imgPerfil'>
   </a>
   <p class='name-user'></p> 
   <p class='bio-text'></p>
  </div>
 </div>
 <div id='div-form' class='div-form'>
  <div class='input-post-photo'>
 <div class='div-photo'>
  <img src='' width='100%' class='imgPreview'>
</div>
 <input id='post' class='post' type='text' placeholder='Para onde vamos?'>
 </div>
 <div id='container-private' class='container-private'>
   <button id='send-post' class='send-post icon-post'>Publicar</button>
   <label for='photo' class='label-camera icon-post'>📷
  <input type='file' class='photo' id='photo' accept='image/png, image/jpeg, image/jpg'/> 
  </label>
   <select id='input-private' class='input-private' name='input-private'>
     <option id='public' class='public'>Público</option>
     <option id='private' class='private' selected>Privado</option>
   </select>
 </div>
 
 <div id='all-posts' class='all-posts'></div>
 </div>
</form>
<footer class="rodape">
    Developed by Aline Souza, Marcella Teliceski e Nathalia Bitener
</footer>
  `;

  const post = container.querySelector("#post");
  const sendBtn = container.querySelector("#send-post");
  const allPosts = container.querySelector("#all-posts");
  const privacyPost = container.querySelector("#input-private");
  const exit = container.querySelector(".signout");
  const photo = container.querySelector(".photo");
  const bio = container.querySelector(".bio-text");
  let preview = container.querySelector(".imgPreview");
  let photoPerfil = container.querySelector(".imgPerfil");
  let nomeP = container.querySelector(".name-user");

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      const userId = firebase.auth().currentUser;
      firebase
        .firestore()
        .collection("users")
        .doc(userId.uid)
        .get()
        .then((doc) => {
          nomeP.innerHTML = userId.displayName;
          photoPerfil.src = userId.photoURL;
          bio.innerHTML = doc.data().biography;
        });
    }
  });

  photo.addEventListener("change", (event) => {
    let file = event.target.files[0];
    preview.src = URL.createObjectURL(file);
    postImage(photo, validarUrl);
  });

  const validarUrl = (url) => {
    preview.src = "";
    preview.src = url;
  };

  sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createPost(post.value, privacyPost.value, preview.src);
    preview.src = "";
    post.value = "";
    allPosts.innerHTML = "";
    readPosts(postTemplate, postTemplateUser);
  });

  exit.addEventListener("click", (event) => {
    event.preventDefault();
    signOut();
  });

  const postTemplate = (post) => {
    const now = new Date();
    const spaceTemplate = document.createElement("div");

    const validaImg = () => {
      if (post.data().imagem !== "https://social-network-travel-97.web.app") {
        return `<img src='${post.data().imagem}' class='div-img-post'></img>`;
      } else {
        return `<img src='' class='div-img-post'></img>`;
      }
    };

    const validaNome = () => {
      if (post.data().name === "") {
        return `<div id='div-name' class='div-name'>${post.data().email}</div>`;
      } else {
        return `<div id='div-name' class='div-name'>${post.data().name}</div>`;
      }
    };

    spaceTemplate.innerHTML = `
  
  <div id='div-post' class='div-post'>
  <div id='container-name' class='container-name'>
  ${validaNome()}
  </div>
  <div class ='div-postado' data-id='${post.id}'>
  ${validaImg()}
  <p data-id='${post.id}' class='text-post'>${
      post.data().text
    }</p>
  </div>
  <div id='div-container-btn' class='div-container-btn'>
  <div id='div-btn' class='div-btn'>
  <button data-id='${post.id}' class='curtida icon-post'>❤️${
      post.data().likes
    }</button>
  </div>
  <div id='div-date' class='div-date'>
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

    btnLikes.addEventListener("click", () => {
      const id = btnLikes.dataset.id;
      likePosts(id, post.data().likes);
      allPosts.innerHTML = "";
      readPosts(postTemplate, postTemplateUser);
    });
  };

  const postTemplateUser = (post) => {
    const now = new Date();
    const spaceTemplate = document.createElement("div");

    const validaImg = () => {
      if (post.data().imagem !== "http://localhost:5000/") {
        return `<img src='${post.data().imagem}' class='div-img-post'></img>`;
      } else {
        return `<img src='' class='div-img-post'></img>`;
      }
    };
    const validaNome = () => {
      if (post.data().name === "") {
        return `<div id='div-name' class='div-name'>${post.data().email}</div>`;
      } else {
        return `<div id='div-name' class='div-name'>${post.data().name}</div>`;
      }
    };

    spaceTemplate.innerHTML = `
  
  <div id='div-post' class='div-post'>
  <div id='container-name' class='container-name'>
  ${validaNome()}
  <div id='div-delete' class='div-delete'>
  <button data-id='${post.id}' class='save'>✔️</button>
  <button data-id='${post.id}' class='edit'>✏️</button> 
  <button data-id='${post.id}' class='delete'>❌</button>
  </div>
  </div>
  <div class ='div-postado' data-id='${post.id}'>
  ${validaImg()}
  <textarea data-id='${post.id}' class='text-post' disabled>${
      post.data().text
    }</textarea>
  </div>
  </div>
  <div id='div-container-btn' class='div-container-btn'>
  <div id='div-btn' class='div-btn'>
  <button data-id='${post.id}' class='curtida icon-post'>❤️${
      post.data().likes
    }</button>
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

    const btnSave = spaceTemplate.querySelector(".save");
    const btnEdit = spaceTemplate.querySelector(".edit");
    const editText = spaceTemplate.querySelector(
      `.text-post[data-id='${post.id}']`
    );
    const selectPrivate = spaceTemplate.querySelector(".select-private");
    const btnDelete = spaceTemplate.querySelector(
      `.delete[data-id='${post.id}']`
    );
    const btnLikes = spaceTemplate.querySelector(
      `.curtida[data-id='${post.id}']`
    );
    const divDate = spaceTemplate.querySelector(".div-date");

    btnDelete.addEventListener("click", (event) => {
      event.preventDefault();
      const id = btnDelete.dataset.id;
      deletePost(id);
      allPosts.innerHTML = "";
      readPosts(postTemplate, postTemplateUser);
    });
    btnEdit.addEventListener("click", (event) => {
      event.preventDefault();
      editPost();
    });

    btnSave.addEventListener("click", (event) => {
      event.preventDefault();
      savePost();
    });

    const editPost = () => {
      editText.disabled = false;
      editText.style.color = "rgba(14, 60, 89, 1)";
      editText.style.background = "white";
      btnSave.style.display = "inline-block";
      btnLikes.style.display = "none";
      divDate.style.display = "none";
      selectPrivate.style.display = "inline-block";
    };

    const savePost = () => {
      editText.disabled = true;
      editText.style.color = "wheat";
      editText.style.background = "rgba(191, 87, 26, 1)";
      btnSave.style.display = "none";
      btnLikes.style.display = "";
      divDate.style.display = "";
      selectPrivate.style.display = "none";
      const id = editText.dataset.id;

      editAndSavePost(id, editText.value, selectPrivate.value);
      allPosts.innerHTML = "";
      readPosts(postTemplate, postTemplateUser);
    };
  };
  readPosts(postTemplate, postTemplateUser);

  return container;
};
