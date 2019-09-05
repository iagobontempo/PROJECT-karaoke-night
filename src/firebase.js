//! SAVING INFORMATION NOT USING ANYTHING HERE
//! SAVING INFORMATION NOT USING ANYTHING HERE
//! SAVING INFORMATION NOT USING ANYTHING HERE

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
        return this.auth.currentUser.updateProfile({ displayName: `${firstName} ${lastName}` })
    }

    addUser(firstName, lastName) {
        if (!this.auth.currentUser) {
            return alert('Não autorizado')
        }
        return this.db.collection('users').doc(this.auth.currentUser.uid).set({
            firstName: firstName,
            lastName: lastName,
            uid: this.auth.currentUser.uid
        })
    }

    async getPlace(placeId) {
        var place = await this.db.collection('users').doc(placeId)
        place.get()
            .then((doc) => {
                if (doc.exists) {
                    console.log('Document data:', doc.data())
                } else {
                    console.log('Document does not exist')
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            })
    }
}

export default new Firebase()
