const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/:platform/:gamertag", (req, res) => {
  console.log(req.params.platform, req.params.gamertag);
  res.send("AHAHAHAHAHAHAHAHAHAHAHHAHA");
});

module.exports = router;
