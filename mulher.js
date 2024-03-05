const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Juliana Okushi',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'PM e Mesa tenista nas horas vagas'
})
}

function mostrarPorta() {
    console.log("--Servidor criado e rondando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostrarPorta)