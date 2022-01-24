const {Schema, model} = require('mongoose')

const posSchema = new Schema(
  {
    nombre: String,
    vram: String,
    marca: String,
    precio: Number,
    cantidad: Number,
    montoTotal: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Pos", posSchema);