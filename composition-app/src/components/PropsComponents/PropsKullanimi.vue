<template>

    <PostList :posts="postList" />
  
</template>

<script>
import { reactive, ref } from 'vue'
import PostList from './PostList.vue'
export default {
    name: 'PropsKullanimi',
    components: {
        PostList
    },

    setup() {
        const postList = reactive([
            { id: 1, title: 'Post 1', content: 'Content 1' },
            { id: 2, title: 'Post 2', content: 'Content 2' },
            { id: 3, title: 'Post 3', content: 'Content 3' }
        ])
        return {
            postList
        }
    }

}
</script>

<style>

</style>