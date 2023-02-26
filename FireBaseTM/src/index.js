import { initializeApp } from 'firebase/app'

import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  getDoc,
  updateDoc
} from 'firebase/firestore'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh2a_-t87N_08WpTss3vGc8NYPOOZFS6M",
  authDomain: "taskmanager-beachhacks.firebaseapp.com",
  databaseURL: "https://taskmanager-beachhacks-default-rtdb.firebaseio.com",
  projectId: "taskmanager-beachhacks",
  storageBucket: "taskmanager-beachhacks.appspot.com",
  messagingSenderId: "817146752288",
  appId: "1:817146752288:web:f31c6704488d3f0d5b3b45",
  measurementId: "G-FLRKD7JPH7"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

// collection ref
const colRef = collection(db, 'books') // (database, collection)

// queires
const q = query(colRef, orderBy('createdAt')) //(field name, comparison, value) filters out; orderBy (field, desc or acend)

// realtime collection data
const unsubCol = onSnapshot(q, (snapshot) => {
  let books = []
  snapshot.docs.forEach(doc => {
    books.push({ ...doc.data(), id: doc.id })
  })
  console.log(books)
})

// adding docs
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault() // prevents page refresh

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp() // data logs twice into the console becuase of time stamp
  })
  .then(() => {
    addBookForm.reset() // empties texbox when you submit
  })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'books', deleteBookForm.id.value) // (database, collection, id of document)

  deleteDoc(docRef) // deletes 
    .then(() => {
      deleteBookForm.reset()
    })
})

// get a single document (realtime)
const docRef = doc(db, 'books', 'FqBT51o4fBTBFNTR0wNb') // (database, id, id)

const unsubDoc = onSnapshot(docRef, (doc) => { 
  console.log(doc.data(), doc.id)
})

// updating a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // getting database
  let docRef = doc(db, 'books', updateForm.id.value)

  updateDoc(docRef, { // updates whatever field
    title: 'updated title'
  })
  .then(() => {
    updateForm.reset()
  })
  .catch(err => {
    alert("Updating Doc Error")
  })
})

// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // getting info needed
  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password) // (auth object, email, passoword)
    .then(cred => { // takes in user credential
      //console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      alert("Email already signed up or password too short") // in case we mess up; email already signed up, password too short (6)
    })
})

// logging out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      //console.log('user signed out')
    })
    .catch(err => {
      alert("Logout Error.")
    })
})

// logging in
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password) // doesnt let login if email isnt signed up or if password is wrong
    .then(cred => {
      //console.log('user logged in:', cred.user)
      loginForm.reset()
    })
    .catch(err => {
      alert("Sign in email & password error.")
    })
})

// subscribes to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => { // (auth constant, function)
  console.log('user status changed:', user)
})

// unsubscribes from changes (auth & db)
const unsubButton = document.querySelector('.unsub')
unsubButton.addEventListener('click', () => {
  console.log('unsubscribing')
  unsubCol() // these return versions of before they sub to these functions all in one go
  unsubDoc()
  unsubAuth()
})