const express = require("express");
const dotenv = require("dotenv");

// Load env
dotenv.config({ path: "./config.env" });

const app = express();

// Profile routes
app.use("/api/v1/profile", require("./routes/route"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
