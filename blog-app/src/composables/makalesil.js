import {ref} from 'vue';
import {db} from '../db/firebaseconfig';
import { doc, deleteDoc } from 'firebase/firestore';

const makaleSil = () => {
    const silmeHatalari = ref(null);

    const makaleyiSil = async (id) => {
        try {
            console.log('Silme işlemi başlatılıyor: ', id);
            const docRef = doc(db, "makaleler", id);
            console.log('Silinecek makale referansı: ', docRef);
            await deleteDoc(docRef);
            console.log('Makale başarıyla silindi: ', id);
            silmeHatalari.value = null;
        } catch (err) {
            silmeHatalari.value = 'Makale silinirken bir hata oluştu: ' + err.message;
        }
    };

    return {
        silmeHatalari,
        makaleyiSil,
    };
}

export default makaleSil;