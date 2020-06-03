// Aqui serão criados os eventos de Manipulação de DOM e templates

export const login = () => {
const container = document.createElement("div");
container.classList.add("div-container");

container.innerHTML = `
<div class="img-login" class="login">
<img src="imagens/logo.jpg" alt="Img Logo" width=100% height=130%>
</div>
<form class="form" class="login">
<p class="logo"><h2>Nome do app</h2></p> 
<input type="email" id="email" class="login-email" class="input-login" placeholder="E-mail">
<input type="password" id="pwd" class="login-pwd" class="input-login" placeholder="Password">
<br>
<button id="login" class="button-login">Log in</button>
<p class="other">Ou entre com...</p>
<input type="image" id="btn-google" class="btn-google" src="google.png">
<p class="register">Não tem uma conta? <a href="/#record">Cadastre-se</a></p>
</form>
`
return container;
};

const botaoLogin = document.querySelector("#login");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#pwd");
