<template>
  <h2>Ref Değişken Tanımlama</h2>
    <h3>{{ ad }}</h3>
    <button @click="degiskeniDegistir">Değiştir</button>

    <h3>Yetenek Giriniz</h3>
    <input type="text" v-model="beceri" placeholder="Yetenek" />
    <button @click="Kaydet">Kaydet</button>


    <h3>yetenekler</h3>
    <ul v-for="(item, index) in yetenek" :key="index">
        <li>{{ item }} </li>
    </ul>
</template>

<script>
import { reactive, ref } from 'vue'
export default {

    setup() {
        // Ref: genel olarak primitive veri tipleri için kullanılır.
        // Reactive: genel olarak object ve array veri tipleri için kullanılır.
        let ad = ref('Ali')
        let beceri = ref('')
        let yetenek = reactive([
             'Vue.js',
             'React.js',
             'Angular.js'
            ])

        const degiskeniDegistir = () => {
            ad.value = 'Veli'
        }

        const Kaydet = () => {
            yetenek.push(beceri.value)
            beceri.value     = ''
        }
        return {
            ad,
            yetenek,
            beceri,
            degiskeniDegistir,
            Kaydet
        }
    }

}
</script>

<style>

</style>