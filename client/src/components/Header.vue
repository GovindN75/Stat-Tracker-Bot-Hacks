<template>
  <nav class="navbar">
    <a class="navbar-brand" href="#">
      <img src="../assets/owLogo.png" class="ml-2" style="width: 69px; height: 69px;" />
    </a>
  </nav>
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
