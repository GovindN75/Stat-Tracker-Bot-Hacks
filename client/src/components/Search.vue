<template>
  <section class="search">
    <h1>Track Your Stats!</h1>
    <form>
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform">
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
          <option value="battlenet">BattleNet</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">Gamertag</label>
        <input
          type="text"
          name="text"
          v-model="gamertag"
          id="gamertag"
          placeholder="BattleNet ID, Xbox Live gamertag, PSN ID, etc"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
  export default {};
</script>

<style></style>
