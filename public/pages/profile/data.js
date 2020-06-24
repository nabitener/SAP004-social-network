/*export const profile = () => {
    window.location.hash = '#profile';
};*/

export const  user = (nome) => {
  let user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: nome,
  }).then (function() {
    console.log('Update successful');
  }).catch(function(error) { 
  });
};


/*export const editProfile = (biografia, name) => { 
    firebase
    .firestore()
    .collection('profile')
    .add({
    bio: biografia,
    nome: name
    //user_id: firebase.auth().currentUser.uid
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