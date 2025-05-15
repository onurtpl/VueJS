import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD2vn6kj2Y4COHDJRC_5f40rS-cRKNz7as",
    authDomain: "vuejslearn-firebase.firebaseapp.com",
    projectId: "vuejslearn-firebase",
    storageBucket: "vuejslearn-firebase.firebasestorage.app",
    messagingSenderId: "184265869264",
    appId: "1:184265869264:web:22a14d57f6a49ab23adbd5"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Belirli bir koleksiyondan belge almak için bir fonksiyon tanımlıyoruz
async function getAllDocuments(collectionName) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];
  
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
  
    return documents;
  }

// Belirli bir koleksiyondan belge almak için bir fonksiyon
async function getDocumentById(collectionName, docId) {
    const docRef = doc(db, collectionName, docId); // Belirli koleksiyon ve ID'yi referans alıyoruz.
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data(); // Veriyi döndürüyoruz
    } else {
        console.log("No such document!");
        return null; // Belge yoksa null dön
    }
}

export { db, getDocumentById, getAllDocuments };
