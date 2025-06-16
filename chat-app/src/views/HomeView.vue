<template>
  <div class="home container">
    <h2>AOS Chat App</h2>
    <template v-if="uyeMi">
      <login @login="handleLogin"/>
      <p>Üye değilseniz <span @click="uyeMi = false">Üye Ol</span> sayfasına gidiniz.</p>
    </template>
    <template v-else>
      <register @update-state="handleUpdateState"/>
      <p>Zaten üye iseniz <span @click="uyeMi = true">Giriş Yap</span> sayfasına gidiniz.</p>
    </template>

  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import Register from '../components/Register.vue';
import Login from '../components/Login.vue';

export default {
  name: 'HomeView',
  components: {
    Register, Login
  },
  setup() {
    const uyeMi = ref(true); // true ise üye olma ekranı, false ise giriş yapma ekranı
    const router = useRouter();
    
    const handleUpdateState = (status) => {
      uyeMi.value = status;
    };

    const handleLogin = () => {
      console.log('Giriş başarılı!');
      router.push({ name: 'ChatOdasi'}); // Örnek olarak chat odasına yönlendiriyoruz
    };

    return {
      uyeMi,
      handleUpdateState,
      handleLogin
    };
  }

}
</script>

<style scoped>
.home {
  text-align: left;
  padding: 20px 50px;
  
}
</style>
