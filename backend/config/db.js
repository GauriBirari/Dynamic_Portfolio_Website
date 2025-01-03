const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

MONGO_URI = process.env.MONGO_URI;

async function connectToMongo() {
  console.log("Connecting to Database ");
  try {
    let x = await mongoose.connect(MONGO_URI);
    console.log("Connected to Database: " + x.connections[0].name);
    return true;
  } catch (e) {
    // console.log(e);
    return false;
  }
}

module.exports = connectToMongo;
