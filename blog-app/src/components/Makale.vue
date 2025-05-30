<template>
  <div class="makale">
    <router-link :to="{ name: 'Detay', params: { id: makaleObj.id } }">
      <h3> {{ makaleObj.baslik }}</h3>
    </router-link>  

  </div>
</template>

<script>
import router from '@/router';

export default {
    name: 'Makale',
    props: {
        makaleObj: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        return {};
    }

}
</script>

<style>

.makale a {
  display: block;
  margin: 40px 0;
  padding: 20px;
  border-left: 6px solid #eb4d4b;
  cursor: pointer;
}
.makale a:hover h3 {
  color: #eb4d4b;
}

</style>