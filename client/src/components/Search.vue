<template>
  <section class="search">
    <h1 style="color: #fff;">Track Your Stats!</h1>
    <form>
      <div class="form-group">
        <label for="platform" style="color: #fff;">Platform</label>
        <select name="platform" id="platform">
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
          <option value="battlenet">BattleNet</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag" style="color: #fff;">Gamertag</label>
        <input
          type="text"
          name="text"
          id="gamertag"
          placeholder="BattleNet ID, Xbox Live gamertag or PSN ID"
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
