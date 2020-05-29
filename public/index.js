// Este é o ponto de entrada de sua aplicação
import { login } from './pages/login/main.js'
import { home } from './pages/home/main.js';

document.querySelector('#root').appendChild(login());
