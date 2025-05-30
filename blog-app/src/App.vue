<template>
  
  <navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    'navbar': Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

body {
  max-width: 1200px;
  margin: 20px auto;
  font-family: 'Yusei Magic', sans-serif;
  padding: 0 20px;
  background-color: #dfe4da;
}

p, h1, h2, h3, a, ul {
  color: #333;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 40px;
}
h3 {
  text-transform: capitalize;
  margin-bottom: 8px;
}
</style>
