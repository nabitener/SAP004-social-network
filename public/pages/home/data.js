export const createPost = (post, privacyPost, url) => {
  firebase
    .firestore()
    .collection('post')
    .add({
      imagem: url,
      name: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
      timestamps: firebase.firestore.Timestamp.fromDate(new Date())
        .toDate()
        .toLocaleString('pt-BR'),
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

export const readPosts = (callback, callbackUser) => {
  firebase
  .firestore()
  .collection('post')
  .orderBy('timestamps', 'desc')
  .limit(20)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((post) => {
      if (
        post.data().privacy === 'Público' || post.data().user_id === firebase.auth().currentUser.uid
      ) {
        if(post.data().user_id === firebase.auth().currentUser.uid) {
          callbackUser(post);
        }else{
          callback(post);
        }
      }
    });
  });
};

export const deletePost = (postId) => {
  firebase.firestore().collection('post').doc(postId).delete();
};

export const editAndSavePost = (id, post, privacyPost) => {
  firebase.firestore().collection('post').doc(id).update({
    text: post,
    privacy: privacyPost,
  });
};

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.hash = 'login';
    });
};

export const likePosts = (id, likes) => {
  firebase
    .firestore()
    .collection('post')
    .doc(id)
    .update({
      likes: likes + 1,
    });
};

export const postImage = (photo, callback) => {
  let file = photo.files[0];
  let storageRef = firebase.storage().ref('imagens/' + file.name);

   storageRef.put(file).then(() => {
    storageRef.getDownloadURL().then((url) => {
      console.log(url);
      callback(url);    
    });
    
  });
};

/*export const profile = () => {
  window.location.hash = '#profile';
};*/
