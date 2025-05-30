<template>
  <div class="makale-listesi">
    <template v-for="item in makaleler" :key="item.id">
        <makale :makaleObj="item" />
    </template>
  </div>
</template>

<script>
import Makale from "@/components/Makale.vue";
export default {
  components: { Makale },
  props: {
    makaleler: {
      type: Array,
      required: true,
    },
  },
  compoqnents: {
    makale: Makale,
  },
  setup(props) {
    return {};
  },
};
</script>

<style>
.makale-listesi {
  margin-left: 120px !important;
}
</style>
