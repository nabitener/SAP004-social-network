export const newUser = (name, email, password, callback) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          userId: firebase.auth().currentUser.uid,
          biography: "",
        });
    })
    .then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: name.value,
      });
    })
    .then(() => {
      window.location = "#home";
    })
    .catch((error) => {
      callback(error.message);
    });
};
