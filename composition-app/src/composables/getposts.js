import { ref, reactive } from 'vue';

const getPosts = (url) => {
    const posts = reactive([])
    const loading = ref(false)
    const errors = ref(null)

    const fetchPosts = async () => {
        loading.value = true
        try {
            loading.value = false
                const response = await fetch(url)
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

    return {
        posts,
        loading,
        errors,
        fetchPosts
    }
}

export default getPosts;