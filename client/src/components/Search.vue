<template>
  <section class="search ml-auto mr-auto mt-5">
    <h1 style="color: #fff;">Track Your Stats!</h1>
    <hr style="background-color: #fff;">
    <form v-on:submit.prevent="submit">
      <div class="form-group mt-1">
        <label for="platform" style="color: #fff;">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="battlenet">Battle.net</option>
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
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
      <div class="form-group mt-4">
        <button type="button" class="btn btn-success">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
  export default {};
</script>

<style></style>
