<template>
  <nav>
    <div>
        <p>Merhaba {{ user == null ?  '': user.displayName}}</p>
        <p class="email">{{ user == null ?  '': user.email }} ile giriş yaptınız.</p>
    </div>
    <button @click="handleLogout">Çıkış Yap</button>
  </nav>
</template>

<script>
import getUser from '@/composables/getUser';
import { auth } from '@/firebase/config'; // Firebase auth modülünü içe aktar


export default {
    name: 'Navbar',
    emits: ['gotoHome'],
    setup(props, { emit }) {
        const {user} = getUser();

        const handleLogout = async () => {
            await auth.signOut().then(() => {
                console.log('Çıkış yapıldı!');
                emit('gotoHome'); // Çıkış yapıldıktan sonra ana sayfaya yönlendir
            }).catch((error) => {
                
                console.error('Çıkış yaparken hata oluştu:', error);
            });
        };

        return {
            user,
            handleLogout
        };
    }

}
</script>

<style>

</style>