import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAPscv4EDn4J-2zWRARQhUcFt4z__s_S5U",
    authDomain: "karaoke-night.firebaseapp.com",
    databaseURL: "https://karaoke-night.firebaseio.com",
    projectId: "karaoke-night",
    storageBucket: "karaoke-night.appspot.com",
    messagingSenderId: "36127425288",
    appId: "1:36127425288:web:e2677ba01d101d8a"
};
// Initialize Firebase
// app.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.firestore()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(firstName, lastName, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: `${firstName} ${lastName}`
        }).then(() =>
            this.db.collection('users').doc(this.auth.currentUser.uid).set({
                firstName: firstName,
                lastName: lastName,
                uid: this.auth.currentUser.uid,
                pass: firstName + lastName
            })
        )
    }

}

export default new Firebase()
