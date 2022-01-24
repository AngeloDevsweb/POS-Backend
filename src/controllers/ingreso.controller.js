const ingresoCtrl = {}

const Ingreso = require('../models/Ingreso')

ingresoCtrl.getIngresos = async(req, res) =>{
    const ingresos = await Ingreso.find();
    res.json(ingresos)
} 

ingresoCtrl.createIngreso = async(req, res)=>{
    const {nombre, vram, marca, stock, fecha} = req.body;
    const newIngreso = new Ingreso({
        nombre,
        vram,
        fecha,
        marca,
        stock
    })
    await newIngreso.save()
    res.json({message: 'el ingreso ha sido creado'})
}

ingresoCtrl.getIngreso = async(req, res)=>{
    const producto = await Ingreso.findById(req.params.id);
    res.json(producto);
}

ingresoCtrl.deleteIngreso = async(req,res)=>{
    await Ingreso.findByIdAndDelete(req.params.id)
    res.json({message: 'ingreso eliminado'})
}

ingresoCtrl.updateIngreso = async(req, res)=>{
    const {nombre, vram, marca, fecha, stock} = req.body;
    await Ingreso.findByIdAndUpdate(req.params.id, {
        nombre,
        vram,
        fecha,
        marca,
        stock
    })
    res.json({message:'producto actualizado'})
}

module.exports = ingresoCtrl;