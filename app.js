const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT
const data = {
  nombre: '¡Eres el mejor!',
  titulo: 'Pedro <3'
}

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estático | middleware 
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', data)
})

app.get('/generic', (req, res) => {
  res.render('generic', data)
})

app.get('/elements', (req, res) => {
  res.render('elements', data)
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')  
})

app.listen(port , () => {
    console.log(`Ejemplo funcionando en: http://localhost:${port}`);
})