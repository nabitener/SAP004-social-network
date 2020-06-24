import { newUser} from './data.js';

export const record = () => {
  const container = document.createElement('div');
  container.classList.add('div-container-register');

  container.innerHTML = `
    <div class=btn-back>
    <a href=''>
      <button id='btn-back' class='btn-back input-register'>&#8672 Voltar</button>
    </a>
    </div>
    <form class='form-register'>
      <p class='registro'><h2 class='registro-title'>Cadastro</h2></p> 
      <input type='name' id='name' class='user-name input-register register-space' placeholder='Nome' required>
      <input type='surname' id='surname' class='surname input-register register-space' placeholder='Sobrenome' required>
      <input type='email' id='email' class='email input-register register-space' placeholder='Digite o e-mail' required>
      <input type='password' id='password' class='password input-register register-space' placeholder= 'Digite a senha' required>
      <input type='password' id='confirm-password' class='password input-register register-space' placeholder= 'Confirme a senha' required>
      <p id='error-message' class='error.message'></p>
      <button id='record' class='btn-record input-register'>Criar conta</button>
    </form>
    <footer class="rodape">
    Developed by Aline Souza, Marcella Teliceski e Nathalia Bitener
    </footer>
    `;

  const email = container.querySelector('#email');
  const name = container.querySelector('#name');
  const password = container.querySelector('#password');
  const newpassword = container.querySelector('#confirm-password');
  const createUser = container.querySelector('#record');
  const spaceError = container.querySelector('#error-message');
  

  const inputError = (error) => {
    const message = `
  <p id='message' class='error-message'>
  Falha: ${error}
  </p>`;
    spaceError.innerHTML = message;
  };

  createUser.addEventListener('click', (event) => {
    event.preventDefault();
  if ((password.value) !== (newpassword.value) ) {
    spaceError.innerHTML = `<p id='message' class='error-message'>Senhas divergentes,digite novamente</p>`;
  } else {
  spaceError.innerHTML = '' ;
  newUser(email, password,inputError);
  }
  });
  
  return container;
};