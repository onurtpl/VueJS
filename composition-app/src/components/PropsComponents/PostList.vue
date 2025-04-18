<template>

    <h2>Post List</h2>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
        </li>
    </ul>
  
</template>

<script>
export default {
    name: 'PostList',
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    // setup(props) {
    //     // props ile gelen verileri kullanabilirsiniz
    //     return {
    //         posts: props.posts
    //     }
    // }

}
</script>

<style>

</style>