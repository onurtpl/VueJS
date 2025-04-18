<template>

    <div v-if="loading">Loading...</div>
    <div v-else-if="errors">{{ errors }}</div>
    <div v-else>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
   
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    setup() {
        const posts = reactive([])
        const loading = ref(false)
        const errors = ref(null)

        const fetchPosts = async () => {
            loading.value = true
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                posts.push(...data)
            } catch (error) {
                errors.value = error.message
            } finally {
                loading.value = false
            }       
        }

        fetchPosts();
        return {
            posts,
            loading,
            errors
        }
    }

}
</script>

<style>

</style>