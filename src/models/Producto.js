const {Schema, model} = require('mongoose')

const productoSchema = new Schema({
    nombre: String,
    vram: String,
    marca: String,
    precio: Number,
    stock: Number
},
{
    timestamps: true
})

module.exports = model('Producto', productoSchema)