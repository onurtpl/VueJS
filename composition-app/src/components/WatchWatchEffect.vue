<template>
    <h2>Watch ve WatchEffect Kullanımı</h2>
    
    <h3>Watch Kullanımı</h3>
    <input type="text" v-model="searchName" placeholder="İsim Giriniz" />

    <hr>
    <p>Last Name</p>
    <input type="text" v-model="searchLastName" placeholder="Last Name Giriniz" />

    <hr>
    <h3>WatchEffect Arrays</h3>
    <input type="text" v-model="name" placeholder="İsim Giriniz" @keyup.enter="pushToNames" />
    <ul v-for="(item, index) in names" :key="index">
        <li>{{ item }} </li>
    </ul>


   
</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue'
export default {

  
    // watch: belirli bir değişkeni izler ve değiştiğinde bir işlem yapar.
    // watchEffect: reaktif bir değişkenin değişimini izler ve her değiştiğinde otomatik olarak çalışır.
    // watch genellikle belirli bir değişkeni izlemek için kullanılırken, watchEffect daha genel bir izleme sağlar.
    // watch genelde primitif değişkenler için kullanılırken, watchEffect daha karmaşık reaktif değişkenler için kullanılır.

    setup() {
        const name = ref('')
        const searchName = ref('')
        const searchLastName = ref('')
        const names = reactive(['Lufy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Robin', 'Franky', 'Brook']);
        
        
        const pushToNames = () => {
            names.push(name.value)
            name.value = ''
        }

        // watch(searchName, (newValue) => {
        //     console.log('Arama Sonucu Watch:', newValue)
        // })
        // watchEffect(() => {
        //     console.log('Arama Sonucu WatchEffect:', searchName.value)
        //     console.log('Arama Sonucu WatchEffect:', searchLastName.value)
        // })

        watchEffect(() => {
            console.log('Arama Sonucu WatchEffect:', names.length);
        })
        

        return {
            name,
            names,
            searchName,
            searchLastName,
            pushToNames
        }
    }

}
</script>

<style>

</style>