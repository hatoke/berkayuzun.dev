import { initializeApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDzFYIOXdEJYp12Tsh_JvquBkhjLzIzM_E",
  authDomain: "berkayuzundev.firebaseapp.com",
  projectId: "berkayuzundev",
  storageBucket: "berkayuzundev.appspot.com",
  messagingSenderId: "737482634891",
  appId: "1:737482634891:web:c523e9f65412b95df7068e",
  measurementId: "G-WLHZ6377B3"
}
const apps = getApps()
let firebaseApp
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}

export default { firebaseApp }
