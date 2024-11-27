require("dotenv").config();
const express = require("express");
const connectToMongo = require("./config/db");
const port = process.env.PORT || 8001;
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());

app.use(cors({ origin: true }));

//database
connectToMongo();

// to get images on localhost
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/contact", require("./routes/contactRouter"));
app.use("/api/project", require("./routes/projectRouter"));
app.use("/api/about", require("./routes/aboutRouter"));

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
