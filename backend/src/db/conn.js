const mongoose = require("mongoose")

require("dotenv").config()
const userDb = process.env.USER_DB
const passDb = process.env.PASS_DB

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${userDb}:${passDb}@cluster0.7v0gea3.mongodb.net/?retryWrites=true&w=majority`
    )

    console.log("Conectado ao banco")
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main
