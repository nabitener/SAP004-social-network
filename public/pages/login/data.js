export const authEmailAndPassword = (email, password, callback) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
      window.location = '#home';
    })
    .catch((error) => {
      callback(error.message);
    });
};

export const signIn = (provider, callback) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      window.location = '#home';
    })
    .catch((error) => {
      callback(error.message);
    });
};