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

  <div v-if="profileData">
    <div class="con">
      <div class="row">
        <h1 class="gamertag">{{profileData.platformInfo.platformUserId}}</h1>
        <h5 class="gamertag" style="font-size: 1.2em;">{{profileData.platformInfo.platformSlug}}</h5>
      </div>
    </div>
    <div class="stats-wrapper">
      <div class="row">
        <div class="col-md-2">
          <h4 class="stats-title">Time Played</h4>
        </div>
        <div class="col-md-2">
          <h4 class="stats-title">Win Rate</h4>
        </div>
        <div class="col-md-2">
          <h4 class="stats-title">Time Spent On Fire</h4>
        </div>
        <div class="col-md-2">
          <h4 class="stats-title">Time On Objective</h4>
        </div>
        <div class="col-md-2">
          <h4 class="stats-title">Games Won</h4>
        </div>
        <div class="col-md-2">
          <h4 class="stats-title">Most Eliminations</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <h5 class="stats-desc">{{}}</h5>
        </div>
        <div class="col-md-2">
          <h5
            class="stats-desc"
          >{{ (profileData.segments[0].stats.wlPercentage.value + profileData.segments[1].stats.wlPercentage.value) / 2}}%</h5>
        </div>
        <div class="col-md-2">
          <h5 class="stats-desc">{{profileData.segments[0].stats.timeSpentOnFire.displayValue}}</h5>
        </div>
        <div class="col-md-2">
          <h5 class="stats-desc">{{profileData.segments[0].stats.mostObjectiveTime.displayValue}}</h5>
        </div>
        <div class="col-md-2">
          <h5
            class="stats-desc"
          >{{profileData.segments[0].stats.wins.value + profileData.segments[1].stats.wins.value}}</h5>
        </div>

        <div class="col-md-2">
          <h5
            class="stats-desc"
          >{{profileData.segments[0].stats.mostEliminations.value + profileData.segments[1].stats.mostEliminations.value}}</h5>
        </div>
      </div>
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
        `/api/v1/profile/${this.$route.params.platform}/` +
          encodeURIComponent(`${this.$route.params.gamertag}`)
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
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap%27");
@import url("https://fonts.googleapis.com/css2?family=Teko&display=swap%27");
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
.con {
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  width: 95%;
  float: center;
  margin: 1rem auto;
  padding: 0.5rem 1.5rem -1.2rem;
  border-radius: 20px;
}
.stats-wrapper {
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  width: 95%;
  float: center;
  margin: 1rem auto;
  padding: 0.5rem 1.5rem -1.2rem;
  border-radius: 20px;
}

.stats-title {
  font-size: 1.5rem;
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 20px;
  float: center;
  margin-top: 0.2rem;
  margin-left: 1.2rem;
  display: flex;
  align-items: center;
  font-family: "Teko", cursive;
}
.stats-desc {
  font-size: 1.3rem;
  padding: 0.3rem 1.8rem;
  text-align: center;
  float: center;
  border-radius: 20px;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
  display: flex;
  align-items: center;
  font-family: "Teko", cursive;
}

.gamertag {
  font-size: 2rem;
  padding: 0.3rem 0.5rem 0.3rem 1.5rem;
  text-align: center;
  border-radius: 20px;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  font-family: "Roboto", "Raleway", sans-serif;
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
