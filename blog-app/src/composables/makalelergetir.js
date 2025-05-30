import { ref } from 'vue';
import { db } from '../db/firebaseconfig';
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const makaleleriGetir = () => {
    const makaleler = ref([]);
    const hatalar = ref(null);
   
    const makaleleriYukle = async () => {
        try {
            const _query = query(collection(db, "makaleler"), orderBy("olusturulmaTarihi", "desc"));
            const snapshot = await getDocs(_query);
            makaleler.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            hatalar.value = null;
        } catch (err) {
            hata.value = 'Makaleleri yüklerken bir hata oluştu: ' + err.message;
        }
    };

    

    return {
        makaleler,
        hatalar,
        makaleleriYukle,
    }; 
    
}

export default makaleleriGetir;