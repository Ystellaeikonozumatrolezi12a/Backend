import express from "express"

const app = express()
const port = 3333

app.get("/", (request, response) => {
    response.json({ message: "As aftas ardem e doem, e as feridas idem."})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})