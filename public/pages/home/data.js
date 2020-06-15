export const createPost = (post, privacyPost) => {
  firebase
    .firestore()
    .collection('post')
    .add({
      name: firebase.auth().currentUser.email,
      text: post,
      user_id: firebase.auth().currentUser.uid,
      likes: 0,
      coments: [],
      privacy: privacyPost,
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const readPosts = (callback) => {
  firebase
    .firestore()
    .collection('post')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((post) => {
        if (
          post.data().privacy === 'Público' || post.data().user_id === firebase.auth().currentUser.uid
        ) {
          callback(post);
        }
      });
    });
};

export const deletePost = (postId, callback) => {
  firebase.firestore().collection('post').doc(postId).delete().then(callback);
};

export const editAndSavePost = (id, post, privacyPost) => {
  firebase.firestore().collection('post').doc(id).update({
    text: post,
    privacy: privacyPost,
  });
};
