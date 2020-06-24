export const newUser = (email, password, callback) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      window.location = '#home';
    })
    .catch((error) => {
      callback(error.message);
    });
};

