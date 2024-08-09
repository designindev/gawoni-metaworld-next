import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { collection, doc, setDoc } from 'firebase/firestore'
import { categories, games, rarities } from 'entities/nft'

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

// TODO: REMOVE
Promise.all([getDownloadURL(nfts1Ref), getDownloadURL(logosRef)]).then((url) => {
  Array(200)
    .fill(null)
    .forEach((_, i) => {
      setDoc(doc(nftsRef, `nfts-${i}`), {
        src: url[0],
        title: `K 4 Race edition ${i}`,
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
