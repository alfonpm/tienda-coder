import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCgXqN2dCVoQoYrAJPCLkoioavE-uV4sjI",
    authDomain: "lapampa-a25c8.firebaseapp.com",
    projectId: "lapampa-a25c8",
    storageBucket: "lapampa-a25c8.appspot.com",
    messagingSenderId: "275633580378",
    appId: "1:275633580378:web:d24a6ea744d5212394eb63"
})

export function getFirebase(){
    return app; 
}

export function getFirestore(){
    return firebase.firestore(app)
}