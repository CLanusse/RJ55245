import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json' }
import { db } from './config.js'
import { collection, addDoc } from 'firebase/firestore'

const productosRef = collection(db, "productos")

MOCK_DATA.forEach(item => {
    delete item.id

    addDoc(productosRef, item)
})

console.log(MOCK_DATA)