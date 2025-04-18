<template>
  <div class="setup-function">
    <h1>Setup Function</h1>
    <p>{{ name }}'s mission is {{ mission }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "SetupFunction",
  setup() {
    console.log("Setup function called");
    let name = "Onur";
    let mission = "Vue.js";

    const handleClick = () => {
      console.log("Button clicked");
    };

    return {
      name,
      mission,
      handleClick,
    };
  },

  onMounted() {
    console.log("onMounted lifecycle hook called");
  },

  // mounted() {
  //   console.log('Mounted lifecycle hook called');
  // },
  // created() {
  //   console.log('Created lifecycle hook called');
  // },
};
</script>

<style></style>
