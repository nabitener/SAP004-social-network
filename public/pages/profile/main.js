import { back, user } from './data.js'

export const profile = () => {
  const container = document.createElement('div');
  container.classList.add('div-profile');
  container.innerHTML = `
  <form method='post' class='profile-edit'>
    <label for='new-name' class='label-new-name'>Digite seu nome    
      <input type='name' id='new-name' class='new-name' placeholder='Digite seu nome'>
    </label>
    <label class='label-bio' for='bio'> Digite sua Bio
      <textarea id='bio' class='bio' placeholder='Digite sua bio'></textarea>
    </label>
    <div class='btn-profile-edit'>
      <button id='save-profile' class='btn-profile'>Salvar perfil</button>
      <button id='cancel' class='btn-profile'>Cancelar</button>
      <button id='back-to-home' class='btn-profile'>Voltar</button>
    </div>
  </form>

  `;

  const saveProfile = container.querySelector('#save-profile');
  const inputName = container.querySelector('.new-name');
  const inputBio = container.querySelector('.bio');

  saveProfile.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputBio.value, inputName.value);
    //editProfile(inputBio, inputName);
    user(inputName.value);
  });

  const backToHome = container.querySelector('#back-to-home');
    backToHome.addEventListener('click', (event) => {
      event.preventDefault();
      back();
    });
    
  return container;
};
