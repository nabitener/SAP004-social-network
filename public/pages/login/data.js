export const welcome = email => `Bem-vindo ${email}! Que bom ver você aqui!`;
export const errorMessage = message => `Falha: ${message}`;
export const authEmailAndPassword = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
      alert(`Bem-vindo ${email.value}`);
    })
    .catch((error) => {
      alert(`Falha: ${error.message}`);
    });
};
export const signIn = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      /* const token = result.credential.accessToken; */
      alert('Bem-vindo');
    })
    .catch((error) => {
      console.log(error);
      alert(`Falha: ${error.message}`);
    });
};
