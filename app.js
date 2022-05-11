const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const path = require('path')
const linkRoute = require('./routes/linkRoute')

mongoose.connect("mongodb://localhost/links").then(db => {
	console.log('Banco carregado')
}).catch(error => {
	console.log(error)
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', linkRoute)

app.listen(PORT, () => {
    console.log('Server rodando na porta', PORT);
})