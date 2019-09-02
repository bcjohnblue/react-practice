import * as firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyARmSmfT6DQiksxpG4QlsgipxMY2ifRmnU',
  authDomain: 'f2e-2nd-hard-drive.firebaseapp.com',
  databaseURL: 'https://f2e-2nd-hard-drive.firebaseio.com',
  projectId: 'f2e-2nd-hard-drive',
  storageBucket: 'f2e-2nd-hard-drive.appspot.com',
  messagingSenderId: '133961397907',
  appId: '1:133961397907:web:09bea086350b5317'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
