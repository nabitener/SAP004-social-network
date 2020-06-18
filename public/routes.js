import { login } from './pages/login/main.js';
import { home } from './pages/home/main.js';
import { record } from './pages/register/main.js';
//import { profile } from './pages/profile/main.js';

export default {
  login: login(),
  record: record(),
  home: home(),
  //profile: profile(),
};
