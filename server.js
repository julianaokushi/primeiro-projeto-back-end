const express = require("express")

const app = express()
const porta = 3333

function mostrarPorta() {
    console.log("--Servidor criado e rondando na porta", porta)
}

app.listen(porta, mostrarPorta)