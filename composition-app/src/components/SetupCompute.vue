<template>

    <h2>Computed Kullanımı</h2>
    
    <h3>Tüm İsimler</h3>
    <ul v-for="(item, index) in names" :key="index">
        <li>{{ item }} </li>
    </ul>

    <hr>
    <h3>Arama Yapınız</h3>
    <input type="text" v-model="searchText" placeholder="Arama" />

    <h3>Arama Sonucu</h3>
    <ul v-for="(item, index) in filterNames" :key="index">
        <li>{{ item }} </li>
    </ul>
  
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {

    setup() {
        const names = reactive(['Lufy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Robin', 'Franky', 'Brook', 'Chopper']);
        const searchText = ref('');
        const filterNames = computed(() => {
            return names.filter(name => name.toLowerCase().includes(searchText.value.toLowerCase()));
        });
        return {
            names,
            searchText,
            filterNames
        }
    }

}
</script>


<style>

</style>