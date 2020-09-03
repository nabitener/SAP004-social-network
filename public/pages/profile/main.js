import { back, user, perfilImage } from './data.js';

export const profile = () => {
  const container = document.createElement('div');
  container.classList.add('div-profile');
  container.innerHTML = `
    <form method='post' class='profile-edit'>
      <img src='' class='imgPerfil img-perfil'>
      <input type='file' class='photo-perfil' id='photo' accept='image/png, image/jpeg, image/jpg'/>
      <p class='update-message' id='update-message'></p>
      <label for='new-name' class='label-new-name'>Digite seu nome    
      <textarea id='new-name' class='new-name' maxlength="100"></textarea>
      </label>
      <label for='bio' class='label-bio'>Biografia
      <textarea id='bio' class='bio' maxlength="300"></textarea>
      </label>
      <div class='btn-profile-edit'>
        <button id='save-profile' class='btn-profile'>Salvar perfil</button>
        <button id='back-to-home' class='btn-profile'>Voltar</button>
      </div>
    </form>
    `;

  const saveProfile = container.querySelector('#save-profile');
  const inputName = container.querySelector('.new-name');
  const inputBio = container.querySelector('.bio');
  const inputPhoto = container.querySelector('.photo-perfil');
  const imgPerfil = container.querySelector('.img-perfil');
  const backToHome = container.querySelector('#back-to-home');

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      const userId = firebase.auth().currentUser;
      firebase
        .firestore()
        .collection("users")
        .doc(userId.uid)
        .get()
        .then((doc) => {
          inputName.innerHTML = userId.displayName;
          imgPerfil.src = userId.photoURL;
          inputBio.innerHTML = doc.data().biography;
        });
    }
  });

  inputPhoto.addEventListener('change', (event) => {
    imgPerfil.src = '';
    const file = event.target.files[0];
    imgPerfil.src = URL.createObjectURL(file);
    perfilImage(inputPhoto, validarUrl);
  });

  const validarUrl = (url) => {
    imgPerfil.src = '';
    imgPerfil.src = url;
  };

    saveProfile.addEventListener('click', (event) =>{
      event.preventDefault();
      user(inputName.value, imgPerfil.src, inputBio.value);
      back();
    })

  backToHome.addEventListener('click', (event) => {
    event.preventDefault();
    back();
  });
  return container;
};
