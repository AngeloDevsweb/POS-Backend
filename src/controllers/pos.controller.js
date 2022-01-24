const posCtrl = {}

const Pos = require('../models/Pos')

posCtrl.getPos = async(req, res) =>{
    const pos = await Pos.find();
    res.json(pos)
} 

posCtrl.createPos = async(req, res)=>{
    const {nombre, vram, marca, precio, cantidad, montoTotal} = req.body;
    const newPOS = new Pos({
        nombre,
        vram,
        precio,
        marca,
        cantidad,
        montoTotal
    })
    await newPOS.save()
    res.json({message: 'el POS ha sido creado'})
}

posCtrl.getPosOne = async(req, res)=>{
    const pos = await Pos.findById(req.params.id);
    res.json(pos);
}

posCtrl.deletePos = async(req,res)=>{
    await Pos.findByIdAndDelete(req.params.id)
    res.json({message: 'pos eliminado'})
}

posCtrl.updatePos = async(req, res)=>{
    const {nombre, vram, marca, precio, cantidad, montoTotal} = req.body;
    await Pos.findByIdAndUpdate(req.params.id, {
        nombre,
        vram,
        precio,
        marca,
        cantidad,
        montoTotal
    })
    res.json({message:'Pos actualizado'})
}

module.exports = posCtrl;