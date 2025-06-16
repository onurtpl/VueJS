import { ref } from 'vue';
import { db } from '@/firebase/config';
import { addDoc, collection  } from "firebase/firestore";

const useCollection = (collectionName) => {
  const errorAddDocument = ref(null);
  const addDocument = async (document) => {
    errorAddDocument.value = null; // Reset error before adding document
    try {
      const docRef = await addDoc(collection(db, collectionName), document);
      console.log('Document added with ID:', docRef.id);
      return docRef.id; // Return the ID of the added document
    } catch (error) {
      console.error('Error adding document:', error);
      errorAddDocument.value = 'Could not add the document';
    }
  };

  return { errorAddDocument, addDocument };
}

export default useCollection;