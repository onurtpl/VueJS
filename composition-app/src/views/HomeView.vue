<template>
  <!-- <setup-function></setup-function> -->
  <!-- <template-ref-component /> -->
  <!-- <ref-degisken-tanimlama/> -->
  <!-- <setup-compute /> -->
  <!-- <watch-watch-effect /> -->
  <!-- <props-kullanimi /> -->
  <!-- <setup-fetch /> -->
  <!-- <composable-files-kullanimi /> -->

  <div class="home">
    <use-router-and-route />
  </div>
</template>

<!-- 
01_ SetupFunction Kullanımı

<script>
import SetupFunction from '../components/setupFunction.vue'

export default {
  name: 'HomeView',
  components: {
    SetupFunction
  },

}
</script> -->

<!-- 
02_ TemplateRef Kullanımı
<script>
import TemplateRefComponent from '../components/TemplateRefComponent.vue'
export default {
  name: 'HomeView',
  components: {
    // SetupFunction
    TemplateRefComponent
  },
}
</script> -->

<!--
03_ Ref Kullanımı
 <script>
import RefDegiskenTanimlama from "@/components/RefDegiskenTanimlama.vue";
export default {
  name: 'HomeView',
  components: {
    RefDegiskenTanimlama
  },
}
</script> -->
<!-- 
04_ SetupCompute Kullanımı
<script>
import SetupCompute from '@/components/SetupCompute.vue';
export default {
  name: 'HomeView',
  components: {
    SetupCompute
  },
}
</script> -->

<!-- 
05_ WatchWatchEffect Kullanımı
<script>
import WatchWatchEffect from '@/components/WatchWatchEffect.vue';
export default {
  name: 'HomeView',
  components: {
    WatchWatchEffect
  },
}
</script> -->

<!-- <script>
 06_ Props Kullanımı
import PropsKullanimi from '@/components/PropsComponents/PropsKullanimi.vue';
export default {
  name: 'HomeView',
  components: {
    PropsKullanimi
  },
}
</script> -->
<!-- 
07_ SetupFetch Kullanımı
<script>
import SetupFetch from "@/components/SetupFetch.vue";
export default {
  name: "HomeView",
  components: {
    SetupFetch,
  },
};
</script> -->
<!-- 
08_ Composable Files Kullanımı
<script>
import ComposableFilesKullanimi from '@/components/ComposableFilesKullanimi.vue';
export default {
  name: "HomeView",
  components: {
    ComposableFilesKullanimi,
  },
};
</script> -->

<script>
import UseRouterAndRoute from "@/components/UseRouterAndRoute.vue";
export default {
  name: "HomeView",
  components: {
    UseRouterAndRoute,
  },
};
</script>
