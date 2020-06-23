import { back } from './data.js'
export const profile = () => {
    const container = document.createElement('div');
    container.innerHTML = `
    <form method='post'>
      <input id='new-name' class='new-name' type='text' placeholder='Digite seu nome'>
      <textarea id='bio' class='bio' type='text' placeholder='Digite sua bio'></textarea>
      <button id='save-profile' class='btn-profile'>Salvar perfil</button>
      <button id='cancel' class='btn-profile'>Cancelar</button>
      <button id='back-to-home' class='btn-profile'>Voltar</button>
    </form>
    `;
    const backToHome = container.querySelector('#back-to-home');
      backToHome.addEventListener('click', (event) => {
        event.preventDefault();
        back();
      });
      
    return container;
};