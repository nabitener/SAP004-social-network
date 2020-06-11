// Aqui serão exportadas as funções que irão ser usadas

//export const greeting = name => `Oi ${name}! Que bom ver você aqui!`;
export const createPost = (text) => {
  firebase.firestore().collection('post').add({
    text: text,
    likes: 0,
    coments:[]
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

export const readPosts = () => {
  firebase.firestore().collection('post')
    .onSnapshot(function(querySnapshot) {
        var posts = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data());
        });
        
    });
}


