
export const createPost = (post) => {
    firebase
        .firestore()
        .collection('post')
        .add({
            name: firebase.auth().currentUser.displayName,
            text: post,
            user_id: firebase.auth().currentUser.uid,
            likes: 0,
            timestamps: firebase.firestore.Timestamp.fromDate(new Date()).toDate().toLocaleString('pt-BR'),
            coments: [],
            doc: firebase.firestore().collection('post').id,
        })
        .then(function (docRef) {
            console.log('Document written with ID: ', docRef.id);
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
    
};

export const readPosts = (callback) => {
        firebase
            .firestore()
            .collection('post')
            .limit(20)
            .orderBy('timestamps', 'desc')
            .get().then((querySnapshot) => {
                querySnapshot.forEach((post) => {
                    callback(post);
                });
        
            });
};

export const deletePost = (postId) => {
firebase.firestore().collection('post').doc(postId).delete().then(doc => {
    console.log("Document successfully deleted!");
    console.log(postId);
});
  
}
