<template>
  
    <form @submit.prevent="yapilacakGuncelle">
      <div class="yapilacak-form">
        <h2>Yapilacak Güncelle</h2>
        <input type="text" v-model="yapilacak.baslik" placeholder="Başlık" required />
        <textarea v-model="yapilacak.icerik" placeholder="İçerik" required></textarea>
        <button type="submit">Güncelle</button>
      </div>
    </form>
  </template>
  

<script>
export default {
  name: "YapilacakGuncelleView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
 
data() {
    return {
      yapilacak: {
        id: this.$route.params.id,
        baslik: "",
        icerik: "",
        tamamlandi: false,
      },
      id: this.$route.params.id,
    };
  },
  mounted() {
    const url = `http://localhost:3000/yapilacaklar/${this.$route.params.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.yapilacak = data;
      })
      .catch((error) => console.error("Error fetching data:", error));
  },
  methods: {
    yapilacakGuncelle() {
      console.log("Yapılacak güncellendi:", this.yapilacak);
      const url = `http://localhost:3000/yapilacaklar/${this.$route.params.id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.yapilacak),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Yapılacak başarıyla güncellendi.");
            this.$router.push("/"); // Ana sayfaya yönlendir
          } else {
            console.error("Yapılacak güncellenirken hata oluştu.");
          }
        })
        .catch((error) => console.error("Error updating todo:", error));
    },
  },
}
</script>

<style scoped>

input[type=text], textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type=submit]:hover {
    background-color: #45a049;
  }
  
  div {
    width: 60%;
    margin: 35px auto;
  }
</style>