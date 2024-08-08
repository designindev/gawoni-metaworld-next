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

export const nftsRef = collection(db, 'nfts')
const nfts1Ref = ref(storage, 'nfts/nfts-1.jpg')
const logosRef = ref(storage, 'nfts/logos.png')

export const games = ['K 4 rally', 'tuk tuk rush', 'Racing game', 'Martial arts game']
export const categories = ['Category 1', 'Category 2', 'Category 3']
export const rarities = ['Common', 'Uncommon', 'Rare', 'Epic', 'Signature', 'Legendary', 'Mystic', 'On-of-kind']

Promise.all([getDownloadURL(nfts1Ref), getDownloadURL(logosRef)]).then((url) => {
  Array(10)
    .fill(null)
    .forEach((_, i) => {
      setDoc(doc(nftsRef, 'nfts-' + i), {
        src: url[0],
        title: 'K 4 Race edition #1',
        game: games[randomInteger(0, games.length - 1)],
        category: categories[randomInteger(0, categories.length - 1)],
        rarity: rarities[randomInteger(0, rarities.length - 1)],
        price: 20,
        logos: url[1],
      })
    })
})

function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}
