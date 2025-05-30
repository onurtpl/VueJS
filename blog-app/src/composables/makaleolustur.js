import { db } from '../db/firebaseconfig';

import { addDoc, collection, serverTimestamp,  } from "firebase/firestore";
import { ref } from 'vue';

const makaleOlustur = () => {
    const hatalar = ref(null);

    const makaleleriYukle = async (makale) => {
        try {

            const yeniMakaleRef = await addDoc(collection(db, "makaleler"),
                {
                    baslik: makale.baslik,
                    icerik: makale.icerik,
                    olusturulmaTarihi: serverTimestamp(),
                });

            hatalar.value = null;
        } catch (err) {
            hatalar.value = 'Makale eklenirken bir hata oluştu: ' + err.message;
        }
    };
    return {
        hatalar,
        makaleleriYukle
    };
}

export default makaleOlustur;

