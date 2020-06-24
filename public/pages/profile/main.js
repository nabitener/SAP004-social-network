import { back, user, perfilImage } from './data.js'

export const profile = () => {
    const container = document.createElement('div');
    container.classList.add('div-profile');
    container.innerHTML = `
    <form method='post' class='profile-edit'>
      <img src='imagens/user.png' class='imgPerfil img-perfil'>
      <input type='file' class='photo-perfil' id='photo' accept='image/png, image/jpeg, image/jpg'/> 
      <label for='new-name' class='label-new-name'>Digite seu nome    
      <input type='name' id='new-name' class='new-name' placeholder='Digite seu nome'>
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

    inputPhoto.addEventListener('change', (event) => {
      imgPerfil.src = '';
      let file = event.target.files[0];
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
    })

    const backToHome = container.querySelector('#back-to-home');
      backToHome.addEventListener('click', (event) => {
        event.preventDefault();
        back();
      });
      
    return container;
};