import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

// const config =
const config = {
  apiKey: 'AIzaSyC7N5vquUb-yerjxescDduadUyqiJ_lVuY',
  authDomain: 'vue-app-e1564.firebaseapp.com',
  projectId: 'vue-app-e1564',
  storageBucket: 'vue-app-e1564.appspot.com',
  messagingSenderId: '559367533228',
  appId: '1:559367533228:web:730123bd128585eb63e509',
  measurementId: 'G-PTT65275RW'
}
/*  process.env.NODE_ENV === 'development'
? JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG)
: JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG_PUBLIC) */

app.initializeApp(config)

export const firebase = app
app.firestore().settings({ timestampsInSnapshots: true })
export default app.firestore()
export const db = app.firestore()
export const storageRef = app.storage().ref()

export const usersRef = db.collection('users')
export const roomsRef = db.collection('chatRooms')
export const messagesRef = roomId => roomsRef.doc(roomId).collection('messages')

export const filesRef = storageRef.child('files')

export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp()
export const deleteDbField = firebase.firestore.FieldValue.delete()
