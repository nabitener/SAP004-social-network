export const welcome = email => `Bem-vindo ${email}! Que bom ver você aqui!`;
export const errorMessage = message => `Falha: ${message}`;
export const authEmailAndPassword = (email, password) => {

  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
      window.location='#home';
      })
    .catch((error) => {
      alert(`${errorMessage(error.message)}`);
    });
};
export const signIn = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      const token = result.credential.accessToken;
      alert(`${welcome(inputEmail.value)}`);
      //window.location='#home';
    })
    .catch((error) => {
      console.log(error);
      alert(`${errorMessage(error.message)}`);
    });
  };