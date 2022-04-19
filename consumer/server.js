const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const stream = require("./src/streamer/stream");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// jalankan streamer
stream();

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di port ${process.env.PORT}`);
});
