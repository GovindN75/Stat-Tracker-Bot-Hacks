<template>
  <section>
    <div v-if="loading">
      <body>
        <div class="preloader">
          <div class="SpanLoad">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </body>
    </div>

    <div v-if="error">
      <h1 class="error">ERROR 404: {{ error }}</h1>
      <button type="button" class="btn btn-secondary erbt">
        <router-link to="/">Go Back</router-link>
      </button>
    </div>

    <div v-if="profileData" class="container">
      <div class="container">
        <div class="row"></div>
      </div>
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
        `/api/v1/profile/${this.$route.params.platform}/` + encodeURIComponent(`${this.$route.params.gamertag}`)
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

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap");
  .error {
    position: relative;
    margin-left: 30%;
    margin-top: 15%;
    font-family: "Raleway", sans-serif;
  }
  .erbt {
    position: relative;
    margin-left: 45%;
    margin-top: 15;
  }

  h1.gamertag {
    font-size: 2rem;
    background: rgba(0, 0, 0, 0.6);
    padding: 0.3rem 0.5rem;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
  }
  body {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
  }
  .preloader {
    position: relative;
    width: 100px;
    height: 70px;
    display: inline-block;
    transform-origin: center;
    animation: preloarder 1.5s linear infinite;
    margin-bottom: 10%;
  }
  .preloader .SpanLoad {
    display: flex;
    justify-content: center;
  }
  .preloader span {
    position: absolute;
    width: 15px;
    height: 15px;
    background: black;
    transform-origin: center 35px;
    border-radius: 50%;
  }
  .preloader span:first-child {
    opacity: 0.1;
  }
  .preloader span:nth-child(2) {
    transform: rotate(36deg);
    opacity: 0.2;
  }
  .preloader span:nth-child(3) {
    transform: rotate(72deg);
    opacity: 0.3;
  }
  .preloader span:nth-child(4) {
    transform: rotate(108deg);
    opacity: 0.4;
  }
  .preloader span:nth-child(5) {
    transform: rotate(144deg);
    opacity: 0.5;
  }
  .preloader span:nth-child(6) {
    transform: rotate(180deg);
    opacity: 0.6;
  }
  .preloader span:nth-child(7) {
    transform: rotate(216deg);
    opacity: 0.7;
  }
  .preloader span:nth-child(8) {
    transform: rotate(252deg);
    opacity: 0.8;
  }
  .preloader span:nth-child(9) {
    transform: rotate(288deg);
    opacity: 0.9;
  }
  .preloader span:nth-child(10) {
    transform: rotate(324deg);
    opacity: 1;
  }

  @keyframes preloarder {
    0% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
</style>
