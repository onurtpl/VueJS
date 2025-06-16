<template>
  <form @submit.prevent="uyeOl">
    <h4>Üye Olma Ekranı:</h4>
    <input type="text" placeholder="Kullanıcı Adını Giriniz" v-model="kullaniciAdi" >
    <input type="text" placeholder="Email Giriniz" v-model="email" >
    <input type="password" placeholder="Parola Giriniz" v-model="parola" >
    <button>Üye Ol</button>
  </form>
  <template v-if="registerErrors">
   
    <div class="error">
        {{ registerErrors }}
    </div>

  </template>
</template>

<script>
import { ref } from 'vue';
import { useRegister } from '../composables/userRegister';

export default {
    name: 'Register',
    emits: ['update-state'],
    setup(props, { emit }) {

        const { registerErrors, registerSuccess, signup } = useRegister();
        const kullaniciAdi = ref('');
        const email = ref('');
        const parola = ref('');

        const uyeOl = async () => {
            try {
                await signup(kullaniciAdi.value, email.value, parola.value);
                if (registerSuccess.value) {
                    // Üye olma başarılı ise, giriş yapma ekranına geç
                    emit('update-state', true);
                }
            } catch (error) {
                console.error('Üye olma işlemi sırasında hata:', error);
            }
        };
        

        return {
            kullaniciAdi,
            email,
            parola,
            registerErrors,
            uyeOl
        }
    }

}
</script>

<style>

</style>