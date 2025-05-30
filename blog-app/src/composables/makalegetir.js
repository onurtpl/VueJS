import { ref } from 'vue';
import { db } from '../db/firebaseconfig';
import { doc, getDoc } from "firebase/firestore";


const makaleGetir = () => {
    const makale = ref(Object);
    const hatalar = ref(null);

    const makaleyiGetir = async (id) => {
        try {
            const docRef = doc(db, "makaleler", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                makale.value = { id: docSnap.id, ...docSnap.data() };
                hatalar.value = null;
            } else {
                hatalar.value = 'Makale bulunamadı';
            }
        } catch (err) {
            hatalar.value = 'Makale yüklenirken bir hata oluştu: ' + err.message;
        }
    };

    return {
        makale,
        hatalar,
        makaleyiGetir,
    };
}

export default makaleGetir;