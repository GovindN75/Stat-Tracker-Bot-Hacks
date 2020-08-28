<template>
  <section class="search ml-auto mr-auto mt-5">
    <h1 style="color: #fff;">Track Your Stats!</h1>
    <hr style="background-color: #fff;" />
    <form v-on:submit.prevent="submit">
      <div class="form-group mt-1">
        <label for="platform" style="color: #fff;">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="battlenet">battlenet</option>
          <option value="psn">psn</option>
          <option value="xbl">xbl</option>
        </select>
      </div>
      <div class="form-group mt-3">
        <label for="gamertag" style="color: #fff;">Gamertag</label>
        <input
          type="text"
          name="text"
          id="gamertag"
          v-model="gamertag"
          placeholder="BattleNet ID, Xbox Live gamertag or PSN ID"
        />
      </div>
      <div class="form-group mt-3">
        <label for="battletag-code" style="color: #fff;">Battletag Code</label>
        <input
          disabled
          type="number"
          name="text"
          id="battletag-code"
          v-model="tagcode"
          placeholder="BattleTag Code (the #XXXX following your username)"
        />
      </div>
      <div class="form-group mt-4">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
  import jQuery from 'jquery';
  export default {
    name: "Search",
    data() {
      return {
        platform: "psn",
        gamertag: "",
        tagcode: 0
      };
    },
    methods: {
      submit() {
        if (!this.gamertag) {
          this.$toasted.show("Please enter a gamertag", {
            theme: "bubble",
            position: "bottom-center",
            duration: 3000,
          });
        } else {
          if (this.tagcode == 0 || this.tagcode == null) {
            this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
          } else {
            this.$router.push(`/profile/${this.platform}/${this.gamertag}%23${this.tagcode}`);
          }
        }
      },
    },
    mounted() {
      jQuery(document).ready(function() {
        jQuery("select#platform").change(function () {
          var selected= jQuery(this).children("option:selected").val();
          if (selected == "battlenet") {
            jQuery("#battletag-code").prop('disabled', false);
          } else {
            jQuery("#battletag-code").prop('disabled', true);
          }
        });
      });
    }
  };
</script>

<style></style>
