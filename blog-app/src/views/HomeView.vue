<template>
  <div class="home">
    <template v-if="hatalar">
      <div class="error-message">
        <p>Hata: {{ hatalar }}</p>
      </div>
    </template>
    <template v-else-if="makaleler.length === 0">
      <div class="loading-message">
        <p>Yükleniyor...</p>
      </div>
    </template>
    <template v-else>
      <makale-listesi :makaleler="makaleler" />
    </template>
    
  </div>
</template>

<script>
import MakaleListesi from '@/components/MakaleListesi.vue';
import makaleleriGetir from '@/composables/makalelergetir';

export default {
  name: 'HomeView',
  components: {
    'makale-listesi': MakaleListesi
  },
  setup() {
    const { makaleler, hatalar, makaleleriYukle } = makaleleriGetir();
    makaleleriYukle();

    return {
      makaleler,
      hatalar
    };
  }
}
</script>
