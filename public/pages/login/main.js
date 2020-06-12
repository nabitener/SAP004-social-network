import { authEmailAndPassword, signIn } from './data.js';

export const login = () => {
  const container = document.createElement('div');
  container.classList.add('div-container');

  container.innerHTML = `
<div class='img-login login'>
  <img src='imagens/coqueiro-logo.png' alt='Img Logo' class='coqueiro'>
</div>
<form class='form login'>
  <p class='app-name'> Travel Time </p> 
  <input type='email' id='email' class='input-login' placeholder='E-mail' required>
  <input type='password' id='pwd' class='input-login' placeholder='Senha' required>
  
  <button id='login' class='button-login'>Log in</button>
  <p class='other'>Ou entre com...</p>
  <input type='image' id='btn-google' class='btn-google' src='imagens/google.png'>
  <p class='register'>Não tem uma conta? <a href='/#record'>Cadastre-se</a></p>
</form>
`;
  const botaoLogin = container.querySelector('#login');
  const inputEmail = container.querySelector('#email');
  const inputSenha = container.querySelector('#pwd');
  const inputGoogle = container.querySelector('#btn-google');

  botaoLogin.addEventListener('click', (event) => {
    event.preventDefault();
    authEmailAndPassword(inputEmail, inputSenha);
  });
  inputGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
  });
  return container;
};
