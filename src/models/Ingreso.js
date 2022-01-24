const {Schema, model} = require('mongoose')

const ingresoSchema = new Schema(
  {
    nombre: String,
    vram: String,
    marca: String,
    fecha: String,
    stock: Number,
  },
  {
    timestamps: true,
  }
);
module.exports = model('Ingreso', ingresoSchema)