import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBq7uhdChCglk1GAZjO8amiaZBXQMhMtWM',
  authDomain: 'expenseapp-f69db.firebaseapp.com',
  databaseURL: 'https://expenseapp-f69db.firebaseio.com',
  projectId: 'expenseapp-f69db',
  storageBucket: 'expenseapp-f69db.appspot.com',
  messagingSenderId: '80958326505',
  appId: '1:80958326505:web:b39c8211b49677da',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
