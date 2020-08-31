export const user = (nome, url, bio) => {
  const userId = firebase.auth().currentUser;
  firebase
    .firestore()
    .collection("users")
    .doc(userId.uid)
    .update({
      biography: bio,
    })
    .then(() => {
      userId.updateProfile({
      displayName: nome,
      photoURL: url,
    })
  })
    .catch(function (error) {
      console.log(error);
    });
};

export const perfilImage = (photo, callback) => {
  let file = photo.files[0];
  let storageRef = firebase.storage().ref("imagens/" + file.name);

  storageRef.put(file).then(() => {
    storageRef.getDownloadURL().then((url) => {
      console.log(url);
      callback(url);
    });
  });
};

export const back = () => {
  window.location.hash = "#home";
};
