<template>

    <h2>Postlar</h2>
   
    <div v-if="loading">
        <p>Loading...</p>
    </div>
    <div v-else-if="errors">
        <p>{{ errors }}</p>
    </div>
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
import { reactive, ref } from 'vue'
import getPosts from '@/composables/getposts';

export default {
    name: 'ComposableFilesKullanimi',
    setup() {

        const {posts, loading, errors, fetchPosts } = getPosts('https://jsonplaceholder.typicode.com/posts');
        fetchPosts();

        return {
            posts,
            errors,
            loading
        }

    }

}
</script>

<style>

</style>