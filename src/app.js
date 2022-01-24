const express = require('express')
const app = express()
const cors = require('cors')


app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

//rutas 
app.get('/', (req, res)=>{
    res.send('bienvenido a mi api pos')
})

// rutas para las consultas 
app.use('/api/productos', require('./routes/producto'))
app.use('/api/ingresos', require('./routes/ingreso'))
app.use('/api/pos', require('./routes/pos'))


module.exports = app;