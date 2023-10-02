const express = require("express")
const cors = require("cors")

require("dotenv").config()
const porta = process.env.PORT

const app = express()

app.use(cors())

app.use(express.json())

//DB Connection
const conn = require("./db/conn")
conn()

//Routes
const routes = require("./routes/router")

app.use("/api", routes)

app.listen(porta, function () {
  console.log("Servidor Online!!")
})
