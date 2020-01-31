const express = require('express')
const app = express()
const morgan = require('morgan')
require('./config/database')

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Importamos las rutas
app.use('/', require('./routes'))

// Declaramos el puerto
app.set('PORT', process.env.PORT || 3000)

// Iniciamos la aplicación en el puerto declarado
app.listen(app.get('PORT'), () => {
    console.log('Server on port', app.get('PORT'))
})