// Aqui serão criados os eventos de Manipulação de DOM e templates

export const login = () => {
const container = document.createElement("div");

container.innerHTML = `
<img src="" alt="Img Logo">
<form>
<p class="logo"><h2>Nome do app</h2></p> 
<input type="email" id="email" class="login-email" placeholder="Email">
<input type="password" id="pwd" class="login-pwd" placeholder="Password">
<button id="login" class="button-login">Log in</button>
<p class="other">Ou entre com:</p>
<link rel="stylesheet" href="style.css">
<input type="image" id="btn-google" class="btn-google" src="google.png">
<p class="register">Não tem uma conta?<a href="/#register">Registre-se</a></p>
</form>
`
return container;
};