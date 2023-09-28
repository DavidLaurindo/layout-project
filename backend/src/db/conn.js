const mongoose = require("mongoose")

async function main() {
    try {

        await mongoose.connect("mongodb+srv://davisavior:Iron8705@cluster0.7v0gea3.mongodb.net/?retryWrites=true&w=majority")

        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main