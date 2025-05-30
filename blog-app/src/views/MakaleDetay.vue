<template>
 
    <div v-if="isLoading">Yükleniyor...</div>
    <div v-else>
        <div v-if="hatalar">
            <p>Hata: {{ hatalar }}</p>
        </div>
        <div v-else>
            <h2>{{ makale.baslik }}</h2>
            <p>{{ makale.icerik }}</p>
            <p>{{ convertDate(makale.olusturulmaTarihi) }}</p>
            <button @click="MakaleSil" class="button-1" role="button">Makale Sil</button>
            
        </div>
    </div>
  
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import makaleGetir from "@/composables/makalegetir";
import makaleSil from "@/composables/makalesil";

export default {
    name: "MakaleDetay",
    // props: {
    //     id: {
    //         type: String,
    //         required: true
    //     }
    // },
    
    setup() {
        const route = useRoute();
        const router = useRouter();
        const id = ref(route.params.id);
        const isLoading = ref(false);
        const {   makale, hatalar, makaleyiGetir, } = makaleGetir();
        const { silmeHatalari, makaleyiSil } = makaleSil();
        const getMakale = async () => {
            isLoading.value = true;
           await makaleyiGetir(id.value)
                .then(() => {
                    
                    if(hatalar.value) {
                        console.error("Hata:", hatalar.value);
                    } else {
                        console.log("Makale başarıyla alındı.");
                        console.log(makale.value);
                    }
                    isLoading.value = false;
                });
        };

        const MakaleSil = async () => {
            console.log("Makale Silme İşlemi Başlatıldı");
            isLoading.value = true;
            await makaleyiSil(id.value)
                .then(() => {
                    console.log("Makale Silme İşlemi Başarılı");
                    if (silmeHatalari.value) {
                        console.error("Silme Hatası:", silmeHatalari.value);
                    } else {
                        console.log("Makale başarıyla silindi.");
                        // Burada yönlendirme yapabilirsiniz, örneğin:
                        // this.$router.push('/makaleler');
                        router.push({ name: 'Home' });
                    }
                    isLoading.value = false;
                });
        };
        const convertDate = (dateString) => {
            const date = dateString.toDate();
            console.log("Tarih:", date);
            return date.toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
            });
        };
        getMakale();
        return {
            id,
            makale,
            hatalar,
            isLoading,
            convertDate,
            MakaleSil,
        };
    },

}
</script>

<style>

.button-1 {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-1:hover,
.button-1:focus {
  background-color: #F082AC;
}

</style>