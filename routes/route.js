const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const { response } = require("express");

router.get("/:platform/:gamertag", async (req, res) => {
  try {
    const key = {
      "TRN-Api-Key": process.env.TRACKER_KEY,
    };
    const { platform, gamertag } = req.params;
    const repsonse = await fetch(
      `${process.env.TRACKER_URL}/profile/${platform}/${gamertag}`,
      { key }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

module.exports = router;
