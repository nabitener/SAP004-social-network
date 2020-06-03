// Aqui serão criados os eventos de Manipulação de DOM e templates


export const record = () => {
    const container = document.createElement("div");
    container.classList.add("div-container-register");

    container.innerHTML = `
    <div class=btn-back>
    <a href="">
    <button id="btn-back" class="btn-back">&#8672 Voltar</button>
    </a>
    </div>
    <form class="form-register">
      <p class="registro"><h2 class="registro-title">Cadastro</h2></p> 
      <input type="name" id="name" class="user-name" class="input-register" placeholder="Nome">
      <input type="surname" id="surname" class="surname" class="input-register" placeholder="Sobrenome"><br>
      <label for="date" class="label-date">Data de Nascimento
      <input type="date" id="date" class="date" class="input-register">
      </label>
      <input type="email" id="email" class="email" class="input-register" placeholder="Digite o email">
      <input type="password" id="password" class="password" class="input-register" placeholder= "Digite a senha">
      <input type="password" id="confirm-password" class="password" class="input-register" placeholder= "Confirme a senha">
      <button id="record" class="btn-record" class="input-register">Criar conta</button>
    </form>
    `
    return container;
}
