<template>
  <div class="yapilacak" :class="{'yapildi': yapilacak.tamamlandi}">
    <div class="baslik">
      <h3 @click="detayGoster = !detayGoster">{{ yapilacak.baslik }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'YapilacakGuncelle', params: { id: yapilacak.id } }">
          <span class="material-icons-outlined" > edit </span>
        </router-link>
        
        <span class="material-icons-outlined" @click="handleDelete"> delete </span>
        <span class="material-icons-outlined"  @click="handleDone" 
        :class="{'tick': yapilacak.tamamlandi}"> done </span>
      </div>
    </div>
    <div class="detay" v-show="detayGoster">
      <p>{{ yapilacak.icerik }}</p>
    </div>
  </div>
  
</template>

<script>
import router from '@/router';

export default {
  name: "Yapilacak",
  props: {
    yapilacak: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      detayGoster: false,
    };
  },
  methods: {
    handleDelete() {
      this.$emit("deleteYapilacak", this.yapilacak.id);
    },
    handleEdit() {
      this.$router.push({ name: "YapilacakGuncelle", params: { id: this.yapilacak.id } });
      // this.$emit("editYapilacak", this.yapilacak.id);
    },
    handleDone() {
      this.$emit("doneYapilacak", this.yapilacak.id, !this.yapilacak.tamamlandi);
    },
  },
  computed: {},
};
</script>

<style>
.yapilacak {
  margin: 20px auto;
  background-color: #4b4b4b;
  padding: 10px 20px;
  border-radius: 15px;
  border: 3px solid #b33939;
  color: #f7f1e3;
}
.yapilacak:hover {
  box-shadow: 8px 10px 10px rgba(2, 2, 2, 0.3);
}
h3 {
  cursor: pointer;
}
.baslik {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons-outlined {
  cursor: pointer;
  font-size: 30px;
  color: #f7f1e3; 
  margin-left: 10px;
}
.material-icons-outlined:hover {
  color: #b33939;
}

.yapilacak.yapildi {
  border: 3px solid #00b894;
}
.yapilacak .tick {
  color: #00b894;
}
</style>
