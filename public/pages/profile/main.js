import { createProfile, hashProfile } from './data.js'

export const profile = () => {

  const conteudo = document.createElement('div');
  conteudo.classList.add('conteudo');

  conteudo.innerHTML = `
  <nav class='nav'>
      <ul>
        <li>
          <select id='profile'>
          <option selected disabled>Fulana</option>
          <option id='edit-profile'>Editar Perfil<option>
          </select>
        </li>
      </ul>
    </nav>
  `
  const editP = conteudo.querySelector('#edit-profile')
  
  editP.addEventListener('click', (event)=>{
    event.preventDefault()
    createProfile()
    hashProfile()
  })

return conteudo;
}