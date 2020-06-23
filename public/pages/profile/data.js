/*export const profile = () => {
    window.location.hash = '#profile';
};*/


/*export const editProfile = (biografia, name) => { 
    firebase
    .firestore()
    .collection('profile')
    .update({
    bio: biografia,
    nome: name
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