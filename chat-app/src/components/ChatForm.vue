<template>
  <form>
    <input @keypress.enter.prevent="gonder" 
    type="text"
    placeholder="Mesajınızı yazın ve Entera basın" 
    v-model="mesaj"/>
    <div class="alert alert-danger" v-if="errorAddDocument">
      Mesaj gönderilirken bir hata oluştu: {{ errorAddDocument }}
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { serverTimestamp  } from "firebase/firestore";

export default {

  setup() {
    const mesaj = ref('');
    const user = getUser().user; // getUser composable'ından kullanıcı bilgilerini alıyoruz
    const { errorAddDocument, addDocument } = useCollection('mesajlar'); // useCollection composable'ını kullanarak 'mesajlar' koleksiyonuna erişiyoruz

    const gonder = async (event) =>  {
     
      const mesajObjesi = {
        mesaj: mesaj.value,
        kullanici: user.value.displayName,
        olusturulmaTarihi: serverTimestamp(), // Mesajın oluşturulma tarihini ekliyoruz
      };
      await addDocument(mesajObjesi); // Mesajı 'mesajlar' koleksiyonuna ekliyoruz
      if (!errorAddDocument.value) {
        console.log('Mesaj başarıyla gönderildi:', mesajObjesi);
        mesaj.value = '';
      } else {
        console.error('Mesaj gönderilirken hata oluştu:', errorAddDocument);  
      }

      
      // Burada mesajObjesi'ni bir API'ye veya başka bir yere gönderebilirsiniz

    };
    return {
      mesaj,
      errorAddDocument,
      gonder,
    };
  },
};
</script>

<style></style>
