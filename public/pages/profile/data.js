
export const user = (nome, url, bio) => {
  let user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: nome,
    photoURL: url,
  }).then(function() {
    console.log('Update successful');
  }).catch(function(error) {
    console.log(error);
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

export const back = () => {
    window.location.hash = '#home';
};