import { back } from './data.js'

export const profile = () => {
    const container = document.createElement('div');
    container.innerHTML = `
    <form method='post'>
      <input id='new-name' type='text' placeholder='Digite seu nome'>
      <input id='bio' type='text' placeholder='Digite sua bio'>
      <button id='save-profile'>Salvar perfil</button>
      <button id='cancel'>Cancelar</button>
      <button id='back-to-home'>Voltar</button>
    </form>
    `;
    const backToHome = container.querySelector('#back-to-home');
      backToHome.addEventListener('click', (event) => {
        event.preventDefault()
        back();
      });
      
    return container;
};