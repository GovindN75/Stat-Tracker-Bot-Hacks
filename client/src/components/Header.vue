<template>
  <header>
    <nav class="navbar">
      <a class="navbar-brand" href="#">
        <img src="../assets/ow.png" style="width: 50px; height: 50px;" />
      </a>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        image: require("@/assets/ow.png"),
      };
    },
  };
</script>

<style scoped></style>
