export const home = () => {
  const container = document.createElement('div');

  container.innerHTML = `
    <div class="btn-back">
    </div>
    <div>
    <img class="wave" src="imagens/perfil-avatar.png">
    </div>
    <div class = 'container'>
    <input id='post-text' class='re-post' type='text'>
      <button id='photo' class='btn-social'>Photo</button>
      <button id='send-post' class='btn-social'>Compartilhar</button>
    </div>
    <div class='all-posts'>
      <input id='post' class='post' type='text'>
      <button id='photo' class='btn-create'>Curtida</button>
      <button id='send-post' class='btn-create'>Compartilhar</button>
    </div>
    <div id='all-posts'></div>
  `;

  return container;
};
