const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/:platform/:gamertag", async (req, res) => {
  try {
    const key = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY,
    };

    const { platform, gamertag } = req.params;

    const response = await fetch(
      `${process.env.TRACKER_API_URL}/profile/${platform}/${encodeURIComponent(
        gamertag
      )}`,
      {
        key,
      }
    );
    // OMG ITS WORKING
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;
