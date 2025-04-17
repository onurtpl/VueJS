<template>
  
  <form @submit.prevent="yapilacakEkle">
    <div class="yapilacak-form">
      <h2>Yapilacak Ekle</h2>
      <input type="text" v-model="yapilacak.baslik" placeholder="Başlık" required />
      <textarea v-model="yapilacak.icerik" placeholder="İçerik" required></textarea>
      <button type="submit">Ekle</button>
    </div>
  </form>
</template>

<script>
export default {
    data() {
        return {
            yapilacak: {
                baslik: "",
                icerik: "",
                tamamlandi: false,
            },
        };
    },
    methods: {
        yapilacakEkle() {
            console.log("Yapılacak eklendi:", this.yapilacak);
            const url = "http://localhost:3000/yapilacaklar";
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.yapilacak),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log("Yapılacak başarıyla eklendi.");
                        this.$router.push("/"); // Ana sayfaya yönlendir
                    } else {
                        console.error("Yapılacak eklenirken hata oluştu.");
                    }
                })
                .catch((error) => console.error("Error adding todo:", error));
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