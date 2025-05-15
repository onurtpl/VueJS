<template>
  <div class="firestore">
    <h2>FireStore</h2>
  </div>
</template>

<script>
import { onMounted } from "vue";

import { getAllDocuments, getDocumentById } from "../firebase/config.js";

export default {
  name: "FireStoreView",
  setup() {
    onMounted(async () => {
      const personel = await getDocumentById("personeller", "xb6e2WTy0GZNzRNSUVYN");
      console.log("personel", personel);
      const personeller = await getAllDocuments("personeller");
      console.log("personeller", personeller);
    });
  },



}
</script>

<style></style>
