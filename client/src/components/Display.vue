<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>

    <div v-if="error">
      <h1>{{ error }}</h1>
      <router-link to="/">Go Back</router-link>
    </div>
    <div v-if="profileData">
      <h1 class="gamertag">{{ profileData.platformInfo.platformUserId }}</h1>
    </div>
  </section>
</template>

<script>
  import axios from "axios";

  export default {
    name: "display",
    data() {
      return {
        loading: false,
        error: null,
        profileData: null,
      };
    },
    async created() {
      this.loading = true;
      try {
        const res = await axios.get(
          `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`
        );
        this.profileData = res.data.data;
        console.log(this.profileData);
        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.error = err.response.data.message;
      }
    },
  };
</script>

<style scoped></style>
