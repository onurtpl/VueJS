<template>
  
</template>

<script>

import { useRouter, useRoute } from 'vue-router'
export default {
    name: 'UseRouterAndRoute',
    setup() {
        const router = useRouter()
        const route = useRoute()

        console.log('router', router)
        console.log('route', route)

    },

}
</script>

<style>

</style>