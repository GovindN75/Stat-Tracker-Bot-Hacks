<template>
  <div class="min-vh-100" id="app">
    <Header/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  export default {
    name: "app",
    components: {
      Header,
    },
  };
</script>

<style>
  #app {
    background-image: url("./assets/oasis.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
