import { ref } from 'vue';
import { db } from '@/firebase/config';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
const getCollection = (collectionName) => {
  const documents = ref([]);
  const errorGetCollection = ref(null);

  const _query = query(collection(db, collectionName), orderBy("olusturulmaTarihi", "asc"));

  onSnapshot(_query, (querySnapshot) => {
    const results = [];
    querySnapshot.forEach((doc) => {
      doc.data().olusturulmaTarihi && results.push({ ...doc.data(), id: doc.id });
    });
    documents.value = results;
    errorGetCollection.value = null;
  }, err => {
    console.error("Error fetching collection:", err);
    errorGetCollection.value = 'Error fetching collection';
  });


  // Return the documents and error state, along with the unsubscribe function
  return { documents, errorGetCollection };
};

export default getCollection;
// This composable function fetches a collection from Firestore and returns the documents along with any error state.