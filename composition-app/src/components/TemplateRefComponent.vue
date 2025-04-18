<template>
  <h2>Template Ref</h2>
  <p ref="templateRef">One Piece</p>
  <button @click="showTemplate">Show Template</button>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'TemplateRefComponent',
    setup() {
        const templateRef = ref(null)
        
        const showTemplate = () => {
            console.log(templateRef, templateRef.value)
        }
        const hideTemplate = () => {
            console.log('hide')
        }

        return {
            showTemplate,
            templateRef,
        }

    },

}
</script>

<style>

</style>