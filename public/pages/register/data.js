export const newUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      alert(`Bem-vindo ${email.value}`);
    })
    .catch((error) => {
      console.error(error.code);
      alert(`Falha ao cadastrar ${error.message}`);
    });
};
