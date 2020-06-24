import routes from './routes.js';

const main = document.querySelector('#root');

const validateHash = hash => (hash === '' ? 'login' : hash.replace('#', ''));


const validateLogin = (hash) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      renderPage();
    } else {
      if (hash === 'record') {
        window.location.hash = 'record';
      } else {
        window.location.hash = 'login';
      }
    }
  });
}

const renderPage = () => {
  main.innerHTML = '';
  const page = validateHash(window.location.hash);
  main.appendChild(routes[page]());
};

const init = () => window.addEventListener('hashchange', () => {
  renderPage();
  const hash = window.location.hash;
  validateLogin(hash);
}
);

window.addEventListener('load', (event) => {
  event.preventDefault();
  renderPage();
  init();
});
