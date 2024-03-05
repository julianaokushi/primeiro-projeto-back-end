const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Juliana Okushi',
        minibio: 'Mesa Tenista'
    },
    {
        nome: 'Iana Chan',
        minibio: 'Fundadora da Programaria'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostrarPorta() {
    console.log("--Servidor criado e rondando na porta", porta)
}


app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostrarPorta)