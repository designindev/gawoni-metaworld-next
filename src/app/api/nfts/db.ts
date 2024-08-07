import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  setDoc,
  query,
  where,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCucNRWqOOGb6DF1lkKaHsu2qm9Mrfx7Mw',
  authDomain: 'firebasics-75e4c.firebaseapp.com',
  projectId: 'firebasics-75e4c',
  storageBucket: 'firebasics-75e4c.appspot.com',
  messagingSenderId: '966645827725',
  appId: '1:966645827725:web:10bc2c63d76fe1bb547ac4',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export const nftsRef = collection(db, 'ntfs')
const nfts1Ref = ref(storage, 'nfts/nfts-1.jpg')
const logosRef = ref(storage, 'nfts/logos.png')
Promise.all([getDownloadURL(nfts1Ref), getDownloadURL(logosRef)]).then((url) => {
  console.log(url)
  Array(10)
    .fill(null)
    .forEach((_, i) => {
      setDoc(doc(nftsRef, 'nfts-' + i), {
        src: url[0],
        title: 'K 4 Race edition #1',
        price: '$20',
        rarity: 'Epic',
        logos: url[1],
        color: 'epic',
      })
    })
})
