<template>
   <nav class="filter-navbar">
    <button :class="{'active': filter=='hepsi'}" @click="filterGuncelle('hepsi')" >Bütün Yapılacaklar</button> |
    <button :class="{'active': filter=='tamamlandi'}" @click="filterGuncelle('tamamlandi')" >Tamamlananlar</button> |
    <button :class="{'active': filter=='yapilacak'}" @click="filterGuncelle('yapilacak')">Yapılacaklar</button> 
  </nav> 
</template>

<script>
export default {
    name: "FilterNavbar",
   
    data() {
        return {
            filter: "hepsi",
        };
    },
    methods: {
        filterGuncelle(filter) {
            this.filter = filter;
            this.$emit("filterText", filter);
        },
    },

}
</script>

<style scoped>


.filter-navbar button {
    font-weight: bold;
    color: #f7f1e3;
    background-color: #2f3542;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
}

.filter-navbar button:hover {
    font-size: 17px;
    color: #4af898;
}

.filter-navbar button.active {
    color: #8156f6;
    font-size: 17px;
}

</style>