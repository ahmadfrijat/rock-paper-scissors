import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBRTZwq27RhPlwReIT_iYPD7451jgzQ4wI",
    authDomain: "rockpaperscissors-b40c8.firebaseapp.com",
    projectId: "rockpaperscissors-b40c8",
    storageBucket: "rockpaperscissors-b40c8.appspot.com",
    messagingSenderId: "393982432748",
    appId: "1:393982432748:web:6bd11bb38211009cf0dcc9"
};

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

export { firebase };