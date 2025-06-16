<template>
    <form @submit.prevent="girisYap">
    <h4>Giriş Yapma Ekranı:</h4>
    <input type="email" placeholder="Email Giriniz" v-model="email" >
    <input type="password" placeholder="Parola Giriniz" v-model="parola" >
    <button>Giriş Yap</button>
  </form>

  <template v-if="loginErrors">
    <div class="error">
        {{ loginErrors }}
    </div>
  </template>
  
</template>

<script>
import { ref } from 'vue'
import { useLogin } from '@/composables/useLogin'
import { useRouter } from 'vue-router'



export default {

    emits: ['login'],
    setup(props, { emit }) {

        const {  loginUser, loginErrors, loginSuccess, login } = useLogin();

        const email = ref('')
        const parola = ref('')

        const girisYap = async () => {
            try {
                // Giriş yapma işlemini başlat
                await login(email.value, parola.value);
                if (loginSuccess.value) {
                    emit('login'); // Giriş başarılı olduğunda üst bileşene bildirim gönder
                    
                } else {
                    console.error('Giriş başarısız:', loginErrors.value);
                }
            } catch (error) {
                console.error('Giriş yapma işlemi sırasında hata:', error);
            }
            
           
        }

        return {
            email,
            parola,
            loginErrors,
            girisYap
        }
        
    }

}
</script>

<style>

</style>