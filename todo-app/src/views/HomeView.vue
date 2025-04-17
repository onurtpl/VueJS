<template>
  <div class="home">
    <h1>Yapılacaklar Listesi</h1>
    <FilterNavbar @filterText="filter = $event" />

    <template v-if="isDone === false">
      <p>Yapılacaklar listesi yükleniyor...</p>
    </template>
    <template v-else>
      <template v-if="isError">
        <p>Yapılacaklar listesi yüklenirken hata oluştu.</p>
      </template>
      <template v-else>
        <!-- <p>Yapılacaklar listesi yüklendi.</p> -->
        <template v-if="filtered.length === 0">
          <p>Filtreye uygun yapılacak yok</p>
        </template>
        <template v-else>
          <div v-for="todo in filtered" :key="todo.id">
            <Yapilacak
              :yapilacak="todo"
              @deleteYapilacak="handleDelete"
              @doneYapilacak="handleDone"
            />
          </div>
        </template>
      </template>
    </template>
    <router-link :to="{ name: 'YapilacakEkle' }">Ekle</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

import FilterNavbar from "@/components/FilterNavbar.vue";
import Yapilacak from "@/components/Yapilacak.vue";

export default {
  name: "HomeView",
  components: {
    Yapilacak,
    FilterNavbar,
  },
  data() {
    return {
      filter: "hepsi",
      isDone: false,
      isError: false,
      yapilacaklar: [],
    };
  },

  computed: {
    filtered() {
      if (this.filter === "hepsi") {
        return this.yapilacaklar;
      } else if (this.filter === "tamamlandi") {
        return this.yapilacaklar.filter((todo) => todo.tamamlandi);
      } else if (this.filter === "yapilacak") {
        return this.yapilacaklar.filter((todo) => !todo.tamamlandi);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      console.log("Yapılacaklar listesi çekiliyor...");
      this.isError = false;
      this.isDone = false;
      fetch("http://localhost:3000/yapilacaklar")
        .then((response) => response.json())
        .then((data) => {
          this.yapilacaklar = data;
          this.isDone = true;
          this.isError = false;
        })
        .catch((error) => {
          console.error("Yapılacaklar listesi çekilirken hata oluştu:", error);
          this.isError = true;
          this.isDone = true;
        });
    }, 1000);
  },
  methods: {
    handleDone(id, isDone) {
      console.log("Tamamlandı işlemi tetiklendi:", id);
      const url = `http://localhost:3000/yapilacaklar/${id}`;
      console.log("Tamamlandı işlemi url:", url);
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tamamlandi: isDone }),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Yapılacak başarıyla güncellendi.");
            this.yapilacaklar = this.yapilacaklar.map((todo) =>
              todo.id === id ? { ...todo, tamamlandi: isDone } : todo
            );
          } else {
            console.error("Yapılacak güncellenirken hata oluştu.");
          }
        })
        .catch((error) => console.error("Error updating todo:", error));
    },

    handleDelete(id) {
      console.log("Silme işlemi tetiklendi:", id);
      const url = `http://localhost:3000/yapilacaklar/${id}`;
      console.log("Silme işlemi url:", url);
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            console.log("Yapılacak başarıyla silindi.");
            this.yapilacaklar = this.yapilacaklar.filter(
              (todo) => todo.id !== id
            );
          } else {
            console.error("Yapılacak silinirken hata oluştu.");
          }
        })

        .catch((error) => console.error("Error deleting todo:", error));
    },
  },
};
</script>

<style scoped>
.home {
  width: 75%;
  margin: 0 auto;
}

a {
  display: block;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #48559e;
  color: #f7f1e3;
  text-decoration: none;
  border-radius: 5px;
}
a:hover {
  background-color: #5c39b3;
}
</style>
