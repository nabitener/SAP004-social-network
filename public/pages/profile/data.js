/*export const profile = () => {
    window.location.hash = '#profile';
};*/

export const user = (nome, url) => {
  let user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: nome,
    photoURL: url,
  }).then(function() {
    console.log('Update successful');
  }).catch(function(error) {
    // An error happened.
  });
};

export const perfilImage = (photo, callback) => {
  let file = photo.files[0];
  let storageRef = firebase.storage().ref('imagens/' + file.name);

   storageRef.put(file).then(() => {
    storageRef.getDownloadURL().then((url) => {
      console.log(url);
      callback(url);    
    });
    
  });
};

/*export const editProfile = (biografia, name) => { 
  firebase
  .firestore()
  .collection('profile')
  .add({
    bio: biografia,
    nome: name,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}*/

export const back = () => {
    window.location.hash = '#home';
};