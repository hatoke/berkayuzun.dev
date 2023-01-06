import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDzFYIOXdEJYp12Tsh_JvquBkhjLzIzM_E',
  authDomain: 'berkayuzundev.firebaseapp.com',
  projectId: 'berkayuzundev',
  storageBucket: 'berkayuzundev.appspot.com',
  messagingSenderId: '737482634891',
  appId: '1:737482634891:web:b80fc955ca336a5bf7068e',
  measurementId: 'G-WMLZFLB089',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default { analytics }
