import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'  

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCvX4P-BP3IIbc8AZsKRMY_1iYrfqJJF_Y",

  authDomain: "devpointgpt.firebaseapp.com",

  projectId: "devpointgpt",

  storageBucket: "devpointgpt.appspot.com",

  messagingSenderId: "956768131449",

  appId: "1:956768131449:web:7a4edadbc0803abe80f7a8"

};


// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db };