const express = require("express")
const connectToMongo = require("./config/db")
require("dotenv").config()
const port = process.env.PORT || 8001
const cors = require('cors')

const app = express()
app.use(express.json());


app.use(cors({ origin: true }))


//database
connectToMongo()

app.use("/api", require("./routes/contactRouter"))

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})