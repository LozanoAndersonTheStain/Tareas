import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAVBn4BHxrwOw5hW1j1em4Q5BrL68FH3_A",
  authDomain: "tareas-c13-alv.firebaseapp.com",
  projectId: "tareas-c13-alv",
  storageBucket: "tareas-c13-alv.appspot.com",
  messagingSenderId: "214391096302",
  appId: "1:214391096302:web:72ffa5d4be9ac4efc584ff"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export const getCollection = async (coll) => {
  const result = {
    statusResponse: false,
    data: null,
    error: null,
  }
  try {
    const res = collection(db, coll)
    const data = await getDocs(res)
    const arrayData = data.docs.map((element) => ({
      id: element.id,
      ...element.data(),
    }))
    result.statusResponse = true
    result.data = arrayData
  } catch (error) {
    result.error = error
  }
  return result
}


